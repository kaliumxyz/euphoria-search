/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', _ => {
	const socket = new WebSocket('wss://leet.nu/search')
	const input = document.querySelector('input')
	socket.onopen = _ => input.disabled = false
	let timeout
	// sends a search request to the server.
	function search() {
		socket.send(JSON.stringify({ "type": "search", "data": input.value }))
	}
	// formats the incoming data into an unordered list.
	function format() {

	}
	socket.onopen = data => {
		// document.querySelector('ul').innerHTML = 'connected'
	}
	socket.onmessage = data => {
		console.log(data)
		document.querySelector('ul').innerHTML += `<li> ${JSON.stringify(data.data)} </li>`
	}
	input.onkeypress = ev => {
		window.clearTimeout(timeout)
		timeout = window.setTimeout(suggest, 600)
	}

})