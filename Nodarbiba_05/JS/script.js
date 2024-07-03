// if (nosacjums){darbIbas;}

console.log(new Date());
console.log(new Date().getHours());
console.log(new Date().getHours() < 20);

if (new Date().getHours() < 20) {
    document.getElementById("demo").innerHTML = "Good day!";
}