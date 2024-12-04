const oqushilar = [
    {name:"Efrat",age:26,
        grades:{math:85,english:95,it:98},
        adress:{city:"Bayseit",street:"Izimova"}},
    {name:"Anara",age:24,
        grades:{math:86,english:92,it:94},
        adress:{city:"Bayseit",street:"Tairova"}},
]

const [oqushi1,oqushi2] = oqushilar;

const { name,grades: {math},adress: {city}, country= "Kazakhstan"}  = oqushi1;

console.log(`Aty: ${name}`);
console.log(`MAtem bagasy: ${math}`);
console.log(`Qalasy: ${city}`);
console.log(`Memlekety: ${country}`);

const classA = ["Amina","Adil","Alina"];
const classB = ["Efrat","Anara","Fatima"];

const classAB = ["Director",...classA,...classB,"Teacher"];

console.log(classAB);


