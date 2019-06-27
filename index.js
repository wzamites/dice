  const diefaces = [];
  for (var i = 1; i <= 6; i++) {
    diefaces.push('images/dice' + i + '.png');
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  var player1roll = getRandomInt(1, 6);
  var player2roll = getRandomInt(1, 6);

  var die1 = document.querySelector(".player1");
  die1.src = diefaces[player1roll - 1];

  var die2 = document.querySelector(".player2");
  die2.src = diefaces[player2roll - 1];
