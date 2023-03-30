var iconMenuMobile = document.querySelector(".iconMenuMobile");
var header__menu = document.querySelector(".header__menu");

// iconMenuMobile.addEventListener("click", function(){
// 	header__menu.classList.add("active");
// });


function classToggle() {
    header__menu.classList.toggle("active");
}

if (iconMenuMobile) iconMenuMobile.addEventListener('click', classToggle);


    $(".__slider").slick({
        arrows: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
          {
            breakpoint: 9999,
            //settings: "unslick"
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
          }
        ]
    });

    $(".slider__index").slick({
        arrows: true,
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });
  
    $(".slider__leaderborad").slick({
        arrows: true,
        slidesToShow: 1,
        dots: false,
        autoplay: false,
        autoplaySpeed: 3000,
    });

    $(".jajanan__slider").slick({
        arrows: true,
        slidesToShow: 1,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });

    $(".kuliner__legenda").slick({
        arrows: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            }
          }
        ]
    });
  
    
    $(".slider__Iflix").slick({
        arrows: true,
        slidesToShow: 1,
        dots: false,
        //infinite: false,
        //autoplay: true,
        //autoplaySpeed: 6000,
    });

    $(".slider__booklet").slick({
        arrows: false,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
    });




// modal

MicroModal.init({
    openTrigger: 'data-micromodal-trigger',
    disableScroll: true,
    awaitCloseAnimation: true
});



// //value
//value
$('body').on('click', ".btnvalue--kurang", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

    if (oldValue >= 2) {
      var newVal = parseFloat(oldValue) - 1;
    } else {
      newVal = 1;
    }  
  $button.parent().find("input").val(newVal);

});
$('body').on('click', ".btnvalue--tambah", function() {

  var $button = $(this);
  var oldValue = $button.parent().find("input").val();

    if (oldValue >= 1) {
      var newVal = parseFloat(oldValue) + 1;
    } else {
      newVal = 1;
    }  
  $button.parent().find("input").val(newVal);

});


//videohtml5
var vid = document.getElementById("videoHtml5"); 
var videoHtml5__play = document.querySelector(".videoHtml5__play"); 


if (videoHtml5__play != null) {
  videoHtml5__play.addEventListener("click", function(){
    videoHtml5__play.style.display = "none";
    vid.play();
  });
}



// $(".btnvalue--kurang").on("click", function() {

//     var $button = $(this);
//     var oldValue = $button.parent().find("input").val();
  
//       if (oldValue >= 1) {
//         var newVal = parseFloat(oldValue) - 1;
//       } else {
//         newVal = 0;
//       }  
//     $button.parent().find("input").val(newVal);
  
//   });
  
// $(".btnvalue--tambah").on("click", function() {

//     var $button = $(this);
//     var oldValue = $button.parent().find("input").val();
  
//       if (oldValue >= 0) {
//         var newVal = parseFloat(oldValue) + 1;
//       } else {
//         newVal = 0;
//       }  
//     $button.parent().find("input").val(newVal);
  
//   });
