let user_score = 0 ;
let comp_score = 0;

let userDisplay = document.querySelector("#user_score");
let compDisplay = document.querySelector("#comp_score");

let comment = document.querySelector("#comment");
let choices = document.querySelectorAll(".choice");

const compChoiceSelector = ()=>{
    let options = ["rock","paper","scissors"]
    let index = Math.floor(Math.random()*3);
    return options[index] ;
}

const paraEditing = (userWin,userChoice,compChoice)=>{
    if(userWin){
        user_score++ ;
        userDisplay.innerText = user_score ;
        comment.innerText = `you won ,your ${userChoice} beats ${compChoice}`;
        comment.style.backgroundColor = "green" ;

    }else{
        comp_score++ ;
        compDisplay.innerText = comp_score ;
        comment.style.backgroundColor = "red" ;
        comment.innerText = `computer won ,${compChoice} beats your ${userChoice}`;
    }
}

const playGame = (userChoice)=>{
    const compChoice = compChoiceSelector() ;
    console.log(compChoice);
    if(userChoice === compChoice){
        console.log("draw");
        comment.innerText = "match draw please try again later" ;
        comment.style.backgroundColor = "#1679AB" ;
    }
    else{
        let userWin = true ;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true ;
        }
        else{
            userWin = compChoice === "rock" ? false : true ;
        }
        console.log(userWin) ;

        paraEditing(userWin,userChoice,compChoice) ;
    }
}

choices.forEach((choice)=>{
    const userChoice =choice.getAttribute("id");
    choice.addEventListener("click",(comment)=>{
        console.log("users choice : ",userChoice);
        playGame(userChoice,comment);
    })
      
})
