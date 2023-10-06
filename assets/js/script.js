// add loading event and add event listeners to buttons
// add object containing secret words and definitions

let wordList = {    
            'algorithm':'A step-by-step set of rules for solving a problem or performing a computation.',
            'bandwidth':'The amount of data that can be transmitted or received per unit of time, usually measured in bits per second (bps).',
            'compiler' :'A software tool that translates high-level programming code written in C, C++, or Java into machine code that a computer can execute.',
            'database':'A collection of organized data that can be accessed, manipulated, and updated by a software application.',
            'encryption':'The process of converting plaintext or readable data into an encoded form, known as ciphertext, to protect it from unauthorized access.',
            'firewall':'A network security device or software that monitors and controls the incoming and outgoing network traffic based on predetermined security rules.',
            'graphics':'The visual representation of data or information on a screen or other display device, such as images, diagrams, etc.',
            'hardware':'The physical components of a computer system, such as the CPU, memory, disk drives, keyboard, mouse, monitor, etc.',
            'internet':'A global network of interconnected computers and devices that use the TCP/ IP protocol to communicate and exchange data.',
            'malware' :'A malicious software program that can harm or compromise a computer system or network, such as a virus, etc.',
            'network':'A group of computers and devices that are connected by communication channels and protocols to share data and resources.',
            'protocol': 'A set of rules and standards that define how data is formatted and transmitted over a network or between devices.',
            'software': 'The set of instructions or programs that tell a computer what to do and how to do it.',
            'variable': 'A named storage location in a computer program that can hold different values during the execution of the program.',
            'website': 'A collection of web pages and related content that are hosted on a web server and identified by a common domain name.',
            'robotics': 'The science and engineering of designing, building, and programming robots to perform various tasks or functions.',
            'simulation': 'The imitation or representation of a real-world system or process using a computer program or model.',
            'smartphone': 'A mobile phone that has advanced features and capabilities, such as a touchscreen, internet access, camera, GPS, apps, etc.',
            'streaming': 'The transmission and playback of audio or video data over a network or the internet in real time or near real time.',
            'supercomputer': 'A very powerful and fast computer that can perform a large number of complex calculations or operations per second.',
            'touchscreen': 'A display device that can detect and respond to touch input from a finger or a stylus.',
            'blockchain': 'A distributed ledger or database that records transactions or data in a secure, transparent, and immutable way using cryptography and consensus algorithms.',
            'archive': 'A file or folder that contains one or more compressed files, usually for backup or storage purposes.',
            'backbone': 'A high-speed network that connects multiple smaller networks, such as LANs or WANs.',
            'bitrate': 'The amount of data that is transferred or processed per unit of time, usually measured in bits per second (bps) or kilobits per second (kbps).',
            'browser': 'A software application that allows users to access and view web pages and other online content on the internet.',
            'captcha': 'A type of challenge-response test that verifies if a user is human or a bot, usually by asking the user to type in distorted text or images.',
            'desktop': 'The main screen or workspace of a graphical user interface (GUI), where icons, windows, menus, and other elements are displayed.',
            'digital': 'A type of signal or data that has discrete values, such as binary digits (0 and 1) or pixels.',
            'download': 'The process of transferring data from a remote server to a local computer or device over a network or the internet.',
    };

document.addEventListener("DOMContentLoaded", function() {

    let hintButton = document.getElementById('hint-button');
    hintButton.addEventListener('click', showHint);

    //code for alt+key event listener taken from stackoverflow
    window.addEventListener('keydown', function (event) {
        if (event.altKey && event.key === 'h' || event.key === 'H') {
            showHint();
        }
    })
    
    runGame();
    //startTimedGame();
})

let chosenWord = selectRandomWord();
let chances = 6;
let hangbotStatus = 0;
let word = document.getElementById('secret-word');
word = Array(chosenWord.word.length).fill("_");
document.getElementById('secret-word').textContent = word.join('');
let gameWon = false;


function runGame() {

    console.log(chosenWord.word.toUpperCase());
    console.log(chosenWord.definition);


}    
  
/**
 * Selects a random word and its definition from wordlist 
 * and return an object
 */
function selectRandomWord() {
    let secretWords = Object.keys(wordList);
    let wordIndex = Math.floor(Math.random() * secretWords.length);
    let randomWord = secretWords[wordIndex];
    return { word: randomWord, definition: wordList[randomWord] };

}

/**
 *  displays the deffinition of the random word
 *  
 */
function showHint() {

    document.getElementById('word-definition').textContent = chosenWord.definition; 
}
 
/**
 * Checks if the random word contains the letter that was clicked by the user;
 * inserts the correct letters into an array and then replaces the underscores
 * that were initially attributed to the random word
 */
function checkInput(letter, button) {
    let isCorrect = false;

    for (let i=0; i < word.length; i++ ) {
        if (chosenWord.word[i] === letter) {
            word[i] = letter;
            isCorrect = true;
        }
    }
    console.log(word);
    document.getElementById('secret-word').textContent = word.join('');

    // if the letter is incorrect decrease number of chances left
    if (!isCorrect) {

        updateChancesLeft(chances);
        chances--;
        updateHangbotImg();
        hangbotStatus ++;  // if the letter is not correct hangbot-status countdown increases
        console.log(chances);
        button.style.backgroundColor = "red";
        button.style.color = "white"
        button.style.boxShadow = "none";
        button.disabled = true; // button already used can not be used twice
        if (chances < 0) {
            gameOverMessage();
         
        } 
    } else {
        
        button.style.backgroundColor = "green";
        button.disabled = true; // button can not be used twice
        button.style.color = "white";
        button.style.boxShadow = "none";
        let wordStatus= document.getElementById('secret-word').innerText;
        if (!wordStatus.includes('_')) {
            winningMessage();
            gameWon = true;
            }
    }
     
}

/**
 *  Decreases the number of robot icons displayed 
 *  according to the nuber of chances left
 */
function updateChancesLeft(chances) {
    let robots = document.getElementsByClassName('fa-robot');

    for (let i=0; i < robots.length; i++) {
        if (i >= chances ) {
            robots[i].style.display ="none";
        }
    }
}

/**
 * Creates and styles the content of the popup message when the game was lost
 */
function gameOverMessage() {
    message = document.getElementById('popup-message');
    message.style.display = "block";
    let correctAnswer = chosenWord.word;
    let html = `<p><i class="fa-solid fa-face-frown" style="color: red;"></i>  Sorry! You Lost! <br> The correct answer was: 
                <span style= "color:red; text-transform:uppercase;"> "${correctAnswer}"</span></p>
                <button id="play-again" onclick="window.location.href='game.html'">Play Again</button>`
    message.innerHTML = html;

}

/**
 * Creates and styles the content of the message that pops up when the word is guessed
 */
function winningMessage() {
    message = document.getElementById('popup-message');
    message.style.display = "block";
    let html = `<p><i class="fa-solid fa-face-smile" style="color: #4eaa3c;"></i>  Congratulations! <br> You are a Word Master!
                <br> <i class="fa-solid fa-shield-halved" style="color: #2fb138;"></i>
                <i class="fa-solid fa-shield-halved" style="color: #2fb138;"></i>
                <i class="fa-solid fa-shield-halved" style="color: #2fb138;"></i> 
                </p>
                <button id="play-again" onclick="window.location.href='game.html'">Play Again</button>`;
    message.innerHTML = html;
    message.style.boxShadow =`0 1px 5px green`;

}

/**
 * Updates the source path of the hangbot image to correspond to the current hangbot-status 
 */
function updateHangbotImg() {
    let hangbotVersions = [
        './assets/images/hangbot_2.png',
        './assets/images/hangbot_3.png',
        './assets/images/hangbot_4.png',
        './assets/images/hangbot_5.png',
        './assets/images/hangbot_6.png',
        './assets/images/hangbot_7.png',
        './assets/images/hangbot_8.png',
    ];

    let hangbotImage = document.getElementById('hangbot');
    if (hangbotStatus < hangbotVersions.length) {
            hangbotImage.src = hangbotVersions[hangbotStatus];
        }

}

// set 45 seconds timer when the timer button is checked
let seconds = 45;
let timer;

// code for timer is a combination from stackoverflow and w3Schools

/**
 * Sets the timer at 45 seconds and ends the game when time is up
 */
function startTimedGame() {
    timer = setInterval(runTimer, 1000);

    function runTimer () {
        if (seconds <= 0) {
            clearInterval(timer);
            timeIsUpMessage();
        } else {
            
            // adds a 0 digit to the seconds if the number is smaller then 10
            document.getElementById('seconds').textContent = `${seconds < 10 ? '0':''} ${seconds}`; 
            seconds--;
        }

        if (gameWon) {
            stopTimerMessage();
            clearInterval(timer);
        } 
        if (chances < 0) {
            gameOverMessage();
            clearInterval(timer);
        }
        
    }
}

/**
 * returns true if the timed-game button is checked
 */
function timerOn () {
    let timerOn = document.getElementById('timed-game');
    return timerOn.checked;
}

function gameMode() {
    let timerContainer =document.getElementById('timer-container');
    if (timerOn()) {
        timerContainer.style.visibility = 'visible';
        startTimedGame();
    } else {
        timerContainer.style.visibility = 'hidden';
        clearInterval(timer);
    }
}

// add event listeners to the game mode buttons
let timedGame = document.getElementById('timed-game');
let unTimedGame = document.getElementById('untimed-game');
unTimedGame.addEventListener('change', gameMode);
timedGame.addEventListener('change', gameMode);

/**
 * Pops up when the time is up
 */
function timeIsUpMessage() {
    message = document.getElementById('popup-message');
    message.style.display = "block";
    let correctAnswer = chosenWord.word;
    let html = `<p><i class="fa-solid fa-clock fa-shake" style="color: red;"></i>  Sorry! Time's up! <br> The correct answer was: 
                <span style= "color:red; text-transform:uppercase;"> "${correctAnswer}"</span></p>
                <button id="play-again" onclick="window.location.href='game.html'">Play Again</button>`;
    message.innerHTML = html;
}

/**
 * Winning message that pops up if the game is won before the time is up
 */
function stopTimerMessage() {
    message = document.getElementById('popup-message');
    message.style.display = "block";
    let html = `<p><i class="fa-solid fa-clock" style="color: green;"></i>  
                Congratulations! <br> That's fast! You still had: 
                <span style= "color:green;">  ${seconds}</span> seconds left! <br>
                <i class="fa-solid fa-award" style="color: green;"></i>
                <i class="fa-solid fa-award" style="color: green;"></i>
                <i class="fa-solid fa-award" style="color: green;"></i> 
                </p>
                <button id="play-again" onclick="window.location.href='game.html'">Play Again</button>`;
    message.innerHTML = html;
    message.style.boxShadow = `0 1px 5px green`;
} 
