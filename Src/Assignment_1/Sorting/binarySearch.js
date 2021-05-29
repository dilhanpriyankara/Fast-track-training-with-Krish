function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
           
            return middle;
        } else if (sortedArray[middle] < key) {
           
            start = middle + 1;
        } else {
           
            end = middle - 1;
        }
    }
	
    return -1;
}

var arr=[2,3,4,5,8,10,15,20];
console.log(binarySearch(arr,10));