const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
  const loginArea = document.getElementById("login-area");
  loginArea.style.display = "none";
  const transectionArea = document.getElementById("transection-area");
  transectionArea.style.display = "block";
});
//Diposit button addeven handler

const dipositBtn = document.getElementById("addDiposit");
dipositBtn.addEventListener("click", function () {
  console.log("clicked adddiposit button");
});
