---
title: WIXOSS-Legacy
description: This project consists in the implementation of a physical, obscure card game in Unity. The core of the game is finished, although a little unpolished. Few cards were added in (just enough to play a game), but the addition of new cards is possible without modifying the game thanks to XML files.
icon: Unity.jpg
alt: WIXOSS-Legacy
date: 2019
---

```cs
public BattleEvent GetEventIfPlayable(Card card, Zone zone = null)
{
    // Correct player check (unless we are at arts step)
    if (card.PlayerBattleId != GetActivePlayerId() && SubPhase != BattleSubPhase.ARTS_STEP)
        return null;

    // Same player check
    if (zone != null && card.PlayerBattleId != zone.PlayerBattleId)
        return null;

    BattleEvent evt = null;

    ZoneType curZoneType = card.CurrentZone.Type;

    ZoneType newZoneType = ZoneType.NO_ZONE;
    if (zone != null)
        newZoneType = zone.Type;

    PlayerBoard board = Boards[card.PlayerBattleId];

    switch (Phase)
    {
        case BattlePhase.UP_PHASE:
            break;

        case BattlePhase.DRAW_PHASE:
            break;

        case BattlePhase.ENER_PHASE:
            // We can send a signi or a card from the hand
            if ((curZoneType == ZoneType.HAND || curZoneType == ZoneType.SIGNI_ZONE) && newZoneType == ZoneType.ENER_ZONE)
            {
                evt = new BeToEnerZone(this, card);
            }
            break;

        case BattlePhase.GROW_PHASE:
            // We can grow to a LRIG one level higher, if we can pay its cost
            if (curZoneType == ZoneType.LRIG_DECK && newZoneType == ZoneType.LRIG_ZONE && card.Data.Type == CardType.LRIG && card.Data.Level == zone.GetLast().Data.Level + 1)
            {
                // Check cost
                if (CanPayCost(card) && card.IsCompatibleWithLrig(board.GetCurrentLrig()))
                {
                    evt = new BeGrow(this, card);
                }
            }
            break;

        case BattlePhase.MAIN_PHASE:
            // We can play a SIGNI from the hand
            if (curZoneType == ZoneType.HAND && newZoneType == ZoneType.SIGNI_ZONE && card.Data.Type == CardType.SIGNI)
            {
                int lrigLevel = board.GetCurrentLrig().Data.Level;
                int signiLevelCap = board.GetCurrentLrig().Data.Limit;
                int signiLevelSum = board.SigniZones.Where(z => z.GetFirst() != null).Sum(z => z.GetFirst().Data.Level);
                int newSigniLevel = card.Data.Level;
                // Check level limit and cost
                if (lrigLevel >= newSigniLevel && signiLevelCap >= (signiLevelSum + newSigniLevel) && CanPayCost(card) && card.IsCompatibleWithLrig(board.GetCurrentLrig()))
                {
                    evt = new BePlaySigni(this, card, zone);
                }
            }
            // We can play spells
            if (curZoneType == ZoneType.HAND && newZoneType == ZoneType.NO_ZONE && card.Data.Type == CardType.SPELL)
            {
                // Check cost and conditions
                if (CanPayCost(card) && card.Data.Effect.IsPossible(card, this) && card.IsCompatibleWithLrig(board.GetCurrentLrig()))
                {
                    evt = new BeUseCard(this, card);
                }
            }
            // We can use SIGNI powers
            if (curZoneType == ZoneType.SIGNI_ZONE && newZoneType == ZoneType.NO_ZONE && card.Data.Type == CardType.SIGNI)
            {
                // TODO check cost
                evt = new BeUsePower(this, card);
            }
            // We can play Arts
            if (curZoneType == ZoneType.LRIG_DECK && newZoneType == ZoneType.NO_ZONE && card.Data.Type == CardType.ARTS)
            {
                // Check its activation timing and cost and conditions
                if (card.Data.ArtsTiming.Contains(Phase) && CanPayCost(card) && card.Data.Effect.IsPossible(card, this) && card.IsCompatibleWithLrig(board.GetCurrentLrig()))
                {
                    evt = new BeUseCard(this, card);
                }
            }
            break;

        case BattlePhase.ATTACK_PHASE:
            switch (SubPhase)
            {
                case BattleSubPhase.ARTS_STEP:
                    // We can play Arts
                    if (curZoneType == ZoneType.LRIG_DECK && newZoneType == ZoneType.NO_ZONE && card.Data.Type == CardType.ARTS)
                    {
                        // Check its activation timing and cost
                        if (card.Data.ArtsTiming.Contains(Phase) && CanPayCost(card) && card.Data.Effect.IsPossible(card, this) && card.IsCompatibleWithLrig(board.GetCurrentLrig()))
                        {
                            evt = new BeUseCard(this, card);
                        }
                    }
                    break;
                case BattleSubPhase.SIGNI_ATTACK_STEP:
                    // We can attack
                    if (curZoneType == ZoneType.SIGNI_ZONE && newZoneType == ZoneType.NO_ZONE && card.Data.Type == CardType.SIGNI && card.IsABleToAttack())
                    {
                        evt = new BeSigniAttack(this, card);
                    }
                    break;
                case BattleSubPhase.LRIG_ATTACK_STEP:
                    // We can attack
                    if (curZoneType == ZoneType.LRIG_ZONE && newZoneType == ZoneType.NO_ZONE && card.Data.Type == CardType.LRIG && card.IsABleToAttack())
                    {
                        evt = new BeLrigAttack(this, card);
                    }
                    break;
                case BattleSubPhase.GUARD_STEP:
                    // TODO
                    break;
                default:
                    break;
            }
            break;

        case BattlePhase.END_PHASE:
            break;

        default:
            break;
    }

    return evt;
}
```