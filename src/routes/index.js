const about = require('./about');
const site = require('./site');
const courses = require('./courses');

const siteController = require('../app/controllers/SiteController');

function route(app) {

    app.use('/about', about);
    app.use('/courses', courses)
    app.use('/', site);

    
}

module.exports = route;
