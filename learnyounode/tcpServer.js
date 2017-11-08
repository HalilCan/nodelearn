var net = require('net');

var currentDate = new Date();


var server = net.createServer(function (socket) {
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth() + 1;
	var day = currentDate.getDate();	
	var hour = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	
	var fullDate = year+'-'+month+'-0'+day+' '+hour+':'+minutes + `\n`; 
	
	//var fd = currentDate.toISOString().replace('/T/', ' ').replace(/\..+/, '');
	socket.end(fullDate); 
})

server.on('error', (err) => {
  throw err;
});

server.listen(process.argv[2]);



/*
var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/