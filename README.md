# onmap-cli

CLI ONMAP («Online Network Mapper»)

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm i
```

## Environment variables

Create a .env file in the root of your project:

```
MONGO_URI=mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
```

## Create file onmap-cli.js

```
const { onmap } = require('./src');

const TITLE = 'Test scan';
const FLAGS = ['-A', '-v', '-Pn', '-O', '-no-stylesheet'];
const TARGETS = ['127.0.0.1'];

(async () => {
  try {
    await onmap(TITLE, FLAGS, TARGETS);
    consola.success(`Scan success all at ${new Date().toLocaleString()}`);
  } catch (err) {
    consola.error(err);
  }
  process.exit(1);
})();
```

## Running application

```
npm start
```
