let burger = $(".burger");
let navigation = $(".header__nav");
let screenContent = $(".first-screen__content");
let body = $("body");

burger.on('click', function() {
  burger.toggleClass('burger__active')
  screenContent.toggleClass('zIndex-0')
  navigation.toggleClass('header__nav-active')
  body.toggleClass('overflowHidden')
});

