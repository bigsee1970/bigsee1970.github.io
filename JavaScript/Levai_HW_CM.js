let a = Number(prompt("Kérek egy számot (cm)!"));
let b = Number(prompt("Kérek egy másik számot (cm)!"));
let c = Number(prompt("Kérek egy harmadik számot (cm)!"));

if (a === b && b  === c) {
  console.log("egyenlő oldalú háromszög");
} else if ( a === c) {
  console.log("egyenlő szárú háromszög");
} else {
  console.log("általános háromszög");
}
