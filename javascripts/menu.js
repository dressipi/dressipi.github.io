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
