let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newbtn = document.querySelector("#new-btn");    
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  //playerX,playerO

const winpettern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("button was clicked");
        if(turnO){
            box.innerText = "ramila";
            turnO = false;
        }else{
            box.innerText = "rasila";
            turnO = true;
        }
        box.disabled = true;
         checkwinner();
    });
});
const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    };
};
const showwinner = (winner) =>{
    if(winner === "ramila"){
        msg.innerText = 'congratulation, winner is ramila';
    }else{
        msg.innerText = 'congratulation, winner is rasila';
    }
    // msg.innerText = `congratulation, winner is ${winner} `;
    msgcontainer.classList.remove("hide");
    disableBoxes();

};

const checkwinner = () =>{
    for(let pettern of winpettern){
        let pos1val = boxes[pettern[0]].innerText;
        let pos2val = boxes[pettern[1]].innerText;
        let pos3val = boxes[pettern[2]].innerText;

        if(pos1val != ""&& pos2val != "" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val)
                console.log("winner");
            showwinner(pos1val);
        };
    };
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);