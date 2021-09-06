function Marsupial(name, nocturnal) {
  if (!(this instanceof Marsupial)) {
    throw new Error("이 객체는 new를 사용하여 생성해야 합니다");
  }
  this.name = name;
  this.isNocturnal = nocturnal;

  // 각 객체 인스턴스는 자신만의 isAwake 사본을 가진다
  this.isAwake = function(isNight) {
    return isNight === this.isNocturnal;
  }
}

let maverick = new Marsupial('매버릭', true);
let slider = new Marsupial('슬라이더', false);

let isNightTime = true;

console.log(maverick.isAwake(isNightTime));      // true
console.log(slider.isAwake(isNightTime));         // false

// 각 객체는 자신의 isAwake 함수를 가진다
console.log(maverick.isAwake === slider.isAwake); // false