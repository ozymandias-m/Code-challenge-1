// Student grade generator.

function studentGrades(){                                    // function definition
    let grade = prompt("input student marks")                // set up of prompt function
    if (grade > 79 && grade <= 100){
        return "A"
    }  
     else if(grade >= 60 && grade <= 79){
            return "B"
        }
        else if(grade >= 49 && grade <=59){
            return "C"
        }
        else if(grade >= 40 && grade <= 49){
            return "D"
        }
        else if(grade < 40){
            return "E"
        }
        else{return "invalid"}
}  console.log("The student's grade is " + studentGrades())                    // message and invocation of function