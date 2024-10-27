class Choco {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
    console.log(this.firstname, this.lastname);
  }

  //console.log(this.firstname,this.lastname);
  //console.log(firstname,lastname);
  name() {
    console.log(this.firstname, this.lastname);
   // console.log(firstname, lastname);
  }
}

let object1 = new Choco("Mansoor", "Ahmed");

object1.name();
