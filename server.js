import twilio from 'twilio';
import bodyParser from 'body-parser';
import express from 'express';

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
  requestAccess().then(() => {
    let resp = new twilio.TwimlResponse();
    resp.play({digits: [6]});
    res.header('Content-Type', 'text/xml');
    res.send(resp.toString());
  });
  // resp.dial({}, function(){
  //   this.number('+16479296609');
  //   this.number('+16472270565');
  // })
});

app.listen((process.env.PORT || 5000), function () {
  console.log('Example app listening on port 5000!');
});



var TelegramBot = require('node-telegram-bot-api');

var token = '242309812:AAH5KoT-bCJkRQJNx_VvIHk-ajCF82HngdE';
var bot = new TelegramBot(token, {polling: true});

const requestAccess =  () => new Promise((resolve, reject) => {
  const msg = 'Someone is downstairs.';
  bot.sendMessage(owner, msg, {
    reply_markup: {keyboard}
  });
  onGranted(resolve);
  onDenied(reject);
})

const onGranted = (cb) => bot.onText(/\OPEN/, cb);
const onDenied = (cb) => bot.onText(/\IGNORE/, cb);

const keyboard = [[{text: 'OPEN'}, {text: 'IGNORE'}]];
let owner;
bot.onText(/\/owner/, function (msg, match) {
  owner = msg.from.id;

});
