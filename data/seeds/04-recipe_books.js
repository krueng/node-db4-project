exports.seed = function (knex, Promise) {
    return knex('recipe_books').insert([
        {ingredient_id:1, step_id:2, quantity: 0.014},
        {ingredient_id:2, step_id:2, quantity: 0.001}
    ])
}