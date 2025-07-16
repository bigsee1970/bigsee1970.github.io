/* /*a = 8;
console.log(a);

console.log(typeof a);

a = "8";
console.log(a);
console.log(typeof a);

//a=false
console.log(a)
console.log(typeof(a))

console.log(13 % 5);

console.log(3 + 8);

console.log("Szia" + "Zoli" + a);

//console.log (szam>8)

var szam1 = 123;

let szam2 = 321;
//let szam2;*/

/*const PI=3.14
PI=5 */

/* let x = 10;
let y = "10";

console.log(x == y);

/* elágazások: */
/* 
let p = 20
if (p < 25) {
  console.log("a szám kisebb 25-nél");
} else {
  console.log("a szám nagyobb 25-nél");
} */

/*let m = 58000
let n = 128356256

if (m > n) console.log(m-n)
    
 
else {
    console.log(n-m)
}*/

/* let p = prompt("Hány éves vagy?")

if (p >= 18) {
    alert("Beléphetsz!")
}
else  {
    alert("Tilos!")
} */

    let x = prompt("Kérek egy számot!")
    let y = prompt("Kérek egy másik számot!")

    let muvelet = prompt("Melyik műveletet szeretnéd?\n + *");
    if (muvelet == "+") 
        alert(x+y)
    else if (muvelet == "*")
        alert(x*y)