async function GetStock() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    var form = $("#myform");
    
    // Validate all of the for elements
    form.validate();
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        var StockSymbol = document.getElementById("StockSymbol").value;
        var apiKey = "35eaVfKsObXpSg2O4kMLj9udr2DgVW1f"

        /* URL for AJAX Call */
        var myURL1 = "https://api.polygon.io/v3/reference/tickers/" + StockSymbol + "?apiKey=" + apiKey;
        /* Make the AJAX call */
        var msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            var msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
            var msg1 = JSON.parse(msg1JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
            document.getElementById("company").innerHTML = msg1.results.name;
            document.getElementById("address").innerHTML = msg1.results.address.address1 + ", " + msg1.results.address.city + ", " 
                + msg1.results.address.state + "   " + msg1.results.address.postal_code;
            document.getElementById("employees").innerHTML = msg1.results.total_employees;
            document.getElementById("description").innerHTML = msg1.results.sic_description;
            document.getElementById("url").innerHTML = msg1.results.homepage_url;
            document.getElementById("url").href = msg1.results.homepage_url;
        }
        else {
            /* AJAX complete with error - probably invalid stock ticker symbol */
                /* Your code to process the result goes here - 
                   display the returned message */
            alert("Stock Not Found - Status: " + msg1Object.status)
            return;
        }        
    }
}