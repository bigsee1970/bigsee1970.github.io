/* let butorok = ["sezlony", "kanapé", "szék", "asztal", "sámli"]

for (let butor of butorok) {
    console.log(butor)
    }
 */

/* let szamok = [];
let szam = null;

while (szam !== 0) {
    szam = Number(prompt("Adj meg egy számot!"));
    if (szam !== 0) szamok.push(szam);
}
let osszeg = 0;
for (let elem of szamok) {
    osszeg += elem;
}
console.log("A számok összege:", osszeg); */

//elemek elérése ID
/* let tombok = document.getElementById("tombok");
tombok.innerHTML = "Javascriptből írtam";
tombok.style.color = "red";
tombok.style.border = "8px solid blue";

// class
let szovegek = document.getElementsByClassName("szoveg");

for (let sz of szovegek) {
  sz.style.backgroundColor = "yellow";
}

szovegek[2].style.color = "red";

let alcim = document.getElementsByTagName("h2");
for (let i=0; i<alcim.length; i++1) {
  alcim[i].style.backgroundColor = "lightblue";
}
 */

/* let list = document.getElementById("list")
list.style.color = "red";
list.style.border = "8px solid blue";
list.borderradius = 4px;

let egyes = document.getElementsByClassName("egyes");

for (let e of egyes) {
  e.style.backgroundColor = "yellow";
}

let kettes = document.getElementsByClassName("kettes");

for (let k of kettes) {
  k.style.backgroundColor = "blue";
  k.style.color = "orange"
}

let harmas = document.getElementsByClassName("harmas");

for (let h of harmas) {
  h.style.border = " 2px solid brown";
  h.style.color = "grey"
} */