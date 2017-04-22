import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_KEY;
let bot = new TelegramBot(token, {polling: true});
let owner;

const keyboard = [[{text: 'OPEN'}, {text: 'IGNORE'}]];
const requestAccess =  () => new Promise((resolve, reject) => {
  const msg = 'Someone is downstairs.';
  bot.sendMessage(owner, msg, {
    reply_markup: {
      keyboard, one_time_keyboard: true
    }
  });
  onGranted(resolve);
  onDenied(reject);
})

const onGranted = (cb) => bot.onText(/\OPEN/, () => {
  bot.sendMessage(owner, 'Door opened.');
  cb();
});
const onDenied = (cb) => bot.onText(/\IGNORE/, cb);

bot.onText(/\/doorbro start/, function (msg, match) {
  owner = msg.chat.id;
  bot.sendMessage(owner, "Doorbro started.");
});

export default requestAccess;
