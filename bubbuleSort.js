console.log("Bubble sorting");
const arr=[2,1,5,6,8,10,3];

let n=arr.length;

for(i=0; i<n-1; i++){

   for(x=0; x<n-i-1; x++){

    if(arr[x] > arr[x+1]){

        let temp=arr[x];
        arr[x]=arr[x+1];
        arr[x+1]=temp;

    }

   }

}
console.log(arr);