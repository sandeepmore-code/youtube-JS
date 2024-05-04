// Promises

// function getData(dataID){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       console.log("data",dataID);
//       resolve("success")
//     },3000)
//   });
// }
// console.log("fetcthing Data")
// getData(1)
//  .then((res)=>{
//   return getData(2);
//  })
//  .then((res)=>{
//   return getData(3);
//  })
//  .then((res)=>{
//   console.log(res)
//  })

// Async & await function 

//  function getData(DataId){
// return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("data",DataId )
//     resolve("Success");
//   },4000)
// });
// }

// async function getAllData(){
//   console.log("getting Data 1 ...")
//   await getData(1);
//   console.log("getting Data 2 ...")
//   await getData(2);
//   console.log("getting Data 3 ...")
//   await getData(3);
//   console.log("getting Data 4 ...")
//   await getData(4);

// }


// (async function (){
//   console.log("getting Data 1 ...")
//   await getData(1);
//   console.log("getting Data 2 ...")
//   await getData(2);
//   console.log("getting Data 3 ...")
//   await getData(3);
//   console.log("getting Data 4 ...")
//   await getData(4);

// })();



// function asyncFunction1(){
//  return new Promise((resolve,reject)=>{
//   setTimeout(() => {
//     console.log("Some data 2");
//     resolve("Success");
//   }, 5000);
//  })
// }

// function asyncFunction2(){
//   return new Promise((resolve,reject)=>{
//    setTimeout(() => {
//      console.log("Some data 2");
//      resolve("Success");
//    }, 7000);
//   })
//  }
// console.log("fectching data!!!")
// let p1 = asyncFunction1();
// let p2 = asyncFunction2();
// p1.then((res)=>{
//   console.log(res);
//   p2.then((res)=>{
//     console.log(res)
//   })
  
// });



// Learning API fetching.

const URL =  "https://catfact.ninja/fact";
const docData = document.querySelector("#ParaSelector");
const DocButton =document.querySelector("#butTon");




const getFact = async()=>{
  console.log("getting data....");
  await new Promise(resolve=> setTimeout(resolve,2000));
  console.log("Here comes the data")
  let response = await fetch(URL);
console.log(response);
let data = await response.json();
docData.innerText=data.fact;

};

DocButton.addEventListener("click",getFact);












