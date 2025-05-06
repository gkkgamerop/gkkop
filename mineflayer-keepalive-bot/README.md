# Aternos KeepAlive Bot

This Node.js bot uses [Mineflayer](https://github.com/PrismarineJS/mineflayer) to join a Minecraft Aternos server and stay online.

## Features
- Automatically reconnects if kicked
- Periodic jumping to avoid AFK kicks
- Optional keep-alive web server for Replit/UptimeRobot support

## Setup

```bash
npm install
node bot.js
```

Edit the server IP and bot name in `bot.js` to match your server.
