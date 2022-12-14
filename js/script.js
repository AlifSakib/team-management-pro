const buttons = document.getElementsByClassName("button");
let count = 1;
for (let button of buttons) {
  button.addEventListener("click", function () {
    const parent = button.parentElement;
    const playerName = parent.querySelector("h1").innerText;
    if (count > 5) {
      alert("You Can Select Only 5 Member");
      return;
    }
    const newLi = document.createElement("li");
    newLi.style.display = "flex";
    newLi.innerHTML = `<div class="text-2xl pr-4 py-4 font-bold text-slate-400" >${count}.</div> <div class="text-2xl py-4">${playerName}</div>`;
    const playerList = document.getElementById("player-lists");
    playerList.appendChild(newLi);
    count++;
    button.disabled = true;
    button.classList.add("cursor-not-allowed");
    button.style.backgroundColor = "silver";
  });
}

document
  .getElementById("per-player-budget")
  .addEventListener("click", function () {
    const playersList = document.getElementById("player-lists");
    const totalPlayer = playersList.childNodes.length;
    const perPlayerExpense = getValue("per-player-expenses");
    if (isNaN(perPlayerExpense) || perPlayerExpense < 0 || totalPlayer === 0) {
      alert("please Enter a Valid Number");
      clearInput("per-player-expenses");
      return;
    }

    const playerExpenses = totalPlayer * perPlayerExpense;
    setValue("total-player-expenses", playerExpenses);
  });

document
  .getElementById("total-expenses-btn")
  .addEventListener("click", function () {
    const managerExpense = getValue("managerCost");
    const coachExpense = getValue("cocahCost");
    const totalPlayerExpenses = getInnertext("total-player-expenses");
    if (isNaN(managerExpense) || isNaN(coachExpense)) {
      alert("Please Enter a Number");
      clearInput("managerCost");
      clearInput("cocahCost");
      return;
    }
    const totalExpenses = managerExpense + coachExpense + totalPlayerExpenses;
    setValue("total-expense", totalExpenses);
  });
