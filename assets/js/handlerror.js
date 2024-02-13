// 4- handle error
let errorvalue=false;
export  function handleerror(error,msg){
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