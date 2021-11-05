exports.seed = function (knex, Promise) {
    return knex('ingredients').insert([
        { ingredient_name: "salt"},
        {ingredient_name: "olive oil", ingredient_unit: "lbs" }
    ])
}