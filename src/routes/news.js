const express = require('express');
const router = express.Router();
const newController = require('../app/controllers/NewController');

router.get('/:slug', newController.details);
router.get('/', newController.news);
module.exports = router;
