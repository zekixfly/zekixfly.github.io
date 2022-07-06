/*-------------版權區---------------
作者: Zeki
信箱: zekixfly@hotmail.com

版權聲明:
一、本網站的版權屬原作者所有。 
二、盼望尊重知識產權，請勿擅自轉貼複製。
		
---------------版權區-------------*/

var shuffle,
	playList = musicList(),
	musicListSlider = false,
	audio = getId('bg-music'),
	soundEffect;


if(localStorage.shuffle === 'undefined' || typeof localStorage.shuffle === 'undefined') {
	shuffle = localStorage.shuffle = false;
}
else {
	shuffle = localStorage.shuffle	
}

// var shuffle = JSON.parse(localStorage.shuffle) || false;
	

	

var currentMusic = JSON.parse(shuffle) == true ? parseInt( Math.random() * playList.length ) : 0; //Here to determine whether to open randomly



//build play list
for(var i = 0; i<playList.length; i++) {
	getId('music-list').getTags('table')[0].innerHTML += '<tr onclick="javascript:selectMusic('+i+');"><td>'+(i+1)+'</td><td><section id="music-title">'+ playList[i].title + '</section><br /><section id="music-info">' + playList[i].artist + '&nbsp;‧&nbsp;' + playList[i].album + '</section></td></tr>'
}


function selectMusic(trackNum) {
	buildMusic(trackNum);
	currentTrack(trackNum);
	zekimusicOn();
}

function musicListSwitch() {

	musicListSlider = !musicListSlider;
	if(musicListSlider) {
		getId('music-list').delClass('music-list-out').addClass('music-list-in');
		getId('zeki-rabit').addClass('zeki-rabit-check');
	}
	else {
		getId('music-list').delClass('music-list-in').addClass('music-list-out');
		getId('zeki-rabit').delClass('zeki-rabit-check');
	}

}

getId('btnSE').innerHTML = '<audio preload="auto" id="btnSoundEffect"><source src="./soundeffect/decision.mp3" type="audio/mp3"></audio>';

// $('<audio>', {
// 	preload:'auto',
// 	id:'btnSoundEffect'
// }).html('<source src="./soundeffect/decision.mp3" type="audio/mp3">').appendTo('#btnSE');
soundEffect = getId('btnSoundEffect');
getId('zeki-rabit').addEventListener('click', function(){
	soundEffect.pause();
	if(soundEffect.currentTime =! 0) {
		soundEffect.currentTime = 0;
	}
	soundEffect.play();
	musicListSwitch();
})

// Update progress
function setSecond(currentValue) {
	return parseInt(currentValue%60) < 10 ? '0' + parseInt(currentValue%60) : parseInt(currentValue%60)
}

function updateProgress() {
	audio = getId('bg-music');
	getId('m-current-time').innerHTML = parseInt(audio.currentTime/60) + ':' + setSecond(audio.currentTime);
	if(audio.duration == Infinity || isNaN(audio.duration) == true) {
		getId('m-total-time').innerHTML = 'cal.';
	}
	else {
		getId('m-total-time').innerHTML = parseInt(audio.duration/60) + ':' + setSecond(audio.duration);
	}
	
}


 


function buildMusic(i) {
	currentMusic = i;//Zeki Tip: if not shuffle and use select play list's music have to been record track, else music will jump to original play music track's next track
	if(getId('bg-music')) {
		getId('bg-music').remove();	
	}

	getId('bgm').innerHTML = '<audio preload="auto" id="bg-music"><source src="'+playList[i].mp3+'" type="audio/mp3"></audio>'

	// $('<audio>', {
	// 	// autoplay: true,
	// 	// loop:'loop',
	// 	preload: 'auto',
	// 	id:'bg-music'
	// }).html('<source src="'+playList[i].mp3+'" type="audio/mp3">').appendTo('#bgm');
	audio = getId('bg-music');
	audio.volume = 0.15;//volume = 15%
	audio.addEventListener('ended', ended);
	// var audioPromise = audio.play();
	// if (audioPromise !== undefined) {
	// 	audioPromise.then(_ => {
	// 		// Autoplay started!
	// 		console.log('Music Start');
	// 	}).catch(error => {
	// 		console.log(error);
	// 		console.log('Music Start Failse');
	// 	});
	// }

	// zekimusicOn();
}
buildMusic(currentMusic);

function currentTrack(i) {
	document.querySelector('#music-list table').children[i].addClass('music-focus').siblings().delClass('music-focus');
	// $($('#music-list table tr')[i]).addClass('music-focus').siblings().delClass('music-focus');
	getTags('marquee')[0].innerHTML = 'Title：' + playList[i].title + '&emsp;&emsp;&emsp;' + //&emsp; is Em Space
					  'Artist：' + playList[i].artist;
	// buildMusic(i);
}


function switchMusic(musicNum) {

	if(musicNum >= playList.length) {
		currentMusic = 0;
	}
	currentTrack(currentMusic);
	buildMusic(currentMusic);
	shuffleSwitch(shuffle);
	
}

function zekimusicOn() {

	
	
	setInterval(updateProgress, 500);	

	audio.play();
	
	currentTrack(currentMusic);
	//隱藏區塊
	getId('m-play').style.display =  (getId('m-play').style.display == 'block'?'none':'none');
	//顯示區塊
	getId('m-pause').style.display =  (getId('m-pause').style.display == 'none'?'block':'block');

}

function zekimusicOff() {

	audio.pause();
	getTags('marquee')[0].innerHTML = '站長滴咕：Welcome my home! It\'s my secret home. I hope my dream can come true bit by bit...';
	// clearInterval(updateProgress);
	//隱藏區塊
	getId('m-pause').style.display =  (getId('m-pause').style.display == 'block'?'none':'none');
	//顯示區塊
	getId('m-play').style.display =  (getId('m-play').style.display == 'none'?'block':'block');


}

function shuffleSwitch(shuffleBoolean) {

	if (JSON.parse(shuffleBoolean) == true) {		
		getId('m-shuffle').addClass('shuffle-focus');		
		console.log('shuffle on');
	}
	else {
		getId('m-shuffle').delClass('shuffle-focus');
		console.log('shuffle off');
	}
}

function zekimusicShuffle(val) {
	var tmpMusic = currentMusic;
	currentMusic = parseInt( Math.random() * playList.length );//radom play.
	if (tmpMusic == currentMusic) {
		++currentMusic
	}

	if(val !== 'shuffleTrue') {
		shuffle = localStorage.shuffle = !(JSON.parse(shuffle));	
	}
	
	shuffleSwitch(shuffle);
	switchMusic(currentMusic);	
	zekimusicOn();//display title and artist
	
}

function ended() {

	zekimusicOff();
	// $($('#music-list table tr')[currentMusic]).delClass('music-focus');
	if(JSON.parse(shuffle) == true) {
		zekimusicShuffle('shuffleTrue');
	}
	else if(currentMusic <= playList.length-1) {
		switchMusic(++currentMusic);	
	}

	zekimusicOn();
	
}
