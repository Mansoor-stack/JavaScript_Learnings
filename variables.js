{
  var a = "10";
  console.log(a);
  var a = "11";
  console.log(a);

  /*
    var keyword is function scope/global scoped
    var keyword can re declared and re assigned within function
    */

  let b = "12";
  console.log(b);
  //let b;

  /*
    let keyword is block scoped
    let keyword cannot declared and can be re assigned within block
    */

  const c = "13";
  console.log(c);
  //const c = "15";
  console.log(c);

  /*
   const keyword is block scoped
   const keyword cannot be redeclared and cannot be re assigned within block
   
   */

  console.log(typeof c); // typeof() method is used to determine datatype of any variable
}

const c = 19;
console.log(c);
// b = "14" + b;
console.log(b);
