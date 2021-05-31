// counter variables for keeping score - in global scope
let win = 0;
let tie = 0;
let lose = 0;

// computerPlay() is the computer result for rock, paper, scissors - a random option is chosen
computerPlay = () => {
    let options = [`rock`, `paper`, `scissors`];
    return options[Math.floor(Math.random()*options.length)];
}


// playerPlay() is a prompt for the user to select their weapon
playerPlay = () => {
    let result = prompt(`Choose your weapon - rock, paper, or scissors?!`);
        if (result !== null) {
    return result.toLowerCase();
}
}

// play() runs playerPlay() and computerPlay() to run 1 round of rock, paper, scissors
play = (playerSelection, computerSelection) => {
    playerSelection = playerPlay();
    computerSelection = computerPlay();
    if (playerSelection === `rock`) {
        console.log(rock(playerSelection, computerSelection));
    } else if (playerSelection === `paper`) {
        console.log(paper(playerSelection, computerSelection));
    } else if (playerSelection === `scissors`) {
        console.log(scissors(playerSelection, computerSelection));
    } else if (playerSelection == null || playerSelection == ``) {
        return `Alright, the game has been canceled`;
    } else {
        alert(`You didn't select rock, paper or scissors! Try again`);
        play();
    }
    console.log(score());
}

// displays the score
score = () => {
    console.log(`Won: ${win}\nTie: ${tie}\nLost: ${lose}`);
}

// outline what happens when rock, paper or scissors is picked
rock = (playerSelection, computerSelection) => {
    if (playerSelection === `rock` && computerSelection === `scissors`) {
        win++;
        return `You picked rock, the CPU picked scissors... YOU WIN! 🥳`;
    } else if (playerSelection === `rock` && computerSelection === `rock`) {
        tie++;
        return `You picked rock, the CPU picked rock too... TIE GAME 🤕`
    } else if (playerSelection === `rock` && computerSelection === `paper`) {
        lose++;
        return `You picked rock, the CPU picked paper... YOU LOSE! 😭`;
    }
}

paper = (playerSelection, computerSelection) => {
    if (playerSelection === `paper` && computerSelection === `rock`) {
        win++
        return `You picked paper, the CPU picked rock... YOU WIN! 🥳`;
    } else if (playerSelection === `paper` && computerSelection === `paper`) {
        tie++
        return `You picked paper, the CPU picked paper too... TIE GAME 🤕`;
    } else if (playerSelection === `paper` && computerSelection === `scissors`) {
        lose++
        return `You picked paper, the CPU picked scissors... YOU LOSE! 😭`;
    }
}

scissors = (playerSelection, computerSelection) => {
    if (playerSelection === `scissors` && computerSelection === `paper`) {
        win++
        return `You picked scissors, the CPU picked paper... YOU WIN! 🥳`;
    } else if (playerSelection === `scissors` && computerSelection === `scissors`) {
        tie++
        return `You picked scissors, the CPU picked scissors too... TIE GAME 🤕`;
    } else if (playerSelection === `scissors` && computerSelection === `rock`) {
        lose++
        return `You picked scissors, the CPU picked rock... YOU LOSE! 😭`;
    }
}


// play 5 games in a row, then declare a winner of the 5
game = () => {
    win = 0;
    tie = 0;
    lose = 0;
    for (let i = 1; i <= 5; i++) {
        console.log(play());
    }
    if (win > lose) {
        return `The 5 games are done and it looks like you won the series! 🥳`;
    } else if (win === lose) {
        return `The 5 games are done and it looks like you and the CPU have a tie!`;
    } else if (win < lose) {
        return `The 5 games are done and it looks like you lost the series to the CPU! 😭`;
    }
}