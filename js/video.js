var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to "+video.autoplay)
	console.log("Loop is set to "+video.autoplay)

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML= video.volume *100 +"%"
	video.play()

});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate *= .90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Spped up video");
	video.playbackRate /= .90
	console.log("Speed is", video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("skip video");
	video.currentTime += 10
	if (video.currentTime >= video.duration){
		video.currentTime = 0
	}
	console.log("Current time of the video is ", video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function(){
	if (video.muted == true){
		video.muted = false
		this.innerHTML = "Mute"
		console.log("Video unmuted")
	}
	else{
		video.muted = true
		this.innerHTML = "Unmute"
		console.log("Video muted")
	}
});

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Current volume: ", this.value)
	video.volume = this.value/100 
	document.querySelector("#volume").innerHTML=this.value+"%";
	
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
});



// function playVid(){
// 	video.play();
// }
