var flipcard = document.querySelector(".flipcard");
var firstStep = document.querySelector(".first__step");
var secondStep = document.querySelector(".second__step");
var thirdStep = document.querySelector(".third__step");
var fourthStep = document.querySelector(".fourth__step");
var cards = document.querySelectorAll(".game__card");
var deck = document.querySelector(".game__wrapper");
var gameSound = document.querySelector(".game__sound");
var time = document.querySelector(".time");
var watch = document.querySelector(".stopwatch");
var millisecound = 0;
var timer;
var bgEnd = "url('./images/bg2.jpg')";
var btnStart = document.querySelector(".btn__start");
var bgm = document.querySelector(".bgm");
var bgmImg = bgm.querySelector("img");
var mus = true;
var btnTnc = document.querySelector(".btn__tnc");
var popup = document.querySelector(".popup");
var popupClose = document.querySelector(".popup__close");

btnStart.addEventListener("click", function () {
	firstStep.classList.add("slow__hide");
	secondStep.classList.remove("hide");
	setTimeout(function () {
		firstStep.classList.add("hide");
		secondStep.classList.remove("slow__hide");
	}, 300);
	gameSound.play();
});

deck.addEventListener("click", runTimer);

function runTimer() {
	timeStart();
	setTimeout(function () {
		deck.removeEventListener("click", runTimer);
	}, 100);
}

var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;

function flipCard() {
	if (lockBoard) return;
	if (this === firstCard) return;

	this.classList.toggle("flip");

	if (!hasFlippedCard) {
		hasFlippedCard = true;
		firstCard = this;

		return;
	}

	secondCard = this;

	checkIfMatch();
	checkIfAllMatch();
}

function checkIfMatch() {
	var isMatch = firstCard.dataset.img === secondCard.dataset.img;

	if (isMatch) {
		firstCard.classList.add("match");
		secondCard.classList.add("match");
		disableCards();
	} else {
		firstCard.classList.remove("match");
		secondCard.classList.remove("match");
		unflipCards();
	}
}

function checkIfAllMatch() {
	var match = document.querySelectorAll(".match");

	if (match.length == cards.length) {
		// clearTimeout(t);
		timePaused();
		gameSound.pause();
		setTimeout(() => {
			secondStep.classList.add("slow__hide");
			thirdStep.classList.remove("hide");
			setTimeout(function () {
				secondStep.classList.add("hide");
				thirdStep.classList.remove("slow__hide");
			}, 300);
			// time.innerHTML = timer;
			getTime();
		}, 800);
	}
}

function getTime() {
	var watchtime = watch.innerHTML;
	var splitTime = watchtime.split(":");

	console.log(splitTime[1]);
	// if (splitTime[0] == "00") {
	//     time.innerHTML = splitTime[1] + " detik";
	// } else {
	//     time.innerHTML = splitTime[0] + " menit " + splitTime[1] + " detik";
	// }
}

function disableCards() {
	firstCard.removeEventListener("click", flipCard);
	secondCard.removeEventListener("click", flipCard);

	resetBoard();
}

function unflipCards() {
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove("flip");
		secondCard.classList.remove("flip");

		resetBoard();
	}, 500);
}

function resetBoard() {
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
}

(function shuffle() {
	cards.forEach((card) => {
		var randomPos = Math.floor(Math.random() * 8);
		card.style.order = randomPos;
	});
})();

cards.forEach((card) => card.addEventListener("click", flipCard));

document.querySelector(".replay").addEventListener("click", function () {
	location.reload();
});

function timeStart() {
	clearInterval(timer);
	timer = setInterval(() => {
		millisecound += 10;

		var dateTimer = new Date(millisecound);

		watch.innerHTML = ("0" + dateTimer.getUTCMinutes()).slice(-2) + ":" + ("0" + dateTimer.getUTCSeconds()).slice(-2) + ":" + ("0" + dateTimer.getUTCMilliseconds()).slice(-3, -1);
	}, 10);
}

function timePaused() {
	clearInterval(timer);
}

function timeReset() {
	setInterval(timer);
	millisecound = 0;
	watch.innerHTML = "00:00:00";
}

bgm.addEventListener("click", function () {
	if (mus) {
		gameSound.pause();
		bgmImg.src = "images/sound-muted.png";
		mus = false;
	} else {
		gameSound.play();
		bgmImg.src = "images/sound-unmuted.png";
		mus = true;
	}
});

btnTnc.addEventListener("click", function () {
    popup.style.display = "flex";
	setTimeout(function() {
        popup.classList.add("show");
    }, 100);
});

popupClose.addEventListener("click", function() {
    popup.classList.remove("show");
    setTimeout(function() {
        popup.style.display = "none";
    }, 100);
});