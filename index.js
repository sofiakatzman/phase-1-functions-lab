

let distance;
let chargedFeet;

function distanceFromHqInBlocks (destination) {
    return distance = Math.abs(destination - 42)
}

function distanceFromHqInFeet (destination) {
    return distanceFromHqInBlocks(destination) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264  

}

function calculatesFarePrice(start, destination) {
  


    if ((distanceTravelledInFeet(start,destination)) < 400) {
        return 0
    }

    if ((distanceTravelledInFeet(start,destination)) > 400 && (distanceTravelledInFeet(start,destination)) < 2000) {
        return (distanceTravelledInFeet(start,destination) - 400) * .02
    }

    if ((distanceTravelledInFeet(start,destination)) > 2000 && (distanceTravelledInFeet(start,destination)) < 2500) {
        return 25
    }

    if ((distanceTravelledInFeet(start,destination)) > 2500 ) {
        return 'cannot travel that far'
    }
    

}
/* 
function calculatesFarePrice(start, destination) {
    chargedFeet = distanceTravelledInFeet(start, destination)
    if (chargedFeet < 400)
    
    if (chargedFeet - 400 < 2000) {
    return chargedFeet * .02
    }

    if (chargedFeet - 400 < 2500) {
        return 20
    }

    else {
    return "cannot travel that far"
    }
}

*/