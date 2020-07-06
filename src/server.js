import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import faunadb from 'faunadb';

const q = faunadb.query;
const client = new faunadb.Client({
  secret: 'fnADvsSZphACAJMZtbFfkj4b83lYv_oQQGQRCyce',
});

const getData = () => {
  fetch('https://am4-api.netlify.app/.netlify/functions/am4-alliance-api', {})
    .then((res) => res.json())
    .then(({ members }) => writeData(members));
};

const writeData = (team) => {
  client
    .query(
      q.Replace(q.Ref(q.Collection('team'), '270057444654187008'), {
        data: {
          members: team,
        },
      })
    )
    .catch((err) => console.log(err));
};

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
  .use(
    compression({ threshold: 0 }),
    sirv('static', { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log('error', err);
  });

setInterval(() => {
  getData();
}, 10000 * 60);
