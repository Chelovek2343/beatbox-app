const item = document.getElementById('item');

document.addEventListener('keydown', (event) => {
    if (event.key === 'a') {
        document.getElementById('audio1').play();
    }
    if (event.key === 'g') {
        document.getElementById('audio2').play();
    }
    if (event.key === 'f') {
        document.getElementById('audio3').play();
    }
    if (event.key === 't') {
        document.getElementById('audio4').play();
    }
    if (event.key === 'e') {
        document.getElementById('audio5').play();
    }
    if (event.key === 'j') {
        document.getElementById('audio6').play();
    }
    if (event.key === 'b') {
        document.getElementById('audio7').play();
    }
    if (event.key === 'm') {
        document.getElementById('audio8').play();
    }
    if (event.key === 'q') {
        document.getElementById('audio9').play();
    }
});
