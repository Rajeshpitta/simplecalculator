function AddNum(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    num1=parseInt(num1)
    num2=parseInt(num2)
    let h1=document.getElementById("result")
    res=num1+num2;
    h1.innerHTML="Result :"+res;
    
    
}
function SubNum(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let h1=document.getElementById("result")
    res=num1-num2;
    h1.innerHTML="Result :"+res;
}
function MulNum(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let h1=document.getElementById("result")
    res=num1*num2;
    h1.innerHTML="Result :"+res;
}
function DivNum(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let h1=document.getElementById("result")
    res=num1/num2;
    h1.innerHTML="Result :"+res;
}
function PowNum(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let h1=document.getElementById("result")
    res=num1**num2;
    h1.innerHTML="Result :"+res;
}