let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usrScore = document.querySelector("#user-score");
const cmpScore = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game Was Draw! Play Again.");
  msg.innerText = "Game Was Draw! Play Again.";
  msg.style.backgroundColor = "#495057";
};

const showWinner = (userWin, userChoice, compchoice) => {
  if (userWin) {
    userScore++;
    usrScore.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} Beats ${compchoice} `;
    msg.style.backgroundColor = "#38b000";
  } else {
    compScore++;
    cmpScore.innerText = compScore;
    msg.innerText = `You Lose! ${compchoice} Beats Your ${userChoice} `;
    msg.style.backgroundColor = "#c9184a";
  }
};

const playGame = (userChoice) => {
  const compchoice = genCompChoice();

  if (userChoice === compchoice) {
    // draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissor , paper
      userWin = compchoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // scissor , rock
      userWin = compchoice === "scissor" ? false : true;
    } else {
      // rock , paper
      userWin = compchoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
