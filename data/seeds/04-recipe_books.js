exports.seed = function (knex, Promise) {
    return knex('recipe_books').insert([
        {ingredient_id:1, step_id:1, quantity: 0.014}
    ])
}