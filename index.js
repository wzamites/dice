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

document.querySelector(".player1").src = diefaces[player1roll - 1];
document.querySelector(".player2").src = diefaces[player2roll - 1];

if (player1roll == player2roll) {
  document.querySelector(".result").innerText = "It's a tie";
}
else if (player1roll > player2roll) {
  document.querySelector(".result").innerText = "Player 1 wins";
}
else if (player1roll < player2roll) {
  document.querySelector(".result").innerText = "Player 2 Wins";
}
