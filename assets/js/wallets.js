// let currentWallet = [];
// document.querySelector('#metamask').addEventListener('click', () => {
//         let div = document.querySelector('#metamask');
//         console.log(div.parentNode.id);
// })

let walletBtns = document.getElementsByClassName('wallet-synchronize-button');
for (let btn of Array.from(walletBtns)) {
btn.addEventListener('click', () => {
        // e.preventDefault();
        let walletname = btn.parentNode.id;
        // currentWallet.push(walletname)
        console.log(walletname);
        localStorage.setItem('WALLETS', walletname);
        
})};

// export {currentWallet} from './wallets';