import twilio from 'twilio';
import bodyParser from 'body-parser';
import express from 'express';
import requestAccess from './telegramAuth';

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
<<<<<<< HEAD
  let resp = new twilio.TwimlResponse();
  resp.play({digits: [request.query.digit || 6]});
  res.header('Content-Type', 'text/xml');
  res.send(resp.toString());
=======
  requestAccess().then(() => {
    let resp = new twilio.TwimlResponse();
    resp.play({digits: [6]});
    res.header('Content-Type', 'text/xml');
    res.send(resp.toString());
  });
>>>>>>> 46b23995990d21c1173fc252b655e3a9bf6a5d4d
});

app.listen((process.env.PORT || 5000), function () {
  console.log('Example app listening on port 5000!');
});
