function produceDrivingRange(blockRange){
  return function(start, end){
    let blocks = parseInt(end) - parseInt(start)
    if(blocks < blockRange){
      return `within range by ${Math.abs(blockRange - blocks)}`
    } else {
      return `${Math.abs(blockRange - blocks)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(fare){
    return fare * percentage
  }
}
