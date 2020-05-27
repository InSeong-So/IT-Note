[ref](https://velog.io/@pop8682/Javascript-Design-Pattern)

## 객체 생성 패턴
### Namespace Pattern
- 예시 코드
    ```js
    function testParentCode() {}
    function testChildCode () {}

    var some_var = 1;

    var module1 = {}
    var module2 = {}

    var testCode = {};
    testCode.testParentCode = function() {}
    testCode.testChildCode = function() {}

    testCode.etcData = 1;

    testCode.modules = {}
    testCode.modules.module1 = {}
    testCode.modules.module2 = {}
    ```

- pros
- 전역변수 개수 줄임
- 변수명 불편하게 길어짐 방지
- 전역 네임스페이스 객체는 흔히 대문자

- cons

모든 변수와 함수에 접두어
코드가 길어짐
다운로드 파일 크기 증가
전역 인스턴스 1개
부분이 수정되면 다른 전역 인스턴스도 수정
이름이 길다
프로퍼티 판별을 위한 검색작업이 오래 걸림
범용 네임스페이스 함수
var testCode = {}
if(typeof testCode == "undefined") {
	var testCode = {}
}

or

var testCode = testCode || {}
프로그램 크기가 커져 복잡해지면 네임스페이스 사용에 다음과 같은 점검 필요
var testCode = testCode || {}

testCode.namespace = function(ns_string) {
	var parts = ns_string.split('.'),
    	testParentCode = testCode,
        i;
    
    if(parts[0] === "testCode"){
    	parts = parts.slice(1);
    }
    
    for (i = 0; i < parts.length; i += 1) {
    	if(typeof testParentCode[parts[i]] === "undefine") {
        	testParentCode[parts[i]] = {}
        };
        testParentCode = testParentCode[part[i]]
    }
    return testParentCode;
}    
    
위 코드를 아래처럼 사용할 수 있다.

testCode.namespace("testCode.modules.module2);

위 코드는 아래와 같다

var testCode = {
	module : {
    	moduels : {}
   	}
}

var module2 = testCode.namespace("testCode.moduels.moduels2");
module2 === testCode.modules.moduels2 // true
"testCode.moduels.moduels2"의 내용을 객체로 만들어주는 과정
2. 의존 관계 선언
var myFunction = function() {
	var event = YAHOO.util.EVENT,
    	dom = YAHOO.util.Dom;
}
pros

의존관계가 명시적
페이지 내에 반드시 포함되어야 하는 스크립트파일을 알기 쉽다
지역값 탐색
yahoo.util.dom과 같은 중첩 프로퍼티보다 훨씬 빠르다.
고급 Compressor는 전역 변수명 변경은 위험하기 때문에 축약하지 않는다
event와 같은 지역변수는 a로 축약
function test1() {
    alert(testCode.modules.m1)  
    alert(testCode.modules.m2)    
}

function test2() {
    var modules = testCode.modules;
    alert(moduels.m1)
    alert(moduels.m2)
}
3. 비공개 프로퍼티와 매서드
function Gadget() {
    var name = "iPhone";
    this.getName = function() {return name;}
}

var toy = new Gadget();
console.log(toy.name)
console.log(toy.getName())

// 2. 객체 리터럴 이용

var myobj;

(function () {
    var name = "Android"

    myobj = {
        getName: function() {
            return name;
        }
    }
}())

console.log(myobj.getName())

var myobj = (function() {
    var name = "Android"
    return {
        getName: function() {
            return name;
        }
    }
}())

console.log(myobj.getName());
비공개 매서드 구현방법
함수내에서 지역변수로 선언한 프로퍼티를 함수로 감싼다.
생성자를 이용한 비공개 멤버
생성자로 새로운 객체를 만들때 마다 비공개 멤버가 재생산
프로토타입으로 보완가능
function Gadget() {
    var name = "iPhone";
    this.getName = function() {return name;}
}

Gadget.prototype = (function () {
    var browser = "Mobile"
    return {
        getBrowser : function() {
            return browser;
        }
    }
}())

var toy = new Gadget();
console.log(toy.getName())              // 객체 인스턴스의 비공개 멤버
console.log(toy.getBrowser())           // 프로토타입의 비공개 멤버 
4. 모듈 패턴
개별적인 코드를 느슨하게 결합
많은 양의 코드를 구조화, 정리
아래와 같은 패턴들의 조합
네임스페이스 패턴
즉시 실행 함수
비공개 멤버 & 특권 멤버
의존 관계 선언
모듈 패턴 적용을 위한 절차
1단계 : 네임스페이스 적용
testCode.namespace("testCode.utilities.array")
2단계 : 모듈 정의
testCode.utilities.array = (function() {
	return {
    	inArray: function (e) {
        	//...
        },
        isArray: function (e) {
        	//...
        }
    }
}());
3단계 : 비공개 프로퍼티 및 매서드 추가한 모듈
testCode.utilities.array = (function() {

    // 의존 관계
    var uobj = testCode.utilities.object,
        ulang = testCode.utilities.lang,

    // 비공개 프로퍼티
        array_string = "[object Array]",
        ops = Object.prototype.toString;

    // 공개 API
	return {
    	inArray: function (e) {
        	//...
        },
        isArray: function (e) {
        	return ops.call(e) === array_string
        }
    }
}());
4단계: 모두 비공개로 바꾼 후 몇개 API만 공개로 변환
testCode.utilities.array = (function() {

    // 의존 관계
    var uobj = testCode.utilities.object,
        ulang = testCode.utilities.lang,

    // 비공개 프로퍼티
        array_string = "[object Array]",
        ops = Object.prototype.toString;

    // 비공개 API
    inArray = function(e) {
        //..
    }    
    isArray = function(e) {
        return ops.call(e) === array_string
    }
    // 공개 API
	return {
    	isArray: isArray
    }
}());
정리
1. 네임스페이스 패턴
객체
var testCode = {};
testCode.testParentCode = function() {}
testCode.testChildCode = function() {}

testCode.modules = {}
testCode.modules.module1 = {}
testCode.modules.module2 = {}
2. 의존 관계 선언
함수
var myFunction = function() {
	var event = YAHOO.util.EVENT,
    	dom = YAHOO.util.Dom;
}
3. 비공개 프로퍼티
클로저
var myobj = (function() {
    var name = "Android"
    return {
        getName: function() {
            return name;
        }
    }
}())
4. 모듈 패턴
클로저
testCode.utilities.array = (function() {

    // 비공개 프로퍼티
    var array_string = "[object Array]",
        ops = Object.prototype.toString;

    // 비공개 API
    inArray = function(e) {

    }    
    isArray = function(e) {
        return ops.call(e) === array_string
    }
    
    // 공개 API
	return {
    	isArray: isArray,
    	inArray: function (e) {

        },
        isArray: function (e) {
        	return ops.call(e) === array_string
        }
    }
    }
}());
디자인 패턴
Javascript object creation patterns tutorial 또한 참고

1. 싱글톤 패턴
var obj = {
    myprop : "my value"
}
var obj2 = {
    myprop : "my value"
}

obj === obj2  // false
obj == obj2   // false
특정 클래스의 객체를 고유한 객체로 유지
리터럴 객체 = 싱글톤
2. 팩토리 패턴
var peopleFactory = function(name, age, state) {
	
  var temp = {};
  
  temp.age = age;
  temp.name = name;
  temp.state = state;
  
  temp.printPerson = function() {
  	console.log(this.name + ", " + this.age + ", " + this.state)
  }
  
  return temp;
}

var person1 = peopleFactory('john',23,'CA')
var person2 = peopleFactory('kassie',27,'KT')
person1.printPerson()
person2.printPerson()
3. 생성자 패턴
var peopleConstructor = function(name, age, state){
	this.name = name
  this.age = age
  this.state = state
  
  this.printPerson = function() {
  	console.log(this.name + ", " + this.age + ", " + this.state)
  }
}

var person1 = new peopleConstructor('john',23,'CA')
var person2 = new peopleConstructor('kassie',27,'KT')

person1.printPerson();
person2.printPerson();
생성자로 새로운 객체를 만들때 마다 비공개 멤버가 재생산
4. 프로토타입 패턴
var peopleProto = function() {}

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function() {
	console.log(this.name + ", " + this.age + ", " + this.city )
}

var person1 = new peopleProto();
person1.name = "john"
person1.age = 23
person1.city = "CA"
person1.printPerson();
var person2 = new peopleProto();
person2.printPerson()

console.log('name' in person1)
console.log(person1.hasOwnProperty('name'))
객체를 생성 안해도 prototype에 기본적으로 값을 가질 수 있다.
cons

먼저 빈 객체를 생성하고 prototype 객체를 지정해야한다.
코드가 길어진다
프로토타입
모든 객체들은 생성된 인스턴스들을 공유하는 프로토타입 공간을 가짐
Pizza.prototype.getCrust
객체들이 공유하는 getCrust 메서드
Pizza.getCrust
Pizza 인스턴스 하나만 가지는 getCrust 메서드
Pizza.getCrust = function() {
	return this.crust
}

Pizza.prototype.getCrust = function() {
	return this.crust
}
5. 다이나믹 프로토타입
var peopleDynamicProto = function(name, age, state) {
	this.age = age;
	this.name = name
	this.city = city
  
  // 만약 지금 printPerson 함수가 없다면
  if(typeof this.printPerson !== 'funciton') {
  	// prototype에 printPerson 함수를 생성해라
    peopleDynamicProto.prototype.printPerson = function() {
    	console.log(this.name + ", " + this.age + ", " + this.city )
    }
  }
}

var person1 = new peopleDynamicProto("john",23,"CA")
person1.printPerson()
거의 대부분의 상황에서 다이나믹 프로토타입이 적합
6. 전략패턴
function Fedex() {
	this.calculate = package => {
    	return 1;
    }
function UPS() {
	this.calculate = package => {
    	return 2;
    }
const fedex = new Fedex();
const ups = new UPS();

function Shipping() {
	this.company
    this.setStrategy = company => {
    	this.company = company;
    }
    this.calculate = package => {
    	return this.company.calculate(package)
    }
}
const shipping = new Shipping();

var package = { from ; 'SF', to : 'KT'}

shipping.setStrategy(fedex)
shipping.calculate(pacakge)
정리
1. 싱글톤 패턴
var obj = {
	myprop : "my value"
}
2. 팩토리 패턴
var peopleFactory = function(name, age, state) {
	
  var temp = {};
  
  temp.age = age;
  
  temp.printPerson = function() {
  	console.log(this.name + ", " + this.age + ", " + this.state)
  }
  return temp;
}

var person1 = peopleFactory('john',23,'CA')
person1.printPerson()
3. 생성자 패턴
var peopleConstructor = function(name, age, state){
  
  this.name = name
  this.age = age
  this.state = state
  
  this.printPerson = function() {
  	console.log(this.name + ", " + this.age + ", " + this.state)
  }
}

var person1 = new peopleConstructor('john',23,'CA')

person1.printPerson();
4. 프로토타입 패턴
var peopleProto = function() {}

peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function() {
	console.log(this.name + ", " + this.age + ", " + this.city )
}

var person1 = new peopleProto();
person1.name = "john"
person1.age = 23
person1.city = "CA"
person1.printPerson();
5. 다이나믹 프로토타입
var peopleDynamicProto = function(name, age, state) {
	this.age = age;
	this.name = name
	this.city = city
  
  if(typeof this.printPerson !== 'funciton') {
    peopleDynamicProto.prototype.printPerson = function() {
    	console.log(this.name + ", " + this.age + ", " + this.city)
    }
  }
}

var person1 = new peopleDynamicProto("john",23,"CA")
person1.printPerson()
성능 덕후를 위한 자바스크립트 코딩 패턴 (중급)
자바에서 상속은 prototype을 이용
unction SignalFire(id, logs) {
  this.id = id;
  this.logs = logs;

  this.functionality1: function() {

  },
  this.functionality2: function() {

  }
}
매번 객체를 생성할 때마다 사용하지 않는 매소드를 메모리에서 사용하는 낭비
따라서, 매번 객체를 생성 시 필요한 속성이나 메서드만
공통 메서드는 prototype으로 뺀다.
SignalFire.prototype = {
  functionality1: function() {

  },
  functionality2: function() {

  },
}
var 지정어 사용하여 코드량 줄임
var a = 1,
    b = "hello",
    c = ["a","b","c"];
문자열의 길이가 짧을 때 : +=
문자열의 길이가 길고, 리스트 형태로 저장 : join()
Namespace
전역변수가 override되는 문제
ar nameSpace = {
  a : "1",
  b : 23,
  c : function() {
    // ...
  }
};

onClick=nameSpace.c();
번외 - 디버깅 기술
Debugging Javascript - Beginner to Advanced in One Video
50 Dev tool tips and tricks: Become an expert front end developer