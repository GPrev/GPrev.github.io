---
title: Pokemblem
description: This project is a game inspired by Pokemon and Fire Emblem. It is a tactical RPG, played on an orthogonal grid. A first level, complete with cutscenes and a tutorial, was developed.
icon: MonoGame_Logo.png
alt: Pokemblem
date: 2017
---

```cs
public void Initialize(bool noCritNoEvade = false)
{
    int damageToDefender = 0;
    for (int i = 0; i < AttackMove.NbHit; ++i)
    {
        if (Defender.HP > damageToDefender)
        {
            Attacks.Add(ComputeAttack(Attacker, Defender, AttackMove, noCritNoEvade));
            damageToDefender += Attacks[Attacks.Count - 1].Damage;
        }
    }
    if(Defender.HP > Attacks[0].Damage && DefenseMove != null)
    {
        int damageToAttacker = 0;
        if (Attacker.HP > damageToAttacker)
        {
            Attacks.Add(ComputeAttack(Defender, Attacker, DefenseMove, noCritNoEvade));
            damageToAttacker += Attacks[Attacks.Count - 1].Damage;
        }
    }
}

public Tuple<int, int> GetHPafter()
{
    int atkHP = Attacker.HP;
    int defHP = Defender.HP;
    foreach (var atk in Attacks)
    {
        if (atk.MoveUser == Attacker)
            defHP -= atk.Damage;
        else if (atk.MoveUser == Defender)
            atkHP -= atk.Damage;
    }
    atkHP = Math.Max(atkHP, 0);
    defHP = Math.Max(defHP, 0);
    return new Tuple<int, int>(atkHP, defHP);
}
```