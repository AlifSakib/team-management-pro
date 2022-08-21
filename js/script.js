/* const player1 = document.getElementById("player-1");
console.log(player1);

const playerName1 = document.getElementById("playername-1");
console.log(playerName1.innerText);
let count = 1;
document.getElementById("button").addEventListener("click", function () {
  const playerNmae = playerName1.innerText;
  const newList = document.createElement("li");
  newList.innerHTML = `<li>${count}.  ${playerNmae}</li> `;
  count++;
  if (count > 6) {
    alert("sdjn");
    return;
  }
  console.log(newList);
  document.getElementById("button").disabled = true;

  document.getElementById("player-lists").appendChild(newList);
}); */

const buttons = document.getElementsByClassName("button");
let count = 1;
for (let button of buttons) {
  button.addEventListener("click", function () {
    const parent = button.parentElement;
    const playerName = parent.querySelector("h1").innerText;
    if (count > 5) {
      alert("You Can Only Select 5 Member");
      return;
    }
    const newLi = document.createElement("li");
    newLi.innerHTML = `${count}.${playerName}`;
    const playerList = document.getElementById("player-lists");
    playerList.appendChild(newLi);
    count++;
    button.disabled = true;
    button.style.backgroundColor = "red";
  });
}
