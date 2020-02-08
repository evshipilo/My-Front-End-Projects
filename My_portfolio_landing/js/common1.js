$(document).ready(function(){
    
		
	//вычисление высоты экрана на лету//
	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function() {
		heightDetect();
	});
	//-------------------//
	
	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".card1").css("opacity", "1");
		$("#nav-icon4").toggleClass('open');
	});

	$(".hamburger").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".card1").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").removeClass("fadeInUp animated");
		} else {
			$(".card1").css("opacity", ".3");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("fadeInUp animated");
		};
	});
	
	$(".top_mnu ul a").mPageScroll2id();
	
	$(".section_header").animated("fadeInUp", "fadeOutDown");

	$(".animation_1").animated("zoomIn", "fadeOut");
	$(".animation_2").animated("fadeInLeft", "fadeOut");
	$(".animation_3").animated("fadeInRight", "fadeOut");

	
	//$("#portfolio_grid img").animated("zoomIn", "fadeOut");
	$(".filter_div").animated("zoomIn", "fadeOut");
	
	$('.popupAvatar').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});
	$('.popup_content').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	
	$("#portfolio_grid").mixItUp();
	

	$(".filter_div li").click(function() {
		$(".filter_div li").removeClass("active");
		$(this).addClass("active");
	});
	
	 $(function () { $("input,select,textarea").not("[type=submit]").jqBootstrapValidation(); } );
	
	$(".submitBtn").click(function() {
		$('.submitBtn').addClass('animated tada');
		$('.submitBtn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $('.submitBtn').removeClass('animated tada');
		});
	});


});


$(window).load(function() {

	$(".loaderImg").fadeOut();
	$(".loader").delay(500).fadeOut("slow");

	$(".hamburger").delay(1000).fadeIn("1000").addClass("animated rotateIn");
//	$("").animated("fadeInUp", "fadeOutDown");

});