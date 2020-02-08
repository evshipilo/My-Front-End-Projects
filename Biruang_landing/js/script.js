jQuery(document).ready(function($) {

			
			var slideCount = $('#slider ul li').length;
			var slideWidth = $('#slider ul li').width();
			var slideHeight = $('#slider ul li').height();
			var sliderUlWidth = slideCount * slideWidth;

			$('#slider').css({
				width: slideWidth,
				height: slideHeight
			});

			$('#slider ul').css({
				width: sliderUlWidth,
				marginLeft: -slideWidth
			});

			$('#slider ul li:last-child').prependTo('#slider ul');

			function moveLeft() {
				$('#slider ul').animate({
					left: +slideWidth
				}, 200, function() {
					$('#slider ul li:last-child').prependTo('#slider ul');
					$('#slider ul').css('left', '');
				});
			};

			function moveRight() {
				$('#slider ul').animate({
					left: -slideWidth
				}, 200, function() {
					$('#slider ul li:first-child').appendTo('#slider ul');
					$('#slider ul').css('left', '');
				});
			};

			$('a.control_prev').click(function() {
				moveLeft();
			});

			$('a.control_next').click(function() {
				moveRight();
			});

		});


$(".rows__row2-price a").mouseenter(function () {
                $(".rows__row2-price img").attr("src", "img/Call_out.png");
           
            });
$(".rows__row2-price a").mouseleave(function () {
                $(".rows__row2-price img").attr("src", "img/Plus.png");
           
            });

		
		$(function() {
    $("a").bind('click',function() {
        var _this = $(this);
        
        _this.toggleClass('selected', 5);
        _this.next().toggleClass('dropdown', 500);
        $("a").not(_this).each(function() {
            $(this).next().addClass('dropdown', 500);
            $(this).removeClass('selected', 5);
        });
        return false;
    });
});


