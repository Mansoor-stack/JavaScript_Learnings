{
  let array1 = Array(6);
  array1 = new Array(1, 2, 3, 4, 5);
  //console.log(array1.length);
  //console.log(array1[1]);

  array1.push(6); // add elements at end of an array
  //console.log(array1)
  array1.pop(); // removes elements from end of an array
  //console.log(array1)

  array1.shift(); //remove elements from starting of an array
  //console.log(array1);

  array1.unshift(1); // add elements at starting of an array
  console.log(array1);

  let sliced = array1.slice(1, 4); // slice(start index, end index) creates a another array from start index to end index inclusive

  console.log(sliced);

  let spliced = array1.splice(4, 1, 6); //spliced(start index, no of items to remove, replacing_item)

  console.log(spliced); //returns removed element
  console.log(array1);

  let filtered_array = array1.filter((a) => {
    return a % 2 === 0;
  }); // filter() method - learn from code with harry blog and programiz

  console.log(filtered_array);

  let reduced_array = array1.reduce((a, b) => {
    return a + b;
  }); // reduce() method - learn from code with harry blog and programiz

  console.log(reduced_array);

  let mapped_array = array1.map((element) => 
    element * element
  );// map() method - learn from code with harry blog and programiz

  console.log(mapped_array);


  let array2 = [12,13,14,16];

 let chaining_method= array2.filter(element=>element%2==0).map(element=>element*element).reduce((sum,current)=>sum+current);

 console.log(chaining_method);

 let sorted_array2 = array2.sort();

 console.log(sorted_array2);
}
