var san1 = prompt("Бірінші санды енгізіңіз")
var san2 = prompt("Екінші санды енгізіңіз")
var san3 = prompt("Үшінші санды енгізіңіз")

let ulkensan = 0;
switch(true){
 case(san1>=san2 && san1>=san3):
 ulkensan = san1;
 break;
 case(san2>=san1 && san2>=san3):
 ulkensan = san2;
 break;
 case(san3>=san1 && san3>=san2):
 ulkensan = san3;
 break;
 
}
alert("Ең үлкен сан: " + ulkensan)
