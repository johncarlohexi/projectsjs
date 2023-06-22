let getPcScore = document.querySelector("cs");
let getUserScore = document.querySelector("us");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

const userShow = document.getElementById("usershow")
const pcShow = document.getElementById("pcshow")

let userChoice;
let pcChoice;



let userScore = 0;
let pcScore = 0;

getPcScore = pcScore;
console.log(getPcScore)


let winner = document.getElementById("winner") 

const btns = document.querySelectorAll(".btns");

btns.forEach(button => button.addEventListener("click", () => {
    userChoice = button.textContent;
    getPcChoice();
    userShow.textContent = userChoice;
    pcShow.textContent = pcChoice;
    winner.textContent = getWinner();
    getPcScore.textContent = getScore()
}))


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
        return (pcChoice == "scissors") ? "You Win!" : "You lose";
    } else if (userChoice == "paper") {
        return (pcChoice == "rock") ? "You Win!" : "You lose";
    } else if (userChoice == "scissors") {
        return (pcChoice == "paper") ? "You Win!" : "You lose";
    }
}

function getScore() {
    if (userChoice == "rock" && pcChoice == "scissors") {
        userChoice++;
    }
}
