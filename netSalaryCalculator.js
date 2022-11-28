//  Net Salary Calculator

//Payee

function netSalary(){                                                            //set function to call later
    let salary = prompt("Input salary value")
    if  (salary <= 24000){
        return (24000 * 0.1)
    } else if (salary >= 24001 && salary <= 32333){
        return (24000 * 0.1 ) + (8332 * 0.25)
    } else (salary > 32333);{
        return (24000 * 0.1) + (8332 * 0.25) + ((salary - 32333) * 0.30)          //tax aggregation
    }
} console.log("Your payee value is "+ netSalary())                                 // calling function


// NHIF Deductions

function NHIF(){
    let salary = prompt("Input salary value")
        if (salary <= 5999){
            return (salary - 150)
        }else if (salary >= 6000 && salary >= 7999){
            return (salary - 300)
        }else if (salary >= 8000 && salary >= 11999){
            return (salary - 400)
        }else if (salary >= 12000 && salary >= 14999){
            return (salary - 500)
        }else if (salary >= 15000 && salary >= 19999){
            return (salary - 600)
        }else if (salary >= 20000 && salary >= 24999){
            return (salary - 750)
        }else if (salary >= 25000 && salary >= 29999){
            return (salary - 850)
        }else if (salary >= 30000 && salary >= 34999){
            return (salary - 900)
        }else if (salary >= 35000 && salary >= 39999){
            return (salary - 950)
        }else if (salary >= 40000 && salary >= 44999){
            return (salary - 1000)
        }else if (salary >= 45000 && salary >= 49999){
            return (salary - 1100)
        }else if (salary >= 50000 && salary >= 59999){
            return (salary - 1200)
        }else if (salary >= 60000 && salary >= 69999){
            return (salary - 1300)
        }else if (salary >= 70000 && salary >= 79999){
            return (salary - 1400)
        }else if (salary >= 80000 && salary >= 89999){
            return (salary - 1500)
        }else if (salary >= 90000 && salary >= 99999){
            return (salary - 1600)
        } else (salary >= 100000);{
            return (salary - 1700)
        }

    }
 console.log("NHIF Deductions for account is" + NHIF())         //error in approach


 // NSSF                                          //Ran out of time

 let NSSF(){
    let salary = prompt ("Input salary value")
    if 
 }