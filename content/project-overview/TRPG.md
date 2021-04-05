---
title: TRPG
description: This project started during my last summer vacation as a student, when I decided to work full time on a game for a month. I decided to create a tactical RPG, but I never finished it as I severely underestimated the cost of drawing everything by myself. Still, a test level is playable with a single type of character.
icon: SFML_Logo.png
alt: TRPG
date: 2014
---

```cpp

// returns a map linking any accessible square to the one to reach before it (don't forget to delete it !)
map<pair<int, int>, Square>* BattleMap::getAccessiblePositions(Square currentPos, unsigned int movementCap, int jumpCap, vector<Square> blackList)
{
	//note : vector2i can't be used as an index due to its lack of a comparison operator
    //the map containing the result
	std::map<std::pair<int, int>, Square>* m = new std::map<std::pair<int, int>, Square>(); 
    //that is done to prevent going back where we started
	(*m)[currentPos] = Square(-1, -1); 
	std::vector<Square> squaresToProcess;
    //we start from the current square
	squaresToProcess.push_back(currentPos); 
	
    //we iterate as many times as squares we can cross
	for(unsigned int i = 0; i < movementCap; i++) 
	{
        //the list that is to be processed next iteration
		vector<Square> v; 
        //we go through the squares to be processed
		for(unsigned int j = 0; j < squaresToProcess.size(); j++) 
		{
			vector<Square> w = getAdjacentPositions(squaresToProcess[j]);
            //we will go through every square adjacent to the one we're processing
			for(unsigned int k = 0; k < w.size(); k++) 
			{
                //if the square hasn't been reached yet, and it's reachable
				if(m->find(w[k]) == m->end() && isWalkable(squaresToProcess[j], w[k], jumpCap, blackList)) 
				{
                    //we add the adjacent square to the map, stipulating where to go first (that is, the square we're processing)
					(*m)[w[k]] = squaresToProcess[j]; 
                    //we add the square to the list that is to be processed next iteration
					v.push_back(w[k]); 
				}
			}
		}
        //we update the list that is to be processed
		squaresToProcess = v; 
	}
	
	return m;
}
```