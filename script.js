
rules=()=>{
  document.getElementById("rulebtn");
  let rules =
    "User inputs amount to play with.\n\nThe host will roll two 6 sided die and the result would be the summed values of both die.\n\nThe three possible results would be:\nOver: summed value is  (8 - 12)\nUnder: summed value is (1 - 6)\nSeven: summed value is 7\n\nIf player successfully calls Over/Under, double the amount placed. If player successfully calls Seven, TRIPLE the amount placed. If call is unsuccessful, amount placed is forfeited.\n\n";
  alert(rules);
};

var diceTotal = 0;
var winStreak = 0;

// DOM variables
const diceTotalDisplay = document.querySelector("#resultdisplay");
const winStreakCounter = document.querySelector("#winstreakcounter")
const currentBetValue = document.getElementById("betamount");
const currentWalletAmt = document.getElementById("walletamount");
const userInput = document.getElementById("userInput");


// Rolling of the dice
rollDie=()=>{
  var d1 = Math.floor(Math.random() * 6) + 1;
  var d2 = Math.floor(Math.random() * 6) + 1;
  console.log(`Die 1 rolled a ${d1}.`);
  console.log(`Die 2 rolled a ${d2}.`);
  diceTotal = d1 + d2;

  diceTotalDisplay.innerText = diceTotal;
  diceTotalDisplay.value = diceTotal;

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
        console.log(currentWalletAmt.value)
        // SetTimeout allows the user to view the dice roll result before the alert prompts
        setTimeout(()=>{
          alert(`Over! You've won $${userInput.value * 2}!`)
          currentBetValue.innerText= "$" + 0;
          userInput.value = '';
          current
        }, 500)
        
      } else {
        currentWalletAmt.value -= userInput.value;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak = 0;
        setTimeout(()=>{
          alert(`Doh! You've lost $${userInput.value}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
        }, 500)
      }
  
    } else if (userInputChosenString == 'Under') {
      if (diceTotal < 7 && diceTotal > 0) {
        currentWalletAmt.value += userInput.value * 2;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak += 1;
        console.log(currentWalletAmt.value)
        setTimeout(()=>{
          alert(`Under! You've won $${userInput.value * 2}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
        }, 500)
      } else {
        currentWalletAmt.value -= userInput.value;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak = 0;
        setTimeout(()=>{
          alert(`Doh! You've lost $${userInput.value}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
        }, 500)
      }
  
    } else if (userInputChosenString == 'Seven') {
      if (diceTotal == 7) {
        currentWalletAmt.value += userInput.value * 3;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak += 1;
        console.log(currentWalletAmt.value)
        setTimeout(()=>{
          alert(`Seven! Amazing! You've won $${userInput.value * 3}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
        }, 500)
      } else {
        currentWalletAmt.value -= userInput.value;
        currentWalletAmt.innerText = "$" + currentWalletAmt.value
        winStreakCounter.innerText = winStreak = 0;
        setTimeout(()=>{
          alert(`Doh! You've lost $${userInput.value}!`)
          currentBetValue.innerText = "$" + 0;
          userInput.value = '';
        }, 500)
      }
    } if (currentWalletAmt.value === 0) {
      alert("You've run out of cash, better luck next time!")
      location.reload();
  }
  // return userInput.value = '';
}



currentWalletAmt.value = 100;

logInput=()=>{
  // Input Validity check
  currentBetValue.innerHTML = "$" + parseInt(userInput.value, 10); // parseInt is used to remove the additional 0's in front of the number inputted
  if (userInput.value > currentWalletAmt.value) {
    alert(`You can\'t place more than $${currentWalletAmt.value}.`);
    currentBetValue.innerHTML = "$" + 0;
    
  } else if (userInput.value == "" || userInput.value == 0) {
    alert("Please input a valid amount.");
    currentBetValue.innerHTML = "$" + 0 ;
    
  }
}

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
