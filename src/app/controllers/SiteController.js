const Course = require('../model/Course');
class SiteController {

    index(req, res) {
        // res.render('home');
        Course.find({}, function(err, docs) {
            if( !err) {
                res.json(docs);
            }
            else {
                res.status(400).json( {error: "ERROR!!!"});
            }
        });
    }

    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;
