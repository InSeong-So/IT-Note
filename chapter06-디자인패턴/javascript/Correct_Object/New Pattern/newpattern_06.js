function Marsupial(name, nocturnal) {
  this.name = name;
  this.isNocturnal = nocturnal;
}

let maverick = new Marsupial('매버릭', true);
maverick.prototype = {
  hop: function() {
    return "룰루랄라 고고씽~!";
  }
}
let goose = new Marsupial('구스', false);

console.log(maverick.isNocturnal); // true
console.log(maverick.name);        // "매버릭"

console.log(goose.isNocturnal);    // false
console.log(goose.name);           // "구스"
