

// //Variables for secret word and user input and submit button
// //Compare function when submitted with button
const secretWord = 'hello';
const button = document.querySelector('#submit-guess');

button.addEventListener('click', compare);


function compare() {
    //Compare the secret word and user input - letter by letter - 
    //1. User input and secret world will be a string. Split both strings into array of letters.
    const secretWordArray = secretWord.split('');
    
    //User input variable has to be in function so it's not grabbing value as page is loaded.
    const userInputArray = [];

    //Loop to push separate letters into array to be compared to secret word
    for (const input of document.querySelectorAll('.currentattempt input')) { 
    // console.log(input.value) 
        userInputArray.push((input.value).toLowerCase());
        //console.log(userInputArray)

        //As it iterates through array, check that letter against secret word and color tile accordingly?
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

    //Needs code that puts current attempt class to next line of input

}
 
//Loop through inputs 

    


