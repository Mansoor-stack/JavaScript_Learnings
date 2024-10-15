/*

function function_name(parameter_1, parameter_2 ){ 

 

    //Code to be executed 
    
    return parameter_1*parameter_2; 
    
    } 
    
   =================================================================  
    
    //only anonymous functions can be assigned to variables 
    
    let  function_variable =  function(parameter_1, parameter_2){ 
    
     
    
    Code to be executed 
    
    return parameter_1*parameter_2; 
    
     
    
    } 
    
  ===============================================================   
    
    //Arrow functions --> short form of anonymous functions 
    
     
    
    let function_variable = (parameter_1,parameter_2)=>{ 
    
     
    
    return parameter_1*parameter_2; 
    
     
    
    } 
    
   ========================================================================  
    
     
    
    Functions can be defined inside other functions, which is known as "nesting." This is useful for creating smaller, reusable blocks of code that can be called from within the larger function. In this example, the innerFunction is defined inside the outerFunction and can only be called from within that function. 
    
     
    
    function outerFunction(x) { 
    
      function innerFunction() { 
    
        // code to be executed 
    
      } 
    
      // more code 
    
    } 

*/