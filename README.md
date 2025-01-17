# Vencord Plugins

### Current Plugins:
- [ ] [ThemeLibrary](https://github.com/Faf4a/ThemeLibrary)
- [ ] [ReactionLogger](https://discord.com)
- [x] [WakaTime](https://github.com/Faf4a/plugins/tree/main/userplugins/wakatime) [forked from: [wakatime/vencord-wakatime](https://github.com/wakatime/vencord-wakatime)]
<br/>

## ThemeLibrary has moved!

https://github.com/Faf4a/ThemeLibrary

---

## ReactionLogger deprecated!

This is in-development by discord! Therefore no longer maintained.

---

#### ThemeLibrary Disclaimer

- I do not own any of the listed themes, rights go to their respective owners.
- If you want to remove your theme, [please open an issue](https://github.com/Faf4a/plugins/issues/new?assignees=&labels=removal&projects=&template=request_removal.yml&title=Theme+Removal) in this repository.

#### WakaTime Plugin

- I do not manage the API nor have access to the api in any way.
- The original author ["Neon" created this plugin](https://github.com/wakatime/vencord-wakatime), I simply improved it.

## How to Install?
#### Cloning Vencord
To install this plugin you need to clone Vencord (or whatever you use).

```bash
git clone https://github.com/Vendicated/Vencord
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

1. Move the wanted plugin from the created `plugins/userplugins` folder into the `vencord/src` folder.
2. Ensure it's structured as `[vencord]/src/userplugins/[PLUGIN NAME]/[...files]`
3. (**optional**) Delete all other files.

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
