function getValue(id) {
  return parseInt(document.getElementById(id).value);
}

function setValue(id, value) {
  document.getElementById(id).textContent = value;
}

function getInnertext(id) {
  return parseInt(document.getElementById(id).innerText);
}

function clearInput(id) {
  document.getElementById(id).value = "";
}

function validInputCheck(id1, id2) {
  let manager = document.getElementById(id1).value;
  let coach = document.getElementById(id2).value;

  if (isNaN(manager || coach) || (manager || coach) < 0) {
    alert("Please Enter A Number");
    return true;
  }
}
