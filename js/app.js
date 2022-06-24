function openSignIn() {
  document.getElementById("popup-sign").style.display = "block";
}

function closeSignIn() {
  document.getElementById("popup-sign").style.display = "none";
}

function nextSignInOpen() {
  document.getElementById("popup-next").style.display = "block";
  document.getElementById("popup-sign").style.display = "none";
}

function nextSignInClose() {
  document.getElementById("popup-next").style.display = "none";
}
