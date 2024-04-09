const array =[1,2,3,4,5,6,7,8,9];

const target = 3;

function Binaryearch (array,target){
let left = 0;
let right = array.length-1;
while(left<=right){
  const midIndex= Math.floor((left+right)/2)
  const midValue = array[midIndex]
  if(midValue === target){
    return midIndex
   }else if(midIndex < target){
    left=midIndex+1;
   }else{
    right=midIndex-1;
   } 
}
}
console.log(Binaryearch(array,target));