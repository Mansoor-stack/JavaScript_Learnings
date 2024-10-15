let First_name = "Mansoor";
console.log(First_name.length);

let Last_name = "Ahmed";

let concated_name = First_name.concat(" "+Last_name);

console.log(concated_name);

console.log(" index of space in between first name and last name is "+concated_name.indexOf(" "));

console.log(concated_name.slice(7))

console.log(concated_name.replace("Ahmed", "Khan"));

console.log(concated_name.toUpperCase());
console.log(concated_name.toLowerCase());

let split = concated_name.split(" ");
console.log(split[0]);
console.log(split[1]);
