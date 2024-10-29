const Choco = require("./Class.js");

class Inheritance extends Choco {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }
}

let object3 = new Inheritance("Farheen","Taranum");
object3.name();