

let number = prompt("0 мен 99 арасындағы санды енгізіңіз:");

if (number >= 0 && number <= 9) {
    alert("Сан:" + number)
} else if (number >= 10 && number <= 99) {
    let san1 = Math.floor(number/10)  ;
    let san2 = (number%10);
    alert('Бірінші сан:' +san1 +'\n'+ 'Екінші сан:' + san2);
} else {
    alert("Қате: 0 мен 99 арасындағы санды енгізіңіз.");
}