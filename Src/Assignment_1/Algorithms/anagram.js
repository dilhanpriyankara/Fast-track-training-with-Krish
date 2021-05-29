var originalWord="restful";
var testingWord="fluster";

originalWordArr=[...originalWord];
testingWordArr=[...testingWord];
temparr=[];

if(originalWordArr.length!==testingWordArr.length){
     console.log(testingWord+" Not Anagram word");
}else{

    for(let i=0;i<testingWordArr.length;i++){

        for(let x=0;x<originalWordArr.length;x++){
            if(testingWordArr[i]===originalWordArr[x]){
                temparr.push(true);
                originalWordArr[x]="%$#"
                break;

            }
    
        
        }
    
    
    }
    console.log(temparr);
    if(temparr.length===originalWordArr.length){
        console.log(testingWord +" is a Anagram word");
    }else{
        console.log(testingWord +" is Not a Anagram word");
    }
}






