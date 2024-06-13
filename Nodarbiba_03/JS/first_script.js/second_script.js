a = 10;
console.log("a mainīgā vērtība:" + a);

var x = 10;
console.log("x mainīgā vērtība pirms{}:" + x);
{
    console.log("x mainīgā vērtība iekš {}:" + x);
    x = 20;
    console.log("x mainīgā vērtība iekš {} un pēc = darbības:" + x);
    var x = 100;
    console.log("x mainīgā vērtība iekš {} un pēc atkārtotas var:" + x);
}
console.log("x mainīgā vērtība pēc {}: " + x);
x = 30;
console.log("x mainīgā vērtība pēc {} un pēc = darbības:" + x);
var x = 40;
console.log("x mainīgā vērtība pēc {} un pēc atkārtotas var:" + x);