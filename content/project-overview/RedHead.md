---
title: RedHead
technos: C#, Lua
description: As a continuation of Evol-IA, this project's aim was to play a full game of Pokemon Red using a combination of different algorithms. The AI is connected to an emulator using a TCP connexion, and can expore the world and battle. The project is unfinished as the AI cannot do some specific tasks required to complete the game, such as buying lemonade.
icon: pokeball.png
alt: RedHead
date: 2018
---

```cs
while (!pathQueue.IsEmpty())
{
    // POP
    Path curPath = pathQueue.Dequeue();

    // Possibilities
    Coords curPos = curPath.Steps.Last();
    for(int i = 0; i < (int)Directions.NONE; ++i)
    {
        Directions dir = (Directions)i;
        Coords newPos = curPos + dir;
        // WIN test
        if (dest.Contains(newPos))
        {
            var newPath = new Path(curPath);
            newPath.Steps.Add(newPos);
            return newPath;
        }
        // Test if we can walk there and if it is the first time
        if (map.CanWalkOn(newPos, dir) && !visited[newPos.X, newPos.Y])
        {
            // Make new path and add it to the list
            var newPath = new Path(curPath);
            newPath.Steps.Add(newPos);
            pathQueue.Enqueue(newPath, heuristic.Evaluate(newPath));
            visited[newPos.X, newPos.Y] = true;
        }
        else if(map.IsUnknown(newPos) && bestUnexploredPath == null)
        {
            // We found a path to an unexplored tile.
            // It is the first one thus the best one.
            bestUnexploredPath = curPath;
        }
    }
}
```