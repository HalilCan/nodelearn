var Mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/' + process.argv[2];

var collectionName = process.argv[3];
var targetId = process.argv[4];

Mongo.connect(url, function(err, db) {
	if (err) throw err;
	console.log('connected');
	var collection = db.collection(collectionName);
	collection.remove({
		_id: targetId
	}, function(err, data){
		if (err) throw err;
		console.log("done");
		db.close();
	});
});