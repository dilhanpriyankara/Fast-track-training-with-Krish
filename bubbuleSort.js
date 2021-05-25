console.log("Bubble sorting");
const arr=[2,1,5,6,8,10,3];

let arrsize=arr.length;

for(i=0; i<arrsize-1; i++){

   for(x=0; x<arrsize-i-1; x++){

    if(arr[x] > arr[x+1]){

        let temp=arr[x];
        arr[x]=arr[x+1];
        arr[x+1]=temp;

    }

   }

}
console.log(arr);