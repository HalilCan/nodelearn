var net = require('net');

var currentDate = new Date();


var server = net.createServer(function (socket) {
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();	
	var hour = currentDate.getHours();
	var minutes = currentDate.getMinutes();

	var fullDate = year+'-'+month+'-'+day+' '+hour+':'+minutes; 

	socket.end(fullDate); 
})
server.listen(process.argv[2]);