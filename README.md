# Vencord Plugins

### Current Plugins:
- [x] [ThemeLibrary](https://github.com/Faf4a/plugins/tree/main/ThemeLibrary)
- [x] [ReactionLogger](https://github.com/Faf4a/plugins/tree/main/ReactionLogger)
<br/>

## How to Install?
#### Cloning Vencord
To install this plugin you need to clone Vencord (or whatever you use).

```bash
git clone https://github.com/Vendicated/Vencord#main
```
> [!WARNING]
> Ensure you have `git` installed.

Switch to the cloned folder with
```bash
cd Vencord
```

##
#### Install the Plugin

Clone this repository with 
```js
git clone https://github.com/Faf4a/plugins
```

1. Move the wanted plugin from the created `plugins` folder into the `userplugins` folder.
2. (If the `userplugins` folder doesn't exist, create it in the `/src` folder!)
3. Ensure it's structured as `src/userplugins/[PLUGIN NAME]/[...files]`

##
#### Installing Dependencies
Run `install` to install all dependencies
```js
pnpm install
```
> [!NOTE]
> If this command fails try using the `--force` flag, ensure `pnpm` is installed with `npm install -g pnpm`!

##
#### Building Vencord
Build Vencord with the `build` command:
```bash
pnpm run build
```
##
#### Injecting
Inject Vencord into your Discord client with `inject` (if not done yet / make sure Discord is **fully** closed!)

```bash
pnpm run inject
```

#
#### 🎉 That's it! You successfully installed your plugin..!

> [!NOTE]
> If you don't see the plugin, make sure it's enabled in your Settings (`Settings > Vencord (Tab) > Plugins > [Plugin Name]`)!

<h6>now explode</h6> <img src="https://cdn.discordapp.com/emojis/1105406110724268075.webp" width="96" height="96" />
