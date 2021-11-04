exports.seed = function (knex, Promise) {
    return knex('steps').insert([
        { step_number: 1, step_instructions: "Put a large saucepan on a medium heat", ingredient_id:2}
    ])
}