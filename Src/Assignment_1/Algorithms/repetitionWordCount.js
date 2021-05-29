function numOfrepetition(str){
    var strArr=str.split(" ");
    console.log(strArr);    
    let mapdata=new Map();
    for (let index = 0; index < strArr.length; index++) {
        count=1;
        for (let i = index+1; i < strArr.length; i++) {
           if(strArr[i]!="*&6$") {
                if(strArr[index]==strArr[i]){              
                    count++;
                    strArr[i]="*&6$";
                    mapdata.set(strArr[index],count);

                }  
           } 
           
        }
        
        
    }  
    console.log(mapdata);
}

var str="this is this age so you go there are this go age you go is go";
numOfrepetition(str);