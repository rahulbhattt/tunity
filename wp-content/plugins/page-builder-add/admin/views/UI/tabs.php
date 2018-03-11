<?php if ( ! defined( 'ABSPATH' ) ) exit; ?>
<div class="tabs">
  <ul class="tab-links">
    <li class="active"><a href="#tab1" class="tab_link">Editor</a></li>
    <li><a href="#tab2" class="tab_link">Templates</a></li>
    <!-- <li><a href="#tab3" class="tab_link">Page Options</a></li> -->
    <li><a href="#tab5" class="tab_link exportTemplateTab_ppb" style="display: none;">Insert Template</a></li>
    <li><a href="#tab7" class="tab_link exportTemplateTab_ppb" style="display: none;">Export Template</a></li>
    <li><a href="#tab6" class="tab_link abTestTab_ppb" style="display: none;">A/B Testing</a></li>
    <li><a href="#tabFormSubmissions" class="tab_link formSubmissionsTab" style="display: none;">Form Submissions</a></li>
    <li><a href="#tab4" class="tab_link">Email Subscribers</a></li>
    
  </ul>
  <div class="tab-content pb_editor_tab_content" style="overflow: hidden; background: #fff;">
    <div id="tab1" class="tab active">
      <div class="lpp_modal pb_loader_container_pageload" style="display: block !important;">
        <div class="pb_loader" id='pb_loader_pageinit'></div>
      </div>
    <div class="pb_fullScreenEditorButton" style="padding: 20px; color:#fff; background-color: #4e82ff; margin: 100px auto 0px; text-align: center; max-width: 175px; font-size: 22px; cursor: pointer; border-bottom: 8px solid rgb(37, 75, 165); display: none;"> Enable Editor <span class="dashicons dashicons-editor-expand"></span> </div>
    <div class="pb_fullScreenEditorButtonClose" style= "color:#fff; background-color: #4e82ff; padding: 20px; background: #4e82ff; margin: 10px auto; text-align: center; max-width: 175px; font-size: 22px; display: none;cursor: pointer;border-bottom: 8px solid rgb(37, 75, 165); ">Close Editor <span class="dashicons dashicons-editor-contract"></span> </div>
    <br>
    <br>
    <br>
      <div id="pbWrapper">
        <ul id="container">
          <script type="text/template" id="item-template"></script>
        </ul>
      </div>
      <div class="newRowBtnContainerVisible" style="display: none;">  
        <div class="newRowBtnContainerSections"> <div class="addNewRowVisible  row-section-btn" style="background:#5AB1F7;" > ADD NEW ROW</div> 
        </div>      
        <div class="newRowBtnContainerSections" style="display: none;">    <div class="addNewGlobalRowVisible  row-section-btn" style="background:#F1D204;" > INSERT GLOBAL ROW</div>   
        </div>  
      </div>
      <div id="SavePage" class="btn-green aligncenter large-btn SavePage">Save Page</div>
    </div>
    <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/tabs/templates-tab.php'); ?>
    <div id="tab3" class="tab">

      

            
    </div>
    <div id="tab4" class="tab">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/widgets/widget-form-subs-list.php'); ?>    
    </div>
    <div id="tab5" class="tab" style="width: 100%; background: #fff;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/tabs/insertTemplate.php'); ?>    
    </div>
    <div id="tab6" class="tab" style="width: 100%; background: #fff;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/tabs/abSelect.php'); ?>    
    </div>
    <div id="tabFormSubmissions" class="tab" style="width: 100%; background: #fff;">
        <?php include(ULPB_PLUGIN_PATH.'admin/views/UI/tabs/form-submissions.php'); ?>    
    </div>
    <div id="tab7" class="tab" style="width: 100%; background: #fff;">
        <p style="  text-indent: 50px;"> Please click on export template button to get the current template code or paste your template code in field below and click on import template to update current template with imported one.</p>
        <br>
        <br>
        <textarea class="pb_export_template" style="width: 80%; height: 400px;"></textarea>   
        <br>
        <div class="btn updateExportedTemplate large-btn" style="padding: 20px; margin-left: 45px;"> Import Template</div>
        <div class="btn btn-red populateCurrentTemplate large-btn" style="padding: 20px;"> Export Template</div>
    </div>
  </div>
  <br>
</div>