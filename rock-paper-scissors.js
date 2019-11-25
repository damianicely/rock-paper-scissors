const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    return ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || (userInput === 'bomb')) ? userInput
        : console.log('Error: Incorrect user input. User must enter rock paper or scissors.')
};

const getComputerChoice = () => {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case (0):
            return 'rock';
            break;
        case (1):
            return 'paper';
            break;
        case (2):
            return 'scissors';
            break;
    }
}
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
        return 'User wins! lets not waste time analysing how...';
    } else if (userChoice === computerChoice) {
        return 'Stalemate, no one wins.';
    } else if (userChoice === 'rock') {
        return (computerChoice === 'paper') ? 'paper beats rock, computer wins!'
            : 'rock beats scissors, user wins!';
    } else if (userChoice === 'paper') {
        return (computerChoice === 'rock') ? 'paper beats rock, user wins!'
            : 'scissors beats paper, computer wins!';
    } else if (userChoice === 'scissors') {
        return (computerChoice === 'rock') ? 'rock beats scissors, computer wins!'
            : 'scissors beats paper, user wins!';
    }
}

const playGame = () => {
    let userChoice = getUserChoice('rock');
    console.log(`user chooses ${userChoice}`);
    let computerChoice = getComputerChoice();
    console.log(`computer chooses ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
}
playGame();
/*
// Rock Paper Scissors
// Get Users Choice
let userChoice = 'scissors';
console.log(`user chooses: ${userChoice}`);

// Get Computer's Choice
const oneTwoThree =  () => Math.floor(Math.random()*3 +1);
let computerChoice = oneTwoThree();
switch (computerChoice){
    case (1):
        computerChoice = 'rock';
        break;
    case (2):
        computerChoice = 'paper';
        break;
    case (3):
        computerChoice = 'scissors';
        break;
    default :
        console.log('Error, no computer choice!');
        break;
};
console.log(`computer chooses: ${computerChoice}`);

// Compare Choices
const winStatus = (userChoice, computerChoice) => {
    return (userChoice === computerChoice) ? 'stalemate'
    : ((userChoice === 'paper') && (computerChoice === 'scissors')) ? 'computer'
    : ((userChoice === 'scissors') && (computerChoice === 'paper')) ? 'user'
    : ((userChoice === 'paper') && (computerChoice === 'rock')) ? 'user'
    : ((userChoice === 'rock') && (computerChoice === 'paper')) ? 'computer'
    : ((userChoice === 'rock') && (computerChoice === 'scissors')) ? 'user'
    : ((userChoice === 'scissors') && (computerChoice === 'rock')) ? 'computer'
    : 'Error can\'t determine winner';
}
// Determine Winner
let winResult = winStatus(userChoice, computerChoice);

// Start Program and Display Results
winResult === 'stalemate' ?  console.log(`No winner it\s a ${winResult}`)
            : console.log(`${winResult} wins`);
*/