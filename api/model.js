const db = require('../data/db-config.js')

async function getRecipeById(recipe_id) {
    const results = await db('recipes as r')
        .join('steps as s', 's.recipe_id', 'r.recipe_id')
        .leftJoin('recipe_books as b', 'b.step_id', 's.step_id')
        .leftJoin('ingredients as i', 'b.ingredient_id', 'i.ingredient_id')
        .where('r.recipe_id', recipe_id)

    const steps = []
    const stepIds = new Set()

    for (let i = 0; i < results.length; i++) {
        if (!stepIds.has(results[i].step_id)) {
            steps.push(results[i])
            stepIds.add(results[i].step_id)
        }
    }

    return {
        recipe_id,
        recipe_name: results[0].recipe_name,
        created_at: results[0].created_at,
        steps: steps.map(step => ({
            step_id: step.step_id,
            step_number: step.step_number,
            step_instructions: step.step_instructions,
            ingredients: results.filter(ingredient =>
                ingredient.ingredient_id !== null &&
                ingredient.step_id === step.step_id).map(ingredient => ({
                    ingredient_id: ingredient.ingredient_id,
                    ingredient_name: ingredient.ingredient_name,
                    quantity: ingredient.quantity,
                }))
        }))
    }
}



module.exports = {
    getRecipeById,
}
