
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', table => {
            table.increments('recipe_id').primary()
            table.string('recipe_name', 128).notNullable().unique()
            table.timestamp('created_at').notNullable().defaultTo(knex.fn.now())
        })
        .createTable('ingredients', table => {
            table.increments('ingredient_id').primary()
            table.string('ingredient_name', 256).notNullable().unique()
            table.string('ingredient_unit', 33)
        })
        .createTable('steps', table => {
            table.increments('step_id').primary()
            table.integer('step_number')
            table.string('step_instructions', 256)
            table.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
        .createTable('recipe_books', table => {
            table.increments('recipe_book_id').primary()
            table.decimal('quantity')
            table.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
            table.integer('step_id')
                .unsigned()
                .notNullable()
                .references('step_id')
                .inTable('steps')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT')
        })
}

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('recipe_books')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
}