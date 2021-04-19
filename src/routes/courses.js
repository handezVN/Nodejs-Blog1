const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController.js');

// newsController.index
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-actions',courseController.handleFormAction);
router.get('/:id/edit', courseController.edit);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.forceremove);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.get('/:slug', courseController.show);

module.exports = router;
