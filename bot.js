const TelegramBot = require('node-telegram-bot-api');

const TOKEN = "8514910182:AAF46lVUOLAFluX0_XqrCfLA0hulcQWXUm4";
const CHANNEL_LINK = "https://t.me/+CRv_8bjodDQ0ZmU1";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const text = `Welcome to 𝐐𝐔𝐎𝐓𝐄𝐗_𝐀𝐋𝐏𝐇𝐀_𝐋𝐄𝐆𝐄𝐍𝐃! 📊🇮🇳\n\nDaily market insights, charts, and educational trading setups.\nTap the buttons below 👇\n\n⚠️ Disclaimer:\nWe do NOT provide investment advice.\nAll market analysis is ONLY for educational purposes.`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: "📢 Join Official Channel", url: CHANNEL_LINK }],
        [{ text: "I Joined 👍", callback_data: "joined" }]
      ]
    }
  };

  bot.sendMessage(chatId, text, options);
});

bot.on('callback_query', (query) => {
  if (query.data === 'joined') {
    bot.sendMessage(query.message.chat.id,
      "✅ Thank you for joining!\n\nYou will now receive daily market insights and educational trading setups.\n\nStay tuned! 📈"
    );
    bot.answerCallbackQuery(query.id);
  }
});

console.log("Bot is running...");
