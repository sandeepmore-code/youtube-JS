// // Learn about objects and classes.

// const student= {
//   fullName : "sandeep",
//   marks: 75,
//   printMarks : function() {
//     console.log("marks=", this.marks);
//   },
//   };

// lear about class:

// class Car {
//   constructor(oye){
//     // console.log("this is object");  Learn about constructor
//     this.oye=oye
//   }
//   start (){
// console.log("lets start the car");
//   }
//   stop (){
//     console.log("turnes off");
//   }
// }

// let fortuner= new Car("fortuner");
// let maruti= new Car("okay");

// learn about inheartance 

// class person {
//   constructor(spices){
//     this.spices = "Homo Spains";
//   }
//   eat(){
//     console.log("eat");
//   }
//   sleep(){
//     console.log("sleep");
//   }
// };

// class Engineer extends person{
//   constructor(branch){
//     super();
//     this.branch= branch;
//   }
//   work(){
//     console.log("Sr.Engineer");
//   }
// }

// let EngObj = new Engineer("Mechanical"); 

// Q. Ceater a data for college website. create a class user with 2 properties name & email. It also has a method called viewData() it allows user to view data.

const Data = "Secreate information"

class User {
  constructor(name, email){
    this.name = name;
    this.email= email;
  }
  viewData (){
    console.log("Data =",Data)
  }
};

class Admin extends User {
  constructor(name,email){
    super(name,email);

  }
  editData(){
    Data = "updated data"
  }
}

let Student1 = new User("Sandeep","Sandeep@mail.com");

let Admin1 = new User("Yogesh","Yogi@gmail.com");



