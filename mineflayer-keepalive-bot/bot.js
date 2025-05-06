const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

// Keep-alive web server for UptimeRobot
app.get("/", (req, res) => {
  res.send("✅ Bot is alive!");
});
app.listen(3000, () => {
  console.log("🌐 Keep-alive web server running on port 3000.");
});

function createBot() {
  const bot = mineflayer.createBot({
    host: 'YOUR_SERVER.aternos.me', // 🔁 Change this to your Aternos IP
    port: 25565,
    username: 'KeepAliveBot', // Any name for cracked servers
  });

  bot.on('spawn', () => {
    console.log('✅ Bot joined the server.');

    // Simulate jump every 60s to prevent AFK kick
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => {
        bot.setControlState('jump', false);
      }, 500);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('🔁 Disconnected. Reconnecting in 10s...');
    setTimeout(createBot, 10000);
  });

  bot.on('error', err => {
    console.error('❌ Bot error:', err.message);
  });
}

createBot();
