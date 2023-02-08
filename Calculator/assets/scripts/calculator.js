function calculate() {
    if ($( "#calculatorForm" ).valid()) {
     
  
         var operand1 = document.getElementById("Operand1").value;
         var operand2 = document.getElementById("Operand2").value;
         
        
         var operand1fp = parseFloat(operand1);
         var operand2fp = parseFloat(operand2);
  
         var operator;
        
          if (document.getElementById("addOperator").checked) {
          operator = document.getElementById("addOperator").value;
          }
          
          if(document.getElementById("subOperator").checked) {
           operator = document.getElementById("subOperator").value;
          }
        
          if(document.getElementById("mulOperator").checked) {
           operator = document.getElementById("mulOperator").value;
          }
         
          if(document.getElementById("diviOperator").checked) {
            operator=  document.getElementById("diviOperator").value;
          }
         
          var result;
  
            if (operator === "add") {
             result = operand1fp + operand2fp;
            } 
         
            if (operator === "sub") {
            result = operand1fp - operand2fp;
            } 
        
            if (operator === "mul") {
            result = operand1fp * operand2fp;
            }
            
            if (operator === "divi") {
            result = operand1fp / operand2fp;
            }
  
            document.getElementById("Result").innerHTML = result.toString();
        }
  }
     
  function clearForm ()
  {
  
      document.getElementById("Operand1").value = "";
      document.getElementById("Operand2").value = "";
     
      document.getElementById("Operand1Error").innerHTML = "";
      document.getElementById("Operand2Error").innerHTML = "";
     
      document.getElementById("addOperator").checked = false;
      document.getElementById("subOperator").checked = false;
      document.getElementById("mulOperator").checked = false;
      document.getElementById("diviOperator").checked = false;
  
      document.getElementById("OperatorError").innerHTML = "";
      document.getElementById("Result").innerHTML = "";
  }
  
  $( "#calculatorForm").validate({
        
  });
  
  
  
  
  
  
  
  
  
  
        