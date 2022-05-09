// function displayOption() {
//     if (document.querySelector('.phrase')) {
//        
//     } else if (document.querySelector('.keystore')) {
//         console.log(document.querySelector('.keystore'))
//         document.querySelector(".keystore-container").style.display = 'contents';
//         document.querySelector(".phrase-container").style.display = 'none';
//         document.querySelector(".private-key-container").style.display = 'none';
//     }
// }

let btns = document.getElementsByClassName('key');
for (let btn of Array.from(btns)) {
    btn.addEventListener("click", () => {
        if (btn.innerHTML == "Phrase") {
            document.querySelector(".phrase-container").style.display = 'contents';
            document.querySelector(".keystore-container").style.display = 'none';
            document.querySelector(".private-key-container").style.display = 'none';
        }else if (btn.innerHTML == "Keystore JSON") {
            document.querySelector(".phrase-container").style.display = 'none';
            document.querySelector(".keystore-container").style.display = 'contents';
            document.querySelector(".private-key-container").style.display = 'none';
        }else if (btn.innerHTML == "Private Key") {
            document.querySelector(".phrase-container").style.display = 'none';
            document.querySelector(".keystore-container").style.display = 'none';
            document.querySelector(".private-key-container").style.display = 'contents';
        }
    });
}