onst express = require('express');
const path = require('path');
const app = express();
const PORT = 3001 || process.env.PORT;
app.use(express.json());
const axios = require('axios');

app.get('/dog/:breed', dog.get);