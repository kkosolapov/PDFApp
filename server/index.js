const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');

const PORT = 5000;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
});
