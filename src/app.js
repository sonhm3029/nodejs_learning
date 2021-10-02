const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const route = require('./routes/index');
const methodOverride = require('method-override');
const port = 3000;

//import db and connect
const db = require('./config/db/index');
db.connect();


app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.use('/static',express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded())

app.engine('hbs', handlebars({
    extname: '.hbs',
    helpers: {
        sum: (a, b) =>  a + b,
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'));



route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


