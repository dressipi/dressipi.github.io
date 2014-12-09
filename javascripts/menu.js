function toggleMenu() {
	$("body").toggleClass("move-left").toggleClass("locked");
	$("#menu").toggleClass("show");
}

function closeMenu() {
	$("body").removeClass("move-left").removeClass("locked");
	$("#menu").removeClass("show");
}

$("#menu-control").click( function() {
	toggleMenu();
});

$(".content").click( function() {
	closeMenu();
});

$(".logo").click( function() {
  window.location = "index.html";
});

function showCurrent(page) {
  body = $('body');
  link = $("#menu li[data-page='"+ page +"'] a");

  if (body.hasClass(page)) {
    link.addClass('current');
  } else { }
}

var pages = ["style-adviser", "outfits", "size-finder", "about", "jobs", "contact"];

$.each( pages, function(index, value) {
   showCurrent(value);
});
