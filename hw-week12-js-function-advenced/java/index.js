


function convert() {
    let euro = 0;

    

    while (true) {
       
        let summa = prompt("Соманы енгізіңіз (немесе 'стоп' жазыңыз):");
        if (summa.toLowerCase() === "stop")
             break;

        
        let valyuta = prompt("Валютаны енгізіңіз (USD, KZT, EUR):");
        let valyuta1;

        if (valyuta === "USD") {
            valyuta1 = 0.85;
        } else if (valyuta === "KZT") {
           valyuta1 = 0.002;
        } else if (valyuta === "EUR") {
            valyuta1 = 1;
        } else {
           alert("Қате: дұрыс валютаны таңдаңыз (USD, KZT, EUR)!");
            continue;
        }

        
        let kobeitu = summa * valyuta1;
        euro += kobeitu;

        alert(`Енгізілген сома: ${summa} ${valyuta}. Евроға аударылды: ${kobeitu} EUR.`);
    }
alert(`Барлық соманың евродағы қосындысы: ${euro} EUR.`);
}


convert();
