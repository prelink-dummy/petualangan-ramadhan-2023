var startGame = false;
var FastTimerVar;

function d(id) {
    return document.getElementById(id);
}
function displayNoneMe(divid) {
    d(divid).style.display = "none";
}

init();

d("hotspot3").addEventListener("click", cheezeClick);
d("hotspot2").addEventListener("click", cheezeClick);
d("hotspot1").addEventListener("click", cheezeClick);
d("hotspot4").addEventListener("click", cheezeClick);

d("ctaplay").addEventListener("click", startGameNow);

function init() {
    TweenLite.to(d("bar"), 0, { alpha: 0, y: 10, ease: Expo.easeOut });

    TweenLite.to(d("lastimg"), 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(d("gamereplay"), 0, { scale: 0, ease: Expo.easeOut });
    // TweenLite.to(d("gameother"), 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(d("textend"), 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(d("endshare"), 0, { scale: 0, ease: Expo.easeOut });

    TweenLite.to(d("hole1"), 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(d("hole2"), 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(d("hole3"), 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(d("hole4"), 0, { scale: 0, ease: Expo.easeOut });

    TweenLite.to(d("tapped1"), 0, { scale: 0, alpha: 1, ease: Expo.easeOut });
    TweenLite.to(d("tapped2"), 0, { scale: 0, alpha: 1, ease: Expo.easeOut });
    TweenLite.to(d("tapped3"), 0, { scale: 0, alpha: 1, ease: Expo.easeOut });
    TweenLite.to(d("tapped4"), 0, { scale: 0, alpha: 1, ease: Expo.easeOut });

    TweenLite.to(d("top"), 0, { y: -200, ease: Back.easeOut });
    TweenLite.to(d("timercon"), 0, { y: -300, ease: Expo.easeOut });
    TweenLite.to(d("pointcon"), 0, { y: -120, ease: Expo.easeOut });
    TweenLite.to(d("pointEnd"), 0, { y: -500, ease: Expo.easeOut });
    TweenLite.to(d("popup"), 0, { y: 600, ease: Expo.easeOut });

    d("bar").style.display = "block";
    d("hole1").style.display = "block";
    d("hole2").style.display = "block";
    d("hole3").style.display = "block";
    d("hole4").style.display = "block";

    TweenLite.to(d("track"), 0, { alpha: 0, ease: Expo.easeOut });
    TweenLite.to(d("item1"), 0, { alpha: 0, ease: Back.easeOut });
    TweenLite.to(d("item2"), 0, { alpha: 0, ease: Back.easeOut });
    TweenLite.to(d("item3"), 0, { alpha: 0, ease: Back.easeOut });
    TweenLite.to(d("item4"), 0, { alpha: 0, ease: Back.easeOut });

    TweenLite.to(d("front"), 0, { scale: 0, ease: Back.easeOut });
    TweenLite.to(d("frontimg"), 0, { scale: 0, ease: Back.easeOut });
    TweenLite.to(d("ctaplay"), 0, { scale: 0, ease: Back.easeOut });
    TweenLite.to(d("gamemekanisme"), 0, { scale: 0, ease: Back.easeOut });
    TweenLite.to(d("instruction"), 0, { scale: 0, ease: Back.easeOut });

    TweenLite.to(d("front"), 0.5, {
        scale: 1,
        ease: Back.easeOut,
        delay: 0.1,
    });

    TweenLite.to(d("frontimg"), 0.5, {
        scale: 1,
        ease: Back.easeOut,
        delay: 0.1,
    });

    TweenLite.to(d("ctaplay"), 0.5, { scale: 1, ease: Back.easeOut, delay: 0.5 });
    TweenLite.to(d("gamemekanisme"), 0.5, {
        scale: 1,
        ease: Back.easeOut,
        delay: 0.5,
    });
    d("track").style.display = "block";
}

function startGameNow() {
    document.querySelector(".bg__sound").play();
    document.querySelector(".unmuted").classList.remove("hidden");

    FastTimerVar = setInterval(timerFast, 1000);
    TweenLite.to(d("ctaplay"), 0.5, { scale: 0, ease: Back.easeIn });
    TweenLite.to(d("gamemekanisme"), 0.5, { scale: 0, ease: Back.easeIn });
    TweenLite.to(d("front"), 0.5, {
        alpha: 0,
        ease: Sine.easeOut,
        delay: 0.1,
    });
    TweenLite.to(d("frontimg"), 0.5, {
        alpha: 0,
        ease: Sine.easeOut,
        delay: 0.1,
    });
    TweenLite.to(d("top"), 0.5, { y: 0, ease: Expo.easeOut, delay: 0.5 });
    TweenLite.to(d("timercon"), 0.5, { y: 0, ease: Expo.easeOut, delay: 0.5 });
    TweenLite.to(d("pointcon"), 0.5, { y: 0, ease: Expo.easeOut, delay: 0.5 });
    TweenLite.to(d("instruction"), 0.5, { scale: 1, ease: Expo.easeOut, delay: 0.5 });

    TweenLite.to(d("bar"), 0.5, {
        alpha: 1,
        y: 0,
        ease: Expo.easeOut,
        delay: 0.8,
    });

    TweenLite.to(d("hole1"), 0.5, { scale: 1, ease: Expo.easeOut, delay: 1 });
    TweenLite.to(d("hole2"), 0.5, { scale: 1, ease: Expo.easeOut, delay: 1.1 });
    TweenLite.to(d("hole3"), 0.5, { scale: 1, ease: Expo.easeOut, delay: 1.2 });
    TweenLite.to(d("hole4"), 0.5, { scale: 1, ease: Expo.easeOut, delay: 1.3 });

    TweenMax.killTweensOf(d("item1"));
    TweenMax.killTweensOf(d("item2"));
    TweenMax.killTweensOf(d("item3"));
    TweenMax.killTweensOf(d("item4"));

    TweenLite.to(d("item1"), 0, {
        alpha: 1,
        scale: 0.3,
        x: 66,
        y: -278,
        ease: Back.easeOut,
    });
    TweenLite.to(d("item2"), 0, {
        alpha: 1,
        scale: 0.3,
        x: 22,
        y: -278,
        ease: Back.easeOut,
    });
    TweenLite.to(d("item3"), 0, {
        alpha: 1,
        scale: 0.3,
        x: -22,
        y: -278,
        ease: Back.easeOut,
    });
    TweenLite.to(d("item4"), 0, {
        alpha: 1,
        scale: 0.3,
        x: -65,
        y: -278,
        ease: Back.easeOut,
    });

    startGame = true;

    TweenLite.to(d("track"), 0.5, {
        alpha: 1,
        ease: Expo.easeOut,
        delay: 0.9,
        onComplete: rainCheese,
    });
}

document.querySelector(".unmuted").addEventListener("click", function () {
    document.querySelector(".unmuted").classList.add("hidden");
    document.querySelector(".muted").classList.remove("hidden");
    document.querySelector(".bg__sound").muted = true;
});

document.querySelector(".muted").addEventListener("click", function () {
    document.querySelector(".unmuted").classList.remove("hidden");
    document.querySelector(".muted").classList.add("hidden");
    document.querySelector(".bg__sound").muted = false;
});

var timerp = 30;
function timerFast() {
    timerp--;
    if (timerp >= 0) {
        if (timerp <= 9) {
            d("timercon").innerHTML = "00:0" + timerp;
        } else {
            d("timercon").innerHTML = "00:" + timerp;
        }
    } else {
        clearInterval(FastTimerVar);
        TweenLite.to(d("pointEnd"), 0, { y: 0, ease: Expo.easeOut });

        startGame = false;
        TweenMax.killTweensOf(d("item1"));
        TweenMax.killTweensOf(d("item2"));
        TweenMax.killTweensOf(d("item3"));
        TweenMax.killTweensOf(d("item4"));

        d("item1").style.display = "none";
        d("item2").style.display = "none";
        d("item3").style.display = "none";
        d("item4").style.display = "none";

        setTimeout(function () {
            TweenLite.to(d("pointEnd"), 0, { y: -500, ease: Expo.easeOut });
            d("textpoint").innerHTML = pointSet;
            gameOver();
        }, 4000);
    }
}

function gameOver() {
    startGame = false;
    TweenMax.killTweensOf(d("item1"));
    TweenMax.killTweensOf(d("item2"));
    TweenMax.killTweensOf(d("item3"));
    TweenMax.killTweensOf(d("item4"));

    d("item1").style.display = "none";
    d("item2").style.display = "none";
    d("item3").style.display = "none";
    d("item4").style.display = "none";

    TweenLite.to(d("timercon"), 0.5, { y: -300, ease: Expo.easeOut });
    TweenLite.to(d("pointcon"), 0.5, { y: -120, ease: Expo.easeOut });
    TweenLite.to(d("instruction"), 0.5, { scale: 0, ease: Expo.easeOut });

    TweenLite.to(d("bar"), 0.5, {
        alpha: 0,
        y: 0,
        ease: Expo.easeOut,
        delay: 0.5,
    });
    TweenLite.to(d("track"), 0.5, {
        alpha: 0,
        y: 0,
        ease: Expo.easeOut,
        delay: 0.5,
    });
    TweenLite.to(d("top"), 0, { y: -200, ease: Back.easeOut, delay: 0.5 });

    TweenLite.to(d("hole1"), 0.5, { scale: 0, ease: Expo.easeOut, delay: 0.1 });
    TweenLite.to(d("hole2"), 0.5, { scale: 0, ease: Expo.easeOut, delay: 0.2 });
    TweenLite.to(d("hole3"), 0.5, { scale: 0, ease: Expo.easeOut, delay: 0.3 });
    TweenLite.to(d("hole4"), 0.5, { scale: 0, ease: Expo.easeOut, delay: 0.4 });

    TweenLite.to(d("lastimg"), 0.5, { scale: 1, ease: Back.easeOut, delay: 1.5 });
    TweenLite.to(d("textend"), 0.5, { scale: 1, ease: Back.easeOut, delay: 1.6 });
    TweenLite.to(d("gamereplay"), 0.5, {
        scale: 1,
        ease: Back.easeOut,
        delay: 1.7,
    });
    TweenLite.to(d("endshare"), 0.5, { scale: 1, ease: Expo.easeOut, delay: 1.8 });
    // TweenLite.to(d("gameother"), 0.5, {
    //     scale: 1,
    //     ease: Back.easeOut,
    //     delay: 1.7,
    // });
}

function rainCheese() {
    d("item1").style.zIndex = 8;
    d("item2").style.zIndex = 8;
    d("item3").style.zIndex = 8;
    d("item4").style.zIndex = 8;

    TweenLite.to(d("item1"), 1, {
        scale: 1,
        x: 0,
        y: 0,
        ease: Linear.easeOut,
        delay: 0.3,
        onComplete: cheeseFall,
        onCompleteParams: ["item1", "hotspot1"],
    });
    TweenLite.to(d("item2"), 1, {
        scale: 1,
        x: 0,
        y: 0,
        ease: Linear.easeOut,
        delay: 1.5,
        onComplete: cheeseFall,
        onCompleteParams: ["item2", "hotspot2"],
    });
    TweenLite.to(d("item3"), 1, {
        scale: 1,
        x: 0,
        y: 0,
        ease: Linear.easeOut,
        delay: 1.8,
        onComplete: cheeseFall,
        onCompleteParams: ["item3", "hotspot3"],
    });
    TweenLite.to(d("item4"), 1, {
        scale: 1,
        x: 0,
        y: 0,
        ease: Linear.easeOut,
        delay: 2.1,
        onComplete: cheeseFall,
        onCompleteParams: ["item4", "hotspot4"],
    });
}

function cheeseFall(e, f) {
    d(f).style.display = "block";
    TweenLite.to(d(e), 0.5, {
        y: 200,
        ease: Expo.easeIn,
        delay: 0.1,
        onComplete: reCheese,
        onCompleteParams: [e, f],
    });
}

function reCheese(e, f) {
    d(f).style.display = "none";
    if (e == "item1") {
        TweenLite.to(d("item1"), 0, {
            scale: 0.3,
            x: 66,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item1"), 1, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.3,
            onComplete: cheeseFall,
            onCompleteParams: ["item1", "hotspot1"],
        });
    } else if (e == "item2") {
        TweenLite.to(d("item2"), 0, {
            scale: 0.3,
            x: 22,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item2"), 1, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.3,
            onComplete: cheeseFall,
            onCompleteParams: ["item2", "hotspot2"],
        });
    } else if (e == "item3") {
        TweenLite.to(d("item3"), 0, {
            scale: 0.3,
            x: -22,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item3"), 1, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.3,
            onComplete: cheeseFall,
            onCompleteParams: ["item3", "hotspot3"],
        });
    } else if (e == "item4") {
        TweenLite.to(d("item4"), 0, {
            scale: 0.3,
            x: -65,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item4"), 1, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.3,
            onComplete: cheeseFall,
            onCompleteParams: ["item4", "hotspot4"],
        });
    }
}

function cheezeClick(e) {
    if (startGame) {
        TweenMax.killTweensOf(d(e.target.id));
        if (e.target.id == "hotspot1") {
            console.log("item 1 clik");
            pointPlus();
            d("splat1").style.display = "block";
            TweenLite.to(d("splat1"), 0, { alpha: 1, ease: Sine.easeOut });
            TweenLite.to(d("splat1"), 0.5, {
                alpha: 0,
                ease: Sine.easeOut,
                delay: 0.3,
                onComplete: displayNoneMe,
                onCompleteParams: ["splat1"],
            });

            TweenLite.to(d("tapped1"), 0.3, { scale: 1, ease: Back.easeOut });
            TweenLite.to(d("tapped1"), 0.1, {
                scale: 0,
                ease: Expo.easeOut,
                delay: 0.5,
            });

            TweenLite.to(d("item1"), 0, {
                scale: 0.3,
                x: 66,
                y: -278,
                ease: Back.easeOut,
            });
            TweenLite.to(d("item1"), 1, {
                scale: 1,
                x: 0,
                y: 0,
                ease: Linear.easeOut,
                delay: 0.3,
                onComplete: cheeseFall,
                onCompleteParams: ["item1", "hotspot1"],
            });
        } else if (e.target.id == "hotspot2") {
            console.log("item 2 clik");
            pointPlus();
            d("splat2").style.display = "block";
            TweenLite.to(d("splat2"), 0, { alpha: 1, ease: Sine.easeOut });
            TweenLite.to(d("splat2"), 0.5, {
                alpha: 0,
                ease: Sine.easeOut,
                delay: 0.3,
                onComplete: displayNoneMe,
                onCompleteParams: ["splat2"],
            });

            TweenLite.to(d("tapped2"), 0.3, { scale: 1, ease: Back.easeOut });
            TweenLite.to(d("tapped2"), 0.1, {
                scale: 0,
                ease: Expo.easeOut,
                delay: 0.5,
            });

            TweenLite.to(d("item2"), 0, {
                scale: 0.3,
                x: 22,
                y: -278,
                ease: Back.easeOut,
            });
            TweenLite.to(d("item2"), 1, {
                scale: 1,
                x: 0,
                y: 0,
                ease: Linear.easeOut,
                delay: 0.3,
                onComplete: cheeseFall,
                onCompleteParams: ["item2", "hotspot2"],
            });
        } else if (e.target.id == "hotspot3") {
            console.log("item 3 clik");
            pointPlus();
            d("splat3").style.display = "block";
            TweenLite.to(d("splat3"), 0, { alpha: 1, ease: Sine.easeOut });
            TweenLite.to(d("splat3"), 0.5, {
                alpha: 0,
                ease: Sine.easeOut,
                delay: 0.3,
                onComplete: displayNoneMe,
                onCompleteParams: ["splat3"],
            });

            TweenLite.to(d("tapped3"), 0.3, { scale: 1, ease: Back.easeOut });
            TweenLite.to(d("tapped3"), 0.1, {
                scale: 0,
                ease: Expo.easeOut,
                delay: 0.5,
            });

            TweenLite.to(d("item3"), 0, {
                scale: 0.3,
                x: -22,
                y: -278,
                ease: Back.easeOut,
            });
            TweenLite.to(d("item3"), 1, {
                scale: 1,
                x: 0,
                y: 0,
                ease: Linear.easeOut,
                delay: 0.3,
                onComplete: cheeseFall,
                onCompleteParams: ["item3", "hotspot3"],
            });
        } else if (e.target.id == "hotspot4") {
            console.log("item 4 clik");
            pointPlus();
            d("splat4").style.display = "block";
            TweenLite.to(d("splat4"), 0, { alpha: 1, ease: Sine.easeOut });
            TweenLite.to(d("splat4"), 0.5, {
                alpha: 0,
                ease: Sine.easeOut,
                delay: 0.3,
                onComplete: displayNoneMe,
                onCompleteParams: ["splat4"],
            });

            TweenLite.to(d("tapped4"), 0.3, { scale: 1, ease: Back.easeOut });
            TweenLite.to(d("tapped4"), 0.1, {
                scale: 0,
                ease: Expo.easeOut,
                delay: 0.5,
            });

            TweenLite.to(d("item4"), 0, {
                scale: 0.3,
                x: -65,
                y: -278,
                ease: Back.easeOut,
            });
            TweenLite.to(d("item4"), 1, {
                scale: 1,
                x: 0,
                y: 0,
                ease: Linear.easeOut,
                delay: 0.3,
                onComplete: cheeseFall,
                onCompleteParams: ["item4", "hotspot4"],
            });
        }

        d(e.target.id).style.display = "none";
    }
}

function replayAgainFirstCheese(div) {
    if (div == "item1") {
        TweenLite.to(d("item1"), 0, {
            scale: 0.3,
            x: 66,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item1"), 2, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.5,
            onComplete: replayAgainFirstCheese,
            onCompleteParams: ["item1"],
        });
    } else if (div == "item2") {
        TweenLite.to(d("item2"), 0, {
            scale: 0.3,
            x: 22,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item2"), 2, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.5,
            onComplete: replayAgainFirstCheese,
            onCompleteParams: ["item2"],
        });
    } else if (div == "item3") {
        TweenLite.to(d("item3"), 0, {
            scale: 0.3,
            x: -22,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item3"), 2, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.5,
            onComplete: replayAgainFirstCheese,
            onCompleteParams: ["item3"],
        });
    } else if (div == "item4") {
        TweenLite.to(d("item4"), 0, {
            scale: 0.3,
            x: -96,
            y: -278,
            ease: Back.easeOut,
        });
        TweenLite.to(d("item4"), 2, {
            scale: 1,
            x: 0,
            y: 0,
            ease: Linear.easeOut,
            delay: 0.5,
            onComplete: replayAgainFirstCheese,
            onCompleteParams: ["item4"],
        });
    }
}
var pointSet = 0;
var point = 1;
function pointPlus() {
    pointSet = pointSet + point;
    console.log(pointSet);
    document.getElementById("pointcon").innerHTML = pointSet + "<small style='margin-left: 4px; font-size: 14px;'>pts</small>";
    document.getElementById("pointEndSpan").innerHTML = pointSet + "<small style='margin-left: 4px; font-size: 14px;'>pts</small>";
}

d("gamereplay").addEventListener("click", function () {
    location.reload();
});

d("gamemekanisme").addEventListener("click", function () {
    TweenLite.to(d("popup"), 0.5, { y: 0, ease: Expo.easeOut });
});

d("popup__close").addEventListener("click", function () {
    TweenLite.to(d("popup"), 0.5, { y: 600, ease: Expo.easeOut });
});
