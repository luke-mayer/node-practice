import 'dotenv/config';
import express from 'express';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/params/:p', (req, res) => {
  res.send(req.params);
});

// Trying out next()
const nextA = function (req, res, next) {
  console.log('A\n');
  next();
};

const nextB = function (req, res, next) {
  console.log('B\n');
  next();
};

const nextC = function (req, res) {
  res.send('C');
};

const nextArr = [];
nextArr.push(nextA);
nextArr.push(nextB);
nextArr.push(nextC);

app.get('/next', nextArr);

app.listen(port, () => {
  console.log(`API app listening on port ${port}`);
});
