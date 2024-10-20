let person = {

    firstname : "Mansoor",
    lastname : "Ahmed",
    gender:"Male",
    will_deleted : "delete",
    fullname : function (){

        return this.firstname+" "+this.lastname;
    }


};



console.log(person.firstname);
person.age = 26;
console.log(person);
console.log(person['firstname']);
delete person.will_deleted;
console.log(person);
console.log(person.fullname());

console.log()