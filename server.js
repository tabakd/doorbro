import twilio from 'twilio';
import bodyParser from 'body-parser';
import express from 'express';

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
  let resp = new twilio.TwimlResponse();
  resp.say('Password?');
  resp.dial('+16479296609');
  res.header('Content-Type', 'text/xml');
  res.send(resp.toString());
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
