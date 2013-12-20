//Content Header Unit v 0.2.1

//v 0.2.1 -- fixed single image display issue

//v 0.2 -- implement new cycle class and footer functionality

//v 0.1 -- original version 

//Free To Use and Distribute



(function( $ ) {

  $.fn.contentHeaderUnit = function(options) {



   //plug-in-dependant variables

   var mainHeaderImages = $("img[data-main]");

   var allHeaderImages = $(".headerImage");

   var numberMainImg = 0;

   var currentMainImg = 1;

   var previousTabImg;

   var numberTabImg = 0;

   var currentTabImg = 1;

   var previousMainImg;

   var readMoreButton = $(".headerContentShowHideBtn");

   var hiddenHeaderContent = $(".hiddenHeaderContent");

   var anyHeaderTab = $(".headerTabs > li");

   var firstHeaderTabClick = false;

   var header = $(".contentHeaderUnit header");

   var headerContent = $(".headerContent");

   var slideHeight = headerContent.height();

   var mainContentArea = $(".content");

   var currentTabId;

   var previousTabId;

   var existsHeaderImg = 0;

   var isSetTabInterval = false;

   var anyInnerTab = $(".innerNav > li");

   var innerTabId =1;

   var existsInnerHeaderImg = 0;

   var footerInitial = $("footer .initial");

   var footerInner = $("footer .inner");
   var html;
   
   html = $(".headerImageContainer").html();
  $(".imageHolder").html(html);

  html='';
    




   //user-defined variables

    var speedFadeMain = options.speedFadeMain;

    var speedIntervalMain = options.speedIntervalMain;

    var speedFadeTab = options.speedFadeTab;

    var speedIntervalTab = options.speedIntervalTab;

    var speedSlideInnerContent = options.speedSlideInnerContent;

    var innerContentHeaderHeight = options.innerContentHeaderHeight;


    function clearImg(){
      $(".headerImageContainer").html("");
    }

   

    function fadeMainImg(speedFadeMain)
    {
      clearImg();
      $(".imageHolder > .headerImage").each(function(){
        
       if($(this).attr('data-main')){html += $(this).prop('outerHTML');}
      });
      $(".headerImageContainer").html(html);
      html='';
      $(".headerImageContainer").cycle();
    }



    function fadeTabImg(currentTabId)
    {

      clearImg();

      $(".imageHolder > .headerImage").each(function(){

        if($(this).attr("data-tabid"+currentTabId+"")){html += $(this).prop('outerHTML');}   

      }); 
      $(".headerImageContainer").html(html);
      html='';
      $(".headerImageContainer").cycle();

    }



    function fadeInnerTabImg(currentTabId, innerTabId)

    {

      clearImg();

      $(".imageHolder > .headerImage").each(function(){

        if($(this).attr("data-tabid"+currentTabId+"-subid"+innerTabId+"")){html += $(this).prop('outerHTML');}   

      }); 
      $(".headerImageContainer").html(html);
      html='';
      $(".headerImageContainer").cycle();

    }



    function beginTabHeaderImages()

    {

      //look for new header images associated with the tab group

        $("img[data-tabid"+currentTabId+"]").each(function(){

          //console.log("count imgs");

          existsHeaderImg++;



        });



        if(existsHeaderImg!=0 && existsHeaderImg<2)

        {

            existsHeaderImg =0;
            clearImg();

            $(".imageHolder > .headerImage").each(function(){

            if($(this).attr("data-tabid"+currentTabId+"")){html += $(this).prop('outerHTML');}   
            }); 
            
            $(".headerImageContainer").html(html);
            html='';
            $(".headerImageContainer > img").fadeIn();
            $(".headerImageContainer").cycle('destroy');

        }else if(existsHeaderImg>1){

            numberTabImg = existsHeaderImg;

            allHeaderImages.hide();

            fadeTabImg(currentTabId);

        }

    }



    function beginInnerTabHeaderImages()

    {

      //look for new header images associated with the inner tab group



        $(".imageHolder > img[data-tabid"+currentTabId+"-subid"+innerTabId+"]").each(function(){

          //console.log("count inner imgs");

          existsInnerHeaderImg++;



        });



        if(existsInnerHeaderImg!=0 && existsInnerHeaderImg<2)

        {

            existsInnerHeaderImg=0;
            clearImg();

            $(".imageHolder > .headerImage").each(function(){

            if($(this).attr("data-tabid"+currentTabId+"-subid"+innerTabId+"")){html += $(this).prop('outerHTML');}   
            }); 
            
            $(".headerImageContainer").html(html);
            html='';
            $(".headerImageContainer > img").fadeIn();
            $(".headerImageContainer").cycle('destroy');



        }else if(existsInnerHeaderImg>1){

            numberTabImg = existsInnerHeaderImg;
 

            allHeaderImages.hide();

            fadeInnerTabImg(currentTabId, innerTabId);

            

        }





    }





    //itialize first main header image, then begin transitions

    fadeMainImg();

   



    //toggle the initial header content

    readMoreButton.click(function(){

      hiddenHeaderContent.slideToggle(); 

      if($(this).css('background-position-y')==='0px'){

        $(this).css('background-position-y', '-103%');

      }else{

        $(this).css('background-position-y', '0px');

      }

    });



    //behavior for any tab click

    anyHeaderTab.click(function(){



      innerTabId = 1;

      $("div[data-innerContentId]").css("display", "none");

      $(".innerContent div.defaultInnerContent").css("display", "block");



      currentTabId = $(this).attr("data-tabId");

      $("li[data-tabId='"+previousTabId+"']").removeClass("selectedTab");

      $(this).addClass("selectedTab");

    	

      //initial tab select behavior block detect, if not default tab group switch

      if(firstHeaderTabClick===false){

        

        firstHeaderTabClick=true;

        header.animate({height:(innerContentHeaderHeight)});

        $(".headerImageContainer").height(innerContentHeaderHeight);

        headerContent.slideToggle(function()

        {

          mainContentArea.show();

          $("div[data-tabId='"+currentTabId+"']").slideToggle();

        });



        footerInitial.hide();

        footerInner.slideToggle();

        //open new content areas normally

      }else{

          $("div[data-tabId='"+previousTabId+"']").hide();

          $("div[data-tabId='"+currentTabId+"']").slideToggle();

          previousTabImg = undefined;

      }



      currentTabImg=1;

      beginTabHeaderImages(); 



      previousTabId = currentTabId;

      existsHeaderImg = 0;

      existsInnerHeaderImg = 0;

    });



    anyInnerTab.click(function(){ 

      

      previousTabImg = undefined;

      //get rid of the old inner content

      $('div[data-innerContentId="'+innerTabId+'"]').hide();

      //set the new inner tab id

      innerTabId = $(this).attr('data-innerTabId');

      

      currentTabImg=1;

      if(innerTabId!=1){beginInnerTabHeaderImages();}else{beginTabHeaderImages();}

        //animate in the inner content

      $('div[data-innerContentId="'+innerTabId+'"]').css('left','-700px').css('position','relative').show(function(){$('div[data-innerContentId="'+innerTabId+'"]').animate({left:'0px'},speedSlideInnerContent);});



      existsHeaderImg = 0;

      existsInnerHeaderImg = 0;

                           

    });



  };

})( jQuery );