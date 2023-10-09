# Hangbot

Welcome to [Hangbot](https://brindusa22.github.io/Hangbot/game.html)!
This a hangman-inspired game with a focus on computer tech terms. The user has the task to guess a secret word, by selecting the letters from the virtual keyboard and has seven chances. In addition, the game features the following set of options: a timer, that offers the user the possibility to engage in a timed gameplay, with a 45 seconds countdown; and a hint button with the definition of the secret word. 
This game was designed to be both a game and an interactive quiz, for tech enthusiasts who want to challenge their knowledge of tech terms in a playful and engaging way. 

 ![Responsive design](assets/images/readme_images/responsive_design.png)

 ## Mockup

 The mockup for this game was created with [MockFlow](https://wireframepro.mockflow.com/#/space/default).
 
 ![Mockup](assets/images/readme_images/wireframing.png)

 ## Layout and Design

 - The fonts I have used are _Titillium Web_  and _Orbitron_  which offer a very good readability. Their geometric shapes and sharp corners of the characters make them suitable for the robotic theme of the game, as they give a futuristic and mechanical touch.
 -  The colors I have used are _Alice blue_ -#F0F8FF for the background of the game area and a _Navy blue_ #0A356D for the buttons. All the buttons have shaddows and hover effects and the colors that I have applied to them are consistent throughout the entire project to create a clean but modern appearance.

### Logo

The logo was created with [Canva](https://www.canva.com/logos/). It has the same main colors of the game and its round shape is meant to resemble the virtual keyboard buttons and the hint button. It was also used as a _favicon_. When clicked it takes the user to the rules page.

![Logo](assets/images/readme_images/logo.png)

### Images and Icons

- The _hangbot_ image was taken from [Vecteezy](https://www.vecteezy.com/vector-art/10361091-simple-vector-drawing-in-doodle-style-robot-cute-robot-hand-drawn-with-lines-funny-illustration-for-kids) and mofified with _Paint_ to meet the design requirements of the game. 
- 
  ![Hangbot image](assets/images/readme_images/hangbot_updated.jpg)
  
- The icons were taken from [FontAwesome](https://fontawesome.com/search) and their style was costumized according to the design of the game.

## Features

### Existing Features

- Welcome page 

    The  site opens with the _Welcome page_ which contains the rules and a big _Play_ button that invites the user to start the game.

![Welcome page](assets/images/readme_images/welcome_page.png)

- The game page
  
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
        - On the left side, the output area is displaying a hangbot image that is updated each time a wrong letter is clicked. At the bottom of the hangbot image, there is a chances-left counter, consisting of seven small robot icons. Each time a mistake is made, a robot icon is subtracted from the counter, simultaneously with the hangbot image being updated.
       
        ![Game window](assets/images/readme_images/game_stage.png)
    
      - The user is allowed a total of six mistakes. At the seventh mistake, the game is over and a game-over message appears, revealing the correct answer. Underneath the message there is a big _Play Again_ button, encouraging the user to restart the game.
      - If all the letters are correctly guessed and no more then six mistakes were made, the user wins and a congratulatory message pops up, again with a _Play_ button, offering the user the possibility to play again.
       
        ![Popup messages](assets/images/readme_images/feedback.png)

      - Timer

        - If the user prefers to increase the level of diffculty, the timer button can be switchd on and a 45 seconds countdown will appear just above the secret word. If the timer is switched off during a timed game, the page will refresh and the game will resume with the timer deactivated.
         
        ![Timer](assets/images/readme_images/timer_display.png)

        - If the time is up and the user has not guessed the word, the game is over and a _Time's up_ notification pops up.
        - If the secret word was guessed in 45 seconds and again with no more than six mistakes, a congratulatory message appears, letting the user know how much time left he had.
         
            ![Timer feedback](assets/images/readme_images/timer-message0.jpg)
        
      - Hint Button

      - The hint button provides a definition of the secret word from the [TechTerms.com](https://techterms.com/) dictionary. It is located directly under the virtual keyboard and is suggestively represented by a lightbulb that is _lightened_ when turned on (clicked). It can be used at any time and can be also activated with the Alt + h keys from the computer keyboard.
         
        ![Hint button](assets/images/readme_images/hint_btn.png) 
        
 ### Future Features

  - Add levels and increase the difficulty of the words gradually.

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
 
    When passing the code through JSHint,the following warnings appear, all of them are of the same type:
    
    ![JSHint Validator](assets/images/readme_images/jshint.png)

    The following metrics were returned:
    
    ![JSHint Metrics](assets/images/readme_images/jshint_metrics.png)

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

#### JavaScript

 This is also mentioned in the comment above the respective code.

- To implement the code for capturing _Alt+H_ on keydown for the Hint button I have read and used the suggestion found on _Stackoverflow_:
    <https://stackoverflow.com/questions/52799263/how-to-capture-altn-on-keypress-in-javascript>

- To implement the timer, I have done a research. I haven't used the exact code from there, but a combination of these sources:
  
<https://stackoverflow.com/questions/35299413/1-min-countdown-javascript>
    
<https://copyprogramming.com/howto/1-min-countdown-javascript>
    
<https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown>

#### Content

 - The words and their definition are taken from the [TechTerms.com The Computer Dictionary](https://techterms.com/).
        

