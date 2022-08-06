let dicePool = [];
let outputEl = document.getElementById("dice-box");
let totalDisplayEl = document.getElementById("diceTotal");
let numDice = 1;
let numDiceInput = document.getElementById("diceNumInput");
numDiceInput.addEventListener("input", function () {
  if (numDiceInput.value >= 0) {
    numDice = numDiceInput.value;
  }
});

let d4 = document.getElementById("d4_btn");
let d6 = document.getElementById("d6_btn");
let d8 = document.getElementById("d8_btn");
let d10 = document.getElementById("d10_btn");
let d12 = document.getElementById("d12_btn");
let d20 = document.getElementById("d20_btn");
let xbtn = document.getElementById("xbtn");

let dicePoolAnim = function () {
  anime({
    targets: ".dice6",
    translateY: -3,
    rotateZ: -180,
    duration: 100,
    delay: anime.stagger(20),
    easing: "easeInOutExpo",
    loop: 2,
    direction: "alternate",
    autoplay: true
  });
};

d4.onclick = function () {
  addDieToPool(4, numDice, 0);
  dicePoolAnim();
};
d6.onclick = function () {
  addDieToPool(6, numDice, 0);
  dicePoolAnim();
};
d8.onclick = function () {
  addDieToPool(8, numDice, 0);
  dicePoolAnim();
};
d10.onclick = function () {
  addDieToPool(10, numDice, 0);
  dicePoolAnim();
};
d12.onclick = function () {
  addDieToPool(12, numDice, 0);
  dicePoolAnim();
};
d20.onclick = function () {
  addDieToPool(20, numDice, 0);
  dicePoolAnim();
};

xbtn.onclick = function () {
  dicePool = [];
  outputEl.innerHTML = "";
  totalDisplayEl.value = 0;
};

function addDieToPool(sides, num, mod) {
  var dX = sides || 6;
  var numOfDice = num || 1;
  var diceMod = mod || 0;
  var roll = 0;

  for (i = 0; i < numOfDice; i++) {
    var roll = Math.floor(Math.random() * dX) + 1 + mod;
    let newRoll = {
      rollResult: roll,
      dieType: sides
    };
    dicePool.push(newRoll);
  }

  let total = 0;
  for (j = 0; j < dicePool.length; j++) {
    total += dicePool[j].rollResult;
  }

  totalDisplayEl.value = total;

  let output = "";
  for (k = 0; k < dicePool.length; k++) {
    output += '<div class="dice6">';
    output += '<img src="images/d';
    output += dicePool[k].dieType;
    output += '.png" class="poolDieImg" />';
    output += '<span class="poolDieTxt">';
    output += dicePool[k].rollResult;
    output += "</span>";
    output += "</div>";
  }
  outputEl.innerHTML = output;

  //Reset Num Dice
  numDiceInput.value = 1;
  numDice = 1;
}

addDieToPool(6, numDice, 0);

// rollDie(6);
// rollDie(6);
// rollDie(6);