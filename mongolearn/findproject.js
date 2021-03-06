var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var ageArg = process.argv[2].parseInt;

mongo.connect(url, function(err, db) {
	if(err) throw err;
	//db is, well, the database
	var parrots = db.collection('parrots');
	parrots.find({
		age: {$gt: ageArg}
	}, {
		name: 1
		, age: 1
		, _id: 0
	}).toArray(function(err,documents){
		console.log(documents);
		db.close();
	});
});