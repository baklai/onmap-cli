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

## Create "onmap-cli.js" file

```
const onmap = require('./src');

const TITLE = 'Test scan';
const FLAGS = ['-A', '-v', '-Pn', '-O', '-no-stylesheet'];
const TARGETS = ['127.0.0.1'];

onmap.scanner(TITLE, FLAGS, TARGETS);
```

## Running application

```
npm start
```
