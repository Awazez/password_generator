const password_ele = document.getElementById("pwd_txt");
var string = "";
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
var pwd_length = document.getElementById("slider");

function DisplayChange(newvalue) {
    document.getElementById(
      "value").innerHTML = newvalue;
}

clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(password_ele.innerText);
    alert("Password copied to clipboard");
});

generate.addEventListener('click', () => {
    let password = "";
    var checked = document.getElementById("checkboxSymbols").checked;
    var checkedNumbers = document.getElementById("checkboxNumbers").checked;
    var checkedLetters = document.getElementById("checkboxLetters").checked;
    var checkedCapitalLetters = document.getElementById("checkboxCapitalLetters").checked;
    var final_string = string;
    console.log(checked);
    if (checked) {
        final_string += "!@#$%^&*";
    }
    if (checkedNumbers) {
        final_string += "0123456789";
    }
    if (checkedLetters) {
        final_string += "acdefghijklnopqrstuvwxyz";
    }

    if (checkedCapitalLetters) {
        final_string += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    for (let i = 0; i < pwd_length.value; i++) {
        let randomNumber = crypto.getRandomValues(new Uint32Array(1))[0];
        randomNumber = randomNumber / 0x100000000;
        randomNumber = Math.floor(randomNumber * final_string.length);

        password += final_string[randomNumber];
    }
    password_ele.innerText = password;
    final_string = string;
});

clipboard.addEventListener('click', () => {
    navigator.clipboard.writeText(password_ele.innerText);
    alert("Password copied to clipboard");
});



