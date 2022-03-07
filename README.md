# overs-unders
Overs and Unders is a simple dice rolling game.

Game rules:
Player enters a bet amount, then proceeds to select Over, Under or Seven.

Over: summed value is  8 - 12
Under: summed value is 1 - 6
Seven: summed value is 7

If Player calls Over/Under and gets it right, bet amount placed is doubled! 
If Player calls Seven and win, bet amount is TRIPLED. Any incorrect calls would result in the loss of bet amount placed.

Approach Taken:
I started by pseudo coding the flow of the game which was as follows -
1. User is given $100
2. User places a play amount they wanna bet with
3. User selects over/under/seven
4. User hits 'Go!' to roll dice

I then created the basic buttons needed for the game on HTML, and worked on the logic for functions that were to be assigned to those buttons.

The rollDie() function was the main function to work on as majority of the game was dependant on this function. This is what the function does -
1. roll 2 die and display it's summed value
2. check which category the summed value (over/under/seven) falls under internally
3. if/else statement to either add or minus the bet amount placed off the current wallet value
4. if/else statement to ensure that the player still has cash in their wallet to continue playing

The above mentioned points were the primary goals needed for the game to run.
Once those were working, I added additional features that made the game more seamless - 
1. Alert to indicate if you loss or won so that it's clearer for the player
2. setTimeout for the alerts so that the alert appears AFTER dice rolling animation 
3. Audio files for correct/wrong guess, dice roll and dice shake.

Once the main game was working, I worked on the CSS animations for certain eventlisteners such as mouse hover/focus to make the game more responsive to the user.


