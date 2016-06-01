import twilio from 'twilio';
import bodyParser from 'body-parser';
import express from 'express';

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
  let resp = new twilio.TwimlResponse();
  resp.dial({}, function(){
    this.number('+16479296609');
    this.number('+16472270565');
  })
  res.header('Content-Type', 'text/xml');
  res.send(resp.toString());
});

app.listen((process.env.PORT || 5000), function () {
  console.log('Example app listening on port 5000!');
});
