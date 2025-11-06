# Slimepedia (Slime Rancher 2)
This project works to faithfully recreate the slimepedia menu from the video game Slime Rancher 2. The slimepedia acts as a wiki page built into the game.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```


## ToDo
- tutorials page
- blueprints page
    - get component assets
- make scrollbar interactable
- add keyboard selection support (wasd to move selected button and space to select/open)
- fix pressing key like super key counting as input and removing the warning but not letting the browser play sound
- do something with the coins counter (can keep count in cookies or something to have it be by individual users)
- add a mute button and save preference to a cookie
- music
- fix certain things scaling wrong with extreme zoom in or out
- fix "User gesture detected, initializing audio..." getting printed every gesture, not just the first one
- fix cursor point not alligning with visuals





## Time of day chart:
- 16:48 -> sunset
- 19:12 -> night
- 04:48 -> sunrise
- 07:12 -> day
