let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choices");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const showwinner = (userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        console.log("you win..");
        msg.innerText = `you are win!! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "rgb(40, 247, 3)";
    }else{
        compscore ++;
        compscorepara.innerText = compscore;
        console.log("you lose game..");
        msg.innerText = `you are the lose the game!! ${userchoice} beats your ${compchoice}`;
        msg.style.backgroundColor = "red";
    }
}

const gencompchoice = ()=>{
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random()*3);
    return options[randidx];
}

const drawgame = ()=>{
    console.log("draw game...");
    msg.innerText = `game is draw!!`;
    msg.style.backgroundColor = "white";
}
const playgame = (userchoice)=>{
    console.log("user choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);
    if(userchoice === compchoice){
        drawgame();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper"?false : true;
        }else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false:true;
        }else{
            userwin = compchoice === "rock"? false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }

}
choices.forEach((choice) => {
    
    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("choice was clicked",userchoice);
        playgame(userchoice);

    });
}); 