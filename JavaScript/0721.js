/* Ciklusok 
1/ elöltesztelő: while (feltétel) {ciklusmag}
2/ hátultesztelő: do {ciklusmag} while (feltétel)
3/ léptető: for (kezdőérték; feltétel;lépték) {ciklusmag}
*/

/* i=1
while (i<=10) {
    console.log(i);
    i++;
}

j=1
do {
    console.log(j);
    j++;
} while (j<=10);

for (i=1; i<=10; i++) {
    console.log
} */

/* scope - hatókör, lehet lokális és globális */

/* let a= "szöveg"
for (i=1; i<=10; i++) {
    console.log(i+a)
let b = "valami"
}

console.log(b) */

/* for (i=100; i<=500; i+=5) {
    console.log(i);
} */

/*  let count = 0;

for (let i = 1500; i <= 5000; i++) {
  if (i % 7 === 0) {
    count++;
  }
}

console.log(count); */

// függyvények
// function függyvényneve (paraméterek - nem kötelező) {függvény törzs}

/* function osszeg(a,b) {
    return a+b
}
 */
// függyvény nem fut le, csak ha meghívjuk!!!

/* console.log(osszeg(12,8)) */

/* function kivonas() {
  let c = a - b;
  return c;
}

let a = 10
let b = 5
kivonas()
 */

 
do {
  a = Number(prompt("Kérek egy számot A!"));
} while (a <= 0 || isNaN(a));

do {
  b = Number(prompt("Kérek egy számot B!"));
} while (b <= 0 || isNaN(b));

function terulet(a, b) {
  return a * b;
}

function kerulet(a, b) {
  return (a + b) * 2;
}

if (a <= 0 || b <= 0) {
  alert("Csak pozitív számokat adj meg!");
}

console.log(terulet(a, b));
console.log(kerulet(a, b));