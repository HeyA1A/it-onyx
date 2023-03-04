async function ShowResults() {
    "use strict";

    var form = $("#currencyvalueForm");
     form.validate(); 
    
     if (form.valid()) {
        
        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var ToCurrency = document.getElementById("ToCurrency").value;
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        var apiKey = "3NWUV7nTLbvIAdK6Z5W37ooGaSLBDzqYp"
        
        
     
      
        var myURL1 = "https://api.polygon.io//v2/aggs/ticker/" BaseCurrency + ToCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;
        var msg2Object = await fetch(myURL1);

        if (msg2Object.status >= "" && msg2Object.status <= "") {            
            var msg1JSONText = await msg2Object.text();
          
            var currency = [];
            var value = [];
            var dates = msg1.results.length;
            if (numdays > 0) {

            for (var i = 0; i < length; i++) {
                
                currency[i] = msg1.results[i].c;
                value[i] = msg1.results[i].c;
                var tempdate = new Date(msg1.results[i].c);
                date[i] = tempdate.toLocaleDateString(); }}
               
                var ctx0 = document.getElementById("chartjs-0");
                var myChart = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": dates,
                        "datasets":[{"label": "Currency Value History",
                        "data": value,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            "options":{ 
                                responsive: false,
                                maintainAspectRatio: true,
                            }
    
    
                        }
                    };
            else {
                alert("Currency Not Found - Status: " + msg2Object.status)
                return
            }
        }



function clearform() {
    "use strict";

    document.getElementById("BaseCurrency").value = "";
    document.getElementById("ToCurrency").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
   
    
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);

    
    
    }
}

$("#currencyvalueForm").validate({

});
