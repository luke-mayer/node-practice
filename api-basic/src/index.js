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

app.listen(port, () => {
  console.log(`API app listening on port ${port}`);
});
