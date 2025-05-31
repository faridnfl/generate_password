const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordDisplayOne = document.getElementById("pass-display-one")
let passwordDisplayTwo = document.getElementById("pass-display-two")

function generatePassword() {
    let passwordOne = ""
    let passwordTwo = ""

    for( let i = 0; i < 15; i += 1) {
        let randomIndexOne = Math.floor(Math.random() * characters.length)
        let randomIndexTwo = Math.floor(Math.random() * characters.length)
        passwordOne += characters[randomIndexOne]
        passwordTwo += characters[randomIndexTwo]
    }
    
    passwordDisplayOne.textContent = passwordOne
    passwordDisplayTwo.textContent = passwordTwo
}

function copyToClipboard(elementId) {
    const text = document.getElementById(elementId).textContent;
    if (text) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Password copied!");
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("pass-display-one").addEventListener("click", function() {
        copyToClipboard("pass-display-one");
    });
    document.getElementById("pass-display-two").addEventListener("click", function() {
        copyToClipboard("pass-display-two");
    });
});