import express from 'express';

const compression = require('compression');
const dotenv = require("dotenv");
const cors = require('cors');

const app = express();
dotenv.config();

// Enable Compression
app.use(compression());

// Enable CORS
app.use(cors({ origin: '*' }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));


app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.get('/manifest.json', (request, response) => {
  response.sendFile(`${__dirname}/views/manifest.json`);
});

app.get('/view.html', (request, response) => {
  response.sendFile(`${__dirname}/views/pipe-view.html`);
});

app.get('/logo.png', (request, response) => {
    response.sendFile(`${__dirname}/assets/logo.png`);
  });

const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}. 🚢`);
});
