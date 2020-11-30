import seeder from 'mongoose-seed';
import { DEVELOPMENT_DB_DSN } from './db/connection';
import { tasks } from '../json-data/tasks.json';
import { achievements } from './json-data/achievements.json';

// Connect to MongoDB via Mongoose
seeder.connect(DEVELOPMENT_DB_DSN, function() {

  // Load Mongoose models
  seeder.loadModels([
    'app/model1File.js',
    'app/model2File.js'
  ]);

  // Clear specified collections
  seeder.clearModels(['Model1', 'Model2'], function() {

    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });

  });
});

// Data array containing seed data - documents organized by Model
var data = [
	{
		'model': 'Model1',
		'documents': [
			{
				'name': 'Doc1',
				'value': 200
			},
			{
				'name': 'Doc2',
				'value': 400
			}
		]
	}
];