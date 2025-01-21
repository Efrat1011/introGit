let countdownInterval;

document.getElementById("startBtn").addEventListener("click", () => {
    clearInterval(countdownInterval);

    const message = document.getElementById("message");
    let timeLeft = 15;
    message.textContent = `Хабарлама аяқталуына ${timeLeft}`;

    countdownInterval = setInterval(() => {
        timeLeft--;
        if (timeLeft > 0) {
            message.textContent = `Хабарлама аяқталуына ${timeLeft}`;
        } else {
            clearInterval(countdownInterval);
            message.textContent = "Уақытыңыз аяқталды! ";
        }
    }, 1000);
});