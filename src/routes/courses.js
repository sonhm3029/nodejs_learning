const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.get('/my-courses', coursesController.showCourse);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);


module.exports = router;