$(document).ready(function(){
	$('#getTheTest').click(function(){
		$('#calc_test').fadeIn();
	});

	$('.close_popup').click(function(){
		$('#calc_test').fadeOut(400);
	})

	$('.first_form-button .nextForm').click(function(){
		$(this).parent('.first_form-button').hide();
		$(this).parent('.first_form-button').siblings('.mid_form-button').fadeIn();
		$('form').find('.form.active').removeClass('active').next('.form').addClass('active');
		$('#discountValue').text('3');
		$('#readynessValue').text('20');
		$('.redyness_bar .scale').css('width', '20%');
	});
	$('.mid_form-button .nextForm').click(function(){
		$('form').find('.form.active').removeClass('active').next('.form').addClass('active');
		let currentForm = $('.form.active');
		if ($(currentForm).hasClass('form_3')) {
			$('#discountValue').text('6');
			$('#readynessValue').text('30');
			$('.redyness_bar .scale').css('width', '30%');
		}
		if ($(currentForm).hasClass('form_4')) {
			$('#discountValue').text('9');
			$('#readynessValue').text('40');
			$('.redyness_bar .scale').css('width', '40%');
		}
		if ($(currentForm).hasClass('form_5')) {
			$('#discountValue').text('12');
			$('#readynessValue').text('50');
			$('.redyness_bar .scale').css('width', '50%');
		}
		if ($(currentForm).hasClass('form_6')) {
			$('#discountValue').text('15');
			$('#readynessValue').text('60');
			$('.redyness_bar .scale').css('width', '60%');
		}
		if ($(currentForm).hasClass('form_7')) {
			$('#discountValue').text('18');
			$('#readynessValue').text('70');
			$('.redyness_bar .scale').css('width', '70%');
		}
		if ($(currentForm).hasClass('form_8')) {
			$('#discountValue').text('20');
			$('#readynessValue').text('80');
			$('.redyness_bar .scale').css('width', '80%');
			$(this).parent('.mid_form-button').hide();
			$(this).parent('.mid_form-button').siblings('.last_form-button').fadeIn();
		}
	});
	$('.mid_form-button .prevForm').click(function(){
		$('form').find('.form.active').removeClass('active').prev('.form').addClass('active');
		let currentForm = $('.form.active');
		if ($(currentForm).hasClass('form_3')) {
			$('#discountValue').text('6');
			$('#readynessValue').text('30');
			$('.redyness_bar .scale').css('width', '30%');
		}
		if ($(currentForm).hasClass('form_4')) {
			$('#discountValue').text('9');
			$('#readynessValue').text('40');
			$('.redyness_bar .scale').css('width', '40%');
		}
		if ($(currentForm).hasClass('form_5')) {
			$('#discountValue').text('12');
			$('#readynessValue').text('50');
			$('.redyness_bar .scale').css('width', '50%');
		}
		if ($(currentForm).hasClass('form_6')) {
			$('#discountValue').text('15');
			$('#readynessValue').text('60');
			$('.redyness_bar .scale').css('width', '60%');
		}
		if ($(currentForm).hasClass('form_2')) {
			$('#discountValue').text('3');
			$('#readynessValue').text('20');
			$('.redyness_bar .scale').css('width', '20%');
		}
		if ($(currentForm).hasClass('form_1')) {
			$('#discountValue').text('0');
			$('#readynessValue').text('0');
			$('.redyness_bar .scale').css('width', '0%');
			$(this).parent('.mid_form-button').hide();
			$(this).parent('.mid_form-button').siblings('.first_form-button').fadeIn();
		}
	});

	$('.form input[type="radio"]').click(function(){
		$('form').find('.form.active').delay(600).removeClass('active').next('.form').addClass('active');
		let currentForm = $('.form.active');
		if ($(currentForm).hasClass('form_2')) {
			$('#discountValue').text('3');
			$('#readynessValue').text('20');
			$('.redyness_bar .scale').css('width', '20%');
			$('.first_form-button').hide().siblings('.mid_form-button').fadeIn(400);
		}
		if ($(currentForm).hasClass('form_3')) {
			$('#discountValue').text('6');
			$('#readynessValue').text('30');
			$('.redyness_bar .scale').css('width', '30%');
		}
		if ($(currentForm).hasClass('form_4')) {
			$('#discountValue').text('9');
			$('#readynessValue').text('40');
			$('.redyness_bar .scale').css('width', '40%');
		}
		if ($(currentForm).hasClass('form_5')) {
			$('#discountValue').text('12');
			$('#readynessValue').text('50');
			$('.redyness_bar .scale').css('width', '50%');
		}
		if ($(currentForm).hasClass('form_6')) {
			$('#discountValue').text('15');
			$('#readynessValue').text('60');
			$('.redyness_bar .scale').css('width', '60%');
		}
		if ($(currentForm).hasClass('form_7')) {
			$('#discountValue').text('18');
			$('#readynessValue').text('70');
			$('.redyness_bar .scale').css('width', '70%');
		}
		if ($(currentForm).hasClass('form_8')) {
			$('#discountValue').text('20');
			$('#readynessValue').text('80');
			$('.redyness_bar .scale').css('width', '80%');
			$('.mid_form-button').hide().siblings('.last_form-button').fadeIn();
		}
	});

	$('#submitFormCalc').click(function(){
		$('#discountValue').text('20');
		$('#readynessValue').text('100');
		$('.redyness_bar .scale').css('width', '100%');
		$('#calcTestForm').submit();
		setTimeout(function(){
			$('#calc_test').fadeOut(600);
		},400);
	});
	
});