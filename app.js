let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencomputerchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const drawGame = () => {
    msg.innerText = "Game was Draw";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin, userChoice, compchoice) => {
    if (userwin) {
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `You win! ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lose! ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user Choice =", userChoice);

    const compchoice = gencomputerchoice();
    console.log("comp choice =", compchoice);

    if (userChoice === compchoice) {
        drawGame();
    }
    else {
        let userwin = true;

        if (userChoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }

        showwinner(userwin, userChoice, compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was click", userChoice);
        playGame(userChoice);
    });
});