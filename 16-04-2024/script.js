let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#message");

const UserScorepara = document.querySelector("#user-score");
const CompScorepara = document.querySelector("#comp-score");


const ShowWinner=(userWin,compChoice,Userchoice)=>{

  if(userWin){
    userScore++;
    UserScorepara.innerText=userScore;
    console.log("You win");
    message.innerText=("You win");
    message.style.backgroundColor = "Green";

    
  }else{
    compScore++;
    CompScorepara.innerText=compScore;
    console.log("you loose");
    message.innerText=`You lose .  ${compChoice} beat ${Userchoice}`;
    message.style.backgroundColor = "Red";
  }

};



const GenerateCompChoice= () =>{

  const options = ["rock","paper","scissor"];
 const compIndex = Math.floor( Math.random()*3);
 return options[compIndex];
};

const drawGame=()=>{
  console.log("draw game");
  message.innerText=("Game Draw,Play Again");
  message.style.backgroundColor = "lightblue";
};

const PlayGame=(Userchoice)=>{
  console.log("Userchoice",Userchoice);
  const compChoice = GenerateCompChoice();
  console.log("compchoice",compChoice);
  

  if(Userchoice === compChoice){
    drawGame();
  }else{
    let userWin = true;
    
    if(Userchoice === "paper"){
      userWin = compChoice === "rock"? false : true;
    }else if ( Userchoice === "rock"){
      userWin = compChoice === "scissor"? false : true;
    }else{
      userWin = compChoice === "paper" ? false : true;
    }
    ShowWinner(userWin,Userchoice,compChoice );
  }
};



choices.forEach((choice) => {
  choice.addEventListener("click",()=>{
    const Userchoice = choice.getAttribute("id");
    PlayGame(Userchoice);
  });
  });

