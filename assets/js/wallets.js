document.querySelector('#metamask').addEventListener('click', () => {
        let div = document.querySelector('#metamask');
        console.log(div.parentNode.id);
})

let walletBtns = document.getElementsByClassName('.wallet-synchronize-button');
for (let btn of Array.from(walletBtns)) {
btn.addEventListener('click', () => {
        let walletname = btn.parentNode.id;
})}

exports.walletName = walletname;