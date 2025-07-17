let x = Number(prompt("Kérek egy számot (1-180)!"));
let y = Number(prompt("Kérek egy másik számot (1-180)!"));
let z = Number(prompt("Kérek egy harmadik számot (1-180)!"));

if (x + y + z == 180) {
  console.log("Ez egy háromszög!");
} else if (x + y + z > 180) {
  console.log("Ez nem egy háromszög! (belső fokok összege több, mint 180 fok!)");
} else {
  console.log("Ez nem egy háromszög! (belső fokok összege kevesebb, mint 180 fok!)");
}
 
