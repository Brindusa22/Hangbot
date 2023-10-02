// add loading event and add event listeners to buttons
// add object containing secret words and definitions

let wordList = {    
            'Algorithm':'A step-by-step set of rules for solving a problem or performing a computation.',
            'Bandwidth':'The amount of data that can be transmitted or received per unit of time, usually measured in bits per second (bps).',
            'Compiler' :'A software tool that translates high-level programming code written in C, C++, or Java into machine code that a computer can execute.',
            'Database':'A collection of organized data that can be accessed, manipulated, and updated by a software application.',
            'Encryption':'The process of converting plaintext or readable data into an encoded form, known as ciphertext, to protect it from unauthorized access.',
            'Firewall':'A network security device or software that monitors and controls the incoming and outgoing network traffic based on predetermined security rules.',
            'Graphics':'The visual representation of data or information on a screen or other display device, such as images, diagrams, etc.',
            'Hardware':'The physical components of a computer system, such as the CPU, memory, disk drives, keyboard, mouse, monitor, etc.',
            'Internet':'A global network of interconnected computers and devices that use the TCP/ IP protocol to communicate and exchange data.',
            'Malware' :'A malicious software program that can harm or compromise a computer system or network, such as a virus, etc.',
            'Network':'A group of computers and devices that are connected by communication channels and protocols to share data and resources.',
            'Protocol': 'A set of rules and standards that define how data is formatted and transmitted over a network or between devices.',
            'Software': 'The set of instructions or programs that tell a computer what to do and how to do it.',
            'Variable': 'A named storage location in a computer program that can hold different values during the execution of the program.',
            'Website': 'A collection of web pages and related content that are hosted on a web server and identified by a common domain name.',
            'Robotics': 'The science and engineering of designing, building, and programming robots to perform various tasks or functions.',
            'Simulation': 'The imitation or representation of a real-world system or process using a computer program or model.',
            'Smartphone': 'A mobile phone that has advanced features and capabilities, such as a touchscreen, internet access, camera, GPS, apps, etc.',
            'Streaming': 'The transmission and playback of audio or video data over a network or the internet in real time or near real time.',
            'Supercomputer': 'A very powerful and fast computer that can perform a large number of complex calculations or operations per second.',
            'Touchscreen': 'A display device that can detect and respond to touch input from a finger or a stylus.',
            'Blockchain': 'A distributed ledger or database that records transactions or data in a secure, transparent, and immutable way using cryptography and consensus algorithms.',
            'Archive': 'A file or folder that contains one or more compressed files, usually for backup or storage purposes.',
            'Backbone': 'A high-speed network that connects multiple smaller networks, such as LANs or WANs.',
            'Bitrate': 'The amount of data that is transferred or processed per unit of time, usually measured in bits per second (bps) or kilobits per second (kbps).',
            'Browser': 'A software application that allows users to access and view web pages and other online content on the internet.',
            'CAPTCHA': 'A type of challenge-response test that verifies if a user is human or a bot, usually by asking the user to type in distorted text or images.',
            'Desktop': 'The main screen or workspace of a graphical user interface (GUI), where icons, windows, menus, and other elements are displayed.',
            'Digital': 'A type of signal or data that has discrete values, such as binary digits (0 and 1) or pixels.',
            'Download': 'The process of transferring data from a remote server to a local computer or device over a network or the internet.',
    };

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute("data-type") === "hint") {
                alert('you typed hint button');
            } else if (this.getAttribute("data-type") === "letter") {
                alert('you typed letter');
            }
        })
    }

    runGame();

})

/**
 * displays the initial game with the underscores
 * replacing the random word
 */
function runGame() {
    let chosenWord = selectRandomWord();
    let guessedLetters = [];
    let chances = 7;
    let gameStatus = '_'.repeat(chosenWord.word.length);
    let word= document.getElementById('secret-word');
    word.innerText = gameStatus;
    console.log(chosenWord.word)
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

function checkInput() {

}

function updateChancesLeft() {

}

function showHint() {

}

function updateHangbotImg() {

}

function startTimedGame() {

}

function runTimer() {

}

function endTimedGame() {

}