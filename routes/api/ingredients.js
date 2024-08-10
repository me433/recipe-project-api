const express = require('express');
const router = express.Router();
const ingredientsController = require('../../controllers/ingredientsController');


router.route('/').get(ingredientsController.getIngredients);

module.exports = router;