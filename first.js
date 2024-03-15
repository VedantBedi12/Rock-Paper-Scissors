let userscore = 0;
let compscore = 0;
const choicesa = document.querySelectorAll(".choice");
choicesa.forEach((choice) => {
    choice.addEventListener("click", () => {
        const id = choice.querySelector("p").innerText.toLowerCase();
        console.log(id);
        playgame(id);
    });
});


const gencompchoice = () => {
    const options = ["rock", "scissors", "paper"];
    let ind = Math.floor(Math.random() * 3);
    return options[ind];
}
const playgame = (id) => {
    const compchoice = gencompchoice();
    const userchoice = id;
    if (id === compchoice) {
        document.getElementById("result").innerText = "Draw";
    } else {
        let userwin = false;
        if ((userchoice === "rock" && compchoice === "scissors") ||
            (userchoice === "scissors" && compchoice === "paper") ||
            (userchoice === "paper" && compchoice === "rock")) {
            userwin = true;
        }

        if (userwin) {
            document.getElementById("result").innerText = "You win";
            document.getElementById("User-score").innerText = ++userscore;
        } else {
            document.getElementById("result").innerText = "You lose";
            document.getElementById("Comp-score").innerText = ++compscore;
        }
    }
}