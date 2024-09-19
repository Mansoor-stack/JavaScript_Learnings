
  {
    var a = "10";
    console.log(a);
    var a = "11";
    console.log(a);

    /*
     1. variable var can be redeclared and reassigned multiple within same block or other block
    
    */

    let b = "12";
    console.log(b);
    //let b;
    
    /*
    1. variable let cannot be redeclared more than once within same block.
    2. variable let can be redeclared more than once outside different block of code.
    3. variable let cannot be re assigned more than once within same block.
    4. variable let can be re assigned more than once outside different block of code.// skeptical
    */
    
    const c = "13";
    console.log(c);
    //const c = "15";
    console.log(c);

    /*
    1. variable const cannot be re declared and re assigned any where within same block or other block 
    */


    console.log(typeof(c));// typeof() method is used to determine datatype of any variable
  }

  let b = "14"+b;
  console.log(b);

