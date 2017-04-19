/**
 * type = 1: thing
 * type = 2: animal
 */
class Thing {
  constructor(name, photo, type) {
    this.name = name
    this.photo = photo
	  this.type = type
  }
}
//TODO: Tung hãy điền hết các thing và animal vào đây
let allthings = []

allthings.push(new Thing('Bird', 'bird.png', 2))
allthings.push(new Thing('Bus', 'bus.png', 1))
allthings.push(new Thing('Car', 'car.png', 1))
allthings.push(new Thing('Cat', 'cat.png', 2))
allthings.push(new Thing('Seahorse', 'seahorse.png', 2))
allthings.push(new Thing('Turtle', 'turtle.png', 2))
allthings.push(new Thing('TV', 'Tv.png', 1))


function getThing(type, things) {
  let result = [];
  let selectedOpt = parseInt(type);

  switch (selectedOpt) {
    case 0:
      result = [];
      break;
    case 1:
      result = things.filter(thing => thing.type === 1);
      break;
    case 2:
      result = things.filter(thing => thing.type === 2);
      break;
    case 3:
      result = things;
      break;
    default:
      result = 'You selected invalid type!';
      break;
  }
  return result;
}



exports.allthings = allthings;
exports.getThing = getThing;
