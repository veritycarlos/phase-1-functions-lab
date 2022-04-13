function distanceFromHqInBlocks(blockNumber) { 
    let blockDifference = 42 - blockNumber; 
    return blockDifference < 0 ? blockDifference * -1 : blockDifference;  
}

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber)*264;
}

function distanceTravelledInFeet(start, destination) {
    let feetBetweenBlocks = (destination-start)*264;
    return feetBetweenBlocks < 0 ? feetBetweenBlocks * -1 : feetBetweenBlocks; 
}

function calculatesFarePrice(start, destination) {
    let  distance = distanceTravelledInFeet(start, destination);
    if (distance <=400) {
        return 0;
    } else if (distance >= 2500) {
        return 'cannot travel that far';
    } else if (distance > 2000) {
        return 25;
    } else if (distance > 400) {
        return (distance-400) * 0.02;
    }
}