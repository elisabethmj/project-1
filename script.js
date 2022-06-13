const secretWord = 'hello';
const secretWordArray = secretWord.split('');

let userInputArray = [];

const button = document.querySelector('#submit-guess');

let guessesRemaining = 6;


button.addEventListener('click', function() {
    guessesRemaining-- 
    checkGuessGiveHints();
    shouldGameContinue(); 
});





function checkGuessGiveHints() {
    userInputArray.length = 0;

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
    if (userInputArray.join('') === secretWord) {
        alert('You guessed the ' + secretWord + ' correctly!');
    } else if (guessesRemaining === 0) {
        alert('Sorry, you have no guesses remaining. The secret word was ' + secretWord + '.')
    } else {
       goToNextAttempt();
    }
}



function goToNextAttempt() {
    const attempts = document.querySelectorAll('.input');
    for (let i = 0; i < attempts.length; ++i) {
        if (attempts[i].classList.contains('currentattempt')) {
            attempts[i].classList.remove('currentattempt');
                for (const babies of attempts[i].children) {
                    babies.setAttribute('disabled', 'true');
                }
            attempts[i+1].classList.add('currentattempt');
                for (const child of attempts[i+1].children) { 
                    child.removeAttribute('disabled');
                }
            break;
        }
      }
}



