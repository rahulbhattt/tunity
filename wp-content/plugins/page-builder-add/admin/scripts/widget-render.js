function sendGlobalRowDataToDb(globalRowAttrToSet,askGlobalRowName){

  globalRowAttrToSet['globalRowTitle'] = askGlobalRowName;
  
  var encodedglobalRowAttrToSet = JSON.stringify(globalRowAttrToSet);

  jQuery.ajax({
      url: admURL+'/admin-ajax.php?action=ulpb_insert_global_row_content&POPB_GRI_Nonce='+shortCodeRenderWidgetNO,
      method: 'post',
      data:  encodedglobalRowAttrToSet,
      contentType: "application/json",
      success: function(result){
        jQuery('.globalRowRetrievedPostID').val(result);
      },
      async:false
  });


}

function getGlobalRowDataFromDb(globalRowID){
  jQuery.ajax({
      url: admURL+'/admin-ajax.php?action=smfb_get_global_row_content&POPB_GRG_Nonce='+shortCodeRenderWidgetNO,
      method: 'post',
      data:{  globalRowID:globalRowID },
      success: function(result){
        jQuery('.globalRowRetrievedAttributes').val(result);
      },
      async:false
  });

}

function subscribeFormWidgetRender(this_widget){
            var formLayout = this_widget['formLayout'];
            var showNameField = this_widget['showNameField'];
            var successAction = this_widget['successAction'];
            var successURL = this_widget['successURL'];
            var successMessage = this_widget['successMessage'];
            var formBtnText = this_widget['formBtnText'];
            var formBtnHeight = this_widget['formBtnHeight'];
            var formBtnWidth = this_widget['formBtnWidth'];
            var formBtnBgColor = this_widget['formBtnBgColor'];
            var formBtnColor = this_widget['formBtnColor'];
            var formBtnHoverBgColor = this_widget['formBtnHoverBgColor'];
            var formBtnFontSize = this_widget['formBtnFontSize'];
            var formBtnBorderWidth = this_widget['formBtnBorderWidth'];
            var formBtnBorderColor = this_widget['formBtnBorderColor'];
            var formBtnBorderRadius = this_widget['formBtnBorderRadius'];

            formBtnFontFamily = ' ';
            if (typeof(this_widget['formBtnFontFamily']) != 'undefined') {
              var formBtnFontFamily = this_widget['formBtnFontFamily'];
            }
            formSuccessMessageColor = '#333';
            if (typeof(this_widget['formSuccessMessageColor']) != 'undefined') {
              var formSuccessMessageColor = this_widget['formSuccessMessageColor'];
            }

            formBtnHeightTablet = ' '; formBtnHeightMobile = ' '; formBtnFontSizeTablet = ' '; formBtnFontSizeMobile = ' ';
            if (typeof(this_widget['formBtnHeightTablet']) != 'undefined') {
              var formBtnHeightTablet = this_widget['formBtnHeightTablet'];
              var formBtnHeightMobile = this_widget['formBtnHeightMobile'];

              var formBtnFontSizeTablet = this_widget['formBtnFontSizeTablet'];
              var formBtnFontSizeMobile = this_widget['formBtnFontSizeMobile'];
            }

            var formLayoutAction = " ";
            var formFieldWidth = '60%';
            var formButtonWidth = '30%';
            if (showNameField  == 'block'){ formFieldWidth = '35%' }
            if (showNameField  == 'block' && formLayout  == 'inline' ){ showNameField = 'inline-block'; formButtonWidth = '25%'}
            if (formLayout  == 'stacked') { formLayoutAction = "<br>"; formFieldWidth = '99.9%';formButtonWidth = '99.9%'; }

            var inputNameStyles = "display:"+showNameField+"; width:"+formFieldWidth+"; padding: "+formBtnHeight+"px 5px; font-size:"+formBtnFontSize+"px;";
            var inputEmailStyles = "width:"+formFieldWidth+"; padding: "+formBtnHeight+"px 5px; font-size:"+formBtnFontSize+"px;";
            var inputButtonStyles = "width:"+formButtonWidth+"; padding: "+formBtnHeight+"px "+'5px'+"px; font-size:"+formBtnFontSize+"px; background:"+formBtnBgColor+"; color:"+formBtnColor+"; border: "+formBtnBorderWidth+"px solid "+formBtnBorderColor+" !important; border-radius: "+formBtnBorderRadius+"px !important;  font-family:"+formBtnFontFamily.replace(/\+/g, ' ')+";   ";

            var this_widget_form_inputName = "<input type='text'  placeholder='Your name' style='"+inputNameStyles+"' >"+formLayoutAction;
            var this_widget_form_inputEmail = "<input type='text' placeholder='Your e-mail' style='"+inputEmailStyles+"' >"+formLayoutAction;
            var this_widget_form_inputSubmit = "<input type='submit' value='"+formBtnText+"'  style='"+inputButtonStyles+"' class='btnField' disabled>";

            var uniqueFormId = 'pbSubscribe'+Math.floor((Math.random() * 2000) + 100);
            var this_widget_form = "<form id='"+uniqueFormId+"'> "+this_widget_form_inputName+" "+this_widget_form_inputEmail+" "+this_widget_form_inputSubmit+" </form>";

            var currWidgetDefaultResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-l') ) { "+

              "  jQuery('#"+uniqueFormId+" input').animate({'font-size':'"+formBtnFontSize+"px',  'padding-top':'"+formBtnHeight+"px', 'padding-bottom':'"+formBtnHeight+"px',  }); "+
              

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-l' ) { "+

              "  jQuery('#"+uniqueFormId+" input').animate({'font-size':'"+formBtnFontSize+"px',  'padding-top':'"+formBtnHeight+"px', 'padding-bottom':'"+formBtnHeight+"px',  }); "+
              
              "}"+
              " "+
              '</script> ';

            var currWidgetTabletResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-m') ) { "+

              "  jQuery('#"+uniqueFormId+" input').animate({'font-size':'"+formBtnFontSizeTablet+"px',  'padding-top':'"+formBtnHeightTablet+"px', 'padding-bottom':'"+formBtnHeightTablet+"px',  }); "+
              

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-m' ) { "+

              "  jQuery('#"+uniqueFormId+" input').animate({'font-size':'"+formBtnFontSizeTablet+"px',  'padding-top':'"+formBtnHeightTablet+"px', 'padding-bottom':'"+formBtnHeightTablet+"px',  }); "+
              
              "}"+
              " "+
              '</script> ';

            var currWidgetMobileResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-s') ) { "+

              "  jQuery('#"+uniqueFormId+" input').animate({'font-size':'"+formBtnFontSizeMobile+"px',  'padding-top':'"+formBtnHeightMobile+"px', 'padding-bottom':'"+formBtnHeightMobile+"px',  }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-s' ) { "+

              "  jQuery('#"+uniqueFormId+" input').animate({'font-size':'"+formBtnFontSizeMobile+"px',  'padding-top':'"+formBtnHeightMobile+"px', 'padding-bottom':'"+formBtnHeightMobile+"px',  }); "+
              
              "}"+
              " "+
              '</script> ';

            return this_widget_form + currWidgetDefaultResponsive + currWidgetTabletResponsive + currWidgetMobileResponsive;
}
function postsSliderWidgetRender(this_widget_postsSlider){

  var psAutoplay = this_widget_postsSlider['psAutoplay'];
  var psSlideDelay = this_widget_postsSlider['psSlideDelay'];
  var psSlideLoop = this_widget_postsSlider['psSlideLoop'];
  var psSlideTransition = this_widget_postsSlider['psSlideTransition'];
  var psPostsNumber = this_widget_postsSlider['psPostsNumber'];
  var psDots = this_widget_postsSlider['psDots'];
  var psArrows = this_widget_postsSlider['psArrows'];
  var psFtrImage = this_widget_postsSlider['psFtrImage'];
  var psFtrImageSize = this_widget_postsSlider['psFtrImageSize'];
  var psExcerpt = this_widget_postsSlider['psExcerpt'];
  var psReadMore = this_widget_postsSlider['psReadMore'];
  var psMoreLinkText = this_widget_postsSlider['psMoreLinkText'];
  var psHeadingSize = this_widget_postsSlider['psHeadingSize'];
  var psTextAlignment = this_widget_postsSlider['psTextAlignment'];
  var psBgColor = this_widget_postsSlider['psBgColor'];
  var psTxtColor = this_widget_postsSlider['psTxtColor'];
  var psHeadingTxtColor = this_widget_postsSlider['psHeadingTxtColor'];
  var psPostType = this_widget_postsSlider['psPostType'];
  var psPostsOrderBy = this_widget_postsSlider['psPostsOrderBy'];
  var psPostsOrder = this_widget_postsSlider['psPostsOrder'];
  var psPostsFilterBy = this_widget_postsSlider['psPostsFilterBy'];
  var psFilterValue = this_widget_postsSlider['psFilterValue'];

  function PShexToRGB(col, amt) {
  
    var usePound = false;
  
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
 
    var num = parseInt(col,16);
 
    var r = (num >> 16) + amt;
 
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
 
    var b = ((num >> 8) & 0x00FF) + amt;
 
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
 
    var g = (num & 0x0000FF) + amt;
 
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
 
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
  
  }

  switch(psFtrImageSize){
    case 'thumbnail':
    psFtrImageSizes = '150x150';
    break;
    case 'medium':
    psFtrImageSizes = '300x200';
    break;
    case 'large':
    psFtrImageSizes = '750x500';
    break;
    default:
    psFtrImageSizes = '750x700';
    break;
  }

  if (psDots == 'false') {
    psDots = 'none';
  }
  if (psArrows == 'false') {
    psArrows = 'none';
  }

  var DotColor = PShexToRGB(psBgColor, -40);
  var PSliderHeading = '<h3 style="color:'+psHeadingTxtColor+'; font-size:'+psHeadingSize+'px; text-align:'+psTextAlignment+'; ">Hello World!</h3>';
  var PSliderReadMore = '<a  style="display:'+psReadMore+';"> '+psMoreLinkText+' </a>';
  var PSliderExcerpt = '<p style="display:'+psExcerpt+'; text-align:'+psTextAlignment+';color:'+psTxtColor+'; font-size:'+((psHeadingSize/2)+1)+'px;">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  '+PSliderReadMore+'</p>';
  var PSliderFtrImage = '<br style="display:'+psFtrImage+';"><img src="http://placehold.it/'+psFtrImageSizes+'" style="display:'+psFtrImage+';"><br style="display:'+psFtrImage+';">';
  var PSliderDots = '<br style="display:'+psDots+';"><br style="display:'+psDots+';"><div style="display:'+psDots+'; margin:0 auto; width:10px; height:10px; border-radius:100px; background:'+DotColor+';"></div>';
  var PSliderArrows = '<br style="display:'+psArrows+';"><div style="display:'+psArrows+'; margin:0 auto;" ><span class="dashicons dashicons-arrow-left-alt2" style="color:'+DotColor+'; margin:5px; font-size:40px;"></span> <span class="dashicons dashicons-arrow-right-alt2" style="color:'+DotColor+'; margin:5px; font-size:40px;"></span> </div>';


  var PSlider = '<div style="background:'+psBgColor+'; text-align:'+psTextAlignment+'; width:95%; margin: 0 auto; padding:0.1% 0 2% 0;">'+PSliderFtrImage+PSliderHeading+PSliderExcerpt+PSliderDots+PSliderArrows+'</div>';

  this_widget_postsSlider = PSlider;
  return this_widget_postsSlider;

}

function cardWidgetRender(this_widget_card){

  var pbSelectedCardIcon = this_widget_card['pbSelectedCardIcon'];
  var pbCardIconSize = this_widget_card['pbCardIconSize'];
  var pbCardIconRotation = this_widget_card['pbCardIconRotation'];
  var pbCardIconColor = this_widget_card['pbCardIconColor'];
  var pbCardTitleColor = this_widget_card['pbCardTitleColor'];
  var pbCardTitleSize = this_widget_card['pbCardTitleSize'];
  var pbCardDescColor = this_widget_card['pbCardDescColor'];
  var pbCardDescSize = this_widget_card['pbCardDescSize'];
  var pbCardTitle = this_widget_card['pbCardTitle'];
  var pbCardDesc = this_widget_card['pbCardDesc'];

  pbWidgetCardId = 'pb_card_'+Math.floor((Math.random() * 2000) + 100);

  var currCardWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+pbCardTitleSize+"px',}); "+
        "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+pbCardDescSize+"px',}); "+
        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+pbCardTitleSize+"px',}); "+
        "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+pbCardDescSize+"px',}); "+
        
        "}"+
        " "+
        '</script> ';


      currCardWidgetResponsiveScripts = '\n' + currCardWidgetDefaultResponsive;
      if (typeof( this_widget_card['pbCardTitleSizeTablet']) !== 'undefined' ) {

        var currCardWidgetDefaultResponsiveTablet  = ''+
          '<script>'+
          "jQuery('.responsiveBtn').live('click',function(){"+
          " if (jQuery(this).hasClass('rbt-m') ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeTablet']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeTablet']+"px',}); "+
          "}"+
          
          " });"+
          "var currentVPS = jQuery('.currentViewPortSize').val();"+
          "if ( currentVPS == 'rbt-m' ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeTablet']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeTablet']+"px',}); "+
          
          "}"+
          " "+
          '</script> ';

        var currCardWidgetDefaultResponsiveMobile  = ''+
          '<script>'+
          "jQuery('.responsiveBtn').live('click',function(){"+
          " if (jQuery(this).hasClass('rbt-s') ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeMobile']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeMobile']+"px',}); "+
          "}"+
          
          " });"+
          "var currentVPS = jQuery('.currentViewPortSize').val();"+
          "if ( currentVPS == 'rbt-s' ) { "+

          "  jQuery('#"+pbWidgetCardId+" h2').animate({'font-size':'"+this_widget_card['pbCardTitleSizeMobile']+"px',}); "+
          "  jQuery('#"+pbWidgetCardId+" p').animate({'font-size':'"+this_widget_card['pbCardDescSizeMobile']+"px',}); "+
          
          "}"+
          " "+
          '</script> ';

        currCardWidgetResponsiveScripts = '\n' + currCardWidgetDefaultResponsive + '\n' + currCardWidgetDefaultResponsiveTablet + '\n' + currCardWidgetDefaultResponsiveMobile;

      }

  var cardWidgetIconStyles = 'transform: rotate('+pbCardIconRotation+ 'deg); color:'+pbCardIconColor+'; font-size:'+pbCardIconSize+'px;';

  var cardWidgetIcon = '<i class="'+pbSelectedCardIcon+'" style="'+cardWidgetIconStyles+'" ></i>';

  var cardWidgetHeading = '<h2 style="color:'+pbCardTitleColor+'; font-size:'+pbCardTitleSize+'px !important;">'+pbCardTitle+'</h2>';

  var cardWidgetDesc = '<p style="color:'+pbCardDescColor+'; font-size:'+pbCardDescSize+'px;">'+pbCardDesc+'</p>';

  var cardWidgetHTML = '<div style="text-align:center;padding:3%;" id="'+pbWidgetCardId+'">'+cardWidgetIcon + cardWidgetHeading + cardWidgetDesc+'</div>' + currCardWidgetResponsiveScripts;

  return cardWidgetHTML;
}

function testimonialWidgetRender(this_widget_testimonial, j, this_column ,this_column_type){

  var tsAuthorName = this_widget_testimonial['tsAuthorName'];
  var tsJob = this_widget_testimonial['tsJob'];
  var tsCompanyName = this_widget_testimonial['tsCompanyName'];
  var tsTestimonial = this_widget_testimonial['tsTestimonial'];
  var tsUserImg = this_widget_testimonial['tsUserImg'];
  var tsImageShape = this_widget_testimonial['tsImageShape'];
  var tsIconColor = this_widget_testimonial['tsIconColor'];
  var tsIconSize = this_widget_testimonial['tsIconSize'];
  var tsTextColor = this_widget_testimonial['tsTextColor'];
  var tsTextSize = this_widget_testimonial['tsTextSize'];
  var tsTestimonialColor = this_widget_testimonial['tsTestimonialColor'];
  var tsTestimonialSize = this_widget_testimonial['tsTestimonialSize'];
  var tsTextAlignment = this_widget_testimonial['tsTextAlignment'];

  var iconHTML = '<i class="fa fa-quote-left" style="border:2px solid '+tsIconColor+'; padding:15px; font-size:'+tsIconSize+'px; color:'+tsIconColor+'; text-align:center; margin:5px 0 5px 0; border-radius:'+tsImageShape+'; "></i>';

  if (tsUserImg !== '') {
    var imgHTMLCenter = '<img src='+tsUserImg+' style="width:25%; height:25%; border-radius:'+tsImageShape+';"    />';
    var imgHTMLLeft = '<img src='+tsUserImg+' style="width:55%; height:25%; border-radius:'+tsImageShape+';"    />';
    var imgArea = 'visible';
  } else{
    imgHTMLCenter = ''; imgHTMLLeft = '';
    var imgArea = 'none';
  }

  var authorNameEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' data-fieldName='tsAuthorName'></div>";
  var authorNameWrapped = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+tsAuthorName+' </div>'+authorNameEditingSaveTriggerBtn;


  var authorInfoEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' data-fieldName='tsCompanyName'></div>";
  var authorInfoWrapped = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+tsCompanyName+' </div>'+authorInfoEditingSaveTriggerBtn;

  var testimonialTextEditingSaveTriggerBtn = "<div class='widget-"+j+" inlineEditingSaveTrigger ' style='display:none' data-wid_col_id='"+this_column+"'  data-widget_id='"+j+"' data-widgetType='"+this_column_type+"' data-fieldName='tsTestimonial'></div>";
  var testimonialTextWrapped = '<div id="widgetInlineEditor"  data-wid_col_id="'+this_column+'"  data-widget_id="'+j+'" data-widgetType="'+this_column_type+'" >'+tsTestimonial+' </div>'+testimonialTextEditingSaveTriggerBtn;

  var authorName = '<p style="color:'+tsTextColor+'; font-size:'+tsTextSize+'px;"> '+authorNameWrapped+' </p>';


  var authorinfo =  '<p style="color:'+tsTextColor+'; font-size: calc(3 - '+tsTextSize+'px);" >'+tsJob+', '+authorInfoWrapped+'</p>';

  var testimonialText = '<p style="color:'+tsTestimonialColor+'; font-size:'+tsTestimonialSize+'px ;" >'+testimonialTextWrapped+'</p>';



  var testimonialCardHTMLCenter = '<div style="text-align:center; padding:3% 1% 3% 1%;"> '+iconHTML+' <br> <br>   '+imgHTMLCenter+' '+testimonialText+' <b>'+authorName+'</b> '+authorinfo+'</div>';

  var testimonialCardHTMLLeft = '<div style="padding:3% 1% 3% 1%; text-align:center;"> <div style="width:30%; display:inline-block; text-align:center; display:'+imgArea+'; ">'+imgHTMLLeft+' </div>   <div style="width:69%; display:inline-block; text-align:left;">'+testimonialText+' <b>'+authorName+'</b> '+authorinfo+'</div> </div>';

  var testimonialCardHTMLRight = '<div style="padding:3% 1% 3% 1%; text-align:center;"> <div style="width:69%; display:inline-block; text-align:left; margin-left:2%; ">'+testimonialText+' <b>'+authorName+'</b> '+authorinfo+' </div> <div style="width:28%; display:inline-block; text-align:center; display:'+imgArea+'; ">'+imgHTMLLeft+' </div>   </div>';

  if (tsTextAlignment == 'center') {
    testimonialCardHTML = testimonialCardHTMLCenter;
  } else if (tsTextAlignment == 'left'){
    testimonialCardHTML = testimonialCardHTMLLeft;
  } else if (tsTextAlignment == 'right'){
    testimonialCardHTML = testimonialCardHTMLRight;
  } else{
    testimonialCardHTML = testimonialCardHTMLCenter;
  }

  return testimonialCardHTML;
}

function shortCodeWidgetRender(this_widget_shortcode){
  var shortCodeInput = this_widget_shortcode['shortCodeInput'];
  shortCodeInput = shortCodeInput.replace(/['"]+/g, '');
  var shortCodeContainerUniqueId = 'pb_shortCodeContainer'+Math.floor((Math.random() * 2000) + 100);
  var shortCodeContent = '<div class="'+shortCodeContainerUniqueId+'">Content Here!</div><script type="text/javascript">(function(jQuery){ var submit_URl=admURL+"admin-ajax.php?action=smfb_loadShortcode_content&POPB_Shortcode_nonce="+shortCodeRenderWidgetNO; var result=" ";jQuery.ajax({url:submit_URl,method:"post",data:"ulpb_shortcode='+shortCodeInput+'",success:function(result){jQuery(".'+shortCodeContainerUniqueId+'").html(result)}}); return false; })(jQuery);</script>';

  return shortCodeContent;
}

function countDownWidgetRender(this_widget_countdown){

  var pbCountDownDate = this_widget_countdown['pbCountDownDate'];
  var pbCountDownLabel = this_widget_countdown['pbCountDownLabel'];
  var pbCountDownColor = this_widget_countdown['pbCountDownColor'];
  var pbCountDownLabelColor = this_widget_countdown['pbCountDownLabelColor'];
  var pbCountDownTextSize = this_widget_countdown['pbCountDownTextSize'];
  var pbCountDownLabelTextSize = this_widget_countdown['pbCountDownLabelTextSize'];

  pbCountDownLabelTextSizeTablet = ''; pbCountDownLabelTextSizeMobile = '';
  pbCountDownTextSizeTablet = ''; pbCountDownTextSizeMobile = '';
  if (typeof(this_widget_countdown['pbCountDownLabelTextSizeTablet']) !== 'undefined' ) {
    pbCountDownLabelTextSizeTablet = this_widget_countdown['pbCountDownLabelTextSizeTablet'];
    pbCountDownLabelTextSizeMobile = this_widget_countdown['pbCountDownLabelTextSizeMobile'];

    pbCountDownTextSizeTablet = this_widget_countdown['pbCountDownTextSizeTablet'];
    pbCountDownTextSizeMobile = this_widget_countdown['pbCountDownTextSizeMobile'];
  }

  pbCountDownLabelFontFamily = ''; pbCountDownNumberFontFamily = '';
  if (typeof(this_widget_countdown['pbCountDownLabelFontFamily']) !== 'undefined' ) {
    pbCountDownLabelFontFamily = this_widget_countdown['pbCountDownLabelFontFamily'];
    pbCountDownNumberFontFamily = this_widget_countdown['pbCountDownNumberFontFamily'];
  }

  var countDownId = 'pb_countDown-'+Math.floor((Math.random() * 2000) + 100);
  var countDownScript = " <script> jQuery('#"+countDownId+"').countdown('"+pbCountDownDate+"', function(event) { jQuery(this).html(event.strftime('' +'<div style=\"width: 100%; letter-spacing:5px; \"><div style=\"display: inline-block; width: 25%;\"><p class=\"countDownNumbers\"  > %D </p> <p class=\"countDownLabels\">DAYS</p></div><div style=\"display: inline-block; width: 25%;\"><p class=\"countDownNumbers\" > %H </p> <p class=\"countDownLabels\">HOURS</p></div><div style=\"display: inline-block; width: 25%;\"><p class=\"countDownNumbers\" > %M </p> <p class=\"countDownLabels\">MINUTES</p></div><div style=\"display: inline-block; width: 25%;\"><p class=\"countDownNumbers\" > %S </p> <p class=\"countDownLabels\">SECONDS</p></div> </div>' )); });  </script> ";

  var countDownContainer = "<div id="+countDownId+" class='popb_countDown' style='text-align:center; padding:2% 3%;'></div>";

  var currWidgetDefaultStyles = '<style>'+
    '#'+countDownId+' .countDownLabels{  font-size:'+pbCountDownLabelTextSize+'px; color:'+pbCountDownLabelColor+'; display:'+pbCountDownLabel+'; line-height:0; font-family:'+pbCountDownLabelFontFamily.replace(/\+/g, ' ')+'; }' +
    '#'+countDownId+' .countDownNumbers{  font-size:'+pbCountDownTextSize+'px; color:'+pbCountDownColor+'; line-height:0; font-family:'+pbCountDownNumberFontFamily.replace(/\+/g, ' ')+'; }' +
  +'</style>';


  var currWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+countDownId+" .countDownLabels').animate({'font-size':'"+pbCountDownLabelTextSize+"px',  }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').animate({'font-size':'"+pbCountDownTextSize+"px', }); } "+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+countDownId+" .countDownLabels').animate({'font-size':'"+pbCountDownLabelTextSize+"px',  }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').animate({'font-size':'"+pbCountDownTextSize+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

  var currWidgetTabletResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-m') ) { "+

        "  jQuery('#"+countDownId+" .countDownLabels').animate({'font-size':'"+pbCountDownLabelTextSizeTablet+"px',  }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').animate({'font-size':'"+pbCountDownTextSizeTablet+"px', }); } "+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-m' ) { "+

        "  jQuery('#"+countDownId+" .countDownLabels').animate({'font-size':'"+pbCountDownLabelTextSizeTablet+"px',  }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').animate({'font-size':'"+pbCountDownTextSizeTablet+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

        var resposiveScripts = currWidgetDefaultResponsive;

  var currWidgetMobileResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-s') ) { "+

        "  jQuery('#"+countDownId+" .countDownLabels').animate({'font-size':'"+pbCountDownLabelTextSizeMobile+"px',  }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').animate({'font-size':'"+pbCountDownTextSizeMobile+"px', }); } "+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-s' ) { "+

        "  jQuery('#"+countDownId+" .countDownLabels').animate({'font-size':'"+pbCountDownLabelTextSizeMobile+"px',  }); "+

        "  jQuery('#"+countDownId+" .countDownNumbers').animate({'font-size':'"+pbCountDownTextSizeMobile+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

        var resposiveScripts = currWidgetDefaultResponsive;

    var resposiveScripts = currWidgetDefaultResponsive + currWidgetTabletResponsive + currWidgetMobileResponsive;

  return countDownScript + countDownContainer + resposiveScripts + currWidgetDefaultStyles;

}

function imageSliderWidgetRender(this_widget_imageSlider){

  pbSliderImagesURL = this_widget_imageSlider['pbSliderImagesURL'];
  pbSliderContent = this_widget_imageSlider['pbSliderContent'];
  pbSliderAuto = this_widget_imageSlider['pbSliderAuto'];
  pbSliderDelay = this_widget_imageSlider['pbSliderDelay'];
  pbSliderPager = this_widget_imageSlider['pbSliderPager'];
  pbSliderNav = this_widget_imageSlider['pbSliderNav'];
  pbSliderRandom = this_widget_imageSlider['pbSliderRandom'];
  pbSliderPause = this_widget_imageSlider['pbSliderPause'];
  

  if (typeof(this_widget_imageSlider['pbSliderHeight']) == 'undefined') {
    pbSliderHeight = '400';
    pbSliderHeightUnit = 'px';
  }else{
    pbSliderHeight = this_widget_imageSlider['pbSliderHeight'];
    pbSliderHeightUnit = this_widget_imageSlider['pbSliderHeightUnit'];
  }
  if (typeof(this_widget_imageSlider['pbSliderContent']) == 'undefined') {
    contentSlider = false;
  }else{
    contentSlider = true;
  }

  pbImageSliderUniqueId = 'pb_imageSlider-'+Math.floor((Math.random() * 2000) + 100);

  pbSliderContainer =  "<div class='rslides_container' style='min-height:100px;'> <ul class='rslides' id='"+pbImageSliderUniqueId+"'>";
  
  pbSliderAllSlides = '';
  jQuery.each(pbSliderImagesURL,function(index, val){
    pbSliderPrevSlides = pbSliderAllSlides;
    

    if (contentSlider == false) {imageSlideContent = ''; 
    } else{

      pbSlideContent = pbSliderContent[index];
      imageSlideHeading = '';  imageSlideDesc = ''; imageSlideButton = '';
      if (pbSlideContent['imageSlideHeading'] != '') {
        imageSlideHeading = "<h2>"+pbSlideContent['imageSlideHeading']+"</h2>";
      }

      if (pbSlideContent['imageSlideDesc'] != '') {
        imageSlideDesc = "<p>"+ pbSlideContent['imageSlideDesc'] +"</p>";
      }

      if (pbSlideContent['imageSlideButtonText'] != '') {
        imageSlideButton = "<a href="+pbSlideContent['imageSlideButtonURL']+" target='_blank'> <button disabled>"+pbSlideContent['imageSlideButtonText']+"</button> </a>";

      }
      
      imageSlideContent = "<div class='popb_slide_content'>"+imageSlideHeading+" "+imageSlideDesc+"  "+imageSlideButton+"   </div>";
    }
    

    pbSliderThisSlide = "<li> <div class='popb_slideContainer' style='background:url("+val+"); width: 100%;height:"+pbSliderHeight+pbSliderHeightUnit+";background-size: cover; background-repeat: no-repeat;background-position: center;'> "+imageSlideContent+"  </div> </li>";
    pbSliderAllSlides = pbSliderPrevSlides +  pbSliderThisSlide;
  });

  pbSliderContainerClose = "</ul> </div>";

  pbSliderScript = "<script>  jQuery(function() {  jQuery('#"+pbImageSliderUniqueId+"').responsiveSlides({  auto:  "+pbSliderAuto+",  speed: 500,             timeout:  "+pbSliderDelay+",  pager:  "+pbSliderPager+",            nav:  "+pbSliderNav+",               random:  "+pbSliderRandom+",            pause:  "+pbSliderPause+",        namespace: 'pb-centeredSlider',  });   });   </script>";

  if (contentSlider == false){ 
    pbSliderStyling = '';
   }else{

    slideHeadingStyles = this_widget_imageSlider['slideHeadingStyles'];
    slideDescStyles = this_widget_imageSlider['slideDescStyles'];
    slideButtonStyles = this_widget_imageSlider['slideButtonStyles'];
    pbSliderContentBgColor = this_widget_imageSlider['pbSliderContentBgColor'];

    slideHeadingBold = ''; slideHeadingItalic = ''; slideHeadingUnderlined = '';
    if (slideHeadingStyles['slideHeadingBold'] == true) { slideHeadingBold = 'bold'; }
    if (slideHeadingStyles['slideHeadingItalic'] == true) { slideHeadingItalic = 'italic'; }
    if (slideHeadingStyles['slideHeadingUnderlined'] == true) { slideHeadingUnderlined = 'underline'; }


    if (typeof(slideHeadingStyles['slideHeadingFontFamily']) != 'undefined') {
      slideHeadingFontFamily = slideHeadingStyles['slideHeadingFontFamily'];
    } else{
      slideHeadingFontFamily = ' none';
    }

    if (typeof(slideDescStyles['slideDescFontFamily']) != 'undefined') {
      slideDescFontFamily = slideDescStyles['slideDescFontFamily'];
    } else{
      slideDescFontFamily = ' none';
    }

    if (typeof(slideButtonStyles['slideButtonBtnFontFamily']) != 'undefined') {
      slideButtonBtnFontFamily = slideButtonStyles['slideButtonBtnFontFamily'];
    } else{
      slideButtonBtnFontFamily = ' none';
    }

    pbSliderHeadingStyles = ''
    +'color:'+slideHeadingStyles['slideHeadingColor']+';'
    +'font-size:'+slideHeadingStyles['slideHeadingSize']+'px;'
    +' letter-spacing:'+slideHeadingStyles['slideHeadingLetterSpacing']+'px;'
    +' line-height:'+slideHeadingStyles['slideHeadingLineHeight']+'px;'
    +' font-family:'+slideHeadingFontFamily.replace(/\+/g, ' ')+';'
    +' font-weight:'+slideHeadingBold+';'
    +' font-style:'+slideHeadingItalic+';'
    +'  text-decoration:'+slideHeadingUnderlined+';';


    slideDescBold = ''; slideDescItalic = ''; slideDescUnderlined = '';
    if (slideDescStyles['slideDescBold'] == true) { slideDescBold = 'bold'; }
    if (slideDescStyles['slideDescItalic'] == true) { slideDescItalic = 'italic'; }
    if (slideDescStyles['slideDescUnderlined'] == true) { slideDescUnderlined = 'underline'; }

    pbSliderDescStyles = ''
    +'color:'+slideDescStyles['slideDescColor']+';'
    +'font-size:'+slideDescStyles['slideDescSize']+'px;'
    +' letter-spacing:'+slideDescStyles['slideDescLetterSpacing']+'px;'
    +' line-height:'+slideDescStyles['slideDescLineHeight']+'px;'
    +' font-family:'+slideDescFontFamily.replace(/\+/g, ' ')+';'
    +' font-weight:'+slideDescBold+';'
    +' font-style:'+slideDescItalic+';'
    +'  text-decoration:'+slideDescUnderlined+';';

    pbSliderBtnStyles = ''
      +'padding:'+slideButtonStyles['slideButtonBtnHeight']+'px '+slideButtonStyles['slideButtonBtnWidth']+'px;'
      +'background:'+slideButtonStyles['slideButtonBtnBgColor']+';'
      +'background-color:'+slideButtonStyles['slideButtonBtnBgColor']+';'
      +'color:'+slideButtonStyles['slideButtonBtnColor']+';'
      +'font-size:'+slideButtonStyles['slideButtonBtnFontSize']+'px;'
      +'font-family:'+slideButtonBtnFontFamily.replace(/\+/g, ' ')+';'
      +'letter-spacing:'+slideButtonStyles['slideButtonBtnFontLetterSpacing']+'px;'
      +'border-width:'+slideButtonStyles['slideButtonBtnBorderWidth']+'px;'
      +'border-color:'+slideButtonStyles['slideButtonBtnBorderColor']+'px;'
      +'border-radius:'+slideButtonStyles['slideButtonBtnBorderRadius']+'px;'
      +'border-style:solid;';

    pbSliderStyling = '<style> #'+pbImageSliderUniqueId+' .popb_slide_content{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align:center; background:'+pbSliderContentBgColor+'; padding:3% 6%;} \n' 
    + '#'+pbImageSliderUniqueId+' .popb_slide_content h2{ '+pbSliderHeadingStyles+'  } \n'
    + '#'+pbImageSliderUniqueId+' .popb_slide_content p{ '+pbSliderDescStyles+'  }'
    + '#'+pbImageSliderUniqueId+' .popb_slide_content button{ '+pbSliderBtnStyles+'  } \n'
    +'</style>'+'\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+slideHeadingFontFamily+'|'+slideDescFontFamily+'|'+slideButtonBtnFontFamily+'">';

  }

    

  

  return pbSliderContainer  +  pbSliderAllSlides  +   pbSliderContainerClose  +   pbSliderScript + pbSliderStyling;


}



function progressBarWidgetRender(this_widget_progressBar){

  pbProgressBarTitle = this_widget_progressBar['pbProgressBarTitle'];
  pbProgressBarPrecentage = this_widget_progressBar['pbProgressBarPrecentage'];
  pbProgressBarText = this_widget_progressBar['pbProgressBarText'];
  pbProgressBarDisplayPrecentage = this_widget_progressBar['pbProgressBarDisplayPrecentage'];
  pbProgressBarTitleColor = this_widget_progressBar['pbProgressBarTitleColor'];
  pbProgressBarTextColor = this_widget_progressBar['pbProgressBarTextColor'];
  pbProgressBarColor = this_widget_progressBar['pbProgressBarColor'];
  pbProgressBarBgColor = this_widget_progressBar['pbProgressBarBgColor'];
  pbProgressBarTitleSize = this_widget_progressBar['pbProgressBarTitleSize'];
  pbProgressBarHeight = this_widget_progressBar['pbProgressBarHeight'];
  pbProgressBarTextSize = this_widget_progressBar['pbProgressBarTextSize'];
  
  if (typeof(this_widget_progressBar['pbProgressBarTextFontFamily']) != 'undefined') {
    pbProgressBarTextFontFamily = this_widget_progressBar['pbProgressBarTextFontFamily'];
  } else{
    pbProgressBarTextFontFamily = ' none';
  }

  if (pbProgressBarDisplayPrecentage !== '%') {
    pbProgressBarDisplayPrecentage = '';
  }
  pbProgressBarUniqueId = 'pb_progressBar_'+Math.floor((Math.random() * 2000) + 100);

  pbProgressBarHTML = '<p style="font-size:'+pbProgressBarTitleSize+'px; color:'+pbProgressBarTitleColor+';line-height:0; font-family:'+pbProgressBarTextFontFamily.replace(/\+/g, ' ')+',arial,sans-serif; " >'+pbProgressBarTitle+'</p><div id='+pbProgressBarUniqueId+' style="background-color:'+pbProgressBarBgColor+'; height:'+pbProgressBarHeight+'px; position:relative;"> <div style="position:absolute; top:'+pbProgressBarHeight/2+'px; line-height:0; color:'+pbProgressBarTextColor+'; font-size:'+pbProgressBarTextSize+'px; left:2%; font-family:'+pbProgressBarTextFontFamily.replace(/\+/g, ' ')+',arial,sans-serif; ">'+pbProgressBarText+'</div>  <div class="progressBarNumber" style="position:absolute;left:'+(pbProgressBarPrecentage-4)+'%; top:'+pbProgressBarHeight/2+'px; line-height:0; color:'+pbProgressBarTextColor+'; font-size:'+pbProgressBarTextSize+'px; font-family:'+pbProgressBarTextFontFamily.replace(/\+/g, ' ')+',arial,sans-serif; "></div>   </div>';

  pbProgressBarScript = '<script> var thisProgressBar_'+pbProgressBarUniqueId+' = jQuery( "#'+pbProgressBarUniqueId+'" ); var progressNumber_'+pbProgressBarUniqueId+' = jQuery("#'+pbProgressBarUniqueId+'  .progressBarNumber");   thisProgressBar_'+pbProgressBarUniqueId+'.progressbar({ value: 0, change: function(){ progressNumber_'+pbProgressBarUniqueId+'.text(thisProgressBar_'+pbProgressBarUniqueId+'.progressbar("value")+ "'+pbProgressBarDisplayPrecentage+'");   progressNumber_'+pbProgressBarUniqueId+'.css("left",thisProgressBar_'+pbProgressBarUniqueId+'.progressbar("value")-10 + "%");   }   }); function '+pbProgressBarUniqueId+'_pb_progress() { var val = thisProgressBar_'+pbProgressBarUniqueId+'.progressbar( "value" ) || 0;  thisProgressBar_'+pbProgressBarUniqueId+'.progressbar( "value", val + 1 );  if ( val <= '+(pbProgressBarPrecentage -2)+' ) { setTimeout( '+pbProgressBarUniqueId+'_pb_progress, 20 ); } } setTimeout( '+pbProgressBarUniqueId+'_pb_progress, 1000 );  </script>    <style> #'+pbProgressBarUniqueId+' .ui-progressbar-value{background-color:'+pbProgressBarColor+' !important; } </style>  ' + '\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+pbProgressBarTextFontFamily+'">';
  


  pbProgressBarHTMLContainer = pbProgressBarHTML + pbProgressBarScript;

  return pbProgressBarHTMLContainer;
}

function pricingWidgetRender(this_widget_pricing){
  pbPricingHeaderText = this_widget_pricing['pbPricingHeaderText'];
  pbPricingContent = this_widget_pricing['pbPricingContent'];
  pbPricingHeaderTextColor = this_widget_pricing['pbPricingHeaderTextColor'];
  pbPricingHeaderBgColor = this_widget_pricing['pbPricingHeaderBgColor'];
  pbPricingHeaderTextSize = this_widget_pricing['pbPricingHeaderTextSize'];
  pbPricingBorderWidth = this_widget_pricing['pbPricingBorderWidth'];
  pbPricingBorderColor = this_widget_pricing['pbPricingBorderColor'];
  pricingbtnText = this_widget_pricing['pricingbtnText'];
  pricingbtnLink = this_widget_pricing['pricingbtnLink'];
  pricingbtnTextColor = this_widget_pricing['pricingbtnTextColor'];
  pricingbtnFontSize = this_widget_pricing['pricingbtnFontSize'];
  pricingbtnBgColor = this_widget_pricing['pricingbtnBgColor'];
  pricingbtnWidth = this_widget_pricing['pricingbtnWidth'];
  pricingbtnHeight = this_widget_pricing['pricingbtnHeight'];
  pricingbtnHoverBgColor = this_widget_pricing['pricingbtnHoverBgColor'];
  pricingbtnBlankAttr = this_widget_pricing['pricingbtnBlankAttr'];
  pricingbtnBorderColor = this_widget_pricing['pricingbtnBorderColor'];
  pricingbtnBorderWidth = this_widget_pricing['pricingbtnBorderWidth'];
  pricingbtnBorderRadius = this_widget_pricing['pricingbtnBorderRadius'];
  pricingbtnButtonAlignment = this_widget_pricing['pricingbtnButtonAlignment'];
  pbPricingButtonSectionBgColor = this_widget_pricing['pbPricingButtonSectionBgColor'];

  if (pbPricingHeaderText !== '') {
    var pricingHeader = '<div class="pb_prcingHeader" style="color:'+pbPricingHeaderTextColor+'; background:'+pbPricingHeaderBgColor+'; font-size:'+pbPricingHeaderTextSize+'px; width:100%; text-align:center; padding:30px 0 35px 0; border-bottom:1px solid '+pbPricingBorderColor+';"> <b>'+pbPricingHeaderText+'</b> </div>';
  } else{
    pricingHeader = '';
  }
    
  if (pricingbtnLink !== '') {
    var pricingButton = "<br><div class='wdt-this_column_type' style='text-align:"+pricingbtnButtonAlignment+"; padding:20px 0 40px 0; background:"+pbPricingButtonSectionBgColor+";'><a href='"+pricingbtnLink+"' style='text-decoration:none !important;' target='' > <button style='color:"+pricingbtnTextColor+" !important;font-size:"+pricingbtnFontSize+"px !important; background: "+pricingbtnBgColor+" !important; background-color: "+pricingbtnBgColor+" !important; padding: "+pricingbtnHeight+"px "+pricingbtnWidth+"px !important; border: "+pricingbtnBorderWidth+"px solid "+pricingbtnBorderColor+" !important; border-radius: "+pricingbtnBorderRadius+"px !important;' disabled >"+pricingbtnText+"</button></a></div>";
  }else{
    pricingButton = '';
  }

  var pricingContainer = '<div class="pb_pricingContainer"  style="border:'+pbPricingBorderWidth+'px solid '+pbPricingBorderColor+'; border-radius:5px; box-shadow:0px 0px 10px '+pbPricingBorderColor+';"> '+pricingHeader+' <div>'+pbPricingContent+'</div> '+pricingButton+' </div>';

  return pricingContainer;
}

function imgCarouselWidgetRender(this_widget_img_carousel){

  pbImgCarouselAutoplay = this_widget_img_carousel['pbImgCarouselAutoplay'];
  pbImgCarouselDelay = this_widget_img_carousel['pbImgCarouselDelay'];
  imgCarouselSlideLoop = this_widget_img_carousel['imgCarouselSlideLoop'];
  imgCarouselSlideTransition = this_widget_img_carousel['imgCarouselSlideTransition'];
  imgCarouselPagination = this_widget_img_carousel['imgCarouselPagination'];
  pbImgCarouselNav = this_widget_img_carousel['pbImgCarouselNav'];
  imgCarouselSlidesURL = this_widget_img_carousel['imgCarouselSlidesURL'];

  pbImgCarouselUniqueId = 'pb_imgCarousel_'+Math.floor((Math.random() * 2000) + 100);

  pbCarouselAllSlides = '';
  jQuery.each(imgCarouselSlidesURL,function(index, val){
    pbSliderPrevSlides = pbCarouselAllSlides;
    pbSliderThisSlide = "<div class='carouselSingleSlide'> <img src='"+val+"' alt='slideImg' style='width:100%;' ></div>";
    pbCarouselAllSlides = pbSliderPrevSlides +  pbSliderThisSlide;
  });


  pbCarouselScript = "<script> jQuery('#"+pbImgCarouselUniqueId+"').owlCarousel({   singleItem: false,  autoPlay : "+pbImgCarouselAutoplay+",   stopOnHover : true,   navigation: "+pbImgCarouselNav+" ,    paginationSpeed : "+pbImgCarouselDelay+"00,   goToFirstSpeed : "+pbImgCarouselDelay+"00,    autoHeight : true,    slideSpeed : "+pbImgCarouselDelay+"000,   transitionStyle: '"+imgCarouselSlideTransition+"',    pagination : "+imgCarouselPagination+",   paginationNumbers: false,   navigationText : ['<span class=\"dashicons dashicons-arrow-left-alt2\" > </span>', '<span class=\"dashicons dashicons-arrow-right-alt2\" > </span>'], theme: 'pbOwl-theme', baseClass: 'pbOwl-carousel' ,  }); </script>";

  pbCarouselSlidesWrapper = '<div  id='+pbImgCarouselUniqueId+' class="pbOwl-carousel">' +pbCarouselAllSlides+ '</div>'  +  pbCarouselScript;

  return pbCarouselSlidesWrapper ;
}

function wooCommerceWidgetRender(this_widget_wooCommerceProducts){

  var wooProductsColumn = this_widget_wooCommerceProducts['wooProductsColumn'];
  var wooProductsCount = this_widget_wooCommerceProducts['wooProductsCount'];
  var wooProductsCategories = this_widget_wooCommerceProducts['wooProductsCategories'];
  //var wooProductsTags = this_widget_wooCommerceProducts['wooProductsTags'];
  var wooProductsOrderBy = this_widget_wooCommerceProducts['wooProductsOrderBy'];
  var wooProductsOrder = this_widget_wooCommerceProducts['wooProductsOrder'];

  var generateWooProductsShortcode = '[products columns="'+wooProductsColumn+'" per_page="'+wooProductsCount+'" orderby="'+wooProductsOrderBy+'" order="'+wooProductsOrder+'" ]';

  if (wooProductsCategories !== '') {
    var generateWooProductsShortcode = '[product_category columns="'+wooProductsColumn+'" per_page="'+wooProductsCount+'" orderby="'+wooProductsOrderBy+'" order="'+wooProductsOrder+'" category="'+wooProductsCategories+'" ]';
  }

  if (wooProductsOrderBy == 'popularity') {
    var generateWooProductsShortcode = '[best_selling_products columns="'+wooProductsColumn+'" per_page="'+wooProductsCount+'" orderby="'+wooProductsOrderBy+'" order="'+wooProductsOrder+'" category="'+wooProductsCategories+'" ]';
  }

  generateWooProductsShortcode = generateWooProductsShortcode.replace(/['"]+/g, '');
  var shortCodeContainerUniqueId = 'pb_shortCodeContainer'+Math.floor((Math.random() * 2000) + 100);
  var shortCodeContent = '<div class="'+shortCodeContainerUniqueId+'">Content Here!</div><script type="text/javascript">(function(jQuery){ var submit_URl=admURL+"admin-ajax.php?action=smfb_loadShortcode_content&POPB_Shortcode_nonce="+shortCodeRenderWidgetNO; var result=" ";jQuery.ajax({url:submit_URl,method:"post",data:"ulpb_shortcode='+generateWooProductsShortcode+'",success:function(result){jQuery(".'+shortCodeContainerUniqueId+'").html(result)}}); return false; })(jQuery);</script>';

  return shortCodeContent;
}

function navigationMenuWidgetRender(this_column_menu_content){

  var menuName = this_column_menu_content['menuName'];
  var menuStyle = this_column_menu_content['menuStyle'];
  var menuColor = this_column_menu_content['menuColor'];

  if (typeof(this_column_menu_content['pbMenuFontFamily']) != 'undefined') {
    pbMenuFontFamily = this_column_menu_content['pbMenuFontFamily'];
  } else{
    pbMenuFontFamily = ' none';
  }

  if (typeof(this_column_menu_content['pbMenuFontHoverColor']) != 'undefined') {
    pbMenuFontHoverColor = this_column_menu_content['pbMenuFontHoverColor'];
  } else{
    pbMenuFontHoverColor = '';
  }
  if (typeof(this_column_menu_content['pbMenuFontHoverBgColor']) != 'undefined') {
    pbMenuFontHoverBgColor = this_column_menu_content['pbMenuFontHoverBgColor'];
  } else{
    pbMenuFontHoverBgColor = '';
  }
  if (typeof(this_column_menu_content['pbMenuFontSize']) != 'undefined') {
    pbMenuFontSize = this_column_menu_content['pbMenuFontSize'];
  } else{
    pbMenuFontSize = '';
  }

  var logoURL = jQuery('.pageLogoUrl ').val();

  
  this_widget_nav_shortcode = "[pb_samlple_nav pb_menu='"+menuName+"'    pb_logo_url='"+logoURL+"' menucolor='"+menuColor+"'  menu_class='"+menuStyle+"' menu_font='"+pbMenuFontFamily.replace(/\+/g, ' ')+"' menu_fonthovercolor='"+pbMenuFontHoverColor+"' menu_fonthoverbgcolor='"+pbMenuFontHoverBgColor+"' menu_fontsize='"+pbMenuFontSize+"' ]";


  var shortCodeContainerUniqueId = 'pb_shortCodeContainer'+Math.floor((Math.random() * 2000) + 100);
  var shortCodeContent = '<div class="'+shortCodeContainerUniqueId+'">Content Here!</div><script type="text/javascript">(function(jQuery){ var submit_URl=admURL+"admin-ajax.php?action=smfb_loadShortcode_content&POPB_Shortcode_nonce="+shortCodeRenderWidgetNO; var result=" ";jQuery.ajax({url:submit_URl,method:"post",data:"ulpb_shortcode='+this_widget_nav_shortcode+'",success:function(result){jQuery(".'+shortCodeContainerUniqueId+'").html(result)}}); return false; })(jQuery);</script>'+ '\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+pbMenuFontFamily+'">';

  return shortCodeContent;
}

function iconListWidgetRender(this_widget){

  iconListLineHeight = this_widget['iconListLineHeight'];
  iconListAlignment = this_widget['iconListAlignment'];
  iconListIconSize = this_widget['iconListIconSize'];
  iconListIconColor = this_widget['iconListIconColor'];
  iconListTextSize = this_widget['iconListTextSize'];
  iconListTextIndent = this_widget['iconListTextIndent'];
  iconListTextColor = this_widget['iconListTextColor'];
  iconListItemLinkOpen = this_widget['iconListItemLinkOpen'];
  iconListComplete = this_widget['iconListComplete'];

  iconListTextFontFam  = '';
  if (typeof(this_widget['iconListTextFontFamily']) != 'undefined') {
    iconListTextFontFam = this_widget['iconListTextFontFamily'];
    iconListTextFontFamily = this_widget['iconListTextFontFamily'].replace(/\+/g, ' ');
  }
  iconListIconSizeTablet = ''; iconListIconSizeMobile = '';
  iconListTextSizeTablet = ''; iconListTextSizeMobile = '';
  iconListTextIndentTablet = ''; iconListTextIndentMobile = '';
  if (typeof(this_widget['iconListIconSizeTablet']) != 'undefined') {
    iconListIconSizeTablet = this_widget['iconListIconSizeTablet'];
    iconListIconSizeMobile = this_widget['iconListIconSizeMobile'];

    iconListTextSizeTablet = this_widget['iconListTextSizeTablet'];
    iconListTextSizeMobile = this_widget['iconListTextSizeMobile'];

    iconListTextIndentTablet = this_widget['iconListTextIndentTablet'];
    iconListTextIndentMobile = this_widget['iconListTextIndentMobile'];
  }

  pbIconListAllItems = '';
  jQuery.each(iconListComplete,function(index, val){

    pbThisListIcon = '<i class="fa '+val['iconListItemIcon']+'"></i>';
    if (val['iconListItemLink'] !== '') {
      pbThisListItemLinkOpen = '<a href='+val['iconListItemLink']+' target="_blank" >';
      pbThisListItemLinkClose = '</a>'
    } else{
      pbThisListItemLinkOpen = '';
      pbThisListItemLinkClose = '';
    }
    pbListPrevItem = pbIconListAllItems;
    pbListThisItem = pbThisListItemLinkOpen+ " <li> "+pbThisListIcon+"  <span>"+val['iconListItemText']+"</span>  </li> " + pbThisListItemLinkClose;
    pbIconListAllItems = pbListPrevItem +  pbListThisItem;
  });

  pbIconListUniqueId = 'pb_IconList_'+Math.floor((Math.random() * 2000) + 100);


  pbIconListUniqueStyles = ' <style> #'+pbIconListUniqueId+' { line-height:'+iconListLineHeight+'px; text-align:'+iconListAlignment+'; text-decoration:none; }  #'+pbIconListUniqueId+' li i { font-size:'+iconListIconSize+'px; color:'+iconListIconColor+';  } #'+pbIconListUniqueId+' li span { font-size:'+iconListTextSize+'px; color:'+iconListTextColor+';  margin-left:'+iconListTextIndent+'px; font-family:'+iconListTextFontFamily+'; }  #'+pbIconListUniqueId+' a { text-decoration:none; } </style>  ' + '\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+iconListTextFontFam+'">';

  var currWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSize+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSize+"px', 'margin-left':'"+iconListTextIndent+"px', }); "+


        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSize+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSize+"px', 'margin-left':'"+iconListTextIndent+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

  var currWidgetTabletResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-m') ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeTablet+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeTablet+"px', 'margin-left':'"+iconListTextIndentTablet+"px', }); "+


        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-m' ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeTablet+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeTablet+"px', 'margin-left':'"+iconListTextIndentTablet+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

  var currWidgetMobileResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-s') ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeMobile+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeMobile+"px', 'margin-left':'"+iconListTextIndentMobile+"px', }); "+


        "}"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-s' ) { "+

        "  jQuery('#"+pbIconListUniqueId+" li i').animate({'font-size':'"+iconListIconSizeMobile+"px', }); "+
        "  jQuery('#"+pbIconListUniqueId+" li span').animate({'font-size':'"+iconListTextSizeMobile+"px', 'margin-left':'"+iconListTextIndentMobile+"px', }); "+
        
        "}"+
        " "+
        '</script> ';

  pbIconListItemContainer = '<ul id='+pbIconListUniqueId+' > '+pbIconListAllItems+' </ul>';

  return pbIconListItemContainer + pbIconListUniqueStyles  + currWidgetDefaultResponsive+currWidgetTabletResponsive+currWidgetMobileResponsive;
}

function formBuilderWidgetRender(this_widget){

  widgetPbFbFormFeilds = this_widget['widgetPbFbFormFeilds'];
  widgetPbFbFormFeildOptions = this_widget['widgetPbFbFormFeildOptions'];
  widgetPbFbFormSubmitOptions = this_widget['widgetPbFbFormSubmitOptions'];

  formBuilderFieldSize = 'pbField-'+widgetPbFbFormFeildOptions['formBuilderFieldSize'];
  pbFormAllFields = [];

  jQuery.each(widgetPbFbFormFeilds, function(index, val){
    thisFieldOptions = val['thisFieldOptions'];

    var thisFieldAttr = 'style="width:99%;  "  placeholder="'+thisFieldOptions['fbFieldPlaceHolder']+'" required="'+thisFieldOptions['fbFieldRequired']+'"  id="fieldID-'+index+'" ' ;
    var multiFieldStyleAttr = 'style="margin-right:25px; display:'+thisFieldOptions['displayFieldsInline']+'; line-height:2em; font-size:16px; "';

    switch (val['fbFieldType']) {
      case 'textarea':
           pbThisFormField = '<textarea rows="'+thisFieldOptions['fbtextareaRows']+'" name="textareaField'+index+'" '+thisFieldAttr+' class="pbFormField  '+formBuilderFieldSize+'" ></textarea>';
      break;
      case 'radio':

           multiOptionFieldValues = thisFieldOptions['multiOptionFieldValues'].split('\n');
           allRadioItems = '';

           for (var i =0; i< multiOptionFieldValues.length; i++) {
             thisRadioLabel = '<label for="fieldID-'+index+'-'+i+'">'+multiOptionFieldValues[i]+'</label>';
             thisRadioItem = '<span '+multiFieldStyleAttr+'>  <input type="radio" name="radioField'+index+'" id="fieldID-'+index+'-'+i+'" value="'+multiOptionFieldValues[i]+'" > ' +thisRadioLabel+ ' </span>';
             
             prevRadioFields = allRadioItems;
             allRadioItems = prevRadioFields +  thisRadioItem;
           }
           pbThisFormField = allRadioItems;

      break;
      case 'checkbox':
           multiOptionFieldValues = thisFieldOptions['multiOptionFieldValues'].split('\n');
           allRadioItems = '';

           for (var i =0; i< multiOptionFieldValues.length; i++) {
             thisRadioLabel = '<label for="fieldID-'+index+'-'+i+'">'+multiOptionFieldValues[i]+'</label>';
             thisRadioItem = '<span '+multiFieldStyleAttr+'>  <input type="checkbox" name="checkField'+index+'" id="fieldID-'+index+'-'+i+'" value="'+multiOptionFieldValues[i]+'" > ' +thisRadioLabel+ ' </span>';
             
             prevRadioFields = allRadioItems;
             allRadioItems = prevRadioFields +  thisRadioItem;
           }
           pbThisFormField = allRadioItems;
      break;
      case 'select':
           multiOptionFieldValues = thisFieldOptions['multiOptionFieldValues'].split('\n');
           allRadioItems = '';

           for (var i =0; i< multiOptionFieldValues.length; i++) {

             thisRadioItem = '<option  value="'+multiOptionFieldValues[i]+'" > '+multiOptionFieldValues[i]+' </option> ';
             
             prevRadioFields = allRadioItems;
             allRadioItems = prevRadioFields +  thisRadioItem;
           }


           pbThisFormField = '<select name="selectField'+index+'" id="fieldID-'+index+'"  '+thisFieldAttr+' class="pbFormField  '+formBuilderFieldSize+'">'+ allRadioItems +'</select>';  
      break;
      default: 
           pbThisFormField = '<input type="'+val['fbFieldType']+'" name="inputField'+index+'" '+thisFieldAttr+' class="pbFormField  '+formBuilderFieldSize+'" >';
      break;
    } //switch end

      pbThisFormFieldLabel = '<label for="fieldID-'+index+'" class="pbFormLabel"> '+thisFieldOptions['fbFieldLabel']+' </label>';
      pbThisFormFieldWrapped =  '<div style="width:'+(thisFieldOptions['fbFieldWidth']-3)+'%; margin-right:2.5%; display:inline-block;">' + pbThisFormFieldLabel+'\n <br> '+pbThisFormField +'</div>';

      pbFormPrevFields = pbFormAllFields;
      pbFormAllFields = pbFormPrevFields +  pbThisFormFieldWrapped;

  } ); //each loop end



  pbFormBuilderSubmitStyles = ' style=" width:100%; background:'+widgetPbFbFormSubmitOptions['formBuilderBtnBgColor']+'; color:'+widgetPbFbFormSubmitOptions['formBuilderBtnColor']+'; font-size:'+widgetPbFbFormSubmitOptions['formBuilderBtnFontSize']+'px;  border:'+widgetPbFbFormSubmitOptions['formBuilderBtnBorderWidth']+'px solid '+widgetPbFbFormSubmitOptions['formBuilderBtnBorderColor']+'; border-radius:'+widgetPbFbFormSubmitOptions['formBuilderBtnBorderRadius']+'px;" ';
  buttonMargin = '2% 2.5% 2% 0';
  if (widgetPbFbFormSubmitOptions['formBuilderBtnAlignment'] == 'center') {
    calcMargin = 50 - (widgetPbFbFormSubmitOptions['formBuilderBtnWidth']/2);
    buttonMargin = '2% 2.5% 2% '+calcMargin+'%';
  } else if(widgetPbFbFormSubmitOptions['formBuilderBtnAlignment'] == 'right') {
    calcMargin = 100 -(widgetPbFbFormSubmitOptions['formBuilderBtnWidth']);
    buttonMargin = '2% 2.5% 2% '+calcMargin+'%';
  }
  pbFormBuilderSubmit = '<div style="text-align:'+widgetPbFbFormSubmitOptions['formBuilderBtnAlignment']+';  width:'+(widgetPbFbFormSubmitOptions['formBuilderBtnWidth']-3)+'%; margin:'+buttonMargin+'; display:inline-block;">  <button '+pbFormBuilderSubmitStyles+' class="pbField-'+widgetPbFbFormSubmitOptions['formBuilderBtnSize']+' pbFieldBtn" disabled="disabled"> '+widgetPbFbFormSubmitOptions['formBuilderBtnText']+' </button> </div>';


  pbFormBuilderUniqueId = 'pb_FormBuilder_'+Math.floor((Math.random() * 2000) + 100);

  pbFormBuilderWrapper = '<form id="'+pbFormBuilderUniqueId+'" > '+pbFormAllFields+'   '+pbFormBuilderSubmit+' </form>';

  pbFormBuilderStylesID = '#'+pbFormBuilderUniqueId;

  pbThisFormBuilderStyles = '<style>  '+pbFormBuilderStylesID+' .pbFormField {   background:'+widgetPbFbFormFeildOptions['formBuilderFieldBgColor']+';  color:'+widgetPbFbFormFeildOptions['formBuilderFieldColor']+'; border:'+widgetPbFbFormFeildOptions['formBuilderFieldBorderWidth']+'px solid '+widgetPbFbFormFeildOptions['formBuilderFieldBorderColor']+'; border-radius:'+widgetPbFbFormFeildOptions['formBuilderFieldBorderRadius']+'px;  }           '+pbFormBuilderStylesID+' .pbFormLabel{ font-size:'+widgetPbFbFormFeildOptions['formBuilderLabelSize']+'px; color:'+widgetPbFbFormFeildOptions['formBuilderLabelColor']+'; display:'+widgetPbFbFormFeildOptions['formBuilderFieldLabelDisplay']+'; line-height:3em; } '+pbFormBuilderStylesID+' button:hover { background:'+widgetPbFbFormSubmitOptions['formBuilderBtnHoverBgColor']+' !important; color:'+widgetPbFbFormSubmitOptions['formBuilderBtnHoverTextColor']+' !important; }  </style>';

        formBuilderLabelSize = widgetPbFbFormFeildOptions['formBuilderLabelSize'];
        formBuilderBtnFontSize = widgetPbFbFormSubmitOptions['formBuilderBtnFontSize'];
        if (typeof(widgetPbFbFormFeildOptions['formBuilderLabelSizeTablet']) != 'undefined') {
          formBuilderLabelSizeTablet = widgetPbFbFormFeildOptions['formBuilderLabelSizeTablet'];
          formBuilderLabelSizeMobile = widgetPbFbFormFeildOptions['formBuilderLabelSizeMobile'];

          formBuilderBtnFontSizeTablet = widgetPbFbFormSubmitOptions['formBuilderBtnFontSizeTablet'];
          formBuilderBtnFontSizeMobile = widgetPbFbFormSubmitOptions['formBuilderBtnFontSizeMobile'];
        }else{
          formBuilderLabelSizeTablet = '';
          formBuilderLabelSizeMobile = '';
          formBuilderBtnFontSizeTablet = '';
          formBuilderBtnFontSizeMobile = '';
        }

          var currWidgetDefaultResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-l') ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSize+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSize+"px', }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-l' ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSize+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSize+"px', }); "+
              
              "}"+
              " "+
              '</script> ';

          var currWidgetTabletResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-m') ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeTablet+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeTablet+"px', }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-m' ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeTablet+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeTablet+"px', }); "+
              
              "}"+
              " "+
              '</script> ';

          var currWidgetMobileResponsive  = ''+
              '<script>'+
              "jQuery('.responsiveBtn').live('click',function(){"+
              " if (jQuery(this).hasClass('rbt-s') ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeMobile+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeMobile+"px', }); "+

              "}"+
              
              " });"+
              "var currentVPS = jQuery('.currentViewPortSize').val();"+
              "if ( currentVPS == 'rbt-s' ) { "+

              "  jQuery('"+pbFormBuilderStylesID+" .pbFormLabel').animate({'font-size':'"+formBuilderLabelSizeMobile+"px', }); "+
              "  jQuery('"+pbFormBuilderStylesID+" .pbFieldBtn').animate({'font-size':'"+formBuilderBtnFontSizeMobile+"px', }); "+
              
              "}"+
              " "+
              '</script> ';

  return pbFormBuilderWrapper + '\n '+ pbThisFormBuilderStyles + '\n' + currWidgetDefaultResponsive + currWidgetTabletResponsive + currWidgetMobileResponsive;

}
function textWidgetRender(this_widget_text,widgetStyling){

  widgetTextContent = this_widget_text['widgetTextContent'];
  widgetTextAlignment = this_widget_text['widgetTextAlignment'];
  widgetTextTag = this_widget_text['widgetTextTag'];
  widgetTextColor = this_widget_text['widgetTextColor'];
  widgetTextSize = this_widget_text['widgetTextSize'];
  widgetTextWeight = this_widget_text['widgetTextWeight'];
  widgetTextTransform = this_widget_text['widgetTextTransform']; 

  if (typeof(this_widget_text['widgetTextFamily']) != 'undefined') {
    widgetTextFamily = this_widget_text['widgetTextFamily'];
  } else{
    widgetTextFamily = ' none';
  }

  if (typeof(this_widget_text['widgetTextLineHeight']) != 'undefined') {
    widgetTextLineHeight = this_widget_text['widgetTextLineHeight'];
  } else{
    widgetTextLineHeight = '';
  }

  if (typeof(this_widget_text['widgetTextSpacing']) != 'undefined') {
    widgetTextSpacing = this_widget_text['widgetTextSpacing'];
  } else{
    widgetTextSpacing = '';
  }

  pbWidgetTextId = 'pb_text_'+Math.floor((Math.random() * 2000) + 100);

  var currTextWidgetDefaultResponsive  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-l') ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+widgetTextSize+"px', 'line-height':'"+widgetTextLineHeight+"em', 'letter-spacing':'"+widgetTextSpacing+"px',}); }"+
        
        " });"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-l' ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+widgetTextSize+"px', 'line-height':'"+widgetTextLineHeight+"em', 'letter-spacing':'"+widgetTextSpacing+"px',});"+
        
        "}"+
        " "+
        '</script> ';

  var currTextWidgetResponsiveScripts = '\n' + currTextWidgetDefaultResponsive;
  if (typeof(this_widget_text['widgetTextSizeTablet']) != 'undefined') {

    if (this_widget_text['widgetTextSizeTablet'] == '') {
      this_widget_text['widgetTextSizeTablet'] = widgetTextSize;
    }
    if (this_widget_text['widgetTextSizeMobile'] == '') {
      this_widget_text['widgetTextSizeMobile'] = widgetTextSize;
    }
    var currTextWidgetResponsiveTablet  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-m') ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeTablet']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightTablet']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingTablet']+"px',});  }"+
        
        "});"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-m' ) { "+
        
        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeTablet']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightTablet']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingTablet']+"px',});"+
        
        "}"+
        " "+
        '</script> ';

    var currTextWidgetResponsiveMobile  = ''+
        '<script>'+
        "jQuery('.responsiveBtn').live('click',function(){"+
        " if (jQuery(this).hasClass('rbt-s') ) { "+

        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeMobile']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightMobile']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingMobile']+"px',});  }"+
        
        "});"+
        "var currentVPS = jQuery('.currentViewPortSize').val();"+
        "if ( currentVPS == 'rbt-s' ) { "+
        
        "  jQuery('#"+pbWidgetTextId+"').animate({'font-size':'"+this_widget_text['widgetTextSizeMobile']+"px', 'line-height':'"+this_widget_text['widgetTextLineHeightMobile']+"em', 'letter-spacing':'"+this_widget_text['widgetTextSpacingMobile']+"px',});"+
        
        "}"+
        " "+
        '</script> ';

        currTextWidgetResponsiveScripts = '\n' + currTextWidgetDefaultResponsive + '\n' + currTextWidgetResponsiveTablet + '\n' + currTextWidgetResponsiveMobile;
  }


  

  widgetTextBold = ''; widgetTextItalic = ''; widgetTextUnderlined = '';
    if (this_widget_text['widgetTextBold'] == true) { widgetTextBold = 'bold'; }
    if (this_widget_text['widgetTextItalic'] == true) { widgetTextItalic = 'italic'; }
    if (this_widget_text['widgetTextUnderlined'] == true) { widgetTextUnderlined = 'underline'; }

  var textWidgetContentStyles = 'text-align:'+widgetTextAlignment+'; color:'+widgetTextColor+'; font-size:'+widgetTextSize+'px; font-weight:'+widgetTextWeight+'; text-transform:'+widgetTextTransform+';  font-family:'+widgetTextFamily.replace(/\+/g, ' ')+',sans-serif; font-weight:'+widgetTextBold+'; font-style:'+widgetTextItalic+'; text-decoration:'+widgetTextUnderlined+'; line-height:'+widgetTextLineHeight+'em;  letter-spacing:'+widgetTextSpacing+'px; '+widgetStyling+' ';
  textWidgetContentHTML = '';
  lineBreakTag = '';

  textWidgetContentHTML = widgetTextContent.replace(/\n/g, "<br>");
  
  textWidgetContentComplete = '<'+widgetTextTag+' id="'+pbWidgetTextId+'" style="'+textWidgetContentStyles+'"> '+textWidgetContentHTML+' </'+widgetTextTag+'> '+'\n <link rel="stylesheet"href="https://fonts.googleapis.com/css?family='+widgetTextFamily+'">' + currTextWidgetResponsiveScripts;

  return textWidgetContentComplete;

}



function embededVideoRender(this_widget_widgetEmbedVideo){

  widgetEvidVideoType = this_widget_widgetEmbedVideo['widgetEvidVideoType'];
  widgetEvidVideoLink = this_widget_widgetEmbedVideo['widgetEvidVideoLink'];
  widgetEvidVideoAutoplay = this_widget_widgetEmbedVideo['widgetEvidVideoAutoplay'];
  widgetEvidVideoPlayerControls = this_widget_widgetEmbedVideo['widgetEvidVideoPlayerControls'];
  widgetEvidVideoTitle = this_widget_widgetEmbedVideo['widgetEvidVideoTitle'];
  widgetEvidVideoSuggested = this_widget_widgetEmbedVideo['widgetEvidVideoSuggested'];
  widgetEvidImageOverlay = this_widget_widgetEmbedVideo['widgetEvidImageOverlay']; 
  widgetEvidImageUrl = this_widget_widgetEmbedVideo['widgetEvidImageUrl'];
  widgetEvidImageIcon = this_widget_widgetEmbedVideo['widgetEvidImageIcon'];
  widgetEvidImageLightbox = this_widget_widgetEmbedVideo['widgetEvidImageLightbox'];
  widgetEvidImageIconColor = this_widget_widgetEmbedVideo['widgetEvidImageIconColor'];

  widgetEvidPlayerId = 'POPB_player'+Math.floor((Math.random() * 2000) + 100);

  if (widgetEvidVideoAutoplay == 'true') {
      widgetEvidVideoAutoplay = 1;
    }else{
      widgetEvidVideoAutoplay = 0;
    }

    if (widgetEvidVideoPlayerControls == 'true') {
      widgetEvidVideoPlayerControls = 1;
    }else{
      widgetEvidVideoPlayerControls = 0;
    }

    if (widgetEvidVideoSuggested == 'true') {
      widgetEvidVideoSuggested = 1;
    }else{
      widgetEvidVideoSuggested = 0;
    }

    if (widgetEvidVideoTitle == 'true') {
      widgetEvidVideoTitle = 1;
    }else{
      widgetEvidVideoTitle = 0;
    }

  if (widgetEvidVideoType == 'youtube') {


    if (widgetEvidImageOverlay == 'true') {
      widgetEvidVideoAutoplay = 1;
    }


    function embededyoutube_parser(url){
      var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      var match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }

    widgetEvidVideoLink =  embededyoutube_parser(widgetEvidVideoLink);


    videoIframeURL = "https://www.youtube.com/embed/"+widgetEvidVideoLink+"?autoplay="+widgetEvidVideoAutoplay+"&amp;rel="+widgetEvidVideoSuggested+"&amp;showinfo="+widgetEvidVideoTitle+"&amp;controls="+widgetEvidVideoPlayerControls;

    if (widgetEvidImageOverlay == 'true' ) {
      thumbnailVidIframe = '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> ';

      thumbnailVidIframe = thumbnailVidIframe.replace(/"/g, "'");
      thumbImageScript = '<script>'+
        'jQuery("#thumbImage_'+widgetEvidPlayerId+'").click(function(){'+
          'jQuery("#'+widgetEvidPlayerId+'").html("'+thumbnailVidIframe+'");'+
          'jQuery(this).remove();'+
        '}); '+
      '</script>';
      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0; cursor:pointer;" >  <div id="thumbImage_'+widgetEvidPlayerId+'" > <i class="fa fa-play" style="color:'+widgetEvidImageIconColor+';font-size:100px;z-index:1;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 10px solid '+widgetEvidImageIconColor+';padding: 35px 45px;border-radius: 200px; display:'+widgetEvidImageIcon+'; "></i> <img style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"  src="'+widgetEvidImageUrl+'"> </div> </div> \n'+thumbImageScript;

    } else{

      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%;  padding-top: 25px; height: 0;" > <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> </div>';

    }

  } else if(widgetEvidVideoType == 'vimeo'){

    if (widgetEvidImageOverlay == 'true') {
      widgetEvidVideoAutoplay = 1;
    }

    embededVimeo_url_parser = /https?:\/\/(?:www\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|)(\d+)(?:$|\/|\?)/;

    var embededVimeo_urlMatch = widgetEvidVideoLink.match(embededVimeo_url_parser);

    if (embededVimeo_urlMatch) {
      embededVimeo_url = embededVimeo_urlMatch[3];
    }else{
      embededVimeo_url = 'Not Valid URL';
    }

    videoIframeURL = "https://player.vimeo.com/video/"+embededVimeo_url+"?autoplay="+widgetEvidVideoAutoplay+"&amp;rel="+widgetEvidVideoSuggested+"&amp;title="+widgetEvidVideoTitle;

    if (widgetEvidImageOverlay == 'true' ) {
      thumbnailVidIframe = '<iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> ';

      thumbnailVidIframe = thumbnailVidIframe.replace(/"/g, "'");
      thumbImageScript = '<script>'+
        'jQuery("#thumbImage_'+widgetEvidPlayerId+'").click(function(){'+
          'jQuery("#'+widgetEvidPlayerId+'").html("'+thumbnailVidIframe+'");'+
          'jQuery(this).remove();'+
        '}); '+
      '</script>';
      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%; padding-top: 25px; height: 0; cursor:pointer;" >  <div id="thumbImage_'+widgetEvidPlayerId+'" > <i class="fa fa-play" style="color:'+widgetEvidImageIconColor+';font-size:100px;z-index:1;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);border: 10px solid '+widgetEvidImageIconColor+';padding: 35px 45px;border-radius: 200px; display:'+widgetEvidImageIcon+'; "></i> <img style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"  src="'+widgetEvidImageUrl+'"> </div> </div> \n'+thumbImageScript;

    } else{

      POPBVideoIframeContainer = '<div id="'+widgetEvidPlayerId+'" style="position: relative; padding-bottom: 56.25%;  padding-top: 25px; height: 0;" > <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="'+videoIframeURL+'" frameborder="0" allowfullscreen></iframe> </div>';

    }

    


  }

  return POPBVideoIframeContainer;

}