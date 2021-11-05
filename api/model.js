const db = require('../data/db-config.js')

async function getRecipeById(recipe_id) {
    const recipeR = await db('recipes')
        .where('recipe_id', recipe_id)
    return recipeR
}

module.exports = {
    getRecipeById,
}
