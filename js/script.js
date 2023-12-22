let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newGameBtn = document.querySelector(".new-game-btn")

let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const resetGame = () => {
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "green";
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = "rgb(204, 7, 7)"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});


const disabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enabledBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations! The Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disabledBoxes();
}


const checkWinner = () => {
    for (let pattern of winPatterns) {
        let posValue1 = boxes[pattern[0]].innerText;
        let posValue2 = boxes[pattern[1]].innerText;
        let posValue3 = boxes[pattern[2]].innerText;

        if (posValue1 != "" && posValue2 != "" && posValue3 != "") {
            if (posValue1 === posValue2 && posValue2 === posValue3) {
                console.log("The winner is", posValue1)
                showWinner(posValue1);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);