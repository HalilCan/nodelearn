var Mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var firstNameArg = process.argv[2];
var lastNameArg = process.argv[3];

Mongo.connect(url, function(err, db) {
	console.log('connected');
	var parrots = db.collection('parrots');
	parrots.insert({
		firstName: firstNameArg
		, lastName: lastNameArg  
	}, function(err, data){
		if (err) throw err;
		console.log(JSON.stringify(firstName: firstNameArg, lastName: lastNameArg));
		db.close();
	});
});