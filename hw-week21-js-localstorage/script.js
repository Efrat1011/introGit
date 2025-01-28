document.addEventListener("DOMContentLoaded", function () {
    let textInput = document.getElementById("textInput");
    let saveBtn = document.getElementById("saveBtn");
    let clearBtn = document.getElementById("clearBtn");

    // Сақталған мәтінді жүктеу
    textInput.value = localStorage.getItem("savedText") || "";

    // Мәтінді сақтау
    saveBtn.addEventListener("click", function () {
        localStorage.setItem("savedText", textInput.value);
    });

    // Мәтінді тазалау
    clearBtn.addEventListener("click", function () {
        localStorage.removeItem("savedText");
        textInput.value = "";
    });
});
