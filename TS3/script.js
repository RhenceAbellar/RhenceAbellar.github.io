const screen = document.querySelector(".screen");
function press(val) {
    screen.value += val;
}
function clearScreen() {
    screen.value = '';
}
function del() {
    screen.value = screen.value.slice(0, -1);
}
function calc() {
    try {
        screen.value = new Function('return ' + screen.value)() || '';
    } catch {
        screen.value = 'Error';
    }
}
