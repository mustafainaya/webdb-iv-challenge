exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredients').truncate().then(function() {
		// Inserts seed entries
		return knex('ingredients').insert([
			{ ingredient: 'mushrooms' },
			{ ingredient: 'pepperoni' },
			{ ingredient: 'basil' },
			{ ingredient: 'tomato sauce' },
			{ ingredient: 'pork' },
			{ ingredient: 'beef' },
			{ ingredient: 'cheese' },
			{ ingredient: 'dough' },
			{ ingredient: 'basic seasoning' },
			{ ingredient: 'salsa' },
			{ ingredient: 'guacomole' },
			{ ingredient: ' cheese' }
		]);
	});
};
