const options = document.querySelectorAll('.option');
const score = document.getElementById('score');
const result = document.querySelector('.pop-up');
const displayUserScore = document.getElementById('player');
const displayCpuScore = document.getElementById('computer');




options.forEach(option => option.addEventListener('click',playRound));

//get computer's choice

function cpuPlay(){
    let randomNumber = Math.floor(Math.random()*3);
    if(randomNumber === 0){
        return "Rock";

    } else if(randomNumber ===1){
        return "Paper";

    } else{
        return "Scissors";
    }
}

let userChoice;
let cpuChoice;

//get user choice
function playRound(e){

    userChoice = e.target.id;
    cpuChoice = cpuPlay();
    playGame(userChoice,cpuChoice, userScore, cpuScore);
    scoreBoard(winner);
    announceWinner(userScore,cpuScore);

}

let winner;

let userScore = 0;
let cpuScore = 0;

//get round winner
function scoreBoard(winner){

    if( winner === "user"){
        userScore++;
        displayUserScore.innerHTML = `<span> ${userScore} </span>`;
        

    }else if( winner === "cpu"){
        cpuScore++;
        displayCpuScore.innerHTML = `<span> ${cpuScore}</span>`;
        
    } else if( winner === "tie"){
        console.log('tie');
    }
}


//plays the game for 1 round;
function playGame(userChoice, cpuChoice, userScore, cpuScore){

    if ( userChoice === "Rock" && cpuChoice === "Scissors" ){

        winMessage[1].innerHTML = `<h1>You Win The Round!</h1>
                                    <img src="assets/images/hand-${cpuChoice}-regular.svg" class="hand-${cpuChoice}" width="100px" height="100px" alt="hand ${cpuChoice}">
                                    <p>Computer Selects: ${cpuChoice}</p>`;
        winMessage[1].style.cssText = 'font-size: 1.2rem; color= green;';

            if(userScore < 4 && cpuScore < 4 ){
                roundPopUp.style.display = 'block';
                }
       
        return winner = "user";

    }else if ( userChoice === "Paper" && cpuChoice === "Rock"){

        winMessage[1].innerHTML = `<h1>You Win The Round!</h1>
                                    <img src="assets/images/hand-${cpuChoice}-regular.svg" class="hand-${cpuChoice}" width="100px" height="100px" alt="hand ${cpuChoice}">
                                    <p>Computer Selects: ${cpuChoice}</p>`;
        winMessage[1].style.cssText = 'font-size: 1.2rem; color=green; ';

            if(userScore <= 4 && cpuScore <= 4 ){
                roundPopUp.style.display = 'block';
            }

        return winner = "user";

    }else if ( userChoice === "Scissors" && cpuChoice === "Paper" ){

        winMessage[1].innerHTML = `<h1 color="green">You Win The Round!</h1>
                                    <img src="assets/images/hand-${cpuChoice}-regular.svg" class="hand-${cpuChoice}" width="100px" height="100px" alt="hand ${cpuChoice}">
                                    <p>Computer Selects: ${cpuChoice}</p>`;
        winMessage[1].style.cssText = 'font-size: 1.2rem; color= green;';

            if(userScore <= 4 && cpuScore <= 4 ){
                roundPopUp.style.display = 'block';
            }

        return winner = "user";

    }else if( userChoice === "Rock" && cpuChoice === "Paper" ) {

        winMessage[1].innerHTML = `<h1 color="red">You Lose The Round!</h1>
                                    <img src="assets/images/hand-${cpuChoice}-regular.svg" class="hand-${cpuChoice}" width="100px" height="100px" alt="hand ${cpuChoice}">
                                    <p>Computer Selects: ${cpuChoice}</p>`;
        winMessage[1].style.cssText = 'font-size: 1.2rem; color= red;';

            if(userScore <= 4 && cpuScore <= 4 ){
                roundPopUp.style.display = 'block';
            }

        return winner = "cpu";

    } else if ( userChoice === "Paper" && cpuChoice === "Scissors" ) {

        winMessage[1].innerHTML = `<h1 color="red" >You Lose The Round!</h1>
                                    <img src="assets/images/hand-${cpuChoice}-regular.svg" class="hand-${cpuChoice}" width="100px" height="100px" alt="hand ${cpuChoice}">
                                    <p>Computer Selects: ${cpuChoice}</p>`;
        winMessage[1].style.cssText = 'font-size: 1.2rem; color= red;';

            if(userScore <= 4 && cpuScore <= 4 ){
                roundPopUp.style.display = 'block';
            }
        return winner = "cpu";

    } else if ( userChoice === "Scissors" && cpuChoice === "Rock" ) {

        winMessage[1].innerHTML = `<h1 color="red" >You Lose The Round!</h1>
                                    <img src="assets/images/hand-${cpuChoice}-regular.svg" class="hand-${cpuChoice}" width="100px" height="100px" alt="hand ${cpuChoice}">
                                    <p>Computer Selects: ${cpuChoice}</p>`;
        winMessage[1].style.cssText = 'font-size: 1.2rem; color= red;';

            if(userScore <= 4 && cpuScore <= 4 ){
                roundPopUp.style.display = 'block';
            }

        return winner = "cpu";

    } else if ( userChoice === cpuChoice ) {

        winMessage[1].innerHTML = `<h1>Tie!</h1>
                                    <img src="assets/images/hand-${cpuChoice}-regular.svg" class="hand-${cpuChoice}" width="100px" height="100px" alt="hand ${cpuChoice}">
                                    <p>Computer Selects: ${cpuChoice}</p>`;
        winMessage[1].style.cssText = 'font-size: 1.2rem; color= blue;';

            if(userScore <= 4 && cpuScore <= 4 ){
                roundPopUp.style.display = 'block';
            }
        
        return winner = "tie";
    }
}

const winMessage = document.querySelectorAll('.win-message');

// 5th round pop-up screen: Winner
function announceWinner(userScore,cpuScore){
    
    if(userScore === 5){

        winMessage[0].innerHTML = `<h1>You Win!</h1>`;
        winMessage[0].style.cssText = 'color: green; font-size: 1.5rem;';

    } else if( cpuScore === 5){

        winMessage[0].innerHTML = `<h1> You Lose!</h1>`;
        winMessage[0].style.cssText = 'color: red; font-size: 1.5rem;';

    }

    resetGame(userScore,cpuScore);
}

// reset the game if score = 5;
function resetGame(userScore,cpuScore){

    let cpuPopUpScore = document.querySelector('.cpu__score');
    let userPopUpScore = document.querySelector('.user__score');

    if ( userScore === 5 || cpuScore === 5){

        result.style.display = "block";
        cpuPopUpScore.textContent = cpuScore;
        userPopUpScore.textContent = userScore;
   
    }
}

const reset = document.getElementById('reset'); //game reset button
reset.addEventListener('click',closeWindow);

function closeWindow(e){

    if(e.target.id === 'reset' ){

        result.style.display = "none";

        userScore = 0;
        cpuScore = 0;

        displayUserScore.innerHTML = `<span> ${userScore} </span>`;
        displayCpuScore.innerHTML = `<span> ${cpuScore}</span>`;
    }
}

const roundPopUp = document.querySelector('.round__popUp');

roundPopUp.addEventListener('click',closePopUp);

function closePopUp(e){

    if(e.target === roundPopUp){
        roundPopUp.style.display= 'none';
    }
}