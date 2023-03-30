var pagepost = 1;
var lastPosX = 0;
var isDragging = false;
var FastTimerVar;
var theItem = document.getElementById("myelement");
var score = 0;
var itemSpeed = 6;
var watch = document.querySelector(".stopwatch");

var dragpr = new Hammer(theItem);
dragpr.add(new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0 }));
dragpr.on("pan", handleDrag);

cta_start.addEventListener("click", startGame);
init();

function d(id) {
    return document.getElementById(id);
}

function frame1() {
    TweenLite.to(cta_start, 0.5, { scale: 1, ease: Back.easeOut, delay: 0.2 });
    TweenLite.to(gamemekanisme, 0.5, {
        scale: 1,
        ease: Back.easeOut,
        delay: 0.2,
    });
    TweenLite.to(front, 0.4, { y: 0, ease: Circ.easeOut, delay: 0.5 });
    TweenLite.to(frontimg, 0.4, { y: 0, ease: Circ.easeOut, delay: 0.4 });
}

function frame3() {
    TweenLite.to(gameend, 0.3, { y: 0, ease: Expo.easeOut });

    d("gamereplay").addEventListener("click", function () {
        location.reload();
    });
}

function init() {
    TweenLite.to(cta_start, 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(gamemekanisme, 0, { scale: 0, ease: Expo.easeOut });
    TweenLite.to(front, 0, { y: -600, ease: Expo.easeOut });
    TweenLite.to(frontimg, 0, { y: -600, ease: Expo.easeOut });
    TweenLite.to(myelement, 0, { y: 755, ease: Expo.easeOut });
    TweenLite.to(popup, 0, { y: 600, ease: Expo.easeOut });
    TweenLite.to(table, 0, { y: 200, ease: Expo.easeOut });

    //Semangat Box
    TweenLite.to(indicator_fill, 0, {
        opacity: 0,
        scaleX: 1,
        transformOrigin: "left",
        ease: Expo.easeOut,
    });

    //End Form
    TweenLite.to(gameend, 0, { y: -600, ease: Expo.easeOut });

    //End Card
    TweenLite.to(cta_start, 0, {
        scale: 0,
        ease: Expo.easeOut,
        onComplete: frame1,
        delay: 0.5,
    });
    TweenLite.to(gamemekanisme, 0, {
        scale: 0,
        ease: Expo.easeOut,
        onComplete: frame1,
        delay: 0.5,
    });
}

function startGame() {
    if (pagepost == 1) {
        document.querySelector(".bg__sound").play();
        document.querySelector(".unmuted").classList.remove("hidden");
        TweenLite.to(front, 0.4, { y: -600, ease: Sine.easeIn });
        TweenLite.to(frontimg, 0.4, { y: -600, ease: Sine.easeIn });
        TweenLite.to(table, 0.4, { y: 0, ease: Sine.easeIn, delay: 0.4 });
        // TweenLite.to(bg_cover, 0.3, { scale: 0, ease: Back.easeIn, delay: 0.4 });
        TweenLite.to(cta_start, 0.3, { scale: 0, ease: Back.easeIn, delay: 0.4 });
        TweenLite.to(gamemekanisme, 0.3, {
            scale: 0,
            ease: Back.easeIn,
            delay: 0.4,
        });
        TweenLite.to(bg, 0.5, {
            ease: Sine.easeIn,
            delay: 0.6,
            onComplete: playgame,
        });
        pagepost = 2;
    } else {
        pagepost = 3;
        playgame();
    }
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

function playgame() {
    d("timer").style.display = "block";
    setTimeout(function () {
        FastTimerVar = setInterval(timerFast, 1000);
    }, 400);
    TweenLite.to(myelement, 0.3, {
        y: 0,
        ease: Expo.easeOut,
        delay: 0.5,
        onComplete: function () {
            FastTimerVar = setInterval(collisionDetect, 100);
            flytheitems();
        },
    });
}

function get_random() {
    return Math.floor(Math.random() * 280);
}

function gameOver() {
    frontimg.style.display = "none";

    TweenLite.to(in1, 0.3, { alpha: 0, ease: Sine.easeOut });
    TweenLite.to(in2, 0.3, { alpha: 0, ease: Sine.easeOut });
    TweenLite.to(in3, 0.3, { alpha: 0, ease: Sine.easeOut });
    TweenLite.to(in4, 0.3, { alpha: 0, ease: Sine.easeOut });
    // TweenLite.to(in5, 0.3, { alpha: 0, ease: Sine.easeOut });
    // TweenLite.to(in6, 0.3, { alpha: 0, ease: Sine.easeOut });
    TweenLite.to(table, 0.3, { y: 200, ease: Sine.easeOut });

    TweenLite.to(myelement, 0.5, {
        y: 755,
        ease: Expo.easeIn,
        delay: 0.3,
        onComplete: frame3,
    });

    clearInterval(FastTimerVar);

    setTimeout(function () {
        d("timer").style.display = "none";
        TweenMax.killTweensOf(d("in1"));
        TweenMax.killTweensOf(d("in2"));
        TweenMax.killTweensOf(d("in3"));
        TweenMax.killTweensOf(d("in4"));
        // TweenMax.killTweensOf(d("in5"));
        // TweenMax.killTweensOf(d("in6"));
    }, 300);

    d("totalpoints").innerHTML = score;
}

function flytheitems() {
    in1.style.left = get_random() + "px";
    in2.style.left = get_random() + "px";
    in3.style.left = get_random() + "px";
    in4.style.left = get_random() + "px";
    // in5.style.left = get_random() + "px";
    // in6.style.left = get_random() + "px";

    TweenLite.to(in1, itemSpeed, {
        y: 700,
        ease: Sine.easeIn,
        onComplete: reflyitem,
        onCompleteParams: ["in1"],
    });
    TweenLite.to(in2, itemSpeed, {
        y: 700,
        ease: Sine.easeOut,
        onComplete: reflyitem,
        onCompleteParams: ["in2"],
        delay: 0.8,
    });
    TweenLite.to(in3, itemSpeed, {
        y: 700,
        ease: Sine.easeOut,
        onComplete: reflyitem,
        onCompleteParams: ["in3"],
        delay: 1.6,
    });
    TweenLite.to(in4, itemSpeed, {
        y: 700,
        ease: Sine.easeOut,
        onComplete: reflyitem,
        onCompleteParams: ["in4"],
        delay: 2.4,
    });
    // TweenLite.to(in5, itemSpeed, {
    //     y: 700,
    //     ease: Sine.easeOut,
    //     onComplete: reflyitem,
    //     onCompleteParams: ["in5"],
    //     delay: 3.2,
    // });
    // TweenLite.to(in6, itemSpeed, {
    //     y: 700,
    //     ease: Sine.easeOut,
    //     onComplete: reflyitem,
    //     onCompleteParams: ["in6"],
    //     delay: 4,
    // });
}

function reflyitem(id) {
    d(id).style.display = "block";
    d(id).style.left = get_random() + "px";
    itemSpeed -= 0.2;
    if (itemSpeed < 1) {
        itemSpeed = 2;
    }
    TweenLite.to(d(id), 0, { y: 0, ease: Sine.easeOut });
    TweenLite.to(d(id), itemSpeed, {
        y: 700,
        ease: Sine.easeOut,
        onComplete: reflyitem,
        onCompleteParams: [id],
        delay: 0.2,
    });
}

function levelUp() {
    console.log(score);
}

function collisionDetect() {
    var breakable = $("#itemhit").collision("#in1");
    var breakable1 = $("#itemhit").collision("#in2");
    var breakable2 = $("#itemhit").collision("#in3");
    var breakable3 = $("#itemhit").collision("#in4");
    // var breakable4 = $("#itemhit").collision("#in5");
    // var breakable5 = $("#itemhit").collision("#in6");

    if (breakable.length != 0) {
        in1.style.display = "none";
        score += 1;
        levelUp();
        TweenLite.to(pts, 0.3, {
            y: -150,
            ease: Expo.easeOut,
            onComplete: function () {
                TweenLite.to(pts, 0, { y: 0, ease: Sine.easeOut });
            },
        });
    }

    if (breakable1.length != 0) {
        in2.style.display = "none";
        score += 1;
        levelUp();
        TweenLite.to(pts, 0.3, {
            y: -150,
            ease: Expo.easeOut,
            onComplete: function () {
                TweenLite.to(pts, 0, { y: 0, ease: Sine.easeOut });
            },
        });
    }

    if (breakable2.length != 0) {
        in3.style.display = "none";
        score += 1;
        levelUp();
        TweenLite.to(pts, 0.3, {
            y: -150,
            ease: Expo.easeOut,
            onComplete: function () {
                TweenLite.to(pts, 0, { y: 0, ease: Sine.easeOut });
            },
        });
    }

    if (breakable3.length != 0) {
        in4.style.display = "none";
        score += 1;
        levelUp();
        TweenLite.to(pts, 0.3, {
            y: -150,
            ease: Expo.easeOut,
            onComplete: function () {
                TweenLite.to(pts, 0, { y: 0, ease: Sine.easeOut });
            },
        });
    }

    // if (breakable4.length != 0) {
    //     in5.style.display = "none";
    //     score += 1;
    //     levelUp();
    //     TweenLite.to(pts, 0.3, {
    //         y: -150,
    //         ease: Expo.easeOut,
    //         onComplete: function () {
    //             TweenLite.to(pts, 0, { y: 0, ease: Sine.easeOut });
    //         },
    //     });
    // }

    // if (breakable5.length != 0) {
    //     in6.style.display = "none";
    //     score += 1;
    //     levelUp();
    //     TweenLite.to(pts, 0.3, {
    //         y: -150,
    //         ease: Expo.easeOut,
    //         onComplete: function () {
    //             TweenLite.to(pts, 0, { y: 0, ease: Sine.easeOut });
    //         },
    //     });
    // }
}

function handleDrag(ev) {
    var elem = ev.target;

    if (!isDragging) {
        isDragging = true;
        lastPosX = elem.offsetLeft;
    }

    var posX = ev.deltaX + lastPosX;

    if (posX >= -10 && posX <= 140) {
        elem.style.left = posX + "px";
    }

    if (ev.isFinal) {
        isDragging = false;
    }
}

var timerp = 30;
function timerFast() {
    timerp--;
    if (timerp >= 0) {
        if (timerp <= 9) {
            d("stopwatch").innerHTML = "00:0" + timerp;
        } else {
            d("stopwatch").innerHTML = "00:" + timerp;
        }
    } else {
        clearInterval(FastTimerVar);
        startGame = false;
        gameOver();
    }
}

d("gamemekanisme").addEventListener("click", function () {
    TweenLite.to(d("popup"), 0.5, { y: 0, ease: Expo.easeOut });
});

d("popup__close").addEventListener("click", function () {
    TweenLite.to(d("popup"), 0.5, { y: 600, ease: Expo.easeOut });
});
