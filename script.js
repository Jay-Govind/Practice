let userscore = 0;
let compscore = 0;

const choice = document.querySelectorAll(".option");
const msg = document.querySelector("#msg");

const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawgame = () => {
  console.log("game was draw");
  msg.innertext = "game was draw";
};

const showWinner = (userwin) => {
  if (userwin) {
    console.log("you win");
    msg.innertext = "you win";
  } else {
    console.log("comp win");
    msg.innertext = "comp win";
  }
};

const playgame = (userchoice) => {
  console.log("user choice =", userchoice);
  // generate computer choice
  const compchoice = gencompchoice();
  console.log("comp choice =", compchoice);

  if (userchoice === compchoice) {
    // draw game
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin);
  }
};

choice.forEach((option) => {
  console.log(option);
  option.addEventListener("click", () => {
    const userchoice = option.getAttribute("id");
    playgame(userchoice);
  });
});
