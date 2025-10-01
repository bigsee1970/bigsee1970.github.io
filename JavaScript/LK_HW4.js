let szamok = [];
let szam;
do {
  szam = Number(prompt("Adj meg egy számot! (0 esetén vége!)"));
  if (szam !== 0) {
    szamok.push(szam);
  }
} while (szam !== 0);

function paros(tomb) {
  let db = 0;
  for (let sz of tomb) {
    if (sz % 2 === 0) db++;
  }
  return db;
}

function atlag(tomb) {
  if (tomb.length === 0) return 0;
  let osszeg = 0;
  for (let sz of tomb) {
    osszeg += sz;
  }
  return osszeg / tomb.length;
}

document.getElementById("szamok").textContent =
  "Számok: " + szamok.join(", ");
document.getElementById("paros").textContent =
  "Páros számok száma: " + paros(szamok);
document.getElementById("atlag").textContent =
  "A számok átlaga: " + atlag(szamok);
