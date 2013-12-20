require(["jquery", "jquery.alpha", "jquery.beta", "/contentHeaderUnit/js/jquery.content.header.unit.js", "/contentHeaderUnit/js/vendor/jquery.cycle.js"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded. 
    $(function() {

        

$(".contentHeaderUnit").contentHeaderUnit(

	

		{

			speedFadeMain:1500, 

			speedIntervalMain:5000,

			speedFadeTab:2000, 

			speedIntervalTab:8000,

			speedSlideInnerContent:800,

			innerContentHeaderHeight:400

		}



	);


    });
});
