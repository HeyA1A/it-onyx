async function DisplayPhotos() {
    "use strict";
  
    var form = $("#roverForm");
    
  
    form.validate();
  
    if (form.valid()) {
        
   
   var rover;
  
      if (document.getElementById("CuriosityRover").checked) {
        rover = document.getElementById("CuriosityRover").value;
      }
      if (document.getElementById("OpportunityRover").checked) {
        rover = document.getElementById("OpportunityRover").value;
      }
      if (document.getElementById("SpiritRover").checked) {
        rover= document.getElementById("SpiritRover").value;
      }
      var picturedate = document.getElementById("PictureDate").value;
      
    var apiKey = "FZlhSTyevaFD5lvHygg6x9rOgQ31XvOystLgSBMj"
          
      var myURL1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + Rover  + PictureDate + "?apiKey=" + apiKey;
      var msg1Object = await fetch(myURL1);
  
      if (msg1Object.status >= 200 && msg1Object.status <= 299) {              
         
          var msg1JSONText = await msg1Object.text();
        
          var msg1 = JSON.parse(msg1JSONText);
  
          document.getElementById("DisplayPhotos").innerHTML = msg1.results.name;
      
      }
      else {
       
          alert("Rover Not Found - Status: " + msg1Object.status);
      }        
   
      var myURL2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/"  + rover + "/range/1/day/" + picturedate + "/" + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;
         var msg2Object = await fetch(myURL2);
  
          if (msg2Object.status >= 200 && msg2Object.status <= 299) {            
              var msg2JSONText = await msg2Object.text();
         
              var msg2 = JSON.parse(msg2JSONText);
             
      
          var date = [];
          var photos = [];
          var photos = msg2.results.length;
           for (var i = 0; i < numdays; i++) {
          
              photos[i] = msg2.results[i].c;
              var tempdate = new Date(msg2.results[i].t);
              date[i] = tempdate.toLocaleDateString(); 
          }
          }
          var ctx0 = document.getElementById("chartjs-0");
          var myChart = new Chart(ctx0, {
              "type":"line",
              "data": {
                  "labels": date, 
                  "datasets":[{"label": "Currency Value History",
                  "data": value,
                  "fill":false,
                  "borderColor":"rgb(75, 192, 192)",
                  "lineTension":0.1}]},
                    "options":{ 
                       responsive: false,
                       maintainAspectRatio: true,
                      }
                  }
          );
    }  
    else {
          alert("Rover Not Found - Status: " + msg2Object.status)
          return
      }
  }
  
  
    function ClearForm() {
  
    
     
  
      document.getElementById("CuriosityRover").checked = false;
      document.getElementById("OpportunityRover").checked = false;
      document.getElementById("SpiritRover").checked = false;
      document.getElementById("RoverMsg").innerHTML = "";
    
  
      document.getElementById("PictureDate").value = "";
      document.getElementById("dateMsg").innerHTML = "";
  
    
    
    
  
  
    }