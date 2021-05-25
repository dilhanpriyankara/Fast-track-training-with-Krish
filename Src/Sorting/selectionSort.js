console.log("Selection sorting");

const inputArr=[2,1,20,5,6,8,10,3];

let n = inputArr.length;
        
for(let i = 0; i < n; i++) {
    // Finding the smallest number in the subarray
    let min = i;
    for(let j = i+1; j < n; j++){
        if(inputArr[j] < inputArr[min]) {
            min=j; 
        }
    }  
    // Swapping  elements
    let tmp = inputArr[i]; 
    inputArr[i] = inputArr[min];
    inputArr[min] = tmp;      
  
}
console.log(inputArr);