const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const data = {
    recipes: require('../model/recipes.json'),
    setRecipes: function (data) { this.recipes = data }
}


const getRecipes = (req, res) => {
    res.json(data.recipes);
}

const createNewRecipe = async (req, res) => {
    const newRecipe = {
        id: data.recipes?.length ? data.recipes[data.recipes.length - 1].id + 1 : 1,
        title: req.body.firstname,
        description: req.body.lastname,
        ingredients: req.body.ingredients,
        labels: req.body.labels,
        pdf: req.body.pdf
    }
    if (!newRecipe.title || !newRecipe.description) {
        return res.status(400).json({ 'message': 'Title and description are required.' });
    }
    data.setRecipes([...data.recipes, newRecipe]);
    /* 
    try {
        if (!fs.existsSync("../model/recipes.json")) {
            await fsPromises.mkdir("../model/recipes.json");
        }

        await fsPromises.appendFile("../model/recipes.json", logItem);
    } catch (err) {
        console.log(err);
    } */


    res.status(201).json(data.recipes);
}

module.exports = { getRecipes, createNewRecipe }