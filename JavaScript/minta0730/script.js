let userPoint = 0
let compPoint = 0

function play(userChoice) {
    const choices = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * 3)
    const computerChoise = choices[randomIndex]
    console.log(computerChoise)

    if(userChoice == "rock") {
        document.getElementById("bko").style.border = "red solid 3px"
        document.getElementById("bpapir").style.border = "red solid 0px"
        document.getElementById("bollo").style.border = "red solid 0px"

    } else if(userChoice == "paper") {
        document.getElementById("bpapir").style.border = "red solid 3px"
        document.getElementById("bko").style.border = "red solid 0px"
        document.getElementById("bollo").style.border = "red solid 0px"

    } else {
        document.getElementById("bollo").style.border = "red solid 3px"
        document.getElementById("bpapir").style.border = "red solid 0px"
        document.getElementById("bko").style.border = "red solid 0px"
    }

    if(computerChoise == "rock"){
        document.getElementById("gepvalasztkep").src = "img/ko.png"
    } else if(computerChoise == "paper") {
        document.getElementById("gepvalasztkep").src = "img/papir.png"
    } else {
        document.getElementById("gepvalasztkep").src = "img/ollo.png"
    }

    const result = getResult(userChoice, computerChoise)
    document.getElementById("result").innerText = result
    document.getElementById("tePontod").innerText = userPoint
    document.getElementById("gepPont").innerText = compPoint
    
}

function getResult(user, computer) {
    if(user === computer) {
        return "Döntetlen"
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        userPoint++
        return "Te nyertél!"
    } else { 
        compPoint++
        return "Gép nyert!"
    }
}