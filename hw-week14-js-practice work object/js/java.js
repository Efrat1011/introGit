
let tapsyrma = [
    { name: "Otjimaniye", oryndau: false },
    { name: "Prisedaniye", oryndau: true },
    { name: "jugiru", oryndau: false },
    { name: "sekiru", oryndau: false },
    { name: "uyiqtau", oryndau: true }
];


function tapsyrmaOrindau() {
    let orindalmagan = tapsyrma.filter(task => !task.oryndau);
    if (orindalmagan.length > 0) {
        alert(
            "Орындалмаған тапсырмалар:" + orindalmagan.length
        );
    } else {
        alert("Барлық тапсырмалар орындалған!");
    }
}
tapsyrmaOrindau();
function task() {
    let complete = +prompt("Орындалған  тапсырма нөмeрін жазыңыз :");
     

    if (complete > 0 && complete < tapsyrma.length) {
        tapsyrma[complete].oryndau = true;
        alert(`${tapsyrma[complete].name} тапсырмасы орындалды .`);
    } else {
        alert("Қатеғой құма!");
    }
}
task();

function task1() {
    let complete1 = tapsyrma.filter(task => task.oryndau);
    if (complete1.length > 0) {
        alert(
            "Орындалған тапсырмалар:" + complete1.length
                );
    } else {
        alert("пока что орындалған тапсырмалар жоқ.");
    }
}


task1();
