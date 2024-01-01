import inquirer from "inquirer";
let num =Math.floor(Math.random()*10)+1

for(let i=1; i <= 3; i++){
    let game =await inquirer.prompt({
        type: "number",
        name : "userGuess",
        message: "Kindly enter the Number"
    })
    if (game.userGuess=== num){
        console.log("You win !Your Guess is Right ")
    }else{
        console.log("Wrong Guess")
    }
}

