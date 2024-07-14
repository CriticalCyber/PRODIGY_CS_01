const textInput = document.getElementById('text');
const shiftInput = document.getElementById('shift');
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');
const resultTextarea = document.getElementById('result');

function caesarCipher(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        if (char >= 65 && char <= 90) {
            result += String.fromCharCode(((char - 65 + shift) % 26) + 65);
        } else if (char >= 97 && char <= 122) {
            result += String.fromCharCode(((char - 97 + shift) % 26) + 97);
        } else {
            result += String.fromCharCode(char);
        }
    }
    return result;
}

encryptButton.addEventListener('click', () => {
    const text = textInput.value;
    const shift = parseInt(shiftInput.value);
    const encryptedText = caesarCipher(text, shift);
    resultTextarea.value = encryptedText;
});

decryptButton.addEventListener('click', () => {
    const text = textInput.value;
    const shift = parseInt(shiftInput.value);
    const decryptedText = caesarCipher(text, -shift);
    resultTextarea.value = decryptedText;
});