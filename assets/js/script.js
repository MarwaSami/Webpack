/*
 End of case 1
*/
// 1- get user inputs and output
function getUserInput(){
    // will take user input for numbers and ops
    let Nums =document.getElementsByClassName("Num"); 
    let op=document.getElementById("op");
   return [parseInt(Nums[0].value),parseInt(Nums[1].value),op.value]
}

// 2- validation 
function validInput(num){
 return !isNaN(num)
}
// 3- do op
 function deoperation(num1,num2,op){
switch(op){
 case "add":
    return num1+num2;
 case "min":
    return num1-num2;
 case "multiply":
    return num1*num2;
 case "division" :
    return num1/num2;
  default:
    return 0;
}
}
// 4- handle error
let errorvalue=false;
function handleerror(error,msg){
   let err=document.getElementById("error")
   if(error || errorvalue){
     if(error){
        err.innerText+=msg
     }
      err.style.display="block"
     }
  else{
        err.innerText=""
        err.style.display="none"
  }
errorvalue=error;
}
// 5- get result
function setuserOutput(res){
    let result=document.getElementById("result")
        result.innerText="Result: "+res
}
//6- done calaculation
 document.getElementById("cal").addEventListener('click',calculate)
 function calculate(){
   handleerror(false,"")
  let inputs= getUserInput();
  console.log(validInput(inputs[0])&&validInput(inputs[1]));
  if(validInput(inputs[0])&&validInput(inputs[1])){
    let res=deoperation(inputs[0],inputs[1],inputs[2])
   // console.log(res);
    setuserOutput(res)
  } else{
    for(let i=0 ; i<(inputs.length-1);i++){
      let error= !validInput(inputs[i])
      handleerror(error,"Invalid Num :"+(i+1)+"")
    }
  }
 }
