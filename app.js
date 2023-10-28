const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database'); 

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
