let a = Number(prompt("Kérek egy számot (cm)!"));
let b = Number(prompt("Kérek egy másik számot (cm)!"));
let c = Number(prompt("Kérek egy harmadik számot (cm)!"));

if (a === b && b  === c) {
  alert("Ez egy egyenlő oldalú háromszög");
} else if ( a === c) {
  alert("Ez egy egyenlő szárú háromszög");
} else {
  alert("Ez egy általános háromszög");
}
