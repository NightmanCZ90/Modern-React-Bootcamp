//CoinFlipper
function choice(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

//ColorBoxes
function randomNumber(num){
  return Math.floor(Math.random() * num)
}

function randomColor(){
  return `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`
}

export {choice};
export {randomColor};