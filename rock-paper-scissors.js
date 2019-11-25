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
