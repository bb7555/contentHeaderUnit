require(["jquery", "jquery.alpha", "jquery.beta", "/contentHeaderUnit-v-0-2/js/jquery.content.header.unit.js", "/contentHeaderUnit-v-0-2/js/vendor/jquery.cycle.js", "http://www.baysidehoteloakland.com/bayside/contentHeaderUnit-v-0-2/scripts/jquery.ui.v.1.10.3.js"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded. 
    $(function() {

     

$(".date-picker").each(function() {
				$(this).datepicker({ 
					
					 buttonImage: "http://www.baysidehoteloakland.com/images/calendar-31x30.gif",
					buttonImageOnly: true ,
					
					duration: "fast",
					gotoCurrent: true,
					hideIfNoPrevNext: true,
					numberOfMonths: 2,
					showAnim: "blind",
					showOn: "both"
				});});
        

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
