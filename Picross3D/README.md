**Webbrowser version of Picross3D for the Nintendo DS**

Currently a work in progress

Current features:
Paint a block to prevent it from breaking (can unpaint them)
Destroy blocks to create a 3D object specified by the puzzle numbers
Destroying a block that is part of the final answer, makes it broken in appearance and unable to unpaint it
The puzzle numbers on the faces of the cube represent how many contiguous blocks should be in that axis
A puzzle number with a circle outline means that there should be one gap in the blocks (i.e. a circled 4 could be solved by having 2 contiguous blocks and x amount of gap blocks with x > 1 and then 2 more contigous blocks)
A puzzle number with a square outline means that there should be at least two gaps in the blocks, but there may be more (i.e. a square 4 can be a 1 x 1 y 1 z 1 split or a 1 x 2 y 1 split)
An editing mode where you can create your own puzzle (Currently no front facing way to get there, but it is supported, with some bugs)
Mobile support (although there are some bugs here and there)

Planned features:
Algorithm to create the puzzle numbers from the object
Timer and Strike limit
Allow users to upload their created puzzle so that others can play them
Daily puzzle
