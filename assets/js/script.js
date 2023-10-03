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

    runGame();

})

let chosenWord = selectRandomWord();
let chances = 7;
let word = document.getElementById('secret-word');
word = Array(chosenWord.word.length).fill("_");


/**
 * displays the initial game with the underscores
 * replacing the random word
 */
function runGame() {

   
    console.log(chosenWord.word.toUpperCase());
    console.log(chosenWord.definition);

    let hintButton = document.getElementById('hint-button');
    hintButton.addEventListener('click', showHint);

    checkInput();

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
function checkInput(letter) {

    for (let i=0; i < word.length; i++ ) {
        if (chosenWord.word[i] === letter) {
            word[i] = letter;
        }
    }
    console.log(word);
    document.getElementById('secret-word').textContent = word.join('');
}


function updateChancesLeft() {

}

function updateHangbotImg() {

}

function startTimedGame() {

}

function runTimer() {

}

function endTimedGame() {

}