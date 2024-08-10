const express = require('express');
const router = express.Router();
const labelsController = require('../../controllers/labelsController');


router.route('/').get(labelsController.getLabels);

module.exports = router;