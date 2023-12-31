# Hangbot

Welcome to [Hangbot](https://brindusa22.github.io/Hangbot/game.html)!
This a hangman-inspired game with a focus on computer-tech terms. The user has the task to guess a secret word, by selecting the letters from the virtual keyboard and has seven chances. In addition, the game features the following set of options: a timer, that offers the user the possibility to engage in a timed gameplay, with a 45 seconds countdown; and a hint button with the definition of the secret word. 
This game was designed to be both a game and an interactive quiz, for tech enthusiasts who want to challenge their knowledge of tech terms in a playful and engaging way. 

 ![Responsive design](assets/images/readme_images/responsive_design.png)

 ## Mockup

 The mockup for this game was created with [MockFlow](https://wireframepro.mockflow.com/#/space/default).
 
 ![Mockup](assets/images/readme_images/wireframing.png)

 ## Layout and Design

 - The fonts I have used are _Titillium Web_  and _Orbitron_  which offer a very good readability. Their geometric shapes and sharp corners of the characters make them suitable for the robotic theme of the game, as they give a futuristic and mechanical touch.
 -  The colors I have used are _Alice blue_ #F0F8FF for the background of the game area and a _Navy blue_ #0A356D for the buttons. All the buttons have shaddows and hover effects and the colors that I have applied to them are consistent throughout the entire project to create a clean, but modern appearance.

### Logo

The logo was created with [Canva](https://www.canva.com/logos/). It has the same main colors of the game and its round shape is meant to resemble the virtual keyboard buttons and the hint button. It was also used as a _favicon_. When clicked it takes the user to the welcome / rules page.

![Logo](assets/images/readme_images/logo.png)

### Images and Icons

- The _hangbot_ image was taken from [Vecteezy](https://www.vecteezy.com/vector-art/10361091-simple-vector-drawing-in-doodle-style-robot-cute-robot-hand-drawn-with-lines-funny-illustration-for-kids) and modified with _Paint_ to meet the design requirements of the game. 
 
  ![Hangbot image](assets/images/readme_images/hangbot_updated.jpg)
  
- The icons were taken from [FontAwesome](https://fontawesome.com/search) and their style was costumized according to the design of the game.

## Features

### Existing Features

- Welcome page 

    The  site opens with the _Welcome page_ which contains the rules and a big _Play_ button that invites the user to start the game.

![Welcome page](assets/images/readme_images/welcome_page.png)

- Game page
  
    To maintain consistency, the game page has the same structure as the welcome page.
  
    - Logo and heading
  
       - The header, displays the logo and the heading with the name of the game, which is also a clickable link that takes the user to the initial page, namely the welcome / rules page.
        
    ![Header](assets/images/readme_images/header.png)

    - Control buttons

         - Above the game window, the user can easily find all the control buttons of the game: on the right side, the restart button and the rules button, which leads to the rules page, and on the left side the timer switch, which gives the user the possibility to activate and deactivate a 45 second timer. The buttons have the same style including the same hover effect.
  
        ![Control buttons](assets/images/readme_images/control_buttons.png)

    - Game window 

      - As mentioned above, the game window maintains the same visual aspect, in terms of styling, as the welcome / rules area. Its structure is divided into two main areas:
        -  On the right side, the input area where the user can choose one letter at a time from a virtual keyboard, or press the hint button (which can also be triggered using the Alt+h keys on the computer keyboard) to get the deffinition of the secret word. The letters can only be clicked once. After a letter has been clicked, its button turns green or red, depending if the guess was correct or not, and the button is then disabled, alowing the user to concentrate only on the still possible options.
           
        - On the left side, the output area is displaying a hangbot image that is updated each time a wrong letter is clicked.
          
        ![Game window](assets/images/readme_images/game_stage.png)
        
        -  The number of attempts left is indicated by a _chances-left_ counter, consisting of seven small robot icons. Each time a mistake is made, a robot icon is subtracted from the counter, simultaneously with the hangbot image being updated. It is positioned at the bottom of the _hangbot_ image, for desktop screens, but its position changes for medium and smaller screens:
       
        ![Chances counter](assets/images/readme_images/chances_left.png) 
        
      - The secret word

           - I have inserted a list of 60 words, together with their definition in an _object_ at the begining of the JaveScript code. I have then created a function to randomly generate one of these words, along with its corresponding definition. To display the word without showing its letters, I have created an _Array_ which is filled with as many underscores as the length of the randomly chosen word. In this way, the number of underscores always corresponds to the number of letters of the secret word. It is positioned above the keyboard, to enhance the user's visibility of both elements.
            
        ![Secret word](assets/images/readme_images/secret_word.png) 
         
      - Feedback and notifications
          
        - The user is allowed a total of six mistakes. At the seventh mistake, the game is over and a game-over message appears, revealing the correct answer. Underneath the message there is a big _Play Again_ button, encouraging the user to restart the game.
        - If all the letters are correctly guessed and no more than six mistakes are made, the user wins and a congratulatory message pops up, again with a _Play_ button, offering the user the possibility to play again.
       
        ![Popup messages](assets/images/readme_images/feedback.png)

      - Timer

        - If the user prefers to increase the level of diffculty, the timer button can be switched on and a 45 seconds countdown will appear just above the secret word. If the timer is switched off during a timed game, the page will refresh and the game will resume with the timer deactivated.
         
        ![Timer](assets/images/readme_images/timer_display.png)

        - If the time is up and the user has not guessed the word, the game is over and a _Time's up_ notification pops up.
        - If the secret word was guessed in 45 seconds and again with no more than six mistakes, a congratulatory message appears, letting the user know how much time left he had.
         
            ![Timer feedback](assets/images/readme_images/timer-message0.jpg)
        
      - Hint Button

        - The hint button provides a definition of the secret word from the [TechTerms.com](https://techterms.com/) dictionary. It is located directly under the virtual keyboard and is suggestively represented by a lightbulb that is _lightened_ when turned on (clicked). It can be used at any time and can be also activated with the Alt + H key from the computer keyboard.
         
        ![Hint button](assets/images/readme_images/hint_btn.png) 
        
 ### Future Features

  - Add levels and increase the difficulty of the words gradually.
  - Add sounds and animations.

## Testing

The game was tested on Chrome and Safari browsers, on laptop, tablet and mobile phone.

The media queries created allow the game to fit nicely on all screen sizes and to maintain its aspect-ratio. The design of the game adapts accordingly.

### Lighthouse

The reports generated by _Lighthouse_ are the following:

![Lighthouse](assets/images/readme_images/lighthouse.jpg)

### Validator Testing

  - HTML:
    
    Minor errors were found with the official W3C Validator, such as spacing and punctuation, which were fixed. The validator returned then no error:
    
    ![Html Validator](assets/images/readme_images/validator_html.png) 
    
  - CSS :

    No errors were found when passing the code through the official (Jigsaw) validator:
    ![CSS Validator](assets/images/readme_images/validator_css.png)

  - JavaScript:
 
    When passing the code through the official JSHint validator, the following warnings appear; all of them are of the same type:
    
    ![JSHint Validator](assets/images/readme_images/jshint.png)

    The following metrics were returned:
    
    ![JSHint Metrics](assets/images/readme_images/jshint_metrics.png)
    
### Fixed Issues

When I have first written the code for the virtual keyboard I have realised the user could click a letter multiple times. If the letter was correct nothing would happen. The problem was if the letter was wrong. In this case, clicking the same letter would count as a new mistake, so if a letter was accidentally clicked twice, the user would lose a chance. And the game could even be lost by clicking the same wrong letter until no chances were left. This would have caused a very poor user experience, since it is quite difficult for longer words to remember which leter you have already tried, so I have decided to disable the buttons after they have been clicked once: 

_button.disabled = true;_  
- _button_ being a parameter of the checkInput function, which was also added in the html for each button, together with a _letter_ parameter   (to identify which letter is being clicked).
Since I have managed to make this event listener behave difefrently after the first click, I also thought it would be a good ideea to change the color of the buttons to red, for the wrong letters and to green for the correct ones. In this way the user receives also a visual feedback and a hint that he should no longer concentrate on those letters. 

### Unfixed Bugs

There were no unfixed bugs left.

## Deployment

- The site was deployed to GitHub Pages. The steps to deploy are the following:
        
    - Go to the GitHub repository and navigate to the Settings tab;
    - Go to the Pages section that can be found on the left side of the screen;
    - From the Branch section drop-down menu select the Main Branch;
    - Refresh the page and a detailed ribbon will indicate the succesful deployment and the link to the site.
        
The live link can be found here: <https://brindusa22.github.io/Hangbot/>

## Credits

### Media

- The robot image was taken from [Vecteezy](https://www.vecteezy.com/vector-art/10361091-simple-vector-drawing-in-doodle-style-robot-cute-robot-hand-drawn-with-lines-funny-illustration-for-kids).
- The logo was created with [Canva](https://www.canva.com/logos/).
- The icons were taken from [FontAwesome](https://fontawesome.com/search).
- The fonts were imported from [Google Fonts](https://fonts.google.com/).

### Implementation 

 - JavaScript:

    This is also mentioned in the comment above the respective code:

    - To implement the code for capturing _Alt+H_ on keydown for the Hint button I have read and used the suggestion found on _Stackoverflow_:
     
    <https://stackoverflow.com/questions/52799263/how-to-capture-altn-on-keypress-in-javascript>

    - To implement the timer, I have done a research. I haven't used the exact code from these websites, but a combination of the three:
  
    <https://stackoverflow.com/questions/35299413/1-min-countdown-javascript>
    
    <https://copyprogramming.com/howto/1-min-countdown-javascript>
    
    <https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown>

#### Content

 - The words and their definition are taken from the [TechTerms.com The Computer Dictionary](https://techterms.com/).