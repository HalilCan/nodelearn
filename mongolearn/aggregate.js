var Mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var collectionName = 'prices';
var sizeArg = process.argv[2];

Mongo.connect(url, function(err, db) {
	if (err) throw err;
	console.log('connected');
	var collection = db.collection(collectionName);
	collection.aggregate([{ $match: {size: sizeArg} },
		{
			$group: {
			_id: 'average of sizeArg'
			, average: {$avg: '$price'} }
		}
		]).toArray(function(err, results){
			if (err) throw err;
			console.log(Number(results).toFixed(2));
			db.close();
		});
});