let header = document.querySelector('header');
let headerMenu = document.querySelector('.header-menu');
let headerMobile = document.querySelector('.header-mobile');

if (!!headerMenu) {
  function classToggle() {
    header.classList.toggle('active');
    headerMenu.classList.toggle('active');
  }
  headerMobile.addEventListener('click', classToggle);

  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);

  const anchors = document.querySelectorAll('a[href^="#"]');
  const head = document.querySelector('header').offsetHeight;
  const urlHash = location.hash;

  for (let i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('click', (e) => {
      e.preventDefault();

      const href = anchors[i].getAttribute('href');

      if (href !== '#top') {
        const target = document.getElementById(href.replace('#', ''));

        const position =
          window.pageYOffset + target.getBoundingClientRect().top - head;

        window.scroll({
          top: position,
          behavior: 'smooth',
        });
      } else {
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }

  window.addEventListener('DOMContentLoaded', (event) => {
    if (urlHash) {
      window.scrollTo({ top: 0 });
      setTimeout(function () {
        const urlTarget = document.getElementById(urlHash.replace('#', ''));
        console.log(urlTarget);

        const urlPosition =
          window.pageYOffset + urlTarget.getBoundingClientRect().top - head;
        window.scroll({
          top: urlPosition,
          behavior: 'smooth',
        });
      }, 0);
    }
  });
}

var width = $('body').width();

// hide logo header desktop
if (width >= 1024) {
  $(window).scroll(function () {
    var e = $(window).scrollTop(),
      t = $('header').outerHeight();
    if (e > t + 20) {
      $('.header-container').addClass('py-2.5');
      $('.header-logo').addClass('lg:max-h-0');
      $('.header-menu').removeClass('lg:mt-4');
    } else {
      $('.header-container').removeClass('py-2.5');
      $('.header-logo').removeClass('lg:max-h-0');
      $('.header-menu').addClass('lg:mt-4');
    }
  });
}

var sliderDakwah = document.querySelector('.slider-dakwah');
if (!!sliderDakwah) {
  var sliderDakwah = tns({
    container: '.slider-dakwah',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    gutter: 20,
    nav: true,
    mouseDrag: true,
    navPosition: 'bottom',
  });
}

var sliderPlaylist = document.querySelector('.slider-playlist');
if (!!sliderPlaylist) {
  var sliderPlaylist = tns({
    container: '.slider-playlist',
    items: 2,
    slideBy: 'page',
    controls: false,
    autoplayButtonOutput: false,
    gutter: 20,
    nav: true,
    mouseDrag: true,
    navPosition: 'bottom',
    responsive: {
      768: {
        items: 3,
      },
    },
  });
}

var sliderSlidestory = document.querySelector('.slider-slidestory');
if (!!sliderSlidestory) {
  var sliderSlidestory = tns({
    container: '.slider-slidestory',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    gutter: 20,
    nav: true,
    navPosition: 'bottom',
  });
}

var sliderEcard = document.querySelector('.slider-ecard');
if (!!sliderEcard) {
  var sliderEcard = tns({
    container: '.slider-ecard',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    gutter: 20,
    nav: true,
    mouseDrag: true,
    navPosition: 'bottom',
  });
}

var sliderGamification = document.querySelector('.slider-gamification');
if (!!sliderGamification) {
  var sliderGamification = tns({
    container: '.slider-gamification',
    items: 2,
    slideBy: 'page',
    autoplay: true,
    controls: false,
    autoplayButtonOutput: false,
    gutter: 20,
    nav: true,
    mouseDrag: true,
    navPosition: 'bottom',
    responsive: {
      768: {
        items: 5,
      },
    },
  });
}

// modal
MicroModal.init({
  openTrigger: 'data-micromodal-trigger',
  disableScroll: true,
  awaitCloseAnimation: true,
});

//scroll bar 1/2
var maps = $('.peta-mudik');
maps.scrollLeft(maps.width() / 2);

$('#opsi-peta-mudik').change(function () {
  $('.peta-pin').trigger('click');
});

// smooth scroll
// $(document).ready(function () {
// 	// Add smooth scrolling to all links
// 	$(".header-menu a").on("click", function (event) {
// 		// Make sure this.hash has a value before overriding default behavior
// 		if (this.hash !== "") {
// 			// Prevent default anchor click behavior
// 			event.preventDefault();

// 			// Store hash
// 			var hash = this.hash;

// 			// Using jQuery's animate() method to add smooth page scroll
// 			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
// 			$("html, body").animate(
// 				{
// 					scrollTop: $(hash).offset().top - 90,
// 				},
// 				500,
// 				function () {
// 					// Add hash (#) to URL when done scrolling (default click behavior)
// 					window.location.hash = hash;
// 				}
// 			);
// 		} // End if
// 	});

// 	$(".header-menu ul li").on("click", function () {
// 		$(".header-menu").removeClass("active");
// 	});
// });

// on hover
var profileTrigger = document.querySelector('.profile-trigger');
var profileTulip = document.querySelector('.profile-tulip');

if (!!profileTrigger) {
  var x = window.matchMedia('(max-width: 1024px)');
  if (x.matches) {
  } else {
    profileTrigger.addEventListener('mouseenter', function () {
      profileTulip.style.display = 'block';
    });

    profileTulip.addEventListener('mouseleave', function () {
      profileTulip.style.display = 'none';
    });
  }
}

$(document).ready(function () {
  var e = document.querySelector('.ecard');
  var ePrev = document.querySelector('#ecard-preview');
  var eBorderUcapan = document.querySelector('.ecard-border-ucapan');
  var eDisplayUcapan = document.querySelector('.ecard-display-text');
  var eOutput = document.querySelector('.ecard-output');
  var eEdit = document.querySelector('#ecard-edit');
  var eClose = document.querySelector('.ecard-close');
  var eDownloadPopup = document.querySelector('#ecard-download-popup');
  var eUcapan = document.querySelector('#ucapan');

  if (!!e) {
    $('.ecard').cropit({
      imageState: {
        //src: 'http://lorempixel.com/500/400/',
      },
    });

    $('#select-image-btn').click(function () {
      $('.cropit-image-input').click();
    });

    $('.rotate-cw').click(function () {
      $('.ecard').cropit('rotateCW');
    });
    $('.rotate-ccw').click(function () {
      $('.ecard').cropit('rotateCCW');
    });

    $('.proses').click(function () {
      var imageData = $('.ecard').cropit('export');

      document.querySelector('#imagefoto').src = imageData;
      console.log(imageData);
      document.querySelector('.ecard-img').style.backgroundImage =
        "url('" + imageData + "')";
      document.querySelector('#btn_simpan').style.display = 'inline';

      html2canvas(document.querySelector('#ecard')).then((canvas) => {
        document.body.appendChild(canvas).setAttribute('id', 'imgcard');
      });

      setTimeout(function () {
        document.getElementById('btn_simpan').click();
      }, 1000);
    });

    //download file
    function downloadFile(link, canvasId, filename) {
      link.href = document.getElementById(canvasId).toDataURL();
      link.download = filename;
    }
    function reset() {
      location.reload(true);
    }

    function alert_ecard() {
      alert('Ecard belum di Save');
    }

    ePrev.addEventListener('click', function () {
      eBorderUcapan.style.opacity = 0;
      eDisplayUcapan.style.opacity = 1;

      setTimeout(function () {
        if (!!canvas) canvas.remove();
        else console.log('no');

        html2canvas(e, {
          logging: true,
          letterRendering: 1,
          useCORS: true,
        }).then(function (canvas) {
          eOutput.appendChild(canvas).setAttribute('id', 'canvas');
        });
      }, 1250);
    });

    function downloadImg() {
      var link = document.createElement('a');
      link.download = 'ecard-jernihberbagi.png';
      link.href = document.getElementById('canvas').toDataURL();
      link.click();
    }

    eDownloadPopup.addEventListener('click', downloadImg);

    function reload() {
      location.reload();
    }

    eEdit.addEventListener('click', reload);
    eClose.addEventListener('click', reload);

    eUcapan.onkeyup = function () {
      eDisplayUcapan.innerHTML = eUcapan.value;
      var text = this.value;
      var charlimit = 250;
      var lines = text.split('\n');

      for (var i = 0; i < lines.length; i++) {
        if (lines[i].length <= charlimit) continue;
        var j = 0;
        space = charlimit;
        while (j++ <= charlimit) {
          if (lines[i].charAt(j) === ' ') space = j;
        }
        lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || '');
        lines[i] = lines[i].substring(0, space);
      }
    };
  }
});

// tabbing
function openPage(pageName, el, color) {
  var i, tc, tl;
  tc = document.querySelectorAll('.tabcontent');
  for (i = 0; i < tc.length; i++) {
    tc[i].style.display = 'none';
  }
  tl = document.querySelectorAll('.tablink');
  for (i = 0; i < tl.length; i++) {
    tl[i].classList.remove('active');
  }
  document.getElementById(pageName).style.display = 'block';
  el.classList.add('active');
}

var defaultOpen = document.querySelector('#defaultOpen');
// Get the element with id="defaultOpen" and click on it
if (!!defaultOpen) {
  defaultOpen.click();
}

var modalVS = document.querySelector('#modal-verif-success');
var modalVF = document.querySelector('#modal-verif-failed');
if (!!modalVS) {
  MicroModal.show('modal-verif-success', {
    closeTrigger: 'data-micromodal-close',
  });
}

if (!!modalVF) {
  MicroModal.show('modal-verif-failed', {
    closeTrigger: 'data-micromodal-close',
  });
}

var modalVS = document.querySelector('#modal-verif-success');
var modalVF = document.querySelector('#modal-verif-failed');
if (!!modalVS) {
  MicroModal.show('modal-verif-success', {
    closeTrigger: 'data-micromodal-close',
  });
}

if (!!modalVF) {
  MicroModal.show('modal-verif-failed', {
    closeTrigger: 'data-micromodal-close',
  });
}

$(window)
  .scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.page-section').each(function (i) {
      if ($(this).position().top - 200 <= scrollDistance) {
        $('.menu-mobile a.active').removeClass('active');
        $('.menu-mobile a').eq(i).addClass('active');
      }
      if ($(this).position().top - 200 <= scrollDistance) {
        $('.menu-inner li a.active').removeClass('active');
        $('.menu-inner li a').eq(i).addClass('active');
        console.log($('.menu-inner li a').eq(i));
      }
    });
  })
  .scroll();
