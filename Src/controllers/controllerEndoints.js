const thirdlarge=require('../Service/thirdLargeNumberService');
const anagramservice=require('../Service/anagramService');

const thirdlarg = (req, res, next) => {
    inputArr=[500,400,200,100,300,600];     
    var dscOrderArray=thirdlarge.thirdlarge(inputArr);
    console.log("3rd largest number is "+dscOrderArray[2]);
    res.json({'3rd largest number is': dscOrderArray[2]});  

};

const anagram = (req, res, next) => {
    var originalWord="restful";
    var testingWord="fluster";      
    var anagram=anagramservice.anagramword(originalWord,testingWord);  
    res.json({'Description': anagram});  

};




module.exports = {thirdlarg,anagram};