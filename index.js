const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const upload = require('./multer');
const petsRouter = require('./routes/pets');


PORT = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.use(express.static('public'));

app.use('/pets', petsRouter);

app.listen(3000, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
