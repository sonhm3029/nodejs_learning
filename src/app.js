const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const route = require('./routes/index');
const port = 3000;


app.use(morgan('combined'));
app.use('/static',express.static(path.join(__dirname, 'public')));

app.engine('hbs', handlebars({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'));



route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


