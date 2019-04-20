exports.up = function(knex, Promise) {
	return knex.schema.createTable('dishes', (table) => {
		table.increments();

		table.string('dish_name', 128).notNullable().unique('dish_name');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('dishes');
};
