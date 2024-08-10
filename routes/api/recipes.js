const express = require('express');
const router = express.Router();
const recipesController = require('../../controllers/recipesController');


router.route('/').get(recipesController.getRecipes)
    .post(recipesController.createNewRecipe)

module.exports = router;