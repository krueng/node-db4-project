exports.seed = function (knex, Promise) {
    return knex('ingredients').insert([
        {ingredient_name: "olive oil", ingredient_unit: "lbs" },
        { ingredient_name: "salt"}
    ])
}