// let sandar = [1,2,3,4,5]
// alert("Bastapqy sandar" + sandar)
// let kubtary = sandar.map(num => num * 3)

// alert("Kubtalgan sandar" + kubtary);

// for(let arr of sandar){
//     if(arr % 2 == !0){
//         console.log(arr); 
//     }
// }

let studentSany = +prompt("Neshe student? ")
let oqushi = []
for (let i=0; i<studentSany;i++){
    let studentBagasy = +prompt(`Student ${i + 1} - nin bagalaryn engiz`)
    oqushi.push(studentBagasy)
    
}
let kosyndysy = oqushi.reduce((san, baga) => san + baga, 0);

let bolu = kosyndysy / oqushi.length;

let jogaryBaga = oqushi.filter(student => student >= 85)

console.log("Engizgen bagalar",oqushi);

console.log("Ortaq baga",bolu);

console.log("85-ten jogary bagalar",jogaryBaga);




  
