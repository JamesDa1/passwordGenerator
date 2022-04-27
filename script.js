const alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
const symbols = "*-/=?-.,";
const numbers = "1234567890";
const validChars = alphabet + symbols + numbers;

let num_Chars = 12;
let password = "";
let randomNumber = null;

const btnEl = document.getElementsByClassName("btn-el");
const generateBtn = document.getElementById("generate-btn");

generateBtn.addEventListener("click", function () {
  renderPasswords();
});

function copyPass(clicked_id) {
  let copyText = document.getElementById(clicked_id);
  navigator.clipboard.writeText(copyText.textContent);
}

function genPasswords(num_Chars) {
  password = "";
  for (let i = 0; i < num_Chars; i++) {
    randomNumber = Math.floor(Math.random() * validChars.length);
    password += validChars[randomNumber];
  }
  return password;
}

function renderPasswords() {
  for (let i = 0; i < btnEl.length; i++) {
    btnEl[i].textContent = genPasswords(num_Chars);
  }
}
