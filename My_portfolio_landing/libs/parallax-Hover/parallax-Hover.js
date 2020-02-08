/*
**
** A pen by Alex Buffet
** https://alexandrebuffet.fr
**
** Inspired by 
**
**
*/

;(function ( $ ) {
  //Make your content a heroe
  $.fn.transformHeroes = function() {
      
	  //Variables
      var perspective = '500px',
      delta = 50,
      width ,
	  height = this.height(),
      midWidth ,
      midHeight ;
      //Events
		
	  //вычисление ширины  на лету//
	function widthDetect() {
		width = $('.card1').width();
		midWidth = width / 2;
      	midHeight = height / 2;
		if (width > 1500) {perspective = '1500px'; delta = 70;}
	  	if (width > 2500) {perspective = '5000px'; delta = 100;}
	};
	  
	widthDetect();
	  
	$(window).resize(function() {
		widthDetect();
	});
	//-------------------//
	  
      
	  
	  this.on({
      	mousemove: function(e) {
      		var pos = $(this).offset(),
      		cursPosX = e.pageX - pos.left,
      		cursPosY = e.pageY - pos.top,
      		cursCenterX = midWidth - cursPosX,
      		cursCenterY = midHeight - cursPosY;

      		$(this).css('transform','perspective(' + perspective + ') rotateX('+ (cursCenterY / delta) +'deg) rotateY('+ -(cursCenterX / delta) +'deg)');
      		$(this).removeClass('is-out');
      	},
      	mouseleave: function() {
      		$(this).addClass('is-out');
      	}
      });
      //Return
      return this;
  };
}( jQuery ));


//Set plugin on cards
$('.card1').transformHeroes();