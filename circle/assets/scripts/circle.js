$( "#circleForm" ).validate({

});

function displayCircle() {
     if ($("#circleForm").valid()) {

      document.getElementById("diameter").innerHTML="";
      document.getElementById("circumference").innerHTML="";
      document.getElementById("area").innerHTML="";


   var radius;
   var radiusfp;
   var diameter;
   var circumference;
   var area; 
   var result;


  radius =  document.getElementById("radius").value;
 
  radiusfp = parseFloat(radius);
     
  diameter = calcDiameter(radiusfp);
  circumference = calcCircumference(radiusfp);
  area = calcArea(radiusfp);

     document.getElementById("diameter").innerHTML = diameter.toString();
     document.getElementById("circumference").innerHTML = circumference.toString();
     document.getElementById("area").innerHTML = area.toString();

     }
  }
  function calcDiameter(radius)
  {
  return (radius*radius);
  }
  
  function calcCircumference(radius) 
  {
  return (2* Math.PI*radius);
  }
  
  function calcArea(radius) 
  {
  return (Math.PI*radius*radius);
  }
 
  function clearForm()
  {
    document.getElementById("radius").value = "";
    document.getElementById("radiuserror").innerHTML = "";
    document.getElementById("diameter").innerHTML = "";
    document.getElementById("circumference").innerHTML = "";
    document.getElementById("area").innerHTML = "";
}
