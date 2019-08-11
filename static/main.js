console.log('hello')

var socket = io();
    socket.on('connect', function() {
        //socket.emit('my event', {data: 'I\'m connected!'});
        console.log('connected')
    });

function send(){
	var inputBox = document.getElementById('inputBox')
	socket.emit('msg',inputBox.value)
	inputBox.value=''

}

socket.on('push',function(data){
	var msgBox = document.getElementById('msgBox')
	msgBox.innerHTML +='<p>'+ data +'</p>'
})

function getWeather(){
	//url='http://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=53c63de66775fdf69a5b413bce7907d0'
	url = '/users'
	fetch(url).then(function(res){
		res.json().then(function(data){
			console.log(data)
		})
	})
}





