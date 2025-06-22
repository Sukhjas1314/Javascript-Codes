// var car1 = {
//     Name : "Honda City" ,
//     Manufacturer : "Honda" ,
//     Fuel_Capicity : "50L",
//     greet : function(){
//         console.log("Hello from Sukhmanpreet Singh");
//     }
// }
// // car1.color = "Red";

// var car2 = {
//     Name : "I10",
//     Manufacturer : "Hyundai",
//     Fuel_Capicity : "40L"
// };
// car2['color'] = "White";

// console.log(car1,"\n\n",car2);
// console.log(car1.Name,"\n",car2['Name']);
// console.log(car1.greet());


                    // 1st method of object
// var MyDetails = {
//     Name : "Sukhmanpreet Singh",
//     Mother_name : "Mrs. Manbir Kaur",
//     Father_name : "Mr. Kanwarpreet Singh",
//     No_of_Siblings : 1,
//     Sibling_name : "Jashanveer Singh",
//     Skills : "Python(basic),Javascript(basic),C(basic),MySQL(basic),HTML(basic)",
//     Hobby : "Cricket,Reading books,Badminton,Football,Swimming",
//     greet : function(){
//         console.log("Hello from Sukhmanpreet Singh to all of you !!")
//     }
// };
// console.log(MyDetails);
// console.log(MyDetails.greet());


                    // 2nd method for object
// var mydetails = new Object();
// mydetails.Name = "Sukhmanpreet Singh";
// mydetails.Mother_name = "Mrs. Manbir Kaur";
// mydetails.Father_name = "Mr. Kanwarpreet Singh";
// mydetails.No_of_Siblings = 1;
// mydetails.Sibling_name = "Jashanveer Singh";
// mydetails.Skills = "Python(basic),Javascript(basic),C(basic),MySQL(basic),HTML(basic)";
// mydetails.Hobby = "Cricket,Reading books,Badminton,Football,Swimming";
// mydetails.greet = function(){
//     console.log("Hello from Sukhmanpreet Singh to all of you !!")
// }
// console.log(mydetails);
// console.log(mydetails.greet()); 




                    // 3rd method for object
function Details(Name,Mother_name,Father_name,No_of_Siblings,Sibling_name,Institution,Job_current,Experience,Skills,Hobby){
    this.Name = Name;
    this.Mother_name = Mother_name;
    this.Father_name = Father_name;
    this.No_of_Siblings = No_of_Siblings;
    this.Sibling_name = Sibling_name;
    this.Institution = Institution;
    this.Job_current = Job_current;
    this.Experience = Experience;
    this.Skills = Skills;
    this.Hobby = Hobby;  

}

var Mydetails = new Details(
    "Sukhmanpreet Singh",
    "Mrs. Manbir Kaur",
    "Mr. Kanwarpreet Singh",
    1,
    "Jashanveer Singh , Harseerat Kaur " ,
    "BCM Arya Model Sn. Sec. School,Thapar Institute of Engineering and Technology",
    "Student",
    null,
    "Python(basic),Javascript(basic),C(basic),MySQL(basic),HTML(basic),MS Word(basic),MS Powerpoint(basic),MS Excel(basic)",
    "Cricket,Reading books,Badminton,Football,Swimming,Coding,Watching Movies or Webseries",
);
// Mydetails.Sibling_name = "Harseerat Kaur";
delete Mydetails.No_of_Siblings;
console.log(Mydetails);