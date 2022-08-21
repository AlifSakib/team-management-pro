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

document
  .getElementById("per-player-budget")
  .addEventListener("click", function () {
    const playersList = document.getElementById("player-lists");
    const totalPlayer = playersList.childNodes.length;
    const perPlayerExpense = getvalue("per-player-expenses");
    const playerExpenses = totalPlayer * perPlayerExpense;
    setValue("total-player-expenses", playerExpenses);
  });
