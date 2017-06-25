const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.set('views','./views');
app.set('view engine','pug');


app.get('/', (req,res,next) => {
    res.send(`Helllouuuuuu`);
    next();
});
app.get('/:date', (req,res) => {
    res.send(`Helllouuuuuu`)
});




app.listen(3000, ()=> console.log(`Server Online!!`));