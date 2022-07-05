// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;
let playerOneWins;
let playerTwoWins;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if(!moveOneType || !moveOneValue || !moveTwoType || !moveTwoValue || !moveThreeType || !moveThreeValue){
        return;
    } 
    if(!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }
    if(!isValidModeValue(moveOneValue) || !isValidModeValue(moveTwoValue) || !isValidModeValue(moveThreeValue)) {
        return;
    }
    if ((moveOneValue+moveTwoValue+moveThreeValue) > 99) {
        return;
    }
    if(player === "Player One") {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    } else if(player === "Player Two") {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    } else {
        return;
    }
    return;
} 

function isValidMoveType(move) {
    if (move === "rock") {
        return true;
    } else if(move === "paper") {
        return true;
    } else if(move === "scissors") {
        return true;
    } else {
        return false;
    }
}

function isValidModeValue(value) {
   return (value >= 1) && (value <= 99)
}

function getRoundWinner(round) {
    switch(round) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null;
    }
}

function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    if( !playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }
    if(playerOneMoveType === playerTwoMoveType) {
        if(playerOneMoveValue > playerTwoMoveValue) {
            return "Player One";
        } else if(playerOneMoveValue < playerTwoMoveValue) {
            return "Player Two";
        } else {
            return "Tie"
        }
    }
    if(playerOneMoveType === "rock") {
        if (playerTwoMoveType === "scissors") {
            return "Player One"
        } else {
            return "Player Two"
        }
    } else if(playerOneMoveType === "paper") {
        if(playerTwoMoveType === "scissors") {
            return "Player Two";
        } else {
            return "Player One";
        }
    } else {
        if(playerTwoMoveType === "paper") {
            return "Player One";
        } else {
            return "Player Two"
        }
    }
}

function getGameWinner(){
    if(!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType || !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue || !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
        return null;
    }
    playerOneWins = 0;
    playerTwoWins = 0;

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    addWin(roundOneWinner);
    addWin(roundTwoWinner);
    addWin(roundThreeWinner);

    if (playerOneWins > playerTwoWins) {
        return "Player One"
    } else if (playerOneWins < playerTwoWins) {
        return "Player Two";
    } else {
        return "Tie"
    }
}

function addWin(winner) {
    if (winner === "Player One") {
        playerOneWins++
    } else if (winner === "Player Two") {
        playerTwoWins++
    }
}
function setComputerMoves() {
    const validMoves = ["rock", "paper", "scissors"]
    const sum = 99;
   let moveOne = validMoves[Math.floor(Math.random()* validMoves.length)]
   let moveTwo = validMoves[Math.floor(Math.random()* validMoves.length)]
   let moveThree = validMoves[Math.floor(Math.random()* validMoves.length)]
    
    let value1 = Math.floor(Math.random() * sum);
    let value2 = Math.floor(Math.random() * (sum - value1));
    let value3 = sum - value1 - value2;

    if(!isValidMoveType(moveOne) || !isValidMoveType(moveTwo) || !isValidMoveType(moveThree)) {
        return;
    } else {
        playerTwoMoveOneType = moveOne;
        playerTwoMoveTwoType = moveTwo;
        playerTwoMoveThreeType = moveThree;
    }
    if(!isValidModeValue(value1) || !isValidModeValue(value2) || !isValidModeValue(value3)) {
        return;
    }
    if ((value1+value2+value3) > 99) {
        return;
    }
    if (isValidModeValue(value1) || isValidModeValue(value2) || isValidModeValue(value3)){
      playerTwoMoveOneValue = value1;
      playerTwoMoveTwoValue = value2;
      playerTwoMoveThreeValue = value3;
    }

}
