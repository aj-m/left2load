# Left 2 Load
a Left 4 Dead 2 addon manager (because the in-game one just doesn't do enough)

# General reasoning
Getting all your addons to work together properly is a real pain in the neck. Sometimes the game just forgets that you disabled those meme addons and Tank Run turns into the Shrek in the Swamp Karaoke Dance Party. Or you just downloaded a highly recommended campaign that's been split across multiple addons for whatever reason, but the game tells you these addons are conflicting. Or Bob forbid, you want to turn some of your addons off - but would like to easily recreate your current setup.

*Ideally* speaking, this should help out with all that. Probably. I'm aiming to make addon management somewhat more powerful than the barebones in-game manager. I know, it's a low bar.

I'm actively choosing to not use a UI framework for this. It's not you, it's me. Also this is primarily intended to focus on the management of local already installed/subscribed addons, not to serve as an alternative frontend to the L4D2 workshop, though I'm not ruling that out.

# Planned features:
- Addon groups
- Load order management
- Easily import/export/switch between one or more addon list files
- Force override addonlist.txt when the game breaks it

# Things that would be neat
- Workshop web API integration (i.e. subscribe to addons listed in an imported addon list that aren't currently subscribed)
