let boxA = document.getElementById('a');
let boxB = document.getElementById('b');
let boxC = document.getElementById('c');
let boxD = document.getElementById('d');
let boxE = document.getElementById('e');
let boxF = document.getElementById('f');
let boxG = document.getElementById('g');
let boxH = document.getElementById('h');
let boxI = document.getElementById('i');

let gameTextDiv = document.getElementById('new-game-text');  //making heading a variable
let playerOne, playerTwo, currentPlayer        //variables used further down
let inRound = false;        //setting inRound status to false, meaning game isn't being played
// let box = document.getElementsByClassName('box');

let startGame = document.getElementById('start-game')       //making start game button a variable
startGame.addEventListener('click', () => {     //clearing game board
    boxA.innerHTML = "";
    boxB.innerHTML = "";
    boxC.innerHTML = "";
    boxD.innerHTML = "";
    boxE.innerHTML = "";
    boxF.innerHTML = "";
    boxG.innerHTML = "";
    boxH.innerHTML = "";
    boxI.innerHTML = "";

    inRound = true;     //making inRound true because we're starting a new game
    currentPlayer = playerOne;     //making the first player be the player
    gameTextDiv.innerHTML = "Starting a new game. Player One, make your first play."        
    setTimeout(clearInnerHTML, 6000);
    playRound();
});


function switchPlayer () {      //switches between players
    if (currentPlayer = playerOne) {
        currentPlayer = playerTwo;
    } else if (currentPlayer = playerTwo) {
        currentPlayer = playerOne;
    }
    return
};

function clearInnerHTML () {    //removes the "Starting a new game...." text
    gameTextDiv.innerHTML = "";
};

function playRound () {
    let box = document.getElementsByClassName("box");


    //it's supposed to put the letter X or O in the box on a click but this functionality isn't working for me.
    box.addEventListener('click', () => {
        if (inRound && playerOne) {
            document.getElementsByClassName('box').innerHTML = "X";
            gameTextDiv.innerHTML = "Player One's turn is over. Player Two, make your play."
        } else if (inRound && playerTwo) {
            document.getElementsByClassName('box').innerHTML = "O";
            gameTextDiv.innerHTML = "Player Two's turn is over. Player One, make your play."
        }
        return
    })
    isXAWinner(); //run the function to check if playerOne has won
    isOAWinner(); //run the function to check if playerTwo has won
    switchPlayer(); //switches players
    return;
}

function isXAWinner () { //all the options for X to win
    if (boxA === "X" && boxB === "X" && boxC === "X") {
        alert(`${playerOne} is the winner!`)
    } else if (boxA === "X" && boxD === "X" && boxG === "X") {
            alert(`${playerOne} is the winner!`);  
    } else if (boxA === "X" && boxE === "X" && boxI === "X") {
            alert(`${playerOne} is the winner!`);
    } else if (boxB === "X" && boxE === "X" && boxH === "X") {
            alert(`${playerOne} is the winner!`);
    } else if (boxC === "X" && boxE === "X" && boxG === "X") {
            alert(`${playerOne} is the winner!`);
    } else if (boxC === "X" && boxF === "X" && boxI === "X") {
            alert(`${playerOne} is the winner!`);
    } else  if (boxG === "X" && boxH === "X" && boxI === "X") {
            alert(`${playerOne} is the winner!`);
    } else {
        gameTextDiv.innerHTML = "Invalid click, please try again."
    }
}

function isOAWinner () { //all the options for O to win
    if (boxA === "O" && boxB === "O" && boxC === "O") {
        alert(`${playerTwo} is the winner!`)
    } else if (boxA === "O" && boxD === "O" && boxG === "O") {
            alert(`${playerTwo} is the winner!`);  
    } else if (boxA === "O" && boxE === "O" && boxI === "O") {
            alert(`${playerTwo} is the winner!`);
    } else if (boxB === "O" && boxE === "O" && boxH === "O") {
            alert(`${playerTwo} is the winner!`);
    } else if (boxC === "O" && boxE === "O" && boxG === "O") {
            alert(`${playerTwo} is the winner!`);
    } else if (boxC === "O" && boxF === "O" && boxI === "O") {
            alert(`${playerTwo} is the winner!`);
    } else  if (boxG === "O" && boxH === "O" && boxI === "O") {
            alert(`${playerTwo} is the winner!`);
    } else {
        gameTextDiv.innerHTML = "Invalid click, please try again."
    }
}









