require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc';

app.all('/*', (req, res) => {
  const targetUrl = apiUrl + req.url;
  console.log('Req received: ', req.url);
  axios({
    method: req.method,
    url: targetUrl,
    data: req.body,
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  })
    .then((response) => {
      res.status(response.status).send(response.data);
    })
    .catch((err) => {
      res.status(err.response.status).send(err.response.data);
    });
});

app.listen(1128, () => {
  console.log(`listening on port ${1128}`);
});
