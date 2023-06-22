const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const userShow = document.getElementById("usershow")
const pcShow = document.getElementById("pcshow")

let userChoice;
let pcChoice;

let userScore = 0;
let pcScore = 0;

let htmlPc = document.getElementById("computerscore")
let htmlUser = document.getElementById("userscore")


let winner = document.getElementById("winner") 

const btns = document.querySelectorAll(".btns");


function getPcChoice() {
    let num = Math.floor((Math.random() * 3) + 1);

    if (num == 1) {
        pcChoice = "rock"
    } else if (num == 2) {
        pcChoice = "paper"
    } else {
        pcChoice = "scissors"
    }
}

function getWinner() {
    if (userChoice == pcChoice) {
        return "draw"
    } else if (userChoice == "rock") {
        return (pcChoice == "scissors") ? "You Win!" : "You lose"
    } else if (userChoice == "paper") {
        return (pcChoice == "rock") ? "You Win!" : "You lose";
    } else if (userChoice == "scissors") {
        return (pcChoice == "paper") ? "You Win!" : "You lose";
    }
}



function getScore1() {


    
    if (userChoice == "rock" && pcChoice == "scissors") {
        userScore++ + 1;

    } else if (userChoice == "paper" && pcChoice == "rock") {
        userScore++ + 1;

    } else if (userChoice == "scissors" && pcChoice == "paper") {
        userScore++ + 1;

    } else if (userChoice == pcChoice) {
        return;
    } else {
        pcScore++ + 1;
    }
}

function decideWinner() {
    if (userScore == 5) {
        alert("you win")
        userScore = 0;
        pcScore = 0;
    } else if (pcScore == 5) {
        alert("you lose")
        pcScore = 0;
        userScore = 0;
    }
}

function reset() {
    pcScore = 0;
    userScore = 0;
    htmlPc.textContent = pcScore 
    htmlUser.textContent = userScore 
}

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("click", function() {
    reset()
})

btns.forEach(button => button.addEventListener("click", () => {
    userChoice = button.textContent;
    getPcChoice();
    userShow.textContent = userChoice;
    pcShow.textContent = pcChoice;
    winner.textContent = getWinner();
    getScore1()
    htmlPc.textContent = pcScore 
    htmlUser.textContent = userScore 
    decideWinner()

}))
