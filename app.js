//Generate Random Number 
let randomNumber = Math.floor(Math.random() * 20);
let highScore = Number(0);

if(randomNumber == 0) {
    while(randomNumber != 0) {
        randomNumber = Math.floor(Math.random() * 20);
    }
}


//
//Function to verify use guess and generated number and return hint 

function verifyGuess(guess, win = false) {

    console.log(guess);
    //If Number is out of bound or under bound
    if(guess == 0) {
        return "Can't be blank or zero"; 
    }
    if(guess >= 21) {
        return "Out Of Range.";
    }
    else if(guess < 0) {
        return "Should Be Positive";
    }

    //If Number is Too High Or Too High

    if(guess > randomNumber) {
        if(guess > randomNumber+5) {
            return "📈 Too High!";
        }

        else {
            return "📈 High!";
        }
    }

    //If Number is Too Less or Less

    if(guess < randomNumber) {
        if(guess+5 < randomNumber) {
            return "📉 Too Less";
        }
        else {
            return "📉 Less";
        }
    }
    
    if(randomNumber == guess) {

        return "🎉 Correct Number";
        
    }
}

//check button eventHandler
const checkbtn = document.querySelector('.check');

checkbtn.addEventListener('click', function() {

    const user_guess_number = Number(document.querySelector('.inp-guess').value);
        //Assigning Vars
        let win = false;
        const score = document.querySelector('#score');
        let  documentScoreVal = document.querySelector('#score').innerText;
        Number(documentScoreVal);
        const documentHighscore = document.querySelector('#high-score');
        const hintBox = document.querySelector('#hint');
        const questionBox = document.querySelector("#q");

        //Verify Guess
        let hint  = verifyGuess(user_guess_number);

        //if Guess True

        if(hint ==  "🎉 Correct Number") {
            win = true;
            hintBox.innerText = hint;
            questionBox.innerText = user_guess_number;

            //Changin Background

            document.body.style.backgroundColor = '#2ecc71';
            document.querySelector(".inp-guess").style.backgroundColor = "#2ecc71";

            //Changin High Score Config

            if(highScore <  documentScoreVal) {

                console.log("hello high score")
                highScore = documentScoreVal;
                documentHighscore.innerText = highScore;

            }

            document.querySelector('.check').disabled = true;

            correctSound = new sound('correct');

            correctSound.play();

        }

            //If User exceed Try 
            if(documentScoreVal <= 0) {

                //changing background to red
                document.body.style.backgroundColor = '#c0392b';

                //Disabling Button
                document.querySelector('.check').disabled = true;
            }
            //if User Guess Number is Not true

            else if(documentScoreVal > 0 & win == false) {
                //Giving Hint 
                hintBox.innerText = hint;

                //Changing Score Config
                documentScoreVal--;
                score.innerText = documentScoreVal;

                //Clearing Input Field

                document.querySelector('.inp-guess').value = '';
                wrongSound = new sound("wrong");

                wrongSound.play();
                

               

            }

});


//Restart Game Functionality 



function sound(which) {
    this.sound = document.createElement('audio');
    
    //Setting Source of File
    if(which == "correct") {
        this.sound.src = "./src/Correct-answer.mp3";
    }
    else {
        this.sound.src = "./src/Wrong-answer-sound-effect.mp3";
    }

    this.sound.setAttribute('preload', 'auto');
    this.sound.setAttribute('control', 'none');

    //style
    this.sound.style.display = 'none';

    //appending
    document.body.appendChild(this.sound);

    this.play = function() {
        this.sound.play();
    }
    this.stop = function() {
        this.sound.pause();
    }
} 

const reset = document.querySelector('.restart');

reset.addEventListener('click', function() {

    

    document.querySelector('body').style.backgroundColor = "#222222";
    document.querySelector('.inp-guess').style.backgroundColor = "#222222";
    document.querySelector('.inp-guess').value = '';

    document.querySelector('#score').innerText = '10';
    document.querySelector('.check').disabled = false;
    

})