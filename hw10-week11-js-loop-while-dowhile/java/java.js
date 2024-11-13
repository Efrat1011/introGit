let numStudent = +prompt("Студенттер санын енгізіңіз: ");
let a = 0;
let b = 1;

do {
    let grade = +prompt(b+" студенттің бағасын енгізіңіз: ");
    a += grade;
    b++;
} while (b <= numStudent);


let ortasy = a / numStudent;


alert("Студенттердің бағаларының орташа мәні: " + ortasy);



// let student = +prompt("Студенттер санын енгізіңіз: ");
// let i = 0;
// let san = 1;


// while (san <= student) {
//     let sum = +prompt(san+"студенттің бағасын енгізіңіз: ");
//     i += sum;
//     san++;
// }


// let x = i / student;


// alert("Студенттердің бағаларының орташа мәні:"+x);


