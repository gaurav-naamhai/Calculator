let primno="";
let secno="";
let operater=""


const btn1=document.getElementById("1");
const btn2=document.getElementById("2");
const btn3=document.getElementById("3");
const btn4=document.getElementById("4");
const btn5=document.getElementById("5");
const btn6=document.getElementById("6");
const btn7=document.getElementById("7");
const btn8=document.getElementById("8");
const btn9=document.getElementById("9");
const btn0=document.getElementById("0");
const acc=document.getElementById("AC");
const del=document.getElementById("Del");
const eql=document.getElementById("=");
const plus=document.getElementById("+");
const minus=document.getElementById("-");
const divide=document.getElementById("/");
const multiple=document.getElementById("*");
function returnIt(no){
    if(primno==""){ 
        primno=no;
    } else {
        secno=no;
    }
}
function operate(){ 
function add(no1,no2){
    return parseInt(no1) + parseInt(no2);
}
function subtract(no1,no2){
    return parseInt(no1) - parseInt(no2);
}
function multiply(no1,no2){
    return parseInt(no1) * parseInt(no2);
}
function division(no1,no2){
    return parseFloat(no1)/parseFloat(no2);
}
eql.addEventListener("click",()=>{{
if(operater=="+"){
   console.log(add(primno,secno)) ;
}
else if(operater=="-"){
    console.log(subtract(primno,secno)) ;
}
else if(operater=="*"){
    console.log(multiply(primno,secno)) ;
}
else if(operater=="/"){
    console.log(division(primno,secno)) ;
}} ; console.log("="); return;})}
btn1.addEventListener("click",()=>{returnIt("1"); console.log("1"); return;})
btn2.addEventListener("click",()=>{returnIt("2"); console.log("2"); return;})
btn3.addEventListener("click",()=>{returnIt("3"); console.log("3"); return;})
btn4.addEventListener("click",()=>{returnIt("4"); console.log("4"); return;})
btn5.addEventListener("click",()=>{returnIt("5"); console.log("5"); return;})
btn6.addEventListener("click",()=>{returnIt("6"); console.log("6"); return;})
btn7.addEventListener("click",()=>{returnIt("7"); console.log("7"); return;})
btn8.addEventListener("click",()=>{returnIt("8"); console.log("8"); return;})
btn9.addEventListener("click",()=>{returnIt("9"); console.log("9"); return;})
btn0.addEventListener("click",()=>{returnIt("0"); console.log("0"); return;})
plus.addEventListener("click",()=>{operater="+"; console.log("+"); return;})
minus.addEventListener("click",()=>{operater="-"; console.log("-"); return;})
divide.addEventListener("click",()=>{operater="/"; console.log("/"); return;})
multiple.addEventListener("click",()=>{operater="*"; console.log("*"); return;})
operate();