<?php
if ( ! defined( 'ABSPATH' )) exit;
add_action('admin_menu', 'add_testimonial_page');

function add_testimonial_page()    {
       add_submenu_page( 'edit.php?post_type=testimonial', 'Testimonial Designs', 'Testimonial Designs', 'manage_options', 'testimonialdesigns-submenu-page', 'testimonialdesigns_page_callback' ); 
       
    }
function testimonialdesigns_page_callback() {
  $result ='
  <div class="wrap">
      <div id="icon-tools" class="icon32"></div><h2>Testimonial Designs</h2>
      <h2>Free Testimonial Designs</h2>
      <div class="medium-3 wpcolumns"><div class="postdesigns"><img  src="'.plugin_dir_url( __FILE__ ).'designs/design-1.jpg"><p><code>[sp_testimonials design="design-1"] and [sp_testimonials_slider design="design-1"]</code></p></div></div>
      <div class="medium-3 wpcolumns"><div class="postdesigns"><img  src="'.plugin_dir_url( __FILE__ ).'designs/design-2.jpg"><p><code>[sp_testimonials design="design-2"] and [sp_testimonials_slider design="design-2"]</code></p></div></div>
      <div class="medium-3 wpcolumns"><div class="postdesigns"><img  src="'.plugin_dir_url( __FILE__ ).'designs/design-4.jpg"><p><code>[sp_testimonials design="design-3"] and [sp_testimonials_slider design="design-3"]</code></p></div></div>
      <div class="medium-3 wpcolumns"><div class="postdesigns"><img  src="'.plugin_dir_url( __FILE__ ).'designs/design-3.jpg"><p><code>[sp_testimonials design="design-4"] and [sp_testimonials_slider design="design-4"]</code></p></div></div>  
  
  </div>';
		
	echo $result;
}
function testimonial_post_admin_style(){
	?>
	<style type="text/css">
	.postdesigns{-moz-box-shadow: 0 0 5px #ddd;-webkit-box-shadow: 0 0 5px#ddd;box-shadow: 0 0 5px #ddd; background:#fff; padding:10px;  margin-bottom:15px;}
	.wpcolumn, .wpcolumns {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;  box-sizing: border-box;}
.postdesigns img{width:100%; height:auto;}
@media only screen and (min-width: 40.0625em) {  
  .wpcolumn,
  .wpcolumns {position: relative;padding-left:10px;padding-right:10px;float: left; }
  .medium-1 {    width: 8.33333%; }
  .medium-2 {    width: 16.66667%; }
  .medium-3 {    width: 25%; }
  .medium-4 {    width: 33.33333%; }
  .medium-5 {    width: 41.66667%; }
  .medium-6 {    width: 50%; }
  .medium-7 {    width: 58.33333%; }
  .medium-8 {    width: 66.66667%; }
  .medium-9 {    width: 75%; }
  .medium-10 {    width: 83.33333%; }
  .medium-11 {    width: 91.66667%; }
  .medium-12 {    width: 100%; } 
   }
	</style>
<?php }
add_action('admin_head', 'testimonial_post_admin_style');