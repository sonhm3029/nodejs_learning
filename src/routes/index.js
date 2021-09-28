const about = require('./about');
const site = require('./site');

const siteController = require('../app/controllers/SiteController');

function route(app) {

    app.use('/about', about);
    app.use('/', site);

    
}

module.exports = route;
