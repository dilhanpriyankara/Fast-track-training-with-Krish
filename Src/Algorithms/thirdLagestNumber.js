function quicksortForOrdering(inputArr){
    if(inputArr.length<=1){
        return inputArr;        
    }else{
       
        let leftarr=[];
        let rightarr=[];
        let pivot=inputArr.pop();
       
        for (let index = 0; index < inputArr.length; index++) {
            if(inputArr[index]<=pivot){
                leftarr.push(inputArr[index]); 
            }else{
                rightarr.push(inputArr[index]);
            }
            
        }
        return [...quicksortForOrdering(rightarr),pivot,...quicksortForOrdering(leftarr)];
    }
}

var arr=[500,400,200,100,300,600];
var dscOrderArray=quicksortForOrdering(arr);
console.log("3rd largest number is "+dscOrderArray[2]);

//order to Dsc order
//get 3rd largest number by index