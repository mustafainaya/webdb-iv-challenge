exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('recipes').truncate().then(function() {
		// Inserts seed entries
		return knex('recipes').insert([
			{ recipe: 'cheese', dish_id: 1 },
			{ recipe: 'veggies', dish_id: 1 },
			{ recipe: 'sasuage', dish_id: 1 },
			{ recipe: 'breakfast burger', dish_id: 2 },
			{ recipe: 'steak burger', dish_id: 2 },
			{ recipe: 'california Burrito', dish_id: 3 },
			{ recipe: 'asada burrito', dish_id: 3 }
		]);
	});
};
