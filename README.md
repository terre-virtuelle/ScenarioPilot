# scenarioPilot (scenariopilot)

A Quasar Framework app

## Install the dependencies

```bash
yarn
```
## Install quasar cli

```bash
yarn global add @quasar/cli 
npm install -g @quasar/cli

```

## Possible errors 

```bash
Watchpack Error (watcher): Error: ENOSPC: System limit for number of file watchers reached, 
```
## Recovery 

```bash
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
sudo sysctl --system
```
### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
```

### Format the files

```bash
yarn format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
