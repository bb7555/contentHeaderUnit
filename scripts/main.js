require(["jquery", "jquery.alpha", "jquery.beta", "/contentHeaderUnit/js/jquery.content.header.unit.js", "/contentHeaderUnit/js/vendor/jquery.cycle.js"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded. 
    $(function() {

var baseURL = 'http://thewebmavens.com/contentHeaderUnit/API/index.php?r=locationMappings/view&id='
, callList = ['1', '2', '3']
, selectorList = ['.headerContent','[data-tabid="1"] div[data-innerContentId="1"]', '.hiddenHeaderContent']
content = [];       

function getData(urls, selectors, content)
{
var counter = 1;

var loadCHUy = function(){
	counter+=1;
        	
    if(counter === urls.length){CHUy();}

}
	$.each(urls, function( index, value ) {
	  
	  $.ajax({
	 	url: baseURL+urls[index],
        dataType: "jsonp",
        jsonpCallback: 'dyno'+urls[index],
        success: function(data, textStatus, jqXHR) {
                             content.push(data.content);
                             //console.log('jsonp success');
                             $(selectors[index]).prepend(content[index]);
                             }
        }).done(loadCHUy()); 
	});
	
}

function CHUy(){
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
}

getData(callList, selectorList, content); 


    });
});

