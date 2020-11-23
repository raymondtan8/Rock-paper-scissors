let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

let key = {
    "r": "Rock",
    "p": "Paper",
    "s": "Scissors"
}

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = key[userChoice] + " beats " + key[computerChoice] + ". You win! 🔥";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = key[userChoice] + " folds to " + key[computerChoice] + ". You lose! 😔";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("red-glow"), 300);
}

function draw(userChoice, computerChoice){
    result_p.innerHTML = key[userChoice] + " is equal to " + key[computerChoice] + ". Tie! 😇";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(() => document.getElementById(userChoice).classList.remove("gray-glow"), 300);
}

function determineWinner(userChoice, computerChoice){
    switch(userChoice + computerChoice){
        case "sp":
        case "rs":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    determineWinner(userChoice, computerChoice);
}

function main(){
    rock_div.addEventListener("click", () => game("r"));

    scissors_div.addEventListener("click", () => game("s"))

    paper_div.addEventListener("click", () => game("p"))
}

main();
