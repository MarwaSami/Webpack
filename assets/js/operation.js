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