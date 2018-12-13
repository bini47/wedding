$(document).ready(function() {
  $("#news-slider5").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [1000, 3],
    itemsMobile: [650, 2],
    pagination: true,
    navigationText: true,
    autoPlay: false,
    mergeFit: false,
    margin: 0,
    dotsEach: true,
    slideBy: 1
  });
});
