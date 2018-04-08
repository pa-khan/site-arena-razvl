$(document).ready(function($) {

	$('.text_phone').mask('+7 (999) 999-99-99');
	

	$('.pers__list').slick({
		slidesToShow: 5,
		responsive: [{
			breakpoint: 1860,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 970,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.photos__list').slick({
		slidesToShow: 7,
		responsive: [{
			breakpoint: 1860,
			settings: {
				slidesToShow: 5
			}}, {
			breakpoint: 1380,
			settings: {
				slidesToShow: 4
			}}, {
			breakpoint: 1280,
			settings: {
				slidesToShow: 3
			}}, {
			breakpoint: 970,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1
			}
		}]
	})

	$('.videos__list').slick({
		slidesToShow: 3,
		responsive: [{
			breakpoint: 1860,
			settings: {
				slidesToShow: 2
			}}, {
			breakpoint: 1280,
			settings: {
				slidesToShow: 1
			}
		}]
	})


	$('.reviews__btn').click(function(event) {
		$(this).hide();
		$('.reviews__item').slideDown(0);
	});

	$('.pers__btn').click(function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$.fancybox.close();
		$.fancybox.open({src  : '#popup-order',type : 'inline'});
	});



	$('.pers__block a').click(function(event) {
		var id = $(this).attr('data-src');
		$(id + ' .pers__slider').slick();
	});



});

