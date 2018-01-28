
function produceDrivingRange(blockRange){
  return function(a, b){
    let start = parseInt(a)
    let end = parseInt(b)
    let distance = end - start
    let difference = blockRange - distance

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(){
  return function(){
    return
  }
}
