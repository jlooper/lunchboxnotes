// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function() {

	$.randomImage = {
		defaults: {			
			path: '/assets/', //change this to the path of your images
			myImages: ['bgNotes1.png', 'bgNotes2.png','bgNotes3.png','bgNotes4.png','bgNotes5.png','bgNotes6.png','bgNotes7.png','bgNotes8.png','bgNotes9.png','bgNotes10.png' ] 
			
		}			
	}
	
	$.fn.extend({
			randomImage:function(config) {
				
				var config = $.extend({}, $.randomImage.defaults, config); 
				
				 return this.each(function() {
						
						var imageNames = config.myImages;
						
						var imageNamesSize = imageNames.length;

						var lotteryNumber = Math.floor(Math.random()*imageNamesSize);

						var winnerImage = imageNames[lotteryNumber];

						var fullPath = config.path + winnerImage;
						
						$(this).attr('style', 'background-image:url('+fullPath+');');
				
						
				});	
			}
			
	});

	$('.note').randomImage();

});