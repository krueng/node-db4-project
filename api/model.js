const db = require('../data/db-config.js');

function getRecipeById(recipe_id) {
    return db('recipes');
}

module.exports = {
    getRecipeById,
};
