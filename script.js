function appendToDisplay(add) {
    document.getElementById('display').value += add;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    let display = document.getElementById('display');
    display.value = display.value.substring(0, display.value.length - 1);
}

function calculateResult() {
    let display = document.getElementById('display');
    let result = document.getElementById('result');
    try {
        result.value = eval(display.value);
    } catch (error) {
        result.value = 'Error';
    }
}

