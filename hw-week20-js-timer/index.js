let timeLeft = 15;
let timerElement = document.getElementById('time');

let countdown = setInterval(() => {
    if (timeLeft > 0) {
        timeLeft--;
        timerElement.textContent = timeLeft;
    } else {
        clearInterval(countdown);
        document.getElementById('timer').textContent = 'Уақыт аяқталды!';
    }
}, 1000);
