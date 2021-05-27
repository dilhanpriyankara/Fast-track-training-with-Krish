let missing = [];
let numArray = [32,36,30,31,37,38,39,33,40,35];
const sortedNumArray = numArray.sort((a, b) => a - b);
let mapdata=new Map();
for (let index = 0; index < sortedNumArray.length-1; index++) {  
    
    let dif=sortedNumArray[index+1]-sortedNumArray[index];
    mapdata.set(sortedNumArray[index+1]+"-"+sortedNumArray[index],dif);
    
}
 var previousval=0;
 largdataArr=[];
 singleDataArr=[];
  for (let [key, value] of  mapdata.entries()) {
    if(previousval!=0){
        if(previousval===value){
            largdataArr.push(value);
            previousval=value;
        }else{
            singleDataArr.push(value);
        }
       
        console.log(key + " = " + value);
    }else{
        previousval=value;

    } 
}

console.log(largdataArr);
console.log(singleDataArr);

let Keys = [...mapdata.entries()]
        .filter(({ 1: v }) => v === singleDataArr[0])
        .map(([k]) => k);

console.log(Keys);
keyArr=Keys.toString().split("-");
var missingnumber=keyArr[0]-largdataArr[0];
console.log("Missing number is ="+missingnumber);