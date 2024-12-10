let homeWork = document.querySelector("#hwork")
homeWork.textContent = "HW: Introduction to DOM"

let name = document.getElementById("atyJony")
name.textContent = "Nassyrov Efrat Azatovich"


let hobby = document.getElementsByClassName("hobby");

hobby[0].innerHTML = "<b>Coding</b>"
hobby[1].innerHTML = "<b>Teaching</b>"
hobby[2].innerHTML = "<b>Reading</b>"


// let hobbyList = ["Coding","Teacing","Reading"]

// for(let i=0;i<hobby.length;i++){
//  hobby[i].innerHTML = "<b>" + hobbyList[i] + "</b>"
// }
