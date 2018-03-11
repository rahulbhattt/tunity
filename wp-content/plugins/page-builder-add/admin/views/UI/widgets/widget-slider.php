<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="tabs" style="min-width: 380px;">
  <ul class="tab-links" >
    <li class="active" style="margin: 0;"><a href="#ims_cf1" class="tab_link">Images</a></li>
    <li style="margin: 0;"><a href="#ims_cf3" class="tab_link">Content Design</a></li>
    <li style="margin: 0;"><a href="#ims_cf2" class="tab_link">Slider Settings</a></li>
  </ul>
<div class="tab-content" style="box-shadow:none;">
	<div id="ims_cf1" class="tab active">
        <div class="pbp_form" style="background: #fff; padding:20px 10px 20px 25px; width: 99%;" >
          <div class="btn" id="addNewList" > <span class="dashicons dashicons-plus-alt"></span> Add Slide </div>
          <br>
          <br>
          <ul class="sortableAccordionWidget  sliderImageSlidesContainer">
          </ul>
        </div>
	</div>
	<div id="ims_cf2" class="tab" style="background: #fff; padding:20px 10px 20px 25px; width: 99%;">
        <label>Slider Height </label>
        <input type="number" class="pbSliderHeight" id="pbSliderHeight" value='' style="width:65px;">
        <select class="pbSliderHeightUnit" value='' style="width:50px;">
            <option value="px">px</option>
            <option value="%">%</option>
            <option value="vh">vh</option>
        </select>
        <br><br><hr><br>
        <label>Content Background :</label>
        <input type="text" class="color-picker_btn_two pbSliderContentBgColor" id="pbSliderContentBgColor" data-alpha='true' value='' data-alpha='true'>
        <br><br><hr><br>
        <label>AutoPlay</label>
        <select class="pbSliderAuto">
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <br><br><hr><br>
        <label>Slider Delay </label>
		<input type="number" class="pbSliderDelay" id="pbSliderDelay" value=''>
        <span> (In milliseconds) </span>
        <br><br><hr><br>
        <label>Bullet Navigation </label>
        <select class="pbSliderPager">
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <br><br><hr><br>
        <label>Navigation Buttons </label>
        <select class="pbSliderNav">
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <br><br><hr><br>
        <label>Random Order </label>
        <select class="pbSliderRandom">
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <br><br><hr><br>
        <label>Hover Pause </label>
        <select class="pbSliderPause">
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <br><br><hr><br><br><br>
	</div>
    <div id="ims_cf3" class="tab">
        <div class="pbp_form" style="background: #fff; padding:20px 10px 20px 25px; width: 99%;" >
            <div class="PB_accordion">
                <h3 class="handleHeader widgetOpsAccordionHandle">Headline </h3>
                <div class="accordContentHolder">
                    <br>
                    <label>Text Color :</label>
                    <input type="text" class="color-picker_btn_two slideHeadingColor" id="slideHeadingColor" data-alpha='true' value='#333333' data-alpha='true'>
                    <br><br><hr><br>
                    <label> Text Size :</label>
                    <input type="number" class="slideHeadingSize">
                    <br><br><hr><br>
                    <label> Letter Spacing :</label>
                    <input type="number" class="slideHeadingLetterSpacing">
                    <br><br><hr><br>
                    <label> Line Height :</label>
                    <input type="number" class="slideHeadingLineHeight">
                    <br><br><hr><br>
                    <label>Font family :</label>
                    <input class="slideHeadingFontFamily gFontSelectorulpb" id="slideHeadingFontFamily">
                    <br><br><hr><br>
                    <label for="slideHeadingBold" class="checkboxBtnLabel"> Bold </label>
                    <input type="checkbox" id="slideHeadingBold" class="slideHeadingBold popb_checkbox">
                    <label for="slideHeadingItalic" class="checkboxBtnLabel"> Italic </label>
                    <input type="checkbox" id="slideHeadingItalic" class="slideHeadingItalic popb_checkbox">
                    <label for="slideHeadingUnderlined" class="checkboxBtnLabel"> Underlined </label>
                    <input type="checkbox" id="slideHeadingUnderlined" class="slideHeadingUnderlined popb_checkbox">
                </div>
                <h3 class="handleHeader widgetOpsAccordionHandle">Description </h3>
                <div class="accordContentHolder">
                    <br>
                    <label>Text Color :</label>
                    <input type="text" class="color-picker_btn_two slideDescColor" id="slideDescColor" data-alpha='true' value='#333333'>
                    <br><br><hr><br>
                    <label> Text Size :</label>
                    <input type="number" class="slideDescSize">
                    <br><br><hr><br>
                    <label> Letter Spacing :</label>
                    <input type="number" class="slideDescLetterSpacing">
                    <br><br><hr><br>
                    <label> Line Height :</label>
                    <input type="number" class="slideDescLineHeight">
                    <br><br><hr><br>
                    <label>Font family :</label>
                    <input class="slideDescFontFamily gFontSelectorulpb" id="slideDescFontFamily">
                    <br><br><hr><br>
                    <label for="slideDescBold" class="checkboxBtnLabel"> Bold </label>
                    <input type="checkbox" id="slideDescBold" class="slideDescBold popb_checkbox">
                    <label for="slideDescItalic" class="checkboxBtnLabel"> Italic </label>
                    <input type="checkbox" id="slideDescItalic" class="slideDescItalic popb_checkbox">
                    <label for="slideDescUnderlined" class="checkboxBtnLabel"> Underlined </label>
                    <input type="checkbox" id="slideDescUnderlined" class="slideDescUnderlined popb_checkbox">
                </div>
                <h3 class="handleHeader widgetOpsAccordionHandle">Button </h3>
                <div class="accordContentHolder">
                    <br>
                    <label> Button Height :</label>
                    <input type="number" class="slideButtonBtnHeight">
                    <br><br><hr><br>
                    <label> Button Width :</label>
                    <input type="number" class="slideButtonBtnWidth">
                    <br><br><hr><br>
                    <label>Background Color :</label>
                    <input type="text" class="color-picker_btn_two slideButtonBtnBgColor" id="slideButtonBtnBgColor" value='#333333' data-alpha='true'>
                    <br><br><hr><br>
                    <label>Hover BG Color :</label>
                    <input type="text" class="color-picker_btn_two slideButtonBtnHoverBgColor" id="slideButtonBtnHoverBgColor" data-alpha='true' value='#333333' data-alpha='true'>
                    <br><br><hr><br>
                    <label>Hover Text Color :</label>
                    <input type="text" class="color-picker_btn_two slideButtonBtnHoverTextColor" id="slideButtonBtnHoverTextColor" data-alpha='true' value='#333333' data-alpha='true'>
                    <br><br><hr><br>
                    <label>Text Color :</label>
                    <input type="text" class="color-picker_btn_two slideButtonBtnColor" id="slideButtonBtnColor" data-alpha='true'>
                    <br><br><hr><br>
                    <label>Text size : </label>
                    <input type="number" class="slideButtonBtnFontSize">
                    <br><br><hr><br>
                    <label>Font family :</label>
                    <input class="slideButtonBtnFontFamily gFontSelectorulpb" id="slideButtonBtnFontFamily">
                    <br><br><hr><br>
                    <label>Letter Spacing : </label>
                    <input type="number" class="slideButtonBtnFontLetterSpacing">
                    <br><br><hr><br>
                    <label>Border Width: </label>
                    <input type="number" class="slideButtonBtnBorderWidth">
                    <br><br><hr><br>
                    <label>Border Color: </label>
                    <input type="text" class="color-picker_btn_two slideButtonBtnBorderColor" id="slideButtonBtnBorderColor" value='#ffffff'>
                    <br><br><hr><br>
                    <label>Border Radius: </label>
                    <input type="number" class="slideButtonBtnBorderRadius" max="100" min="0">
                    <br><br><hr><br>
                    <br>
                </div>

            </div>
        </div>
    </div>
</div>
</div>
<script type="text/javascript">
    (function($){

        var slideCountA = 80;
        jQuery('#addNewList').click(function(){
        jQuery('.sliderImageSlidesContainer').append('<li> <h3 class="handleHeader widgetOpsAccordionHandle">Slide <span class="dashicons dashicons-trash slideRemoveButton" style="float: right;"></span> </h3> <div class="accordContentHolder"> <br><br> <label>Slide Image :</label> <input id="image_location'+slideCountA+'" type="text" class="slideImgURL upload_image_button'+slideCountA+'" name="lpp_add_img_'+slideCountA+'" value="" placeholder="Insert Image URL here" style="width:40%;" /> <input id="image_location'+slideCountA+'" type="button" class="upload_bg_btn_imageSlider" data-id="'+slideCountA+'" value="Upload" /> <br> <br> <br> <br> <hr> <br> <br> <h4>Slide Content</h4> <br> <label>Slide Heading :</label> <input type="text" class="imageSlideHeading"> <br> <br> <br> <label>Slide Description :</label> <textarea class="imageSlideDesc"></textarea> <br> <br> <br> <label>Slide Button Text :</label> <input type="text" class="imageSlideButtonText"> <br> <br> <br> <label>Slide Button URL :</label> <input type="text" class="imageSlideButtonURL"> <br> <br> <br></div> </li>');

        jQuery( '.sliderImageSlidesContainer' ).accordion( "refresh" );

        slideCountA++;

    }); // CLICK function ends here.

    $(document).on( 'click','.slideRemoveButton', function(){
        $(this).parent().parent().remove();
        jQuery('.closeWidgetPopup').click();
    });

    $(document).on('click','.upload_bg_btn_imageSlider', function( event ){

            event.preventDefault();

            var id = $(this).data('id');

            // Create the media frame.
            file_frame = wp.media.frames.file_frame = wp.media({
              title: $( this ).data( 'uploader_title' ),
              button: {
                text: $( this ).data( 'uploader_button_text' ),
              },
              multiple: false  // Set to true to allow multiple files to be selected
            });

            // When an image is selected, run a callback.
            file_frame.on( 'select', function() {
              
              // We set multiple to false so only get one image from the uploader
              attachment = file_frame.state().get('selection').first().toJSON();
              $( '.upload_image_button'+id).val( attachment.url );
              $( '.upload_image_button'+id).trigger('change');
             
            });

            // Finally, open the modal
            file_frame.open();
        });

    })(jQuery);
</script>

<style type="text/css">
    .handleHeader{
        margin:0;
        background:#F1F5F9;
        color: #737e89;
        cursor: move !important;
    }
    .slideRemoveButton{
        cursor: pointer;
        padding: 7px;
        border-radius: 100px;
        background: #d2dde9;
        text-align: center;
        margin-top: -5px;
    }

    .slideDuplicateButton {
        cursor: pointer;
        padding: 7px;
        border-radius: 100px;
        background: #d2dde9;
        text-align: center;
        margin-top: -5px;
        margin-right: 5px;
    }

    .sliderImageSlidesContainer div{
        background: #fff;
    }
    .checkboxBtnLabel{
        width:60px !important;
    }
</style>