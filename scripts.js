function encryptText() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText);
    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    try {
        const decryptedText = atob(inputText);
        document.getElementById('outputText').value = decryptedText;
    } catch (e) {
        document.getElementById('outputText').value = "Texto no válido para desencriptar.";
    }
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999);
    document.execCommand('copy');
}