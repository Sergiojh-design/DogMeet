const express = require('express');
const app = express();
const PORT = 8000;

const dogBreedAPI = require('./helper.js');

app.use(express.json());

app.get('/breed', (req, res) => {
  dogBreedAPI(breed, (err, data) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(data)
    }
  });
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})