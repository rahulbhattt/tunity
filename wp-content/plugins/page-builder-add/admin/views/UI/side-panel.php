<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div style="display: none;">
  <div id="sideOptions">
  <br>
  <h2 style="text-align: center;">Advanced Options</h2>
    <div id='extra_options' style="margin-left: 15px;">
    <br>
    <p id='label'>Set as Front Page : </p>
    <label class="switch" id="setFrontPage">
      <input type="checkbox" class="setFrontPage" name='is_front_page' value='true' <?php checked( 'true', $is_front_page); ?> >
      <div class="slider round"></div>
    </label>
    <br>
    <br>
    <br>
    <p></p>
    <p id='label'>Load wp_head :  </p>
    <label class="switch" id="loadWpHead">
      <input type="checkbox" class="loadWpHead" name='load_wphead' value='true' <?php checked( 'true', $loadWpHead); ?> >
      <div class="slider round"></div>
    </label>
    <br>
    <br>
    <p style="font-size:12px; font-style:italic;">This will load your theme header scripts.</p>
    <br>
    <p id='label'> Load wp_footer :  </p>
    <label class="switch" id="loadWpFooter">
      <input type="checkbox" class="loadWpFooter" name='load_wpfooter' value='true'  <?php checked( 'true', $loadWpFooter); ?>>
      <div class="slider round"></div>
    </label>
    <br>
    <br>
    <p style="font-size:12px; font-style:italic;">This will load your theme footer scripts.</p>
    </div>
  </div>
</div>