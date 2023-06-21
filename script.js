const getPcScore = document.querySelector("cs");
const getUserScore = document.querySelector("us");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let userChoice;
let pcChoice;

paperBtn.addEventListener("click", getPcChoice)
paperBtn.addEventListener("click", choicePaper)

rockBtn.addEventListener("click", getPcChoice)
rockBtn.addEventListener("click", choiceRock)

scissorsBtn.addEventListener("click", getPcChoice)
scissorsBtn.addEventListener("click", choiceScissors)


function getPcChoice() {
    let num = Math.floor((Math.random() * 3) + 1);
    let pcAnswer;
    if (num == 1) {
        console.log("rock")
        pcAnswer = "rock"
    } else if (num == 2) {
        console.log("paper")
        pcAnswer = "paper"
    } else {
        console.log("scissors")
        pcAnswer = "scissors"
    }

    document.getElementById("pcshow").innerHTML = pcAnswer;
}

function choiceRock() {
    userChoice = "rock"
    document.getElementById("usershow").innerHTML = userChoice
}

function choicePaper() {
    userChoice = "paper"
    document.getElementById("usershow").innerHTML = userChoice
}

function choiceScissors() {
    userChoice = "scissors"
    document.getElementById("usershow").innerHTML = userChoice
}

function getScore() {
    let userScore = 0;
    let pcScore = 0;

    if (userChoice == "rock" || pcChoice == "scissors") {
        console.log("winer")
    }
}



