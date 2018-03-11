<?php
if ( ! defined( 'ABSPATH' ) ) exit; 


$this_widget_imageSlider = $thisWidget['widgetImageSlider'];
$pbSliderImagesURL = $this_widget_imageSlider['pbSliderImagesURL'];
$pbSliderContent = $this_widget_imageSlider['pbSliderContent'];
$pbSliderAuto = $this_widget_imageSlider['pbSliderAuto'];
$pbSliderDelay = $this_widget_imageSlider['pbSliderDelay'];
$pbSliderPager = $this_widget_imageSlider['pbSliderPager'];
$pbSliderNav = $this_widget_imageSlider['pbSliderNav'];
$pbSliderRandom = $this_widget_imageSlider['pbSliderRandom'];
$pbSliderPause = $this_widget_imageSlider['pbSliderPause'];
  

  if (!isset($this_widget_imageSlider['pbSliderHeight']) ) {
    $pbSliderHeight = '400';
    $pbSliderHeightUnit = 'px';
  }else{
    $pbSliderHeight = $this_widget_imageSlider['pbSliderHeight'];
    $pbSliderHeightUnit = $this_widget_imageSlider['pbSliderHeightUnit'];
  }
  if (!isset($this_widget_imageSlider['pbSliderContent']) ) {
    $contentSlider = false;
  }else{
    $contentSlider = true;
  }

  $pbImageSliderUniqueId = rand(10,99)*120+200;
  $pbImageSliderUniqueId = "popb_Slider_"."$pbImageSliderUniqueId";

  $pbSliderContainer =  "<div class='rslides_container' style='min-height:100px;'> <ul class='rslides' id='".$pbImageSliderUniqueId."'>";
  $pbSliderAllSlides = '';

  foreach ($pbSliderImagesURL as $index => $val) {

	    $pbSliderPrevSlides = $pbSliderAllSlides;
	    

	    if ($contentSlider == false) {$imageSlideContent = ''; }
	    else{

	      $pbSlideContent = $pbSliderContent[$index];
	      $imageSlideHeading = '';  $imageSlideDesc = ''; $imageSlideButton = '';
	      if ($pbSlideContent['imageSlideHeading'] != '') {
	        $imageSlideHeading = "<h2>".$pbSlideContent['imageSlideHeading']."</h2>";
	      }

	      if ($pbSlideContent['imageSlideDesc'] != '') {
	        $imageSlideDesc = "<p>". $pbSlideContent['imageSlideDesc'] ."</p>";
	      }

	      if ($pbSlideContent['imageSlideButtonText'] != '') {
	        $imageSlideButton = "<a href=".$pbSlideContent['imageSlideButtonURL']." target='_blank'> <button>".$pbSlideContent['imageSlideButtonText']."</button> </a>";

	      }
	      
	      $imageSlideContent = "<div class='popb_slide_content'>".$imageSlideHeading." ".$imageSlideDesc."  ".$imageSlideButton."   </div>";
	    }
	    

	    $pbSliderThisSlide = "<li> <div class='popb_slideContainer' style='background:url(".$val."); width: 100%;height:".$pbSliderHeight.$pbSliderHeightUnit.";background-size: cover; background-repeat: no-repeat;background-position: center;'> ".$imageSlideContent."  </div> </li>";
	    $pbSliderAllSlides = $pbSliderPrevSlides .  $pbSliderThisSlide;
  };

  $pbSliderContainerClose = "</ul> </div>";

  $pbSliderScript = "<script>  jQuery(function() {  jQuery('#".$pbImageSliderUniqueId."').responsiveSlides({  auto:  ".$pbSliderAuto.",  speed: 500,             timeout:  ".$pbSliderDelay.",  pager:  ".$pbSliderPager.",            nav:  ".$pbSliderNav.",               random:  ".$pbSliderRandom.",            pause:  ".$pbSliderPause.",        namespace: 'pb-centeredSlider',  });   });   </script>";

  if ($contentSlider == false){ 
    $pbSliderStyling = '';
   }else{

    $slideHeadingStyles = $this_widget_imageSlider['slideHeadingStyles'];
    $slideDescStyles = $this_widget_imageSlider['slideDescStyles'];
    $slideButtonStyles = $this_widget_imageSlider['slideButtonStyles'];
    $pbSliderContentBgColor = $this_widget_imageSlider['pbSliderContentBgColor'];

    $slideHeadingBold = ''; $slideHeadingItalic = ''; $slideHeadingUnderlined = '';
    if ($slideHeadingStyles['slideHeadingBold'] == true) { $slideHeadingBold = 'bold'; }
    if ($slideHeadingStyles['slideHeadingItalic'] == true) { $slideHeadingItalic = 'italic'; }
    if ($slideHeadingStyles['slideHeadingUnderlined'] == true) { $slideHeadingUnderlined = 'underline'; }


    if (isset($slideHeadingStyles['slideHeadingFontFamily']) ) {
      $slideHeadingFontFamily = str_replace('+', ' ', $slideHeadingStyles['slideHeadingFontFamily']);
      array_push($thisColFontsToLoad, $this_widget_menu_content['pbMenuFontFamily']);
    } else{
      $slideHeadingFontFamily = ' none';
    }

    if (isset($slideDescStyles['slideDescFontFamily']) ) {
      $slideDescFontFamily = str_replace('+', ' ', $slideDescStyles['slideDescFontFamily']);
      array_push($thisColFontsToLoad, $this_widget_menu_content['pbMenuFontFamily']);

    } else{
      $slideDescFontFamily = ' none';
    }

    if (isset($slideButtonStyles['slideButtonBtnFontFamily']) ) {
      $slideButtonBtnFontFamily = str_replace('+', ' ', $slideButtonStyles['slideButtonBtnFontFamily']);
      array_push($thisColFontsToLoad, $this_widget_menu_content['pbMenuFontFamily']);
    } else{
      $slideButtonBtnFontFamily = ' none';
    }

    $pbSliderHeadingStyles = ''
    .'color:'.$slideHeadingStyles['slideHeadingColor'].';'
    .'font-size:'.$slideHeadingStyles['slideHeadingSize'].'px;'
    .' letter-spacing:'.$slideHeadingStyles['slideHeadingLetterSpacing'].'px;'
    .' line-height:'.$slideHeadingStyles['slideHeadingLineHeight'].'px;'
    .' font-family:'.$slideHeadingFontFamily.';'
    .' font-weight:'.$slideHeadingBold.';'
    .' font-style:'.$slideHeadingItalic.';'
    .'  text-decoration:'.$slideHeadingUnderlined.';';


    $slideDescBold = ''; $slideDescItalic = ''; $slideDescUnderlined = '';
    if ($slideDescStyles['slideDescBold'] == true) { $slideDescBold = 'bold'; }
    if ($slideDescStyles['slideDescItalic'] == true) { $slideDescItalic = 'italic'; }
    if ($slideDescStyles['slideDescUnderlined'] == true) { $slideDescUnderlined = 'underline'; }

    $pbSliderDescStyles = ''
    .'color:'.$slideDescStyles['slideDescColor'].';'
    .'font-size:'.$slideDescStyles['slideDescSize'].'px;'
    .' letter-spacing:'.$slideDescStyles['slideDescLetterSpacing'].'px;'
    .' line-height:'.$slideDescStyles['slideDescLineHeight'].'px;'
    .' font-family:'.$slideDescFontFamily.';'
    .' font-weight:'.$slideDescBold.';'
    .' font-style:'.$slideDescItalic.';'
    .'  text-decoration:'.$slideDescUnderlined.';';

    $pbSliderBtnStyles = ''
      .'padding:'.$slideButtonStyles['slideButtonBtnHeight'].'px '.$slideButtonStyles['slideButtonBtnWidth'].'px;'
      .'background:'.$slideButtonStyles['slideButtonBtnBgColor'].';'
      .'background-color:'.$slideButtonStyles['slideButtonBtnBgColor'].';'
      .'color:'.$slideButtonStyles['slideButtonBtnColor'].';'
      .'font-size:'.$slideButtonStyles['slideButtonBtnFontSize'].'px;'
      .'font-family:'.$slideButtonBtnFontFamily.';'
      .'letter-spacing:'.$slideButtonStyles['slideButtonBtnFontLetterSpacing'].';px'
      .'border-width:'.$slideButtonStyles['slideButtonBtnBorderWidth'].';px'
      .'border-color:'.$slideButtonStyles['slideButtonBtnBorderColor'].';'
      .'border-radius:'.$slideButtonStyles['slideButtonBtnBorderRadius'].'px;'
      .'border-style:solid;';

    $pbSliderStyling = '<style> #'.$pbImageSliderUniqueId.' .popb_slide_content{ position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); text-align:center; background:'.$pbSliderContentBgColor.'; padding:3% 6%;} '."\n" 
    . '#'.$pbImageSliderUniqueId.' .popb_slide_content h2{ '.$pbSliderHeadingStyles.'  } '."\n"
    . '#'.$pbImageSliderUniqueId.' .popb_slide_content p{ '.$pbSliderDescStyles.'  }'
    . '#'.$pbImageSliderUniqueId.' .popb_slide_content button{ '.$pbSliderBtnStyles.'  } '."\n"
    .'</style>';

  }

    

  $widgetSliderLoadScripts = true;

  $widgetContent = $pbSliderContainer  .  $pbSliderAllSlides  .   $pbSliderContainerClose  .   $pbSliderScript . $pbSliderStyling;

?>