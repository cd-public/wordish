// Browser side script for wordle

// This reads user input, makes an api call, and then formats the api return into HTML.

let answer = "" ;
let row = 0 ;
let active = true ;

// Ended up being unused in my version.
function start() {
	;
}

// This wraps the API call.
// The fetch url here should be wherever server.js is running.
async function colors(word) {
	const msg = await fetch("http://localhost:8083/" + word) ;
	const jsn = await msg.json() ;
	return jsn['data'] ;
} 

// This handles the HTML content.
// Styling is not considered here and is managed in styles.css
async function check() {
	let word = document.getElementById('inputElement').value ;
	word = word.toLowerCase() ;
	if (active) {
		let = newInner = "" ;
		const gyrs = await colors(word) ;
		word = word.toUpperCase() ;
		if (gyrs[0] == 'x')
		{
			// error case
			alert(word.toUpperCase() + " is not in word list.");
		} else {
			for (let i = 0; i < 5; i++) {
				let box = document.getElementById(i) ;
				newInner += '<td class=\'' + gyrs[i] + '\'>' + word[i]
			}
			document.getElementById(row).innerHTML = newInner ;
			if (gyrs == 'ggggg') {
				alert("Winner!");
				active = false ;
			}
			row = row + 1 ;
			if (row == 6) {
				active = false ;
			}
		}
	}
}
