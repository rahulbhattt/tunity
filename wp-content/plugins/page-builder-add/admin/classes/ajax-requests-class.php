<?php
if ( ! defined( 'ABSPATH' ) ) exit;
class ULPB_Ajax_Requests {

	function __construct(){

		$this->_init();
		$this->_hooks();
		$this->_filters();

	}

	function _init(){
	}

	function _hooks(){

		//add_action( 'wp_ajax_nopriv_ulpb_admin_data', array( $this,'ulpb_admin_ajax')  );
		add_action( 'wp_ajax_ulpb_admin_data', array( $this,'ulpb_admin_ajax') );

		add_action( 'wp_ajax_ulpb_settings_data', array( $this,'ulpb_settings_page_ajax') );

		add_action( 'wp_ajax_nopriv_ulpb_subscribeForm_data', array( $this,'ulpb_subscribeForm_ajax')  );
		add_action( 'wp_ajax_ulpb_subscribeForm_data', array( $this,'ulpb_subscribeForm_ajax') );

		add_action( 'wp_ajax_nopriv_ulpb_formBuilderEmail_ajax', array( $this,'ulpb_formBuilderEmail_ajax')  );
		add_action( 'wp_ajax_ulpb_formBuilderEmail_ajax', array( $this,'ulpb_formBuilderEmail_ajax') );

		add_action( 'wp_ajax_nopriv_ulpb_subscribeForm_mailchimp_data', array( $this,'ulpb_subscribeForm_mailchimp_ajax')  );
		add_action( 'wp_ajax_ulpb_subscribeForm_mailchimp_data', array( $this,'ulpb_subscribeForm_mailchimp_ajax') );

		//add_action( 'wp_ajax_nopriv_ulpb_loadShortcode_content', array( $this,'ulpb_loadShortcode_content')  );
		add_action( 'wp_ajax_ulpb_loadShortcode_content', array( $this,'ulpb_loadShortcode_content') );

		//add_action( 'wp_ajax_nopriv_ulpb_get_global_row_content', array( $this,'ulpb_get_global_row_content')  );
		add_action( 'wp_ajax_ulpb_get_global_row_content', array( $this,'ulpb_get_global_row_content') );

		//add_action( 'wp_ajax_nopriv_ulpb_insert_template', array( $this,'ulpb_insert_template')  );
		add_action( 'wp_ajax_ulpb_insert_template', array( $this,'ulpb_insert_template') );

		//add_action( 'wp_ajax_nopriv_ulpb_subscribe_list_empty', array( $this,'ulpb_subscribe_list_empty_wp_ajax')  );
		add_action( 'wp_ajax_ulpb_subscribe_list_empty', array( $this,'ulpb_subscribe_list_empty_wp_ajax') );

		//add_action( 'wp_ajax_nopriv_ulpb_activate_pb_request', array( $this,'ulpb_update_pagebuilder_active_option')  );
		add_action( 'wp_ajax_ulpb_activate_pb_request', array( $this,'ulpb_update_pagebuilder_active_option') );

		add_action( 'wp_ajax_ulpb_empty_form_builder_data', array( $this,'ulpb_empty_form_builder_data') );

		add_action( 'wp_ajax_ulpb_delete_form_builder_entry', array( $this,'ulpb_delete_form_builder_entry') );

		add_action( 'wp_ajax_popb_send_user_feedback', array( $this, 'popb_send_user_feedback' ) );

	}

	function _filters(){

	}





function ulpb_admin_ajax(){


	if( current_user_can('editor') || current_user_can('administrator') ) {

		$nonce = $_REQUEST['POPB_nonce'];
		if ( ! wp_verify_nonce( $nonce, 'POPB_data_nonce' ) ) {
			die( 'Security check' ); 
		}else{

			if($_SERVER['REQUEST_METHOD'] == 'GET') {

		    	$page_id = intval($_GET['page_id']);
		    	$data = get_post_meta( $page_id, 'ULPB_DATA', true );
		   		echo json_encode( $data );
		   		
		   		exit();
			} elseif($_SERVER['REQUEST_METHOD'] == 'PUT') {
			} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {

				$data = json_decode( file_get_contents( 'php://input' ), true );
				$page_id  = intval($data['pageID']);
				$postType  = $data['postType'];
				$pageStatus = $data['pageStatus'];
				$pageTitle    = $data['pageOptions']['pageSeoName'];
				$pageLink    = $data['pageOptions']['pageLink'];
				$setFrontPage    = $data['pageOptions']['setFrontPage'];
				$loadWpHead    = $data['pageOptions']['loadWpHead'];
				$loadWpFooter    = $data['pageOptions']['loadWpFooter'];
				$user_id = get_current_user_id();
				$post = array(
					'ID'		=> wp_strip_all_tags($page_id),
					'post_title' => wp_strip_all_tags($pageTitle),
					'post_name' => wp_strip_all_tags($pageLink),
					'post_status' => wp_strip_all_tags($pageStatus),           
					'post_type' => "$postType"  
				);
				$post_id =  wp_insert_post($post);
				

				update_post_meta( $page_id, 'ULPB_DATA', $data );
				update_post_meta( $page_id, 'ULPB_FrontPage', $setFrontPage);
				update_post_meta( $page_id, 'ULPB_loadWpHead', $loadWpHead);
				update_post_meta( $page_id, 'ULPB_loadWpFooter', $loadWpFooter);
				$dataTest = get_post_meta( $page_id, 'ULPB_DATA', true );
				if (!empty($dataTest)) {
					echo json_encode( 'Data Saved' );
				}
		   		exit();
			}
		}

	}

} //  ulpb_admin_ajax() ends here . 


function ulpb_settings_page_ajax(){

	$plugOps_pageBuilder_settings_nonce = $_REQUEST['POPB_settings_page_nonce'];
	if ( ! wp_verify_nonce( $plugOps_pageBuilder_settings_nonce, 'POPB_settings_nonce' ) ) {
		die( 'Security check' ); 
	}else{

		$selectedPostTypes = $_POST['selectedPostTypes'];

		$selectedPostTypes = array_map( 'esc_attr', $selectedPostTypes );
		$ulpb_setting_option =	update_option( 'page_builder_SupportedPostTypes',$selectedPostTypes);
		

		if ($ulpb_setting_option == true) {
			echo "Data Saved Successfully";
			//var_dump($selectedPostTypes);
		}else{
			echo "Some Error Occurred!";
		}
		exit();
	}
}



function ulpb_subscribeForm_ajax($post){

	function check_input($data){

    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
	}


	if ( 
	    ! isset( $_POST['POPB_SubsForm_Nonce'] ) 
	    || ! wp_verify_nonce( $_POST['POPB_SubsForm_Nonce'], 'POPB_send_Subsform_data' ) 
	) {

	   print 'Sorry, Security error.';
	   exit;

	} else {

	   function ssm_send_to_db() {

			$ssm_post_id = filter_var($_REQUEST['sm_pID'],FILTER_SANITIZE_STRING);
			$s_name = filter_var($_REQUEST['sm_name'],FILTER_SANITIZE_STRING);
			$s_email = filter_var($_REQUEST['sm_email'],FILTER_SANITIZE_EMAIL);
			
			$PSdata = get_post_meta( $ssm_post_id, 'ULPB_DATA', true );

			if (!filter_var($s_email, FILTER_VALIDATE_EMAIL)) {
		      echo  "Invalid email format"; 
		      exit;
		    }
			
			$ssm_Name = wp_strip_all_tags($s_name);
			$ssm_Email = wp_strip_all_tags($s_email);

			$ssm_subscribers_list = get_post_meta($ssm_post_id,'ssm_subscribers_list',true);
			$array_size_prev = count($ssm_subscribers_list); 

			if ( ! is_array( $ssm_subscribers_list ) )
				$ssm_subscribers_list = array();

			$array_size_prev = count($ssm_subscribers_list);

			$newSubscriber = array(
					'name' => $ssm_Name,
					'email' => $ssm_Email
				);

			//var_dump(get_post_meta($ssm_post_id,'ssm_subscribers_list',true));

			$ssm_subscribers_list_pid = $ssm_subscribers_list;

			array_push($ssm_subscribers_list_pid, $newSubscriber);
			update_post_meta( $ssm_post_id, 'ssm_subscribers_list', $ssm_subscribers_list_pid, $unique = false);

			$ssm_subscribers_list2 = get_post_meta($ssm_post_id,'ssm_subscribers_list',true);
			$array_size_aft = count($ssm_subscribers_list2);
			
			return true;
		}


		$data = check_input($_REQUEST['sm_name']);
		$data .= check_input($_REQUEST['sm_email']);
		$data_lower = strtolower($data);
		$data_spaces = str_replace(' ','',$data_lower);

		$pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/";
		if (!preg_match($pattern,$data_spaces))
		{
		    echo ("Invalid Input");
		    exit;
		}
		else{

			$checkss = ssm_send_to_db();
			$ssm_post_id = filter_var($_REQUEST['sm_pID'],FILTER_SANITIZE_STRING);
			$sub_url ='';

			$returnSuccessArray = array();
				
			if ($checkss > 0) {
				$returnSuccessArray['database'] = 'success';
			}
			else{
				$returnSuccessArray['database'] = $checkss;
				
			}
			$returnSuccessArray['mailchimp'] = 'Disabled';
			echo json_encode($returnSuccessArray);
			exit();
		}
	}
		

}




function ulpb_subscribeForm_mailchimp_ajax(){
	function check_input($data)
	{
	    $data = trim($data);
	    $data = stripslashes($data);
	    $data = htmlspecialchars($data);
	    return $data;
	}

	if ( 
	    ! isset( $_POST['POPB_SubsForm_Nonce'] ) 
	    || ! wp_verify_nonce( $_POST['POPB_SubsForm_Nonce'], 'POPB_send_Subsform_data' ) 
	) {

	   print 'Sorry, Security error.';
	   exit;

	} else {

		$ssm_post_id = check_input($_POST['sm_pID']);
		$PSdata = get_post_meta( $ssm_post_id, 'ULPB_DATA', true );

		$multiOptionFieldValues = explode("\n", sanitize_textarea_field($_POST['pbFormTargetInfo']) );

		$currRow = (int)$multiOptionFieldValues[0];
		$currCol = trim($multiOptionFieldValues[1]);
		$currWidget = (int)$multiOptionFieldValues[2];

		$SubscribeFormBuilder = $PSdata['Rows'][$currRow][$currCol]['colWidgets'][$currWidget]['widgetSubscribeForm'];

		if (isset($SubscribeFormBuilder['formDataMailChimpApi'])) {
			$dataApiKey = $SubscribeFormBuilder['formDataMailChimpApi'];
			$dataListId = $SubscribeFormBuilder['formDataMailChimpListId'];
		}else{
			$dataApiKey = $PSdata['formMailchimp']['apiKey'];
			$dataListId = $PSdata['formMailchimp']['listId'];
		}
		
		include SMFB_PLUGIN_PATH.'/integrations/MCAPI.class.php';
		$sm_api_key = $dataApiKey;
		$api = new MCAPI($sm_api_key);

		$ssm_post_id = check_input($_REQUEST['sm_pID']);
		$smf_fName = check_input($_REQUEST['sm_name']);
		$smf_email = check_input($_REQUEST['sm_email']);

			$merge_vars = Array( 
		        'EMAIL' => $smf_email,
		        'FNAME' => $smf_fName
		    );
			
		$data = check_input($_REQUEST['sm_name']);
		$data .= check_input($_REQUEST['sm_email']);
		$data_lower = strtolower($data);
		$data_spaces = str_replace(' ','',$data_lower);

		$pattern = "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/";
		if (!preg_match($pattern,$data_spaces))
		{
		    echo ("Invalid Input");
		    exit; 
		}
		else{
			$list_id = $dataListId;
			$ssm_post_id = check_input($_REQUEST['sm_pID']);
			$retval = $api->listSubscribe($list_id, $smf_email,$merge_vars, '');

			$s_name = $smf_fName;
			$s_email = $smf_email;

			if (!filter_var($s_email, FILTER_VALIDATE_EMAIL)) {
			    echo  "Invalid email format"; 
			    exit;
			}
				
			$ssm_Name = wp_strip_all_tags($s_name);
			$ssm_Email = wp_strip_all_tags($s_email);

			$ssm_subscribers_list = get_post_meta($ssm_post_id,'ssm_subscribers_list',true);
			$array_size_prev = count($ssm_subscribers_list); 

			if ( ! is_array( $ssm_subscribers_list ) ){
				$ssm_subscribers_list = array();
			}

			$array_size_prev = count($ssm_subscribers_list);

			$newSubscriber = array(
						'name' => $ssm_Name,
						'email' => $ssm_Email
					);


			$ssm_subscribers_list_pid = $ssm_subscribers_list;

			array_push($ssm_subscribers_list_pid, $newSubscriber);
			
			$updateResultSubsList = update_post_meta( $ssm_post_id, 'ssm_subscribers_list', $ssm_subscribers_list_pid, $unique = false);

			

			$returnSuccessArray = array();
				
			if ($retval == true) {
				$returnSuccessArray['mailchimp'] = 'success';
			} else{
				$McErr = '';
				if($api->errorCode) {
					if((string)$api->errorCode == '-99'){
						$McErr = "Connection Blocked - Error code = -99";
					} elseif ((string)$api->errorCode == '214') {
						$McErr = "Subscriber Already Exists - Error code = 214";

					} elseif ((string)$api->errorCode == '104') {
						$McErr = "Invalid API Key Or List Name - Error code = 104";
									
					} elseif ((string)$api->errorCode == '200') {
						$McErr = "Invalid API Key Or List Name - Error code = 200";
						
					}  else {
						$McErr = "Unknown Error Occurred";
									
					}
				}
				$returnSuccessArray['mailchimp'] = $McErr;
			}

			$returnSuccessArray['database'] = $updateResultSubsList;

			echo json_encode($returnSuccessArray);
			exit();
			
		}
		
	}

		
}



function ulpb_formBuilderEmail_ajax(){


	if ( 
	    ! isset( $_POST['POPB_Form_Nonce'] ) 
	    || ! wp_verify_nonce( $_POST['POPB_Form_Nonce'], 'POPB_send_form_data' ) 
	) {

	   print 'Sorry, your nonce did not verify.';
	   exit;

	} else {

		if ( sanitize_text_field($_POST['messageFBHP']) ) {
			print 'Sorry, Something went wrong.';
			exit;
		}else{

			$ssm_post_id = sanitize_text_field( $_POST['psID'] );

			$PSdata = get_post_meta( $ssm_post_id, 'ULPB_DATA', true );

			$multiOptionFieldValues = explode("\n", sanitize_textarea_field($_POST['pbFormTargetInfo']) );

			$currRow = (int)$multiOptionFieldValues[0];
			$currCol = trim($multiOptionFieldValues[1]);
			$currWidget = (int)$multiOptionFieldValues[2];

			$formBuilder = $PSdata['Rows'][$currRow][$currCol]['colWidgets'][$currWidget]['widgetFormBuilder'];
			$thisFormEmailOptions = $formBuilder['widgetPbFbFormEmailOptions'];



			$formBuilderEnableMailChimp ='';
			$api = '';
			$list_id = '';
			$merge_vars = Array();
			$mc_submitterEmail = '';
			$merge_vars = Array();

			if (is_plugin_active( 'PluginOps-Extensions-Pack/extension-pack.php' ) || is_plugin_active( 'page-builder-add-mailchimp-extension/page-builder-add-mailchimp-extension.php' ) ) {
				$is_MCextensionActive = true;
			}
			
			if (isset($formBuilder['widgetPbFbFormMailChimp']) && $is_MCextensionActive == true ) {

				$widgetPbFbFormMailChimp = $formBuilder['widgetPbFbFormMailChimp'];
				$formBuilderEnableMailChimp = $widgetPbFbFormMailChimp['formBuilderEnableMailChimp'];

				if ($formBuilderEnableMailChimp == 'true') {
					$formBuilderMCAccountName = $widgetPbFbFormMailChimp['formBuilderMCAccountName'];
					$formBuilderMCApiKey = $widgetPbFbFormMailChimp['formBuilderMCApiKey'];

					include ULPB_PLUGIN_PATH.'/integrations/MCAPI.class.php';

					$api = new MCAPI($formBuilderMCApiKey);
					$list_id = $formBuilderMCAccountName;

					$merge_vars = Array();
					$mc_submitterEmail = '';
				}

			}



			$pbAllFormData = '';
			$fieldCount = 0;
			$submitterEmail = '';
			$formNameText = $thisFormEmailOptions['formEmailformName'];
			foreach ($_POST as $key => $value) {

				$thisFieldName =  sanitize_text_field( str_replace("field-$fieldCount-","" ,$key) );
				if ($thisFieldName == 'psID' || $thisFieldName == 'pbFormTargetInfo' || $thisFieldName == 'POPB_Form_Nonce' || $thisFieldName == '_wp_http_referer' || $thisFieldName == 'messageFBHP') {
				}else{

					if (is_array($value)) {
						$valueArray = $value;
						$value = '';
						foreach ($valueArray as $k => $v) {
							$newVal = ($k+1) . " : ". $v. ", \n";
							$value = $value. $newVal;
						}
					}
					if ($thisFormEmailOptions['formEmailFormat'] == 'plain') {


						$pbAllFormDataPlainThisValue = $thisFieldName." : \n ". sanitize_text_field($value) .' ' ;
						$pbAllFormDataPrevValues = $pbAllFormData;
						$pbAllFormData = $pbAllFormDataPrevValues."\n \n".$pbAllFormDataPlainThisValue;
						$formName = $thisFormEmailOptions['formEmailformName']."\n \n";

						if (strtolower($thisFieldName) == 'email') {
							$submitterEmail = sanitize_text_field($value);
						}

					} else{
						$pbAllFormDataHTMLThisValue = "<p><b>".$thisFieldName." : </b>  ". sanitize_text_field($value) ."</p>  <br> <hr>" ;
						$pbAllFormDataPrevValues = $pbAllFormData;
						$pbAllFormData = $pbAllFormDataPrevValues."<br>".$pbAllFormDataHTMLThisValue;
						$formName = '<br> <h3>'.$thisFormEmailOptions['formEmailformName'].'</h3> <br>';

						if (strtolower($thisFieldName) == 'email') {
							$submitterEmail = sanitize_text_field($value);
						}
					}


						$merge_vars[strtoupper($thisFieldName)] = sanitize_text_field($value);

						if (strtolower($thisFieldName) == 'email') {
							$mc_submitterEmail = sanitize_text_field($value);
						}
					
				}

				
				

				$fieldCount++;
			}


			if ($thisFormEmailOptions['formEmailFormat'] == 'HTML') {

				$pbAllEmailData =  "<html>
				<head>
				    <title> New Form Submission </title>
				</head>
				<body> 
				<div style='font-family:Helvetica,Arial,sans-serif;box-sizing:border-box;font-size:14px;width:100%!important;height:100%;line-height:1.6em;background-color:#f6f6f6;margin:0; padding:2% 10%;'>
				<div style='padding:2% 10%; background: #fff; margin:3% 10%;'>  ".$formName.$pbAllFormData." </div> </div>
				</body> </html>";

				add_filter( 'wp_mail_content_type', 'pb_form_email_set_html_mail_content_type' );
				function pb_form_email_set_html_mail_content_type() {
				    	return 'text/html';
				}
			}
			else{
				$pbAllEmailData =  $formName.$pbAllFormData;
			}

			$fromEmailAddress = home_url();
			$fromEmailAddress = trim($fromEmailAddress, '/');

			if (!preg_match('#^http(s)?://#', $fromEmailAddress)) {
			    $fromEmailAddress = 'http://' . $fromEmailAddress;
			}

			$urlParts = parse_url($fromEmailAddress);

			$OnlyDomain = preg_replace('/^www\./', '', $urlParts['host']);

			$fromEmailAddress =  "pluginOpsForm@".$OnlyDomain;

			
			$headers[]= "From: ".$thisFormEmailOptions['formEmailName']." <".$fromEmailAddress.">";

			if (!empty($submitterEmail)) {
				$headers[] = "Reply-To: ".$thisFormEmailOptions['formEmailName']." <".$submitterEmail.">";
			}

			if ($thisFormEmailOptions['formEmailSubject'] == '') {
				$formEmailSubject = 'PluginOps Form Submission';
			}else{
				$formEmailSubject = $thisFormEmailOptions['formEmailSubject'];
			}


			$pb_sendMail = wp_mail( $thisFormEmailOptions['formEmailTo'], $formEmailSubject, $pbAllEmailData, $headers );


			remove_filter( 'wp_mail_content_type', 'pb_form_email_set_html_mail_content_type' );
		 
			$MCreturnVal = '';
			if ($formBuilderEnableMailChimp == 'true') {
				$MCreturnVal = $api->listSubscribe($list_id, $mc_submitterEmail ,$merge_vars, false,true);
			}

				
				//var_dump($merge_vars);

				$prevFBallSubmissions = get_post_meta( $ssm_post_id, 'ulpb_formBuilder_data_submission', true );

				$submissionPostMetaValue = array('Form_Name'=> $formNameText, 'Form_Fields' => $merge_vars);

				if (!is_array($prevFBallSubmissions)) {
					$prevFBallSubmissions = array();
				}

				array_push($prevFBallSubmissions, $submissionPostMetaValue);

				$updateSubmissions = update_post_meta( $ssm_post_id, 'ulpb_formBuilder_data_submission', $prevFBallSubmissions, $unique = false );


				$returnSuccessArray = array();

				
				if ($pb_sendMail == true) {
					$returnSuccessArray['email'] = 'success';
				} else{
					$returnSuccessArray['email'] = 'Some Error Occured while sending the email!';
				}



				if ($formBuilderEnableMailChimp == 'true') {

					if ($MCreturnVal == true) {
						$returnSuccessArray['mailchimp'] = 'success';
					}else{
						
						$McErr = '';
							if((string)$api->errorCode == '-99'){
								$McErr = "Connection Blocked - Error code = -99";
							} elseif ((string)$api->errorCode == '214') {
							   $McErr = "Subscriber Already Exists - Error code = 214";
							   
							} elseif ((string)$api->errorCode == '104') {
								$McErr = "Invalid API Key Or List Name - Error code = 104";
								
							} elseif ((string)$api->errorCode == '200') {
								$McErr = "Invalid API Key Or List Name - Error code = 200";
								
							}  else {
								$McErr = "Unknown Error Occurred";
								
							}

						$returnSuccessArray['mailchimp'] = "$McErr";
					}
				} else{
					$returnSuccessArray['mailchimp'] = 'false - Not Active';
				}

				$returnSuccessArray['database'] = $updateSubmissions;

				echo json_encode($returnSuccessArray);


			
			exit();


		} // honeypot field check.

		   	
	}// nonce check.

		
}// funtion end.



function ulpb_loadShortcode_content(){

	function check_input($data){
	    $data = trim($data);
	    $data = stripslashes($data);
	    $data = htmlspecialchars($data);
	    return $data;
	}

	
	if( current_user_can('editor') || current_user_can('administrator') ) {
		$shortCodeRenderWidgetNO = $_REQUEST['POPB_Shortcode_nonce'];
		if ( ! wp_verify_nonce( $shortCodeRenderWidgetNO, 'POPB_data_nonce' ) ){
			die( 'Security check' ); 
		}else{

			$ulpb_entered_shortcode = check_input($_REQUEST['ulpb_shortcode']);
			if ( function_exists( 'load_smuzform_public_classes' ) ) {

				smuzform_public( 'core/class/class-smuzform-public.php' );
			

				$Public = new SmuzForm_Public();

				$Public->loadClasses();

				$Public->createUI();

			}
			
			echo do_shortcode( $ulpb_entered_shortcode );
		}
	}
	
	exit();
}




function ulpb_get_global_row_content(){

	if( current_user_can('editor') || current_user_can('administrator') ) {

		 $POPB_GRG_Nonce = $_REQUEST['POPB_GRG_Nonce'];
		 if ( ! wp_verify_nonce( $POPB_GRG_Nonce, 'POPB_data_nonce' ) ) {
		 	die( 'Security check' ); 
		 }else{
			function check_input($data){
			    $data = trim($data);
			    $data = stripslashes($data);
			    $data = htmlspecialchars($data);
			    return $data;
			}

			$GlobalRowPId = check_input($_POST['globalRowID']);

			$globalRowPostData = get_post_meta( $GlobalRowPId, ULPB_DATA, true );

			echo json_encode( $globalRowPostData['Rows'][0]);
		} 
	}

exit();
}




function ulpb_insert_template(){

	function check_input($data){

	    $data = trim($data);
	    $data = stripslashes($data);
	    $data = htmlspecialchars($data);
	    return $data;
	}
	if( current_user_can('editor') || current_user_can('administrator') ) {

		$insertTemplateNonce = $_REQUEST['insertTemplateNonce'];
		if ( ! wp_verify_nonce( $insertTemplateNonce, 'POPB_data_nonce' ) ) {
			die( 'Security check' ); 
		}else{
			$selectPostToInsert = check_input($_REQUEST['selectPostToInsert']);
			$pageToUpdate = check_input($_REQUEST['pageToUpdate']);
			$pageToUpdatePostType = check_input($_REQUEST['pageToUpdatePostType']);

			$dataToInsert = get_post_meta( $selectPostToInsert, 'ULPB_DATA', true );

		 	$returnSuccessArray  = array();

		 	if ($dataToInsert['Rows']) {
		 		$returnSuccessArray['Rows'] = $dataToInsert['Rows'];
		 		$returnSuccessArray['Message'] = 'Success';
		 	}else{
		 		$returnSuccessArray['Rows'] = 'Empty';
		 		$returnSuccessArray['Message'] = 'Failed';
		 	}
			//$dataToInsert["pageID"] = $pageToUpdate;
			//$dataToInsert["postType"] = $pageToUpdatePostType;

			//update_post_meta( $pageToUpdate, 'ULPB_DATA', $dataToInsert );
		 	echo json_encode($returnSuccessArray);
		}
	}
	exit();
}




function ulpb_subscribe_list_empty_wp_ajax(){

	if (current_user_can('activate_plugins' )) {

		$subsListEmpty = $_REQUEST['subsListEmpty'];
		if ( ! wp_verify_nonce( $subsListEmpty, 'POPB_data_nonce' ) ) {
			die( 'Security check' ); 
		}else{
			$post_ID = $_REQUEST['ps_ID'];

			 update_post_meta( $post_ID, 'ssm_subscribers_list', '', $unique = false);

			if ($result === 0) {
				echo "No records found!";
			}else if($result === false){
				echo "Some error occurred";
			}
			else{
				echo 'Success';
				exit();
			}
		}

	}

}





function ulpb_update_pagebuilder_active_option(){
	if( current_user_can('editor') || current_user_can('administrator') ) {

		$POPB_Switch_Nonce = $_REQUEST['POPB_Switch_Nonce'];
		if ( ! wp_verify_nonce( $POPB_Switch_Nonce, 'POPB_switch_nonce' ) ) {
			die( 'Security check' ); 
		}else{
			$page_id = intval($_GET['page_id']);
			$sentData = sanitize_text_field($_GET['ulpbActivate']);

			if ($sentData === 'ActivatePB') {
				update_post_meta($page_id, 'ulpb_page_builder_active','true');
			}else{
				update_post_meta($page_id, 'ulpb_page_builder_active','false');
			}

			echo "Switched";
		}
	}
	exit();
}


function ulpb_empty_form_builder_data(){
	$POPB_data_Nonce = $_REQUEST['submitNonce'];
		if ( ! wp_verify_nonce( $POPB_data_Nonce, 'POPB_data_nonce' ) ) {
			die( 'Security check' ); 
		}else{
			$this_postID = sanitize_text_field($_POST['ps_ID']);

			$updateData = update_post_meta( $this_postID, 'ulpb_formBuilder_data_submission', '', $unique = false );

			if ($updateData == true) {
				echo 'Success';
			} else{
				echo "Already empty";
			}
		}

		exit();
}

function ulpb_delete_form_builder_entry(){

	$POPB_data_Nonce = $_REQUEST['submitNonce'];
		if ( ! wp_verify_nonce( $POPB_data_Nonce, 'POPB_data_nonce' ) ) {
			die( 'Security check' ); 
		}else{
			
			$postID = sanitize_text_field($_POST['ps_ID']);
			$dataEntryIndex = sanitize_text_field($_GET['dataEntryIndex']);
			$allFormData = get_post_meta( $postID, 'ulpb_formBuilder_data_submission');

			unset($allFormData[0][$dataEntryIndex]);

			$allFormDataAfter = array_values($allFormData[0]);
			$updateAfterDeleting = update_post_meta( $postID, 'ulpb_formBuilder_data_submission', $allFormDataAfter, $unique = false );

			if ($updateAfterDeleting == true) {
				echo "success";
			}else{
				echo "Some error occurred!";
			}



		}
		exit();
}






function popb_send_user_feedback(){

	if ( ! check_ajax_referer() ) {
		die( 'security error' );
	}

	$other_input = '';

	$installDateTime =  "Install Date : ". gmdate("Y-m-d\TH:i:s\Z", get_option('plugOps_activation_date'));
	if (isset($_POST['other_input']) ) {
		$other_input = sanitize_text_field( $_POST['other_input']);
	}
	$postedFeedbackReason = sanitize_text_field( $_POST['reason'] ) . "  :  ". $other_input."\n". $installDateTime ."\n";

	if (isset($_POST['followUpEmail'])) {
		$followUpEmail  = sanitize_text_field($_POST['followUpEmail']);
		$postedFeedbackReason = $postedFeedbackReason."\n".$followUpEmail;
	}

	$feedbackType = 'Uninstall FeedBack';

	$emailContents = $postedFeedbackReason;
	if ( isset( $_POST['support'] ) ) {
		$postedFeedbackSupportEmail = sanitize_email( $_POST['support']['email'] );
		$postedFeedbackSupportTitle = sanitize_text_field( $_POST['support']['title'] );
		$postedFeedbackSupportMessage = sanitize_textarea_field( $_POST['support']['text'] );

		$emailContents = "Support Email : $postedFeedbackSupportEmail \n". 
						 "Support Title : $postedFeedbackSupportTitle \n".
						 "Support Message : $postedFeedbackSupportMessage \n";

		$feedbackType = 'Support Request';
	}

			$fromEmailAddress = home_url();
			$fromEmailAddress = trim($fromEmailAddress, '/');

			if (!preg_match('#^http(s)?://#', $fromEmailAddress)) {
			    $fromEmailAddress = 'http://' . $fromEmailAddress;
			}

			$urlParts = parse_url($fromEmailAddress);

			$OnlyDomain = preg_replace('/^www\./', '', $urlParts['host']);

			$fromEmailAddress =  "pluginopsfeedbackform@".$OnlyDomain;

			
			$headers[]= "From: "."PPB Feedback Form"." <".$fromEmailAddress.">";


	$sendFeedback =  wp_mail( 'feedback@pluginops.com', $feedbackType, $emailContents, $headers);

	

	if ($sendFeedback  == true) {
		echo "success";
	}
	exit();

}




}