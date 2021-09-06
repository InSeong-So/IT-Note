// 유대류라는 뜻입니다. 하위 분류로는 주머니쥐, 캥거루 등이 있죠.
function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error("이 객체는 new를 사용하여 생성해야 합니다");
  }
  this.name = name;
  this.isNocturnal = nocturnal;
}
Marsupial.prototype.isAwake = function (isNight) {
  return isNight == this.isNocturnal;
};

function Kangaroo(name) {
  if (!(this instanceof Kangaroo)) {
    throw new Error("이 객체는 new를 사용하여 생성해야 합니다");
  }
  this.name = name;
  this.isNocturnal = false;
}

Kangaroo.prototype = new Marsupial();
Kangaroo.prototype.hop = function () {
  return this.name + "가 껑충 뛰었어요!";
};
let jester = new Kangaroo('제스터');
console.log(jester.name);

let isNightTime = false;
console.log(jester.isAwake(isNightTime)); // true
console.log(jester.hop());  // '제스터가 껑충 뛰었어요!'

console.log(jester instanceof Kangaroo);  // true
console.log(jester instanceof Marsupial); // true