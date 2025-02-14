const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so "
let insertx = " went for a walk. When they got to "
let inserty = ", they stared in horror for a few moments, then "
let insertz = ". Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."