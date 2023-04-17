
function distanceFromHqInBlocks(blockNumber) {
  const hqBlock = 42;
  return Math.abs(blockNumber - hqBlock);
}

function distanceFromHqInFeet(blockNumber) {
    const distanceInBlocks = distanceFromHqInBlocks(blockNumber);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

  function distanceTravelledInFeet(startBlock, endBlock) {
    const distanceInBlocks = Math.abs(endBlock - startBlock);
    const distanceInFeet = distanceInBlocks * 264;
    return distanceInFeet;
  }

  

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);
  let fare = 0;

  if (distance <= 400) {
    fare = 0;
  } else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    fare = 25;
  } else if (distance > 2500) {
    fare = 'cannot travel that far';
  }

  return fare;
}
