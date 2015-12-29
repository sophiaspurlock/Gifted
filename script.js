function ValidateForm(frm) {
if (frm.FirstName.value == "") {alert('First Name is required.');frm.FirstName.focus();return false;}
if (frm.LastName.value == "") {alert('Last Name is required.');frm.LastName.focus();return false;}
if (frm.Organization.value == "") {alert('Organization is required.');frm.Organization.focus();return false;}
if (frm.FromEmailAddress.value == "") {alert('Email address is required.');frm.FromEmailAddress.focus();return false;}
if (frm.FromEmailAddress.value.indexOf("@") < 1 || frm.FromEmailAddress.value.indexOf(".") < 1) {alert('Please enter a valid email address.');frm.FromEmailAddress.focus();return false;}
if (frm.StreetAddress1.value == "") {alert('Address is required.');frm.StreetAddress1.focus();return false;}
if (frm.City.value == "") {alert('City is required.');frm.City.focus();return false;}
if (frm.Country.value == "") {alert('Country is required.');frm.Country.focus();return false;}
if (frm.CaptchaCode.value == "") {alert('Enter web form code.');frm.CaptchaCode.focus();return false;}
return true; }
function ReloadCaptchaImage(captchaImageId) {
var obj = document.getElementById(captchaImageId);
var src = obj.src;
var date = new Date();
var pos = src.indexOf('&rad=');
if (pos >= 0) { src = src.substr(0, pos); }
obj.src = src + '&rad=' + date.getTime();
return false; }
</script>
<table border="0" cellpadding="5" cellspacing="0" width="600">
<tr>
<td><b>First, Last Name*:</b></td>
<td>
<input id="FirstName" name="FirstName" type="text" maxlength="60" style="width:146px; border:1px solid #999999" />
<input id="LastName" name="LastName" type="text" maxlength="60" style="width:146px; border:1px solid #999999" />
</td>
</tr><tr>
<td><b>Organization*:</b></td>
<td><input id="Organization" name="Organization" type="text" maxlength="60" style="width:300px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Email address*:</b></td>
<td><input id="FromEmailAddress" name="FromEmailAddress" type="text" maxlength="60" style="width:300px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Work Phone:</b></td>
<td><input id="WorkPhone" name="WorkPhone" type="text" maxlength="43" style="width:250px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Home Phone:</b></td>
<td><input id="HomePhone" name="HomePhone" type="text" maxlength="43" style="width:250px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Cell Phone:</b></td>
<td><input id="CellPhone" name="CellPhone" type="text" maxlength="43" style="width:250px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Fax:</b></td>
<td><input id="Fax" name="Fax" type="text" maxlength="43" style="width:250px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Address 1*:</b></td>
<td><input id="StreetAddress1" name="StreetAddress1" type="text" maxlength="120" style="width:350px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Address 2:</b></td>
<td><input id="StreetAddress2" name="StreetAddress2" type="text" maxlength="120" style="width:350px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>City*:</b></td>
<td><input id="City" name="City" type="text" maxlength="120" style="width:300px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>State/Province:</b></td>
<td><input id="State" name="State" type="text" maxlength="120" style="width:300px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Zip/Postal Code:</b></td>
<td><input id="Zip" name="Zip" type="text" maxlength="30" style="width:100px; border:1px solid #999999" /></td>
</tr><tr>
<td><b>Country*:</b></td>
<td><input id="Country" name="Country" type="text" maxlength="120" style="width:300px; border:1px solid #999999" /></td>
</tr><tr>
<td colspan="2" align="center">
<br />
<table border="0" cellpadding="0" cellspacing="0">
<tr valign="top">
<td>
<i>Enter web form code*:</i>
<input id="CaptchaCode" name="CaptchaCode" type="text" style="width:80px; border:1px solid #999999;" maxlength="6" />
</td><td>
<a href="http://www.SnapHost.com"><img id="CaptchaImage" alt="Web Form Code" title="Anti-spam web forms"
style="margin-left:20px; border:1px solid #999999"
src="http://www.SnapHost.com/captcha/WebForm.aspx?id=ZN8MPBS9BZUH&ImgType=2" /></a>
<br /><a href="#" onclick="return ReloadCaptchaImage('CaptchaImage');"><span style="font-size:12px;">reload image</span></a>
</td>
</tr>
</table>
<br />
* - required fields. &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<input id="skip_Submit" name="skip_Submit" type="submit" value="Submit" />
</td>
</tr>
</table>
<br />
</form>