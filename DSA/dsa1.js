const sanDeep = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

const target = 8;

function binarryMethod(sanDeep,target){
  let left = 0;
  let right = sanDeep.length-1;
  while(left <=right){
    Midindex = Math.floor((left+right)/2)
    Midvalue = sanDeep[Midindex]
    if(Midvalue=== target){
      return Midindex
    }else if (Midvalue < target){
      left = Midindex + 1;
    }else{
      right = Midindex-1
    }
  }
}
console.log(binarryMethod(sanDeep,target))