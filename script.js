function moveToNextInput(currentInputId, nextInputId) 
  {
    const currentInput = document.getElementById(currentInputId);
    const nextInput = document.getElementById(nextInputId);
    if (currentInput.value.length >= currentInput.getAttribute('maxlength')) 
    {
      nextInput.focus();
    }
  }
 
function moveToNextBox(currentInput, nextInputId) 
  {
    if (currentInput.value.length >= currentInput.maxLength) 
    {
      document.getElementById(nextInputId).focus();
    }
  }

function isValidPhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\s/g, '');
    // /^[6-9]\d*$/.test(phoneNumber &&
    if ( phoneNumber.length==10) {
        return true;
    }
    return false;
}
function validateForm() 
{
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  // var genderRadioButtons = document.getElementById("gender").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var SN = document.getElementById("SN").value;
  var parentname1 = document.getElementById("parentname1").value;
  var parentname2 = document.getElementById("parentname2").value;
  var streetadd = document.getElementById("streetadd").value;
  var addline2 = document.getElementById("addline2").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var postal = document.getElementById("postal").value;
  var country = document.getElementById("country").value;
  const email = document.getElementById("email").value;
  var medicalname1 = document.getElementById("medicalname1").value;
  var medicalname2 = document.getElementById("medicalname2").value;
  var lastBox = document.getElementById("lastBox").value; 

  if (name1.trim() == "" || name1.length <4) {
    document.querySelector(".name-error").innerHTML = "Please enter a valid firstname (should contains 4 letters)";
    document.querySelector(".name-error").style.display = "block";
    document.querySelector(".name-error").style.color="red";
    // alert("Please enter a valid firstname (should contains 4 letters)");
    document.getElementById("name1").focus();
    return false;
  }
  document.querySelector(".name-error").innerHTML = "";

  if (name2.trim() == "") {
    document.querySelector(".name-error").innerHTML = "Please enter a valid lastname";
    document.querySelector(".name-error").style.display = "block";
    document.querySelector(".name-error").style.color="red";
    //alert("Please enter a valid lastname");
    document.getElementById("name2").focus();
    return false;
  }
  document.querySelector(".name-error").innerHTML = "";

  if(document.getElementById('male').checked == false && document.getElementById('female').checked == false) {   
    document.querySelector(".gender-error").innerHTML = "Please select gender";
    document.querySelector(".gender-error").style.display = "block";
    document.querySelector(".gender-error").style.color="red";
    //alert("Please select gender"); 
    return false;  
  } 
  document.querySelector(".gender-error").innerHTML = "";  

  if (day.trim() == "") 
  {
    document.querySelector(".birthdate-error").innerHTML = "Please pick your Birth Date";
    document.querySelector(".birthdate-error").style.display = "block";
    document.querySelector(".birthdate-error").style.color="red";
   // alert("Please pick your Birth Date");
    document.getElementById("day").focus();
    return false;
  }
  document.querySelector(".birthdate-error").innerHTML = "";

  if (month.trim() == "") 
  {
    document.querySelector(".birthdate-error").innerHTML = "Please pick your Birth Month";
    document.querySelector(".birthdate-error").style.display = "block";
    document.querySelector(".birthdate-error").style.color="red";
    //alert("Please pick your Birth Date");
    document.getElementById("month").focus();
    return false;
  }
  document.querySelector(".birthdate-error").innerHTML = "";

  if (year.trim() == "") {
    document.querySelector(".birthdate-error").innerHTML = "Please pick your Birth Year";
    document.querySelector(".birthdate-error").style.display = "block";
    document.querySelector(".birthdate-error").style.color="red";
    //alert("Please pick your Birth Date");
    document.getElementById("year").focus();
    return false;
  }
  document.querySelector(".birthdate-error").innerHTML = "";

  var day = parseInt(document.getElementById("day").value);
  var month = parseInt(document.getElementById("month").value) - 1;
  var year = parseInt(document.getElementById("year").value);

  var birthDate = new Date(year, month, day);
  var currentDate = new Date();

  var age = currentDate.getFullYear() - birthDate.getFullYear();
  var monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if ( monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < birthDate.getDate()))
    age--;


  if (month < 0 || month > 11) {
    document.querySelector(".birthdate-error").innerHTML = "enter valid month";
    document.querySelector(".birthdate-error").style.display = "block";
    document.querySelector(".birthdate-error").style.color="red";
    //alert("enter valid month");
    document.getElementById("month").focus();
    return false;
  }
  document.querySelector(".birthdate-error").innerHTML = "";

  if (day < 1 || day > new Date(year, month + 1, 0).getDate()) {
    document.querySelector(".birthdate-error").innerHTML = "Enter a valid day for the selected month.";
    document.querySelector(".birthdate-error").style.display = "block";
    document.querySelector(".birthdate-error").style.color="red";
    //alert("Enter a valid day for the selected month.");
    document.getElementById("day").focus();
    return false;
  }
  document.querySelector(".birthdate-error").innerHTML = "";

  if (isNaN(year) || year < 1000 || year > 9999) {
    document.querySelector(".birthdate-error").innerHTML = "Please check the entered Year.";
    document.querySelector(".birthdate-error").style.display = "block";
    document.querySelector(".birthdate-error").style.color="red";
    //alert("Please check the entered Year.");
    document.getElementById("year").focus();
    return false;
  }
  document.querySelector(".birthdate-error").innerHTML = "";
  
  if (age < 18) {
    document.querySelector(".birthdate-error").innerHTML = "Check your age for registration.";
    document.querySelector(".birthdate-error").style.display = "block";
    document.querySelector(".birthdate-error").style.color="red";
    //alert("Check your age for registration.");
    document.getElementById("day").focus();
    return false;
  }
  document.querySelector(".birthdate-error").innerHTML = "";

  // if(document.form.dept.selectedIndex=="")
  // {
  // alert ( "Please select dept!");
  // return false;
  // }
  var str=document.getElementById("dept").value;
  if(str.length <=0){
    alert("Please select one option from department ");
    return false;
  }

  if (SN.trim() == "") {
    alert("Please enter a valid college name");
    document.getElementById("SN").focus();
    return false;
  }

  if (parentname1.trim() == ""|| parentname1.length<4) {
    alert("Please enter a valid parent first name (should contains minimum 4 letters)");
    document.getElementById("parentname1").focus();
    return false;
  }

  if (parentname2.trim() == "") {
    alert("Please enter a valid parent last name");
    document.getElementById("parentname2").focus();
    return false;
  }

  if (streetadd.trim() == "") {
    alert("Please enter a valid street address");
    document.getElementById("streetadd").focus();
    return false;
  }
  
  if (addline2.trim() == "") 
  {
    alert("Please enter a valid address");
    document.getElementById("addline2").focus();
    return false;
  }

  if (city.trim() == "") 
  {
    alert("Please enter a valid city");
    document.getElementById("city").focus();
    return false;
  }

  if (state.trim() == "") 
  {
    alert("Please enter a valid state");
    document.getElementById("state").focus();
    return false;
  }

  if (postal.trim() == "") 
  {
    alert("Please enter a valid postal");
    document.getElementById("postal").focus();
    return false;
  }

  if (country.trim() == "") 
  {
    alert("Please enter a valid country");
    document.getElementById("country").focus();
    return false;
  }

  const phoneNumber1 = document.getElementById('med-phone1').value;
  const phoneNumber2 = document.getElementById('med-phone2').value;
  const phoneNumber3 = document.getElementById('med-phone3').value;

  const fullPhoneNumber = phoneNumber1 + phoneNumber2 + phoneNumber3;
  console.log(fullPhoneNumber.length);
  if (!isValidPhoneNumber(fullPhoneNumber)) 
  {
      alert('Please enter a valid phone number');
      return false;
  }

  if (email.trim() == "") 
  {
    alert("Please enter a valid email");
    document.getElementById("email").focus();
    return false;
  }

  // const emailPattern = /^[a-zA-Z0-9]+@gmail\.com$/;
  // if (!emailPattern.test(email)) {
  //   alert("Please enter a valid Gmail address");
  //   document.getElementById("email").focus();
  //   return false;
  // }

  if (medicalname1.trim() == "") {
    alert("Please enter a valid medical name");
    document.getElementById("medicalname1").focus();
    return false;
  }

  if (medicalname2.trim() == "") {
    alert("Please enter a valid medical name");
    document.getElementById("medicalname2").focus();
    return false;
  }

  if (lastBox.trim() == "") {
    alert("Please enter a valid text");
    document.getElementById("lastBox").focus();
    return false;
  }else{
    alert("Form Submitted Successfully");
  }
  return true;
  }