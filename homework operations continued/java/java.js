
 //task 1
let age = 70
let isStudent = false
if(age>=65 || isStudent === true){
    alert('Сізге жеңілдік бар')
}
else{
    alert('Сізге жеңілдік Жоқ')
}

// task 2
let num=Number(prompt("санды енгіз"))
if(10<=num && num<=20){
    alert(true)
}
else{
    alert(false)
}

//task 3
let num1=-5
let num2=10
if(num1<0 || num2<0){
    alert(true)
}
if((num1<0 && num2<0) || (num1>0 && num2>0)){
    alert(false)
}