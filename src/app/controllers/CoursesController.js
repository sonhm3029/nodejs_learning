const { Schema } = require('mongoose');
const Course = require('../model/Course');


class CoursesController {

    show(req, res, next) {
        
        Course.findOne({ slug: req.params.slug})
            .then( course => {
                course = course.toObject();
                res.render('courses/show', {course});
            })
            .catch(next);
    }

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.img = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCxETs93cTTwKciiMMtht_U4pvYcg`;
        const newCourse = new Course(formData);
        newCourse.save()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }

    showCourse(req, res, next) {
        
        Course.find({})
            .then( courses => {
                courses = courses.map( course => course.toObject());
                res.render('courses/my-courses', {courses});
            })
            .catch(next);
    }

    edit(req, res, next) {

        Course.findOne({ _id: req.params.id})
            .then( course => {
                course = course.toObject();
                res.render('courses/edit', {course});
            })
            .catch(next);
       
    }

    update(req, res, next) {

        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => {
                res.redirect('/courses/my-courses');
            })
            .catch(next);

    }

}

module.exports = new CoursesController;
