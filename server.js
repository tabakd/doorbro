import twilio from 'twilio';
import bodyParser from 'body-parser';
import express from 'express';

let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
  let resp = new twilio.TwimlResponse();
  resp.play({digits: [req.query.digit] || [9, 8, 6, 1, 2, 3, 4, 5, 7, 0]});
  res.header('Content-Type', 'text/xml');
  res.send(resp.toString());

});

app.listen((process.env.PORT || 5000), function () {
  console.log('Example app listening on port 5000!');
});
