let missing = [];
let numArray = [32,36,30,31,37,38,39,33,34,40];
const sortedNumArray = numArray.sort((a, b) => a - b);
let mapdata=new Map();
for (let index = 0; index < sortedNumArray.length-1; index++) {  
    
    let dif=sortedNumArray[index+1]-sortedNumArray[index];
    mapdata.set(sortedNumArray[index+1]+"-"+sortedNumArray[index],dif);
    
}
for (const element of mapdata) {
    console.log(element);
  }



