// Összetett adattípusok: tömb és objektum
let gyumolcsok = ["alma", "körte", "banán", "citrom"]
console.log(gyumolcsok[1])
let kosar = ["szöveg", 1235, true, "szöveg2", 1343]
// elem hozzáadása a tömb végéhez
kosar.push("valami")
console.log(kosar)
for (let i=0; i < kosar.length;i++) {
    console.log(kosar[i])
}

for (let gyumolcs of gyumolcsok) {
    console.log(gyumolcs)
}

// hozzunk létre egy butorok tömböt 5 elemmel, majd írassuk ki az elemeit
// for of ciklussal
gyumolcsok[3] = "narancs"

gyumolcsok[8] = "dió"

console.log(gyumolcsok)
for (let gyumolcs of gyumolcsok) {
    console.log(gyumolcs)
}

// while ciklussal promptból kérjünk be számokat 0 végjelig. Az elemeket
// adjuk hozzá a szamok tömbhöz. Írjuk ki a számok összegét!
/* 

let szamok = []
let szam
do { szam = Number(prompt("Adj meg egy számot!"))
    if (szam != 0)
        {szamok.push(szam)}
 } while ( szam > 0 )


console.log(szamok)
let osszeg = 0
for (let szam of szamok){
  osszeg += szam
}

console.log(osszeg) */

// objektumok kulcs: érték párok

let autok = {
    marka: "Suzuki",
    evjarat: 2025,
    elektromos: false
}

console.log(autok.evjarat)

// elemek elérése ID
let tombok = document.getElementById("tombok")

tombok.innerHTML = "Javascriptből írtam <br> ezt is"
tombok.style.color = "red"
tombok.style.border = "2px solid blue"

// class

let szoveg = document.getElementsByClassName("szoveg")
console.log(szoveg)
for (let sz of szoveg) {
    sz.style.backgroundColor = "yellow"
}

szoveg[2].style.color = "red"

// tagName

let alcim = document.getElementsByTagName("h2")
for (let i=0; i<alcim.length; i++){

    alcim[i].style.backgroundColor = "lightblue"
}

// hozz létre egy listát, és használd js-ből a formázást
 let lista = document.getElementById("gyumolcsLista")
let elemek = lista.getElementsByTagName("li")
for (let elem of elemek) {
  elem.style.color = "green"
  elem.style.fontWeight = "bold"
}

let butorok = ["asztal", "szék", "kanapé", "szekrény", "ágy"]
let list = document.getElementById("list")
butorok.forEach(item => {
   let li = document.createElement("li")
   li.textContent = item
   li.style.color = "#000000"
   li.style.padding = "10px"
   list.appendChild(li)
})
list.style.padding = "25px"
list.style.border = "2px solid lightblue"
list.style.backgroundColor = "#555555"
list.style.borderRadius = "10px"

/* function kattintas() {
    alert("Kattintottál!")
} */

function kattintas2() {
    alert("Kétszer kattintottál?")
}

function csere() {
    document.getElementById("nev").style.color= "red"
    let nev = document.getElementById("nev").value 
    console.log(nev)
}

function rahuz(elem) {

    elem.style.backgroundColor ="green"
}

function lehuz(elem) {
    elem.style.backgroundColor ="grey"
}

function gepeles() {
    let szoveg=""
    document.getElementById("gepeles").innerHTML +="Billentyűleütés történt!<br>"
}

