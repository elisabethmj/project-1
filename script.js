const secretWord = 'hello';
const secretWordArray = secretWord.split('');

let userInputArray = [];

const button = document.querySelector('#submit-guess');


button.addEventListener('click', function() {
    checkGuessGiveHints(); //Check Answer, give hints.
    shouldGameContinue(); //If answer is correct, user wins! Otherwise, go to next attempt.
    //if not all green, game continues - allow user to make another attempt, need to track what attempt user is on.
        //need to move currentattempt class from 1st div to 2nd div, and so on.
    //6 attempts, not green - game over/display word
});





function checkGuessGiveHints() {
    //Push user's input in 'currentattempt' row to array so it can be compared
    for (const input of document.querySelectorAll('.currentattempt input')) { 
        userInputArray.push((input.value).toLowerCase());
    }

    //Massive code below to compare user input to secret word and give hints for tiles! - srsly needs some optimisation. Maybe put below code within loop that is currently pushing guess into an array?
    const firsttile = document.querySelector('.currentattempt > #firstletter');
    if (userInputArray[0] === secretWordArray[0]) {
        //console.log('0 green');
        firsttile.style.backgroundColor = 'green';
    } else if (secretWordArray.includes(userInputArray[0])) {
        //console.log('0 yellow');
        firsttile.style.backgroundColor = 'yellow';
    } else if (!secretWordArray.includes(userInputArray[0])) {
        //console.log('0 black');
        firsttile.style.backgroundColor = 'grey';
    }

    const secondtile = document.querySelector('.currentattempt > #secondletter');
    if (userInputArray[1] === secretWordArray[1]) {
        //console.log('1 green');
        secondtile.style.backgroundColor = 'green';
    } else if (secretWordArray.includes(userInputArray[1])) {
        //console.log('1 yellow');
        secondtile.style.backgroundColor = 'yellow';
    } else if (!secretWordArray.includes(userInputArray[1])) {
        //console.log('1 black');
        secondtile.style.backgroundColor = 'grey';
    }

    const thirdtile = document.querySelector('.currentattempt > #thirdletter');
    if (userInputArray[2] === secretWordArray[2]) {
        //console.log('2 green');
        thirdtile.style.backgroundColor = 'green';
    } else if (secretWordArray.includes(userInputArray[2])) {
        //console.log('2 yellow');
        thirdtile.style.backgroundColor = 'yellow';
    } else if (!secretWordArray.includes(userInputArray[2])) {
        //console.log('2 black');
        thirdtile.style.backgroundColor = 'grey';
    }

    const fourthtile = document.querySelector('.currentattempt > #fourthletter');
    if (userInputArray[3] === secretWordArray[3]) {
        //console.log('3 green');
        fourthtile.style.backgroundColor = 'green';
    } else if (secretWordArray.includes(userInputArray[3])) {
        //console.log('3 yellow');
        fourthtile.style.backgroundColor = 'yellow';
    } else if (!secretWordArray.includes(userInputArray[3])) {
        //console.log('3 black');
        fourthtile.style.backgroundColor = 'grey';
    }
    const fifthtile = document.querySelector('.currentattempt > #fifthletter');
    if (userInputArray[4] === secretWordArray[4]) {
        //console.log('4 green');
        fifthtile.style.backgroundColor = 'green';
    } else if (secretWordArray.includes(userInputArray[4])) {
        //console.log('4 yellow');
        fifthtile.style.backgroundColor = 'yellow';
    } else if (!secretWordArray.includes(userInputArray[4])) {
        //console.log('4 black');
        fifthtile.style.backgroundColor = 'grey';
    }

}



function shouldGameContinue() {
    console.log(userInputArray)
    if (userInputArray.join('') === secretWord) {
        console.log('you win!');
    } else {
       goToNextAttempt();
    }
}

function goToNextAttempt() {
    const attempts = document.querySelectorAll(".input");
    for (let i = 0; i < attempts.length; ++i) {
        if (attempts[i].classList.contains('currentattempt')) {
            attempts[i].classList.remove('currentattempt');
            attempts[i+1].classList.add('currentattempt');
            break;
        }
      }
     // console.log(attempts)
}




