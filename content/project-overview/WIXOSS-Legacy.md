---
title: WIXOSS-Legacy
description: This project consists in the implementation of a physical, obscure card game in Unity. The core of the game is finished, although a little unpolished. Few cards were added in (just enough to play a game), but the addition of new cards is possible without modifying the game thanks to XML files.
icon: Unity.jpg
alt: WIXOSS-Legacy
date: 2019
---

```cs
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
```