function Marsupial(name, nocturnal) {
  this.name = name;
  this.isNocturnal = nocturnal;
}

let maverick = new Marsupial('매버릭', true);
let slider = new Marsupial('슬라이더', false);

console.log(maverick.isNocturnal); // true
console.log(maverick.name);        // "매버릭"

console.log(slider.isNocturnal);   // false
console.log(slider.name);          // "슬라이더"
