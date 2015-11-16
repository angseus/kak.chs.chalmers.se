function randomColor() { // All creds to Adrian Bjugård for this awesome generator! ;)
	var color = "#"+((1<<24)*Math.random()|0).toString(16);
	document.getElementById("news").style.backgroundColor = color
	document.getElementById("facilities").style.backgroundColor = color
	document.getElementById("about").style.backgroundColor = color
	document.getElementById("contact").style.backgroundColor = color
	document.getElementById("footer").style.backgroundColor = color
}

function loop() {
	randomColor();
	setTimeout(loop, 50);
};

function festa(){
	var mainAudio;
    mainAudio = new Audio( "audio/fest.mp3");
    mainAudio.setAttribute( 'preload', true );
    mainAudio.setAttribute( 'loop', true );
    mainAudio.play();
	loop();
}