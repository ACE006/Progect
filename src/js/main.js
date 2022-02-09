let burger = $('.burger');
let list = $('.header__list');
let icon = $('.header__list-item');
burger.on('click', function (e) {
    burger.toggleClass('active');
    list.toggleClass('active');
    icon.toggleClass('active');
});