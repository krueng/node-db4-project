exports.seed = function (knex, Promise) {
    return knex('recipe_books').insert([
        {recipe_id:1, step_id:1}
    ])
}