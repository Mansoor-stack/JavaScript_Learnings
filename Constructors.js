function Classdetails (totalNoOfstudents,maleStudents,femaleStudents ){

    this.totalNoOfstudents = totalNoOfstudents;
    this.maleStudents = maleStudents;
    this.femaleStudents = femaleStudents;

    // console.log("The total number of students are "+this.totalNoOfstudents);
    // console.log("The number of male students are "+this.maleStudents);
    // console.log("The number of female students are "+this.femaleStudents)
    this.comments = function(){

        console.log("The total number of students are "+this.totalNoOfstudents);
        console.log("The number of male students are "+this.maleStudents);
        console.log("The number of female students are "+this.femaleStudents)

    }
}

let class1 = new Classdetails(50,28,22);
let class2 = new Classdetails(60,30,30);
class1.comments();
class2.comments();