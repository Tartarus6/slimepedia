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

## Deploying
### GitHub Actions Method (only one with instructions for now)
1. If you havent done this already: [Create an ssh key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) on your deployment server and [add it to your GH account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
2. Clone the repo
3. With in the repo in GH, go to (Settings -> Secrets -> Actions)
4. Create an environment
5. set the `SSH_PRIVATE_KEY`, `SSH_HOST`, `SSH_USER`, and `SSH_PORT` (defaults to 22 if not set) environment variables as secrets
6. On the deployment server, run `echo YOUR_GITHUB_TOKEN | docker login ghcr.io -u YOUR_GITHUB_USERNAME --password-stdin`


## ToDo
- blueprints page
    - get component assets
- do something with the coins counter (can keep count in cookies or something to have it be by individual users)
- add a mute button and save preference to a cookie
- music
- fix certain things wobbling when making extreme sudden zoom changes (like showing and hiding the inspector tool if it's big enough)
- fix "User gesture detected, initializing audio..." getting printed every gesture, not just the first one




## Time of day chart:
- 16:48 -> sunset
- 19:12 -> night
- 04:48 -> sunrise
- 07:12 -> day
