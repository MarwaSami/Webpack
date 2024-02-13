// 1- get user inputs and output
function getUserInput(){
    // will take user input for numbers and ops
    let Nums =document.getElementsByClassName("Num"); 
    let op=document.getElementById("op");
   return [parseInt(Nums[0].value),parseInt(Nums[1].value),op.value]
}