

 let student = prompt("Студент атын жазыңыз: ")

 let language = prompt("Қай тілде жауап берсін: ")

  function kobeitu(student, language) {
    if( language == "english"){
        
         return student + " Hello!  How are you?";

     }
     else if (language == "russion"){
        
        return student + " Привет!  Как дела?"

    }
    else if(language == "kazakh"){
        
         return student + " Сәлем! Қалайсың?"

     }
 }

 alert( kobeitu(student,language))