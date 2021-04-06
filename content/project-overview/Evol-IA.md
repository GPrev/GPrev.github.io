---
title: Evol-IA
description: A school project about applying artificial intelligennce to real life examples. With a fellow student, we developed an AI that can play a simplified version of Pokemon battles using Monte Carlo Tree Search, and chose a good team using a Genetic Algorithm.
icon: pokeball.png
video: EvolIA-Presentation.mp4
alt: Evol-IA
date: 2016
---

```cs
public override BattleAction ChooseAction(BattleDecisionState s, int myId = 1, ActionType type = ActionType.ANY)
{
    MctsNode root = new MctsNode(s);

    // 4 steps : selection, rollout and update
    for (totalVisits = 1; totalVisits <= maxiter; totalVisits++)
    {
        MctsNode current = Selection(root, myId);
        double Value = Rollout(current, myId);
        Update(current, Value, myId);
    }

    // Chooses best node
    return BestChildUCB(root, 0).Action;
}

// Selects the best child (by UCB) and continues until not all children exist or there is a winner
private MctsNode Selection(MctsNode current, int myId)
{
    BattleDecisionState state = current.State;
    int id = myId;
    while (!state.State.HasWinner())
    {
        List<BattleAction> actions = state.State.GetNextActions(id, true);

        if (actions.Count > current.Children.Count)
            return Expand(current, myId);
        //else
        current = BestChildUCB(current);
        state = current.State;
        id = Opponent(id);
    }

    return current;
}
```