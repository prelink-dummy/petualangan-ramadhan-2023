$(document).ready(function () {
	var e = "<a href='#' class='icon-photo-slider icon-photo-left'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>",
		t = "<a href='#' class='icon-photo-slider icon-photo-right'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>";
	if (
		($(".js-hl-big").slick({
			autoplay: !0,
			slidesToShow: 1,
			autoplaySpeed: 1e4,
			pauseOnFocus: !0,
			fade: !0,
			arrows: !1,
			cssEase: "ease",
			asNavFor: ".js-hl-thumb",
		}),
		$(".js-hl-thumb").slick({
			asNavFor: ".js-hl-big",
			slidesToShow: 4,
			focusOnSelect: !0,
		}),
		$(".js-photo-wp").slick({
			autoplay: !0,
			autoplaySpeed: 9e3,
			slidesToShow: 1,
			dots: !0,
			pauseOnFocus: !0,
			prevArrow: e,
			nextArrow: t,
		}),
		$(".js-gramedia").slick({
			autoplay: !0,
			slidesToShow: 1,
			autoplaySpeed: 1e4,
			pauseOnFocus: !0,
			fade: !0,
			dots: !0,
			arrows: !1,
			cssEase: "ease",
		}),
		$(".videoKG-item").length > 4 &&
			$(".js-videoKGSlider").slick({
				autoplay: !1,
				infinite: !1,
				slidesToShow: 4,
				slidesToScroll: 1,
				autoplaySpeed: 7e3,
				pauseOnFocus: !0,
				dots: !1,
				fade: !1,
				arrows: !0,
				cssEase: "ease",
				prevArrow: e,
				nextArrow: t,
			}),
		$(".reelsCardHL-slider .reelsItem").length > 3)
	) {
		var s = {
			autoplay: !1,
			infinite: !1,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplaySpeed: 7e3,
			pauseOnFocus: !0,
			dots: !1,
			fade: !1,
			arrows: !0,
			cssEase: "ease",
			prevArrow: "<a href='#' class='icon-photo-slider icon-photo-left slick-arrow'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>",
			nextArrow: "<a href='#' class='icon-photo-slider icon-photo-right slick-arrow'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>",
		};
		$(".slider-sl .reelsCardHL-slider").slick(s);
	}
	if ($(".reelsCardHL-slider .reelsItem").length > 4) {
		s = {
			autoplay: !1,
			infinite: !1,
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplaySpeed: 7e3,
			pauseOnFocus: !0,
			dots: !1,
			fade: !1,
			arrows: !0,
			cssEase: "ease",
			prevArrow: "<a href='#' class='icon-photo-slider icon-photo-left slick-arrow'><svg class='icon icon-angle-left'><use xlink:href='#icon-angle-left'/></svg></a>",
			nextArrow: "<a href='#' class='icon-photo-slider icon-photo-right slick-arrow'><svg class='icon icon-angle-right'><use xlink:href='#icon-angle-right'/></svg></a>",
		};
		$(".slider-kanal .reelsCardHL-slider").slick(s);
	}
	$(window).scroll(function () {
		var e = $(window).scrollTop(),
			t = $(".header").outerHeight();
		$(".nav").outerHeight();
		(e > t + 20
			? ($(".js-nav-offset").css({
					"padding-top": 46,
			  }),
			  $(".header").addClass("header--sticky"),
			  $(".nav").addClass("nav--sticky"),
			  $(".js-kcm-stick").addClass("kcm__stick--sticky"))
			: ($(".header").removeClass("header--sticky"), $(".nav").removeClass("nav--sticky"), $(".js-nav-offset").removeAttr("style"), $(".js-kcm-stick").removeClass("kcm__stick--sticky")),
		$("#js-banner-sticky").length > 0) && (e > $("#js-banner-sticky").offset().top - 143 ? $("#js-banner-sticky").addClass("banner--sticky") : $("#js-banner-sticky").removeClass("banner--sticky"));
	}),
		$(".js-giant-wp-sticky")
			.stick_in_parent({
				parent: ".js-giant-wp-sticky-parent",
				inner_scrolling: !1,
				spacer: !1,
				offset_top: 60,
			})
			.on("sticky_kit:bottom", function (e) {
				$(this).parent().parent().css("position", "static");
			})
			.on("sticky_kit:unbottom", function (e) {
				$(this).parent().parent().removeAttr("style");
			}),
		$(".js-kcm-horizontal").click(function (e) {
			e.preventDefault(), $(".kcm__horizontal").hide();
		}),
		$(".video__playlist__link").click(function () {
			$(".video__playlist__link").removeClass("video__playlist__link--active"), $(this).addClass("video__playlist__link--active"), $("#video-play").attr("src", $(this).attr("data-video"));
		}),
		$('[data-type="tooltips"]').each(function () {
			var e = $(this).data("text"),
				t = $(this).data("placement");
			$(this).append('<div class="tooltips tooltips--' + t + '"><span>' + e + "</span></div>"),
				$(this).on("mouseover", function (e) {
					e.preventDefault(), $(this).find(".tooltips").toggleClass("tooltips--show");
				}),
				$(this).on("mouseout", function (e) {
					e.preventDefault(), $(this).find(".tooltips").toggleClass("tooltips--show");
				});
		}),
		$(".logo__awards").length > 0 &&
			$(".logo__awards").slick({
				autoplay: !0,
				slidesToShow: 1,
				autoplaySpeed: 5e3,
				pauseOnFocus: !0,
				fade: !0,
				arrows: !1,
				cssEase: "ease",
			}),
		$(".logo__ultah").length > 0 &&
			$(".logo__ultah").slick({
				autoplay: !0,
				slidesToShow: 1,
				autoplaySpeed: 2e3,
				pauseOnFocus: !0,
				fade: !0,
				arrows: !1,
				cssEase: "ease",
			}),
		$("#btn-load-more").click(function () {
			var e = this;
			$(this).hide(),
				$(this).parent().append('<div id="load-more-loading" style="text-align:center;"><img src="https://asset.kompas.com/data/2017/wp/images/loading.gif"></div>'),
				$.ajax({
					url: $(this).attr("data-url") + "/" + $(this).attr("data-page"),
					type: "post",
					dataType: "json",
					success: function (t) {
						$($(e).attr("data-append")).append(t.result), t.status && ($(e).attr("data-page", t.page), $(e).show()), $("#load-more-loading").remove();
					},
				});
		}),
		$(".js-sso-user").click(function (e) {
			e.preventDefault(), $(this).toggleClass("-active"), $(".js-sso-user-board").toggleClass("-hide");
		});
	var o = document.querySelector(".sso__wrap");
	o &&
		$("body").click(function (e) {
			o.contains(e.target) || ($(".js-sso-user").removeClass("-active"), $(".js-sso-user-board").addClass("-hide"));
		}),
		$(window).scroll(function () {
			$(window).scrollTop() > 20 && ($(".js-sso-user").removeClass("-active"), $(".js-sso-user-board").addClass("-hide"));
		});
	let i = document.getElementsByClassName("form__input__header")[0],
		a = document.getElementsByClassName("form__button__clear")[0],
		l = document.querySelector(".search--header .search--icon");
	i &&
		a &&
		("" != i.value && ((a.style.visibility = "visible"), (l.style.visibility = "hidden"), i.focus()),
		i.addEventListener("input", function (e) {
			i.value.length > 0 ? ((a.style.visibility = "visible"), (l.style.visibility = "hidden")) : ((l.style.visibility = "visible"), (a.style.visibility = "hidden"));
		}),
		a.addEventListener("click", function (e) {
			(i.value = ""), i.focus(), (l.style.visibility = "visible"), (this.style.visibility = "hidden");
		}));
});
var aitb = document.querySelectorAll('[data-aiml="tabmenu"]'),
	aitc = document.querySelectorAll('[data-aiml="tabcontent"]');
function reactionShare(e) {
	openModal(e);
}
function closeModal() {
	let e = document.getElementById("kcm-modals");
	if (e) {
		document.body.classList.remove("modals");
		let t = e.firstElementChild;
		for (; t.firstChild; ) t.removeChild(t.firstChild);
	}
}
function clearModalsContent(e) {
	for (; e.firstChild; ) e.removeChild(e.firstChild);
}
function openModal(e) {
	let t = document.querySelector("[data-modal-target=" + e + "]"),
		s = document.getElementById("kcm-modals");
	if (s)
		if (t) {
			{
				let e = s.firstElementChild;
				clearModalsContent(e), document.body.classList.add("modals");
				let o = t.cloneNode(!0);
				e.appendChild(o);
			}
			s.addEventListener("click", function (e) {
				e.target.matches("[data-modal-button=dismiss]") && closeModal(), e.target.matches("[data-form=copyLinkUrl]") && (e.preventDefault(), copyLink("copyLinkUrl", e));
			});
		} else console.log("unknown modal target");
	else console.log("template modals not found");
}
aitb &&
	aitc &&
	aitb.forEach(function (e) {
		e.addEventListener("click", function (t) {
			t.preventDefault();
			for (var s = 0; s < aitb.length; s++) aitb[s].classList.remove("-active");
			e.classList.add("-active"),
				aitc.forEach(function (t) {
					t.classList.add("aiml-hide");
					let s = e.getAttribute("data-href");
					console.log(s), t.classList.contains(s) && t.classList.remove("aiml-hide");
				});
		});
	});
let tdd = document.querySelectorAll("[data-dropdown]");
function toggleOthers(e) {
	var t = e.nextElementSibling;
	document.querySelectorAll(".cReport__other").forEach(function (e) {
		e.classList.remove("show");
	}),
		t && (t.classList.add("show"), t.children[0].focus());
}
function copyLink(e, t) {
	let s = document.getElementById(e);
	s.select(),
		s.setSelectionRange(0, 99999),
		navigator.clipboard.writeText(s.value),
		t.target.classList.add("-tooltip"),
		setTimeout(function () {
			t.target.classList.remove("-tooltip");
		}, 1500);
}
function reactionToast(e, t) {
	let s = document.querySelector("[data-toast]");
	if (s) {
		(s.firstElementChild.innerHTML = e), s.classList.remove("-hide"), s.classList.add("-show");
		let o,
			i = s.getElementsByTagName("a")[0];
		i &&
			(t ? ((o = 25), (i.innerHTML = "Lihat"), (i.href = t)) : ((o = 15), (i.innerHTML = "Oke"), (i.href = "#")),
			i.addEventListener("click", function (e) {
				e.preventDefault(), t ? (window.location.href = t) : s.classList.add("-hide");
			})),
			reactionAutoDismiss(s, o);
	}
}
function reactionLike(e, t, s) {
	const o = document.querySelectorAll(".buttonLike");
	for (const i of o)
		if (i.classList.contains("-active")) i.classList.remove("-active"), reactionToast(t);
		else {
			i.classList.add("-active");
			const t = document.querySelectorAll(".icoLike");
			for (const e of t) e.classList.add("animate", "animateheadshake");
			reactionToast(e, s);
		}
	const i = document.querySelectorAll(".buttonDislike");
	for (const e of i) e.classList.remove("-active");
}
function reactionDislike(e, t) {
	const s = document.querySelectorAll(".buttonDislike");
	for (const e of s) e.classList.contains("-active") ? e.classList.remove("-active") : e.classList.add("-active");
	const o = document.querySelectorAll(".buttonLike");
	for (const s of o) s.classList.contains("-active") && reactionToast(e, t), s.classList.remove("-active");
	const i = document.querySelectorAll(".icoLike");
	for (const e of i) e.classList.remove("animate", "animateheadshake");
}
function reactionBookmark(e, t, s, o) {
	o.classList.contains("-active") ? reactionToast(t) : reactionToast(e, s);
	let i,
		a = "reactionList",
		l = o.parentElement;
	(" " + l.className + " ").replace(/[\n\t]/g, " ").indexOf(a) > -1 ? (console.log(l), (i = document.querySelectorAll("." + a + " .buttonBookmark"))) : (i = l.querySelectorAll(".buttonBookmark"));
	for (let e of i) e.classList.toggle("-active");
}
function reactionAutoDismiss(e, t) {
	let s = 1,
		o = setInterval(() => {
			s++, s == t && (e.classList.remove("-show"), e.classList.add("-hide")), s == t + 1 && (e.classList.remove("-hide"), clearInterval(o));
		}, 200);
}
function reactionMeatball(e) {
	(elem = e.nextElementSibling), (elemActive = elem.classList.contains("-active")), hideMeatball(), 0 == elemActive && elem.classList.toggle("-active");
}
function hideMeatball() {
	document.querySelectorAll(".listPop").forEach((e) => {
		e.classList.remove("-active");
	});
}
function hideThisArt(e) {
	(elem = e.parentElement.parentElement.parentElement.querySelector(".wSpec-stop")), elem.classList.add("-active");
}
function showThisArt(e) {
	(elem = e.parentElement), elem.classList.remove("-active");
}
function openTab(e, t) {
	var s, o, i;
	for (o = document.getElementsByClassName("listCol"), s = 0; s < o.length; s++) o[s].style.display = "none";
	for (i = document.getElementsByClassName("listTab__menu"), s = 0; s < i.length; s++) i[s].className = i[s].className.replace(" -active", "");
	(document.getElementById(t).style.display = "block"), (e.currentTarget.className += " -active");
}
function showPopup() {
	(document.querySelector(".popup-kgplus").style.visibility = "visible"), (document.querySelector(".popup-kgplus").style.opacity = "1"), (document.querySelector(".popup-kgplus-bg").style.visibility = "visible"), (document.querySelector(".popup-kgplus-bg").style.opacity = "1");
}
function closePopup() {
	(document.querySelector(".popup-kgplus").style.visibility = "hidden"), (document.querySelector(".popup-kgplus").style.opacity = "0"), (document.querySelector(".popup-kgplus-bg").style.visibility = "hidden"), (document.querySelector(".popup-kgplus-bg").style.opacity = "0");
}
tdd &&
	tdd.forEach((e) => {
		e.addEventListener("click", function () {
			e.parentElement.classList.toggle("-active");
		}),
			document.addEventListener("click", function (t) {
				e.contains(t.target) || e.parentElement.classList.remove("-active");
			});
	});
let popupOfferingButtons = document.querySelectorAll(".btnPopupOffering");
function checkValClickedAds() {
	if (getValClickedAds("_popupkgplus_tes_desktop_2")) {
		let e = document.cookie
				.split(";")
				.find((e) => e.startsWith("_popupkgplus_tes_desktop_2="))
				?.split("=")[1],
			t = parseInt(e) + 1;
		2 == t && (showPopup(), setValClickedAds("_popupkgplus_tes_desktop_2", t, 7));
	} else setValClickedAds("_popupkgplus_tes_desktop_2", 1, 7);
}
function setValClickedAds(e, t, s) {
	var o = new Date();
	o.setTime(o.getTime() + 24 * s * 60 * 60 * 1e3);
	var i = "expires=" + o.toGMTString();
	document.cookie = e + "=" + t + ";" + i + ";path=/;domain=kompas.com;SameSite=None;Secure";
}
function getValClickedAds(e) {
	for (var t = e + "=", s = decodeURIComponent(document.cookie).split(";"), o = 0; o < s.length; o++) {
		for (var i = s[o]; " " == i.charAt(0); ) i = i.substring(1);
		if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
	}
	return "";
}
popupOfferingButtons &&
	popupOfferingButtons.forEach(function (e) {
		e.addEventListener("click", function () {
			console.log("klik"), checkValClickedAds();
		});
	});
