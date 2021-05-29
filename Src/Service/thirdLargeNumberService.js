exports.thirdlarge = function quicksortForOrdering(inputArr){
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