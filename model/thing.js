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

let allthings = []

allthings.push(new Thing('Bird', 'bird.png', 2))

//TODO: Tung hãy điền hết các thing và animal vào đây