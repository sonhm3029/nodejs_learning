const Course = require('../model/Course');
class SiteController {

    index(req, res) {
        Course.find({})
            .then( courses => {
                courses = courses.map( course => course.toObject());
                res.render('home', { courses });
            })
            .catch( err => {
                next(err);
            });
    }

    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;
