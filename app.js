const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Logika = require('./Controllers/Logika');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('views','./views');
app.set('view engine','pug');


app.get('/', (req,res,next) => {
    res.render('index');
    next();
});
app.get('/:date',Logika.tajm );




app.listen(3000, ()=> console.log(`Server Online!!`));