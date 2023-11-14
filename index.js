// Code your solution in this file!

function distanceFromHqInBlocks(Number){ 
  if(Number >= 42){ 
      return Number - 42; 
  } else {
    return 42 - Number;
  }
}

console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(Number) { 
return distanceFromHqInBlocks(Number) * 264;
}

console.log(distanceFromHqInFeet(43))

function distanceTravelledInFeet(start, destination) { 
  const distanceTravelled = distanceFromHqInBlocks(destination) - distanceFromHqInBlocks(start)
  
  return distanceTravelled * 264

}

console.log(distanceTravelledInFeet(34, 38))



function calculatesFarePrice(start, destination) {
  
  const distanceTravelled = distanceFromHqInBlocks(destination) - distanceFromHqInBlocks(start)
  const distanceTravelledInFeet = distanceTravelled * 264;
  // Create if else statments to check all  conditions 
  if (distanceTravelledInFeet <= 400) {
    return 0;
    // the expressions logical (AND &&) operator compares and the who expression is true
  } else if (distanceTravelledInFeet > 400 && distanceTravelledInFeet <= 2000) {
    const fare = (distanceTravelledInFeet - 400) * 0.02;
    return fare;
  } else if (distanceTravelledInFeet > 2000 && distanceTravelledInFeet <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
};

console.log(calculatesFarePrice(50, 58))
