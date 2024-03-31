const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img');

//Eventos

//Gerar QR Code
function generateQrCode(){
    const qrCodeInputValue = qrCodeInput.value;
    //validação
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = 'Gerando código...';
    //Conexão com API
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue} `;
    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.innerText = 'Código criado!';
    })
}

qrCodeBtn.addEventListener("click", () =>{
    generateQrCode();
});

//Ativando a geração do QR Code através do botão Enter
qrCodeInput.addEventListener("keydown", (e) =>{
    if(e.code === 'Enter'){
        generateQrCode();
    }
});

//Limpar área do QR Code
qrCodeInput.addEventListener('keyup', () => {
    if(!qrCodeInput.value){
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar QR Code';
    }
})