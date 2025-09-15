<svelte:head>
	<!-- Load jQuery first -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

	<!-- Zoho + custom scripts -->
	<script>
		window.addEventListener('load', function () {
			function validateEmail6949903000000575376() {
				var form = document.forms['WebToLeads6949903000000575376'];
				var emailFld = form.querySelectorAll('[ftype=email]');
				for (var i = 0; i < emailFld.length; i++) {
					var emailVal = emailFld[i].value.trim();
					if (emailVal.length !== 0) {
						var atpos = emailVal.indexOf('@');
						var dotpos = emailVal.lastIndexOf('.');
						if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
							alert('Please enter a valid email address.');
							emailFld[i].focus();
							return false;
						}
					}
				}
				return true;
			}

			function checkMandatory6949903000000575376() {
				var mndFileds = ['Company', 'Last Name'];
				var fldLangVal = ['Company', 'Last Name'];
				for (var i = 0; i < mndFileds.length; i++) {
					var fieldObj = document.forms['WebToLeads6949903000000575376'][mndFileds[i]];
					if (fieldObj) {
						if (fieldObj.value.trim().length === 0) {
							alert(fldLangVal[i] + ' cannot be empty.');
							fieldObj.focus();
							return false;
						}
					}
				}
				if (!validateEmail6949903000000575376()) return false;

				document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
				return true;
			}

			// Attach Zoho form submit
			$('#webform6949903000000575376').submit(function (e) {
				var ismandatory = checkMandatory6949903000000575376();
				e.preventDefault();
				if (ismandatory) {
					var formData = new FormData(this);
					$.ajax({
						url: 'https://crm.zoho.com/crm/WebToLeadForm',
						type: 'POST',
						data: formData,
						cache: false,
						contentType: false,
						processData: false,
						success: function (data) {
							var splashinfo = document.getElementById('wf_splash_info');
							splashinfo.innerText = data.actionvalue;
							var splash = document.getElementById('wf_splash');
							document.getElementById('webform6949903000000575376').reset.click();
							splash.style.display = '';
							setTimeout(() => (splash.style.display = 'none'), 5000);
							document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
						},
						error: function () {
							alert('An error occurred.');
						},
					});
				}
			});
		});
	</script>

	<!-- Zoho Analytics Tracking -->
	<script
		id="wf_anal"
		src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=c8346c8ef0ce07a55c62ddf42c2111991ced5ac702c4abac0752cd6cbb7636286af4f9ad4e1b04982a141eef2c7ac31cgide109aedc0e7885cc9caaf9c85652f126f64c4eb49ec198d722946d233ea724bcgidf6307574132312148419c3f83918b1d3d03e683f6bf849fcf717de939cd0585fgid26cf8d5e8a646a620e2288e936930b272f671c1374f1631c69592bada889ca74&tw=5ce50921ca73694b65bb8ba882dc3e230d046aec42c29f7dd32b02b1751a77b2"
	>
	</script>
</svelte:head>

<div
	id="crmWebToEntityForm"
	class="zcwf_lblLeft crmWebToEntityForm"
	style="background-color:white;color:black;max-width:600px;"
>
	<!-- Success splash -->
	<div class="wf_customMessageBox" id="wf_splash" style="display:none">
		<div class="wf_customCircle"><div class="wf_customCheckMark"></div></div>
		<span id="wf_splash_info"></span>
	</div>

	<!-- Zoho Webform -->
	<form id="webform6949903000000575376" name="WebToLeads6949903000000575376">
		<input
			type="hidden"
			name="xnQsjsdp"
			value="a36b3bf67a11ca6cfa644862d6995ea6e6cc7b8e3ccb4ed2baf10d15d380988e"
		/>
		<input type="hidden" name="zc_gad" id="zc_gad" value="" />
		<input
			type="hidden"
			name="xmIwtLD"
			value="ed34deb5d4edb6c7839a5a2248c02ed733eefd75410dfe47698991f25ff798719f045b70fc13e3e7ab2fafbeb61a1b55"
		/>
		<input type="hidden" name="actionType" value="TGVhZHM=" />
		<input type="hidden" name="returnURL" value="null" />
		<input type="hidden" name="aG9uZXlwb3Q" value="" />

		<div class="zcwf_title">88Logistics</div>

		<!-- Email -->
		<div class="zcwf_row">
			<div class="zcwf_col_lab"><label for="Email">Email</label></div>
			<div class="zcwf_col_fld">
				<input type="text" ftype="email" id="Email" name="Email" maxlength="100" />
			</div>
		</div>

		<!-- Company (Required) -->
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="Company">Company <span style="color:red">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<input type="text" id="Company" name="Company" maxlength="200" />
			</div>
		</div>

		<!-- First Name -->
		<div class="zcwf_row">
			<div class="zcwf_col_lab"><label for="First_Name">First Name</label></div>
			<div class="zcwf_col_fld">
				<input type="text" id="First_Name" name="First Name" maxlength="40" />
			</div>
		</div>

		<!-- Mobile -->
		<div class="zcwf_row">
			<div class="zcwf_col_lab"><label for="Mobile">Mobile</label></div>
			<div class="zcwf_col_fld"><input type="text" id="Mobile" name="Mobile" maxlength="30" /></div>
		</div>

		<!-- Last Name (Required) -->
		<div class="zcwf_row">
			<div class="zcwf_col_lab">
				<label for="Last_Name">Last Name <span style="color:red">*</span></label>
			</div>
			<div class="zcwf_col_fld">
				<input type="text" id="Last_Name" name="Last Name" maxlength="80" />
			</div>
		</div>

		<!-- Submit / Reset -->
		<div class="zcwf_row">
			<div class="zcwf_col_fld">
				<input type="submit" id="formsubmit" class="formsubmit zcwf_button" value="Submit" />
				<input type="reset" class="zcwf_button" value="Reset" />
			</div>
		</div>
	</form>
</div>
