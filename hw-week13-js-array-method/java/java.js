let sandar = []
while(true){
    let san = +prompt("SAndardy engyz: ")

    if(san===0){
       break
    } else if(san % 2 == 0){
        sandar.unshift(san)
    }else{
        sandar.push(san)
    }
}
console.log("Массив", sandar);
console.log("Массив ұзындығы" ,sandar.length);




