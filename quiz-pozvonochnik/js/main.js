"use strict";

/* jQuery */
$(function () {
  // Mask form
  $('input[name="Lead[age]"]').mask('99');
  $('input[name="Lead[phone]"]').mask('8 (999) 999 - 99 - 99'); // Smooth scroll for anchor link

  $(".top__btn").on("click", function (event) {
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top + 120
    }, 1000);
  }); // Show form in instruction

  $('.radio-msngs').click(function () {
    $(this).closest('.instruction__msngs').addClass('hidden');
    $('.form__wrap').removeClass('hidden');
  }); // Radio hint

  $('.hint').click(function (evt) {
    evt.preventDefault();
    $(this).children('.hint__inner').toggleClass('hidden');
  }); // Selected checkbox

  $('.options_checkbox input:checkbox').click(function () {
    if ($(this).is(':checked')) {
      $(this).parent().addClass('checkbox_active');
      $('.options_checkbox input:checkbox').not(this).prop('checked', false);
      $('.options_checkbox input:checkbox').not(this).parent().removeClass('checkbox_active');
    }
  }); // Checkbox click

  $('.checkbox .checkbox__new').click(function (e) {
    var $input = $(this).siblings('input[type="checkbox"]');

    if (e.target !== $input[0]) {
      $input.click();
    }
  }); // Radio click

  $('.radio').click(function (e) {
    var $input = $(this).children('input[type="radio"]');

    if (e.target !== $input[0]) {
      $input.click();
    }
  }); // Form-quiz

  var steps = $(".quiz__form").children(".quiz__tab");
  var currentStep = 0;
  var slideCount = steps.length;
  $(".slide__summ").text(slideCount);

  for (var y = 0; y < steps.length; y++) {
    $(".quiz__steps").append('<span class="quiz__step"></span>');
  }

  var bullets = $(".quiz__steps").children(".quiz__step");
  $(bullets[0]).addClass("active");
  var stepsLeft = slideCount - 1;
  $(".info__number").text(stepsLeft);
  $(".nav__btn_prev").on("click", function (evt) {
    evt.preventDefault();
    stepsLeft++;
    currentStep--;
    changeStep(currentStep);
    $(".slide__current").text(currentStep + 1);

    if (currentStep === 0) {
      $(this).hide();
      $(".nav__prev").show();
    }

    $('.hint__inner').addClass('hidden');
  });
  $(".nav__btn_next").click(function () {
    if (steps[0]) {
      $(".nav__btn_prev").show();
      $(".nav__prev").hide();
    }

    if (currentStep == steps.length - 1) {
      $(this).closest(".quiz__nav").hide();
      $(".quiz__tab").hide();
      $(".quiz__steps").hide();
      $(".quiz__slide").hide();
      $(".quiz__steps_final").show();
      $(".quiz__final").show();
      $(".timer").removeClass("hidden");
      $(".quiz__form").addClass('final-mobile');
    }

    stepsLeft--;
    currentStep++;
    changeStep(currentStep);
    $(".slide__current").text(currentStep + 1);
    $(".discounts").addClass('discounts_big');
    setTimeout(function () {
      $(".discounts").removeClass('discounts_big');
    }, 1000);
    $('.hint__inner').addClass('hidden');
  });

  function changeStep(i) {
    $(steps).hide();
    $(steps[i]).show();
    $(bullets[i]).addClass('active');
    $(bullets[i]).next().removeClass('active');
    $(".info__number").text(stepsLeft);
  } // WOW


  var wow = new WOW({
    boxClass: 'wow',
    offset: 100,
    mobile: false
  });
  $('.top__title, .top__btn').addClass('animated bounce');
  $('.top__text').addClass('animated fadeInRight');
  $('.question__main').addClass('animated flash');
  $('.info__lst-item').addClass('animated fadeInRight');
});
new WOW().init();