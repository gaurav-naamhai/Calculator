let primno=""
let secno=""
let operater=""
let answer=""
const display=document.getElementById("displayy");
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
    if(operater==""){ 
        primno+=no;
        display.value=primno;
    }else {
        secno+=no;
        display.value=secno;
    }}

function operate(){ 
function deleted(){
    if(operater=="")
{
    primno=primno.slice(0,-1);
    display.value=primno;
}else {
    secno=secno.slice(0,-1);
    display.value=secno;
}}
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
    if(no2=="0"){
         primno="";secno=""; operater=""; display.value="Hehe,dumb!!";
    } else {
    return parseFloat(no1)/parseFloat(no2);
}}
del.addEventListener("click",deleted)
acc.addEventListener("click",()=>{display.value=""; primno="";secno=""; operater="" ; return;})
eql.addEventListener("click",()=>{{
if(operater=="+"){
    if(secno==""){secno=primno}
  answer=add(primno,secno);
   display.value=Math.round(answer * 100) / 100;
}
else if(operater=="-"){
    if(secno==""){secno=primno}
    answer=subtract(primno,secno);
  display.value=Math.round(answer * 100) / 100;
}
else if(operater=="*"){
    if(secno==""){secno=primno}
    answer=multiply(primno,secno);
    display.value=Math.round(answer * 100) / 100;
}
else if(operater=="/"){
    if(secno==""){secno=primno}
    answer=division(primno,secno);
   display.value=Math.round(answer * 100) / 100;
}}
if(answer===undefined ) {
primno=""; secno=""; operater="" ; 
return;
}else {
primno=String(answer); secno=""; operater="" ; 
return;
}
})}
btn1.addEventListener("click",()=>{returnIt("1"); return;})
btn2.addEventListener("click",()=>{returnIt("2"); return;})
btn3.addEventListener("click",()=>{returnIt("3"); return;})
btn4.addEventListener("click",()=>{returnIt("4"); return;})
btn5.addEventListener("click",()=>{returnIt("5"); return;})
btn6.addEventListener("click",()=>{returnIt("6"); return;})
btn7.addEventListener("click",()=>{returnIt("7"); return;})
btn8.addEventListener("click",()=>{returnIt("8"); return;})
btn9.addEventListener("click",()=>{returnIt("9"); return;})
btn0.addEventListener("click",()=>{returnIt("0"); return;})
plus.addEventListener("click",()=>{operater="+";  return;})
minus.addEventListener("click",()=>{operater="-"; return;})
divide.addEventListener("click",()=>{operater="/"; return;})
multiple.addEventListener("click",()=>{operater="*"; return;})
operate();