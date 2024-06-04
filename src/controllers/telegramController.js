const axios = require('axios');
const config = require('../config/config');

const handleUpdate = async (update) => {
  if (update.message) {
    const chatId = update.message.chat.id;
    const text = update.message.text;

    if (text === '/start') {
      await sendMessage(chatId, 'Привет! Добро пожаловать в наше приложение.');
    } else {
      await sendMessage(chatId, `Вы написали: ${text}`);
    }
  }
};

const sendMessage = async (chatId, text) => {
  const url = `https://api.telegram.org/bot${config.telegramBotToken}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: text,
  };
  await axios.post(url, payload);
};

module.exports = {
  handleUpdate,
};
