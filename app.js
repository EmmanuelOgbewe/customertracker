const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const bodyParser = require('body-parser');
const router = express.Router();


var indexRouter = require('./routes/index');

app.set('view engine', "pug");
app.set('views', path.join(__dirname, "views"));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);


app.listen(port, () => console.log(`listening at http://localhost:${port}`))

module.exports = router;