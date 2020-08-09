const express = require('express');
const appRoot = require('app-root-path');
const app = express();
const letterRoutes = require(appRoot + '/routes/letters');
const PORT = 5500;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api', letterRoutes);
app.use(function (req, res) {
  res.send('404: Page not Found');
});

const server = app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
