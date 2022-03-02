var diceTotal = 0;
var winStreak = 0;

// DOM variables
const diceTotalDisplay = document.querySelector("#resultdisplay");
const winStreakCounter = document.querySelector("#winstreakcounter");
const currentBetValue = document.getElementById("betamount");
const currentWalletAmt = document.getElementById("walletamount");
const userInput = document.getElementById("userInput");
const highScore = document.getElementById("highscore");
const total = document.getElementById("total");
const spans = document.querySelectorAll('.header span');
let dice = document.querySelectorAll("img");
const mouseDownRollBtn = document.querySelector("#rollbtn")

function infiniteRoll() {
  shakeDice.volume=1;
  shakeDice.play();
  dice.forEach(function(die){
    die.classList.add("rollinfinite");
  })
}



// Functions
// Rolling of the dice
rollDie=()=>{
  // Ensure the dice shaking audio stops the moment user lets go of button
  shakeDice.volume = 0;
  
  dice.forEach(function(die){
    die.classList.remove("rollinfinite");
  });
  dice.forEach(function(die){
    die.classList.add("roll");
});
setTimeout(function(){
    dice.forEach(function(die){
        die.classList.remove("roll");
    });
}, 500)

  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Die 1 rolled a ${d1}.`);
  console.log(`Die 2 rolled a ${d2}.`);
  diceTotal = d1 + d2;

  // diceTotalDisplay.innerText = diceTotal;
  // diceTotalDisplay.value = diceTotal;

  total.innerHTML = `You rolled ${diceTotal}`;
  console.log(`Summed value is ${diceTotal}.`);
  if (diceTotal == 7) {
    console.log("Seven!");
  } else if (diceTotal <= 6) {
    console.log("Under!");
  } else {
    console.log("Over!");
  }
  var image = document.getElementById("die1");
  var image2 = document.getElementById("die2");

  // Matching die1 value with correct image
  if (d1 == 2) {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png";
  } else if (d1 == 3) {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png";
  } else if (d1 == 4) {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png";
  } else if (d1 == 5) {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png";
  } else if (d1 == 6) {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png";
  } else {
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png";
  }
  // Matching die2 value with correct image
  if (d2 == 1) {
    image2.src =
      "https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png";
  } else if (d2 == 3) {
    image2.src =
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png";
  } else if (d2 == 4) {
    image2.src =
      "https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png";
  } else if (d2 == 5) {
    image2.src =
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png";
  } else if (d2 == 6) {
    image2.src =
      "https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png";
  } else {
    image2.src =
      "https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png";
  }
    if (userInputChosenString == 'Over') {
      if (diceTotal > 7 && diceTotal < 13) {
        currentWalletAmt.value += userInput.value * 2;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak += 1;
        commentText();
        kaching.play();
        console.log(currentWalletAmt.value)
        // SetTimeout allows the user to view the dice roll result before the alert prompts
        setTimeout(()=>{
          if (userInput.value != 0) 
          alert(`Over! You've won $${userInput.value * 2}!`)
          currentBetValue.innerText= "$" + 0;
          userInput.value = '';
        }, 800)
        
      } else {
        currentWalletAmt.value -= userInput.value;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak = 0;
        crowdAww.play();
        setTimeout(()=>{
          if (userInput.value != 0) 
          alert(`Doh! You've lost $${userInput.value}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
          document.querySelector(".winstreakcomment").innerHTML = "";
        }, 800)
      }
  
    } else if (userInputChosenString == 'Under') {
      if (diceTotal < 7 && diceTotal > 0) {
        currentWalletAmt.value += userInput.value * 2;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak += 1;
        commentText();
        kaching.play();
        console.log(currentWalletAmt.value)
        setTimeout(()=>{
          if (userInput.value != 0) 
          alert(`Under! You've won $${userInput.value * 2}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
        }, 800)
      } else {
        if (userInput.value != 0) 
        currentWalletAmt.value -= userInput.value;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak = 0;
        crowdAww.play();
        setTimeout(()=>{
          if (userInput.value != 0) 
          alert(`Doh! You've lost $${userInput.value}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
          document.querySelector(".winstreakcomment").innerHTML = "";
        }, 800)
      }
  
    } else if (userInputChosenString == 'Seven') {
      if (diceTotal == 7) {
        currentWalletAmt.value += userInput.value * 3;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak += 1;
        commentText();
        kidsCheering.play();
        console.log(currentWalletAmt.value)
        setTimeout(()=>{
          if (userInput.value != 0) 
          alert(`Seven! Amazing! You've won $${userInput.value * 3}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
        }, 800)
      } else {
        currentWalletAmt.value -= userInput.value;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak = 0;
        crowdAww.play();
        setTimeout(()=>{
          alert(`Doh! You've lost $${userInput.value}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
          document.querySelector(".winstreakcomment").innerHTML = "";
        }, 800)
      }
    } if (currentWalletAmt.value === 0) {
      crowdAww.play();
      setTimeout(()=> {
        alert("You've run out of cash, better luck next time!")
        location.reload();
      }, 1000);
    } 
  }

// msgs that comments based on the winstreak in a row msg
commentText=()=>{
let comment = document.querySelector(".winstreakcomment")

if (winStreakCounter.innerText == 2) {
  document.getElementById("winstreak").appendChild(comment);
  comment.innerHTML = "2 in a row! That's pretty lucky";
  }
if (winStreakCounter.innerText == 3) {
  document.querySelector(".winstreakcomment").innerHTML ="3 in a row! You've got to be cheating...right?";
  }
if (winStreakCounter.innerText == 4) {
  document.querySelector(".winstreakcomment").innerHTML ="4 in a row! You're cheating... this isn't fun anymore";
  }
};


currentWalletAmt.value = 100;


logInput=()=>{
  // Input Validity check
  currentBetValue.innerHTML = "$" + parseInt(userInput.value, 10);
   // parseInt is used to remove the additional 0's in front of the number inputted
  if (userInput.value > currentWalletAmt.value) {
    errorTone.play();
    alert(`You can\'t place more than $${currentWalletAmt.value}.`);
    currentBetValue.innerHTML = "$" + 0;
    // trying to animate the numbers
  } else if (userInput.value == "" || userInput.value == 0) {
    errorTone.play();
    alert("Please input a valid amount.");
    currentBetValue.innerHTML = "$" + 0 ;
    
  } else {
    // Slotmachine sound won't play unless User has input a valid play amount.
    slotMachine.play();
  }
}


// Allow enter to submit input values
userInput.addEventListener('keyup', (e)=> {
  if(e.key === 'Enter') {
    logInput();
  }
})


var userInputChosenString = '';


userCallOver=()=>{
  // !=0 is to ensure game doesnt run if input amount is 0
  if (userInput.value != 0) {
    // checks what the user has chosen
    userInputChosenString = 'Over';
    console.log(userInputChosenString)
  }
}


userCallUnder=()=>{
  if (userInput.value != 0) {
    userInputChosenString = 'Under';
    console.log(userInputChosenString)
  }
}


userCallSeven=()=>{
  if (userInput.value != 0) {
    userInputChosenString = 'Seven';
    console.log(userInputChosenString)
  }
}


resetGame=()=>{
  if (confirm("Are you sure you want to restart?") == true) {
  location.reload();
  }
}


rules=()=>{
  document.getElementById("rulebtn");
  let rules =
    "Welcome to Overs and unders!\n\nBegin by entering your stakes then proceed to select Over, Under or Seven.\n\nOver: summed value is  8 - 12\nUnder: summed value is 1 - 6\nSeven: summed value is 7\n\nIf you call Over/Under and you win, your bet amount is doubled! If you call Seven and win, your bet amount is TRIPLED. For the 3 options, if you lose the bet amount placed is forfeited.\n\nWhat are you waiting for! Get rolling!";
    clickSound2.play();
    alert(rules);
};


const muteBtn = document.querySelector("#mutebtn")
soundToggle=()=>{
  backgroundMusic.play();
  if (muteBtn.innerHTML == "🔊") {
    backgroundMusic.volume = 0;
    muteBtn.innerHTML = "🔇"
  } else if (muteBtn.innerHTML == "🔇"){
    backgroundMusic.volume = 0.8;
    muteBtn.innerHTML = "🔊"
  }
}

// Audio
const diceRollSound = new Audio();
diceRollSound.src = 'diceroll.mp3';

const clickSound = new Audio();
clickSound.src = 'mouseclick.mp3';

const clickSound2 = new Audio();
clickSound2.src = 'mouseclick2.mp3';

const crowdAww = new Audio();
crowdAww.src = 'crowd_aww.mp3';

const kaching = new Audio();
kaching.src = 'kaching.mp3';

const kidsCheering = new Audio();
kidsCheering.src = 'kids_cheering.mp3';

const slotMachine = new Audio();
slotMachine.src = 'slotmachine_insert.mp3';

const errorTone = new Audio();
errorTone.src = 'error_tone.mp3'

const shakeDice = new Audio()
shakeDice.src = 'diceshake.mp3'

// Audio volume levels for background music
var backgroundMusic = document.getElementById("jazzmusic")
backgroundMusic.volume = 0.8;
diceRollSound.volume=0.8;
clickSound.volume=0.8;
clickSound2.volume=0.8;
crowdAww.volume=0.8;
kaching.volume=0.8;
kidsCheering.volume=0.8;

//Animated Header
spans.forEach((span, idx)=>{
  span.addEventListener('click',(e)=> {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e)=>{
    e.target.classList.remove('active');
  });
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});





// Animated number counter
// function animateValue(id) {
//   var obj = id;
//   var current = obj.innerHTML;
//   setInterval(function(){
//     current++;
//     obj.innerHTML = current;
//   }, 1000);
// }

