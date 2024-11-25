function sandarTabu() {
   
    let a = +prompt("Неше сан енгізесіз?");
    

    if (!a || a <= 0) {
        alert("Сан дұрыс енгізілген жоқ!");
        return;
    }

    let terys = 0, jup = 0, taq = 0;

    for (let i = 0; i < a; i++) {
        let san = +prompt(`Сан ${i + 1}-ші енгізіңіз:`);
        if (san < 0) terys++; 
        if (san % 2 === 0) jup++; 
        else taq++; 
    
    alert(`\n
        Теріс сандар саны: ${terys}
        \n
        Жұп сандар саны: ${jup}
        \n
        Тақ сандар саны: ${taq}`);
}
}

sandarTabu();
