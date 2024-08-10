const data = {
    ingredients: require('../model/ingredients.json'),
    setIngredients: function (data) { this.ingredients = data }
}


const getIngredients = (req, res) => {
    res.json(data.ingredients);
}

module.exports = { getIngredients }