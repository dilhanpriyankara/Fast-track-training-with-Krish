function linearSearch(arr, key){

    for(i=0;i<arr.length;i++){
        if(arr[i]===key){
            return i;
        }
    }
    return -1;
}

var arr=[1,55,6,89,100];
console.log(linearSearch(arr,100));