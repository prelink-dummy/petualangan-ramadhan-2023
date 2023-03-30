$(".km__slider--ten").slick({
    infinite: false,
    autoplay: true,
    fade: true,
    prevArrow: "<button class='slick-arrow arrow-prev'></button>",
    nextArrow: "<button class='slick-arrow arrow-next'></button>",
});

$(".km__slider--hundred").slick({
    infinite: false,
    fade: true,
    prevArrow: "<button class='slick-arrow arrow-prev'></button>",
    nextArrow: "<button class='slick-arrow arrow-next'></button>",
});

$(".km__article--wrap").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplay: true,
    prevArrow: "<button class='slick-arrow arrow-prev'></button>",
    nextArrow: "<button class='slick-arrow arrow-next'></button>",
});

$(".slick-dots button").html("");

setTimeout(function () {
    $(".km__sliderwrap--hundred").hide();
}, 100);

$("#makanan").click(function () {
    $(".km__sliderwrap--ten").fadeOut(100);
    $(".km__sliderwrap--hundred").fadeIn(300);

    setTimeout(function () {
        $(".km__slider--ten").slick("unslick");
    });
});

function changeSlide(x) {
    $("#makanan").prop("selectedIndex", x);

    // change weight and calorie info
    let selected = $("#makanan option:selected");
    $(".km__info--gram").text(selected.data("gram"));
    $(".km__info--value").text(selected.data("calorie"));
}

$(".km__slider--ten .arrow-prev").click(function () {
    // change dropdown
    let active = $(".km__slider--ten .slick-active").data("slick-index");
    changeSlide(active);
});

$(".km__slider--ten .arrow-next").click(function () {
    // change dropdown
    let active = $(".km__slider--ten .slick-active").data("slick-index");
    changeSlide(active);
});

// On edge hit
$(".km__slider--ten").on("beforeChange", function () {
    let active = $(".km__slider--ten .slick-active").data("slick-index");
    let next = active + 1;
    changeSlide(next);
});

let getOption = function () {
    $("#makanan option").each(function () {
        if ($(this).is(":selected")) {
            let slideno = $(this).data("slide");
            $(".km__slider--hundred").slick("slickGoTo", slideno);
            $(".km__info--gram").text($(this).data("gram"));
            $(".km__info--value").text($(this).data("calorie"));

            $(".km__slider--hundred .arrow-prev").click(function () {
                // change dropdown
                let active = $(".km__slider--hundred .slick-active").data("slick-index");
                changeSlide(active);
            });

            $(".km__slider--hundred .arrow-next").click(function () {
                // change dropdown
                let active = $(".km__slider--hundred .slick-active").data("slick-index");
                changeSlide(active);
            });
        }
    });
};
