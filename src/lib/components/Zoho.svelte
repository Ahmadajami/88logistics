<svelte:head>
	<!-- Required Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

	<!-- Styles (Zoho Form CSS) -->
	<style>
		html,
		body {
			margin: 0px;
		}
		.formsubmit.zcwf_button {
			color: white !important;
			background: transparent linear-gradient(0deg, #0279ff 0%, #00a3f3 100%);
		}
		#crmWebToEntityForm.zcwf_lblLeft {
			width: 100%;
			padding: 25px;
			margin: 0 auto;
			box-sizing: border-box;
		}
		#crmWebToEntityForm.zcwf_lblLeft * {
			box-sizing: border-box;
		}
		#crmWebToEntityForm {
			text-align: left;
		}
		#crmWebToEntityForm * {
			direction: ltr;
		}
		.zcwf_lblLeft .zcwf_title {
			word-wrap: break-word;
			padding: 0px 6px 10px;
			font-weight: bold;
		}
		.zcwf_lblLeft.cpT_primaryBtn:hover {
			background: linear-gradient(#02acff 0, #006be4 100%) no-repeat padding-box !important;
			box-shadow: 0 -2px 0 0 #0159b9 inset !important;
			border: 0 !important;
			color: #fff !important;
			outline: 0 !important;
		}
		.zcwf_lblLeft .zcwf_col_fld input[type='text'],
		input[type='password'],
		.zcwf_lblLeft .zcwf_col_fld textarea {
			width: 60%;
			border: 1px solid #c0c6cc !important;
			resize: vertical;
			border-radius: 2px;
			float: left;
		}
		.zcwf_lblLeft .zcwf_col_lab {
			width: 30%;
			word-break: break-word;
			padding: 0px 6px 0px;
			margin-right: 10px;
			margin-top: 5px;
			float: left;
			min-height: 1px;
		}
		.zcwf_lblLeft .zcwf_col_fld {
			float: left;
			width: 68%;
			padding: 0px 6px 0px;
			position: relative;
			margin-top: 5px;
		}
		.zcwf_lblLeft .zcwf_privacy {
			padding: 6px;
		}
		.zcwf_lblLeft .wfrm_fld_dpNn {
			display: none;
		}
		.dIB {
			display: inline-block;
		}
		.zcwf_lblLeft .zcwf_col_fld_slt {
			width: 60%;
			border: 1px solid #ccc;
			background: #fff;
			border-radius: 4px;
			font-size: 12px;
			float: left;
			resize: vertical;
			padding: 2px 5px;
		}
		.zcwf_lblLeft .zcwf_row:after,
		.zcwf_lblLeft .zcwf_col_fld:after {
			content: '';
			display: table;
			clear: both;
		}
		.zcwf_lblLeft .zcwf_col_help {
			float: left;
			margin-left: 7px;
			font-size: 12px;
			max-width: 35%;
			word-break: break-word;
		}
		.zcwf_lblLeft .zcwf_help_icon {
			cursor: pointer;
			width: 16px;
			height: 16px;
			display: inline-block;
			background: #fff;
			border: 1px solid #c0c6cc;
			color: #c1c1c1;
			text-align: center;
			font-size: 11px;
			line-height: 16px;
			font-weight: bold;
			border-radius: 50%;
		}
		.zcwf_lblLeft .zcwf_row {
			margin: 15px 0px;
		}
		.zcwf_lblLeft .formsubmit {
			margin-right: 5px;
			cursor: pointer;
			color: #313949;
			font-size: 12px;
		}
		.zcwf_lblLeft .zcwf_privacy_txt {
			width: 90%;
			color: rgb(0, 0, 0);
			font-size: 12px;
			font-family: Arial;
			display: inline-block;
			vertical-align: top;
			color: #313949;
			padding-top: 2px;
			margin-left: 6px;
		}
		.zcwf_lblLeft .zcwf_button {
			font-size: 12px;
			color: #313949;
			border: 1px solid #c0c6cc;
			padding: 3px 9px;
			border-radius: 4px;
			cursor: pointer;
			max-width: 120px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
		.zcwf_lblLeft .zcwf_tooltip_over {
			position: relative;
		}
		.zcwf_lblLeft .zcwf_tooltip_ctn {
			position: absolute;
			background: #dedede;
			padding: 3px 6px;
			top: 3px;
			border-radius: 4px;
			word-break: break-word;
			min-width: 100px;
			max-width: 150px;
			color: #313949;
			z-index: 100;
		}
		.zcwf_lblLeft .zcwf_ckbox {
			float: left;
		}
		.zcwf_lblLeft .zcwf_file {
			width: 55%;
			box-sizing: border-box;
			float: left;
		}
		.cBoth:after {
			content: '';
			display: block;
			clear: both;
		}
		@media all and (max-width: 600px) {
			.zcwf_lblLeft .zcwf_col_lab,
			.zcwf_lblLeft .zcwf_col_fld {
				width: auto;
				float: none !important;
			}
			.zcwf_lblLeft .zcwf_col_help {
				width: 40%;
			}
		}
	</style>

	<!-- Validation Script -->
	<script>
		function checkMandatory6949903000000603337() {
			var mndFileds = new Array('Company', 'Last Name');
			var fldLangVal = new Array('Company', 'Last\x20Name');
			for (i = 0; i < mndFileds.length; i++) {
				var fieldObj = document.forms['WebToLeads6949903000000603337'][mndFileds[i]];
				if (fieldObj) {
					if (fieldObj.value.replace(/^\s+|\s+$/g, '').length == 0) {
						if (fieldObj.type == 'file') {
							alert('Please select a file to upload.');
							fieldObj.focus();
							return false;
						}
						alert(fldLangVal[i] + ' cannot be empty.');
						fieldObj.focus();
						return false;
					} else if (fieldObj.nodeName == 'SELECT') {
						if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
							alert(fldLangVal[i] + ' cannot be none.');
							fieldObj.focus();
							return false;
						}
					} else if (fieldObj.type == 'checkbox') {
						if (fieldObj.checked == false) {
							alert('Please accept  ' + fldLangVal[i]);
							fieldObj.focus();
							return false;
						}
					}
					try {
						if (fieldObj.name == 'Last Name') {
							name = fieldObj.value;
						}
					} catch (e) {}
				}
			}
			var urlparams = new URLSearchParams(window.location.search);
			if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
				var webform = document.getElementById('webform6949903000000603337');
				var service = urlparams.get('service');
				var smarturlfield = document.createElement('input');
				smarturlfield.setAttribute('type', 'hidden');
				smarturlfield.setAttribute('value', service);
				smarturlfield.setAttribute('name', 'service');
				webform.appendChild(smarturlfield);
			}
			document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
		}

		function tooltipShow6949903000000603337(el) {
			var tooltip = el.nextElementSibling;
			var tooltipDisplay = tooltip.style.display;
			if (tooltipDisplay == 'none') {
				var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
				for (i = 0; i < allTooltip.length; i++) {
					allTooltip[i].style.display = 'none';
				}
				tooltip.style.display = 'block';
			} else {
				tooltip.style.display = 'none';
			}
		}
	</script>

	<!-- Analytics Script -->
	<script
		id="wf_anal"
		src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=de48cd84628fac04512efe9d85048a9432d3849fbb9487c7cd08c8ef1013ec0fdede6293601b44077ef04ef6307706ddgidb19aebcc09ae59e49e5c1675672163277abe3325d5cb96d417d43dd9cff1ec70gid1ed8a67bccbc9dae5b7457d000b2384c8a51a0bf40af50b6ade48cdcf53df36bgidbd4f61d3448bb92aeecdeec87ea550d2c79e8d011ad01ef4ce0f5dab2eb5862b&tw=ad92dd92bdef36456ec0e9f4dccb14a2673a8492ed46a4bd06931db9ab2140ae"
	>
	</script>
</svelte:head>

<!-- Zoho CRM WebToLead Form -->
<div
	id="crmWebToEntityForm"
	class="zcwf_lblLeft crmWebToEntityForm"
	style="background-color: white;color: black;max-width: 600px;"
>
	<form
		id="webform6949903000000603337"
		action="https://crm.zoho.com/crm/WebToLeadForm"
		name="WebToLeads6949903000000603337"
		method="POST"
		onsubmit={() => {
			return checkMandatory6949903000000603337();
		}}
	>
		<input
			type="text"
			style="display:none;"
			name="xnQsjsdp"
			value="7691111160ae050d896cf1c86db80b65407122662101a57a7981fd95b576304e"
		/>
		<input type="hidden" name="zc_gad" id="zc_gad" value="" />
		<input
			type="text"
			style="display:none;"
			name="xmIwtLD"
			value="185bd650dc3c271e618820afdc7cfc99ee685891d54c82193f8a3bd084c0964f52d52a9b61b67d2014fe1221a5d56b98"
		/>
		<input type="text" style="display:none;" name="actionType" value="TGVhZHM=" />
		<input type="text" style="display:none;" name="returnURL" value="null" />

		<div class="zcwf_title" style="max-width: 600px;color: black; font-family:Arial;">
			88logistics
		</div>

		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="Company">Company <span style="color:red;">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					id="Company"
					aria-required="true"
					aria-label="Company"
					name="Company"
					maxlength="200"
				/>
			</div>
		</div>

		<div class="zcwf_row">
			<div class="zcwf_col_lab" style="font-size:12px; font-family: Arial;">
				<label for="Last_Name">Last Name <span style="color:red;">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<input
					type="text"
					id="Last_Name"
					aria-required="true"
					aria-label="Last Name"
					name="Last Name"
					maxlength="80"
				/>
			</div>
		</div>

		<input type="hidden" style="display:none;" name="aG9uZXlwb3Q" value="" />

		<div class="zcwf_row">
			<div class="zcwf_col_lab"></div>
			<div class="zcwf_col_fld">
				<input
					type="submit"
					id="formsubmit"
					role="button"
					class="formsubmit zcwf_button"
					value="Submit"
					aria-label="Submit"
					title="Submit"
				/>
				<input
					type="reset"
					class="zcwf_button"
					role="button"
					name="reset"
					value="Reset"
					aria-label="Reset"
					title="Reset"
				/>
			</div>
		</div>
	</form>
</div>
