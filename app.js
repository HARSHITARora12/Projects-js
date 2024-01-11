let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO = true;


const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box has clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner(); // Moved inside the event listener
  });
});
const resetgame =()=>
{
    turnO=true;
    enableboxes();
    msgcont.classList.add("hide");

}
const disabledboxes =()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}
const enableboxes =()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner =(winner) =>
{
    msg.innerText=`Congratulations,Winner is ${winner}`
    msgcont.classList.remove("hide");
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;
    
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("Winner",pos1);
        showWinner(pos1);
        disabledboxes();
      }
    }
  }
};
newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
