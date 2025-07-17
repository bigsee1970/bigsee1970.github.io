/* let p = prompt("Mennyi idős vagy?")


    if ( p<18) 
{
        alert("Mennyé haza!")

}

 else if (p>18)
{
    alert("Üdvözlünk a felnőttek világában!")
}

else {
    alert("Üdvözlünk a felnőttek világában!")
} */

let sz1 = Number(prompt("Adj meg egy számot!"));
let sz2 = Number(prompt("Adj meg egy másik számot!"));
let m = prompt("Melyik műveletet szeretnéd elvégezni? (+, *,?)");

if (m === "+") 
{
    alert("Az eredmény: " + (sz1 + sz2));
}

else if (m === "*")
{
    alert("Az eredmény: " + (sz1 * sz2));
}