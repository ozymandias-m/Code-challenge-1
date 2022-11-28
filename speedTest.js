// Speed Detector

let speed = prompt ("input speed of vehicle")                     //set up prompt
if (speed <= 70){
    console.log('Ok')
} else if(speed - 70){
    let points = (speed - 70)/5;                                  //defining points
    if (points <= 12){
        console.log(`points:${points}`)
    }else {
        points > 12
        console.log("license suspended")
    }
    }                                                               //end of function

