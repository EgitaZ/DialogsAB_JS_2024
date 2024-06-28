a = 10;
console.log("a mainīgā vērtība:" + a);
{
    a = 30;
    var a = 40;
} 
console.log("a mainīgā vērtība:" + a);
/*--------------------------------tests ar var------------------------------*/
var x = 10;
console.log("x mainīgā vērtība pirms{}:" + x);
{
    console.log("x mainīgā vērtība iekš {}:" + x);
    x = 20;
    console.log("x mainīgā vērtība iekš {} un pēc = darbības:" + x);
    var x = 100;
    console.log("x mainīgā vērtība iekš {} un pēc atkārtotas var:" + x); 
var xx = 1000;
}
console.log("x mainīgā vērtība pēc {}: " + x);
console.log("xx mainīgā vērtība pēc {}: " + xx);
x = 30;
console.log("x mainīgā vērtība pēc {} un pēc = darbības:" + x);
var x = 40;
console.log("x mainīgā vērtība pēc {} un pēc atkārtotas var:" + x);
/*--------------------------------tests ar let------------------------------*/
let y = 10; // summas mainiigais
console.log("y mainīgā vērtība pirms{}:" + y);
{
     // console.log("y mainīgā vērtība iekš {}:" + y);
//y = 20;
   //  console.log("y mainīgā vērtība iekš {} un pēc = darbības:" + y);
    let y = 100;
    console.log("y mainīgā vērtība iekš {} un pēc atkārtotas let:" + y);
}
console.log("y mainīgā vērtība pēc {}: " + y);
y = 30;
console.log("y mainīgā vērtība pēc {} un pēc = darbības:" + y);
// let y = 40;
// var y = 40;
// const y = 40; 
// console.log("y mainīgā vērtība pēc {} un pēc atkārtotas let:" + y);
/*--------------------------------tests ar const------------------------------*/
const z = 10; 
console.log("z mainīgā vērtība pirms{}:" + z);
{
// console.log("z mainīgā vērtība iekš {}:" + z);
// z = 20;
// console.log("z mainīgā vērtība iekš {} un pēc = darbības:" + z);
const z = 100;
console.log("z mainīgā vērtība iekš {} un pēc atkārtotas const:" + z);
}
console.log("z mainīgā vērtība pēc {}: " + z);
// z = 30;
// console.log("z mainīgā vērtība pēc {} un pēc = darbības:" + z);
// const z = 40;
// var z = 40;
// let z = 40; 
// console.log("z mainīgā vērtība pēc {} un pēc atkārtotas const:" + z);


let text = "Some text";

document.getElementById("demo").innerHTML = text;

text = "Some other text";

document.getElementById("demo").innerHTML = text;