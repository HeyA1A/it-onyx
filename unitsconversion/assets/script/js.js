function calculate() {
  "use strict";

  var form = $("#unitconversionForm");

  if (form.valid()) {

    var fromvalue = document.getElementById("FromValue").value;


    var fromunit;

    if (document.getElementById("cmFrom").checked) {
      fromunit = document.getElementById("cmFrom").value;
    }
    if (document.getElementById("mFrom").checked) {
      fromunit = document.getElementById("mFrom").value;
    }
    if (document.getElementById("kmFrom").checked) {
      fromunit = document.getElementById("kmFrom").value;
    }
    if (document.getElementById("inFrom").checked) {
      fromunit = document.getElementById("inFrom").value;
    }
    if (document.getElementById("ftFrom").checked) {
      fromunit = document.getElementById("ftFrom").value;
    }
    if (document.getElementById("ydFrom").checked) {
      fromunit = document.getElementById("ydFrom").value;
    }
    if (document.getElementById("miFrom").checked) {
      fromunit = document.getElementById("miFrom").value;
    }


    var tounit;

    if (document.getElementById("cmTo").checked) {
      tounit = document.getElementById("cmTo").value;
    }
    if (document.getElementById("mTo").checked) {
      tounit = document.getElementById("mTo").value;
    }
    if (document.getElementById("kmTo").checked) {
      tounit = document.getElementById("kmTo").value;
    }
    if (document.getElementById("inTo").checked) {
      tounit = document.getElementById("inTo").value;
    }
    if (document.getElementById("ftTo").checked) {
      tounit = document.getElementById("ftTo").value;
    }
    if (document.getElementById("ydTo").checked) {
      tounit = document.getElementById("ydTo").value;
    }
    if (document.getElementById("miTo").checked) {
      tounit = document.getElementById("miTo").value;
    }


    CalculateResult(fromvalue, fromunit, tounit);
  }
}


async function CalculateResult(fromvalue, fromunit, tounit) {

  var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";


  myURL = myURL + "?FromValue=" + encodeURIComponent(fromvalue) + "&FromUnit=" + encodeURIComponent(fromunit) + "&ToUnit=" + encodeURIComponent(tounit);


  let myCalcObject = await fetch(myURL);
  let myResult = await myCalcObject.text();

  document.getElementById("Result").innerHTML = myResult;
}

function clearform() {
  "use strict";

  document.getElementById("FromValue").value = "";
  document.getElementById("FromValueMsg").innerHTML = "";


  document.getElementById("cmFrom").checked = false;
  document.getElementById("mFrom").checked = false;
  document.getElementById("kmFrom").checked = false;
  document.getElementById("inFrom").checked = false;
  document.getElementById("ftFrom").checked = false;
  document.getElementById("ydFrom").checked = false;
  document.getElementById("miFrom").checked = false;
  document.getElementById("FromUnitMsg").innerHTML = "";


  document.getElementById("cmTo").checked = false;
  document.getElementById("mTo").checked = false;
  document.getElementById("kmTo").checked = false;
  document.getElementById("inTo").checked = false;
  document.getElementById("ftTo").checked = false;
  document.getElementById("ydTo").checked = false;
  document.getElementById("miTo").checked = false;
  document.getElementById("ToUnitMsg").innerHTML = "";


  document.getElementById("Result").innerHTML = "";
}

$("#unitconversionForm").validate({

});










