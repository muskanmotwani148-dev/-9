const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "8514910182:AAF46lVUOLAFluX0_XqrCfLA0hulcQWXUm4";
const CHANNEL_LINK = "https://t.me/+CRv_8bjodDQ0ZmU1";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const text = `Welcome to 𝐀𝐋𝐏𝐇𝐀_𝐋𝐄𝐆𝐄𝐍𝐃! 📊🇮🇳\n\nGet daily market insights, chart breakdowns, and trading setups designed purely for educational growth and skill development\nTap the buttons below 👇`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📢 Join Official Channel", url: CHANNEL_LINK }],
      ]
    }
  };

  bot.sendMessage(chatId, text, options);

  setTimeout(() => {
    bot.sendMessage(chatId,
    );
  }, 1000);
});

bot.on('callback_query', (query) => {
  if (query.data === 'joined') {
    bot.sendMessage(
      query.message.chat.id,
      "✅ You're successfully connected!\n\nGet ready to explore daily market insights, learning-based chart analysis, and educational trading concepts.\n\nStay tuned and keep growing! 📈"
    );
    bot.answerCallbackQuery(query.id);
  }
});

console.log("Bot is running...");
