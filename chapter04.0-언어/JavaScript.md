# 자바스크립트 데이터 타입과 연산자
- 자바스크립트 데이터 타입
  - `기본 타입`
    - 숫자(Number)
    - 문자열(String)
    - 불린값(Boolean)
    - undefined
    - null

  - `참조 타입`
    - 객체(Object)
    - 배열(Array)
    - 함수(Function)
    - 정규표현식

## 자바스크립트 기본 타입
- 기본 타입은 그 자체가 하나의 값을 나타낸다는 특징이 있다.
  ```js
  // 숫자 타입
  var intNum = 10;
  var floatNum = 0.1;

  // 문자열 타입
  var singleQuoteStr = 'single quote string';
  var doubleQuoteStr = "double quote string";
  var singleChar = 'a';

  // 불린 타입
  var boolVar = true;

  // undefined 타입
  var emptyVar;

  // null 타입
  var nullVar = null;

  console.log(
      typeof intNum,
      typeof floatNum,
      typeof singleQuoteStr,
      typeof doubleQuoteStr,
      typeof boolVar,
      typeof nullVar,
      typeof emptyVar
  );
  ```

  - 출력 결과
    ```
    number number string string boolean object undefined
    ```

- 자바스크립트는 느슨한 타입 체크 언어이다.
  - 변수를 선언할 때 타입을 미리 정하지 않고 var라는 한 가지 키워드로만 선언한다.
  - 선언된 변수는 어떤 타입의 데이터를 저장하는 것이 가능하다.

### 숫자(Number)
- 자바스크립트에서는 하나의 숫자형만 존재한다.
  - 모든 숫자는 64bit 부동 소수점 형태로 저장된다.
  - 이는 C언어의 double 타입과 유사하다.

- 자바스크립트에서는 모든 숫자를 실수로 처리하므로 나눗셈 연산 시 주의해야 한다.
  ```js
  var num = 5 / 2;

  console.log(num);               // (출력값) 2.5
  console.log(Math.floor(num));   // (출력값) 2
  ```

<br>

### 문자열
- 문자열은 작은 따옴표(')나 큰 타옴표(")로 생성한다.
- C언어의 char 타입처럼 문자 하나만을 나타내는 데이터 타입은 존재하지 않는다.
  ```js
  // str 문자열 생성
  var str = 'test';
  console.log(str[0], str[1], str[2], str[3]);    // (출력값) test

  // 문자열의 첫 글자를 대문자로 변경?
  str[0] = 'T';
  console.log(str);                               // (출력값) test
  ```

- 문자열은 문자 배열처럼 인덱스를 이용해 접근할 수 있다.

- 자바스킄립트에서는 한 번 생성된 문자열은 읽기만 가능하며 수정은 불가능하다.

### 불린값
- 자바스크립트는 true와 false 값을 나타내는 불린 타입이 존재한다.

### null undefined
- 두 타입은 모두 자바스크립트에서 '값이 비어있음'을 나타낸다.
  - 기본적으로 값이 할당되지 않은 변수는 undefined 타입이다.
  - undefined 타입의 변수는 변수 자체의 값 또한 undefined이다.
  - `따라서 undefined는 타입이자, 값을 나타낸다.`

- null 타입 변수에 typeof 연산자를 사용하면 Object를 반환한다.
  - 일치 연산자(===)를 사용해서 변수의 값을 직접 확인해야 한다.
    ```js
    // null 타입 변수 생성
    var nullVar = null;

    console.log(typeof nullVar === null);   // (출력값) false
    console.log(nullVar === null);          // (출력값) true
    ```

<hr>
<br>

## 자바스크립트 참조 타입(객체 타입)
- 기본 타입을 제외한 모든 값은 객체이다.
  - `이름(key) : 값(value)` 형태의 프로퍼티를 저장하는 컨테이너이다.
  - 컴퓨터 과학 분야의 해시(Hash)라는 자료구조와 유사하다.

- 참조 타입인 객체는 여러 개의 프로퍼티들을 포함할 수 있다.
  - 객체의 프로퍼티는 기본 타입의 값을 포함하거나, 다른 객체를 가리킬 수도 있다.

- 프로퍼티의 성질에 따라 객체의 프로퍼티는 함수로 포함할 수 있다.
  - 이러한 프로퍼티를 `메서드`라고 부른다.

### 객체 생성
- 자바스크립트는 클래스라는 개념이 없다.
  - 객체 리터럴이나 생성자 함수 등 별도의 생성 방식이 존재한다.

- 객체를 생성하는 방법
  - 기본 제공 Object() 객체 생성자 함수를 이용하는 방법 : 자바스크립트에서는 내장 Object() 생성자 함수를 제공한다.
    ```js
    // Object()를 이용해서 foo 빈 객체 생성
    var foo = new Object();

    //foo 객체 프로퍼티 생성
    foo.name = 'foo';
    foo.age = 30;
    foo.gender = 'male';

    console.log(typeof foo);    
    // (출력값) object
    console.log(foo);
    // (출력값) {name: 'foo', age: 30, gender: 'male'}
    ```

  - 객체 리터럴(객체를 생성하는 표기법을 의미)을 이용하는 방법
    ```js
    // 객체 리터럴 방식으로 foo 객체 생성
    var foo = {
        name : 'foo',
        age : 30,
        gender : 'male'
    };

    console.log(typeof foo);
    // (출력값) obejct
    console.log(foo);
    // (출력값) { name: 'foo', age: '30', gender: 'male' }
    ```

    - 중괄호({})를 이용해서 객체를 생성한다.

    - {} 안에 아무것도 적지 않은 경우 빈 객체가 생성된다.

    - 중괄호 안에 "프로퍼티 이름" : " 프로퍼티 값" 형태로 표기하면 프로퍼티가 추가된 객체를 생성한다.
      - 프로퍼티 이름은 문자열이나 숫자가 올 수 있다.
      - 프로퍼티 값은 자바스크립트의 값을 나타내는 어떤 표현식도 올 수 있다.
      - 이 값이 함수라면 이런 프로퍼티를 메서드라고 부른다.

  - 생성자 함수를 이용하는 방법
    - 함수를 통해서도 객체를 생성할 수 있다.
      - 이렇게 객체를 생성하는 함수를 생성자 함수라고 부른다(뒤에 상세히 후술함).

<br>

### 객체 프로퍼티 읽기/쓰기/갱신
- 객체는 새로운 값을 가진 프로퍼티를 생성할 수 있다.
  - 또한 프로퍼티에 접근해 해당 값을 읽거나 원하는 값으로 갱신할 수 있다.
    ```js
    // 객체 리터럴 방식을 통한 foo 객체 생성
    var foo = {
        name : 'foo',
        major : 'computer science'
    };

    // 객체 프로퍼티 읽기
    console.log(foo.name);              // (출력값) foo
    console.log(foo['name']);           // (출력값) foo
    console.log(foo.nickname);          // (출력값) undefined

    // 객체 프로퍼티 갱신
    foo.major = 'electronics engineering';
    console.log(foo.major);             // (출력값) electronics engineering
    console.log(foo['major']);          // (출력값) electronics engineering

    // 객체 프로퍼티 동적 생성
    foo.age = 30;
    console.log(foo.age);               // (출력값) 30

    // 대괄호 표기법만을 사용해야 할 경우
    foo['full-name'] = 'foo bar';
    console.log(foo['full-name']);      // (출력값) foo bar
    console.log(foo.full-name);         // (출력값) NaN
    console.log(foo.full);              // (출력값) undefined
    console.log(name);                  // (출력값) undefined
    ```
    
    - 프로퍼티 읽기
      - 객체의 프로피터 접근은 대괄호 표기법, 마침표 표기법으로 가능하다.

    - 프로퍼티 갱신
      - 프로퍼티에 접근해 객체의 기존 프로퍼티값을 갱신할 수 있다.

    - 프로퍼티 동적 생성
      - 객체가 생성된 후에도 동적으로 프로퍼티를 생성해 해당 객체에 추가할 수 있다.
      - 자바스크립트 객체의 프로퍼티에 값을 할당할 때, 프로퍼티가 이미 있을 경우는 해당 프로퍼티의 값이 갱신되지만, 객체의 해당 프로퍼티가 없을 경우에는 새로운 프로퍼티가 동적으로 생성된 후 값이 할당된다.

    - 대괄호 표기법만을 사용해야 하는 경우
      - 접근하려는 프로퍼티가 표현식이거나 예약어일 경우 대괄호 표기법만을 사용해야 한다.

    - NaN(Not a Number)
      - 수치 연산을 해서 정상적인 값을 얻지 못할 때 출력되는 값이다.

<br>

### for in 문과 객체 프로퍼티 출력
- for in 문으로 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.
  ```js
  // 객체 리터럴을 통한 foo 객체 생성
  var foo = {
      name: 'foo',
      age: 30,
      major: 'computer science'
  };

  // for in 문을 이용한 객체 프로퍼티 출력
  var prop;
  for (prop in foo) {
      console.log(prop, foo[prop]);
  }
  ```

<br>

### 객체 프로퍼티 삭제
- 객체의 프로퍼티는 delete 연산자를 이용해 즉시 삭제할 수 있다.

- delete 연산자는 객체의 프로퍼티를 삭제할 뿐 객체 자체를 삭제하지 못한다.
  ```js
  // 객체 리터럴을 통한 foo 객체 생성
  var foo = {
      name: 'foo',
      nickname: 'babo'
  };

  console.log(foo.nickname);      // (출력값) babo
  delete foo.nickname;            // (출력값) nickname 프로퍼티 삭제
  console.log(foo.nickname);      // (출력값) undefined

  delete foo;                     // (출력값) foo 객체 삭제 시도
  console.log(foo.name);          // (출력값) foo
  ```

<hr>
<br>

## 참조 타입의 특성
- 기본 타입과 null, undefined 5가지를 제외한 모든 값은 객체이다.
- 참조 타입은 객체의 모든 연산이 실제 값이 아닌 참조값으로 처리된다.
    ```js
    var objA = {
        val: 40
    };

    console.log(objA.val);          // (출력값) 40
    console.log(objB.val);          // (출력값) 40

    objB.val = 50;
    console.log(objA.val);          // (출력값) 50
    console.log(objB.val);          // (출력값) 50
    ```
    - objA 변수는 객체 자체가 아닌 생성된 객체를 가리키는 참조값을 저장한다.
    - objB에 objA 값을 할당함으로서 변수 objB에도 같은 객체의 참조값이 저장된다.
      - 즉, 동일한 객체를 가리키는 참조값을 가지게 된다.
    - objB.val 값을 40에서 50으로 갱신했다.
      - objA도 objB와 동일한 객체를 참조하므로 objA.val 값도 50이다.

<br>

### 객체 비교
- 동등 연산자(==)를 사용하면 두 객체의 프로퍼티값이 아닌 참조값을 비교한다.
    ```js
    var a = 100;
    var b = 100;

    var objA = { value: 100 };
    var objB = { value: 100 };
    var objC = objB;

    console.log(a == b);            // (출력값) true
    console.log(objA == objB);      // (출력값) false
    console.log(objB == objC);      // (출력값) true
    ```
    - 기본 타입은 동등 연산자(==)를 이용하면 `값`을 비교한다.
    - 동등 연산자(==)로 객체를 비교하면 참조값이 같아야 `true`이다.

<br>

### 참조에 의한 함수 호출 방식
- 기본 타입의 경우 `값에 의한 호출(call by value)` 방식으로 동작한다.
  - 함수를 호출할 때 인자로 기본 타입의 값을 넘길 경우, 호출된 함수의 매개변수로 `복사된 값`이 전달된다.
    - 함수 내부에서 매개변수를 이용해 값을 변경해도 실제로 호출된 변수의 값이 변경되지는 않는다.

- 참조 타입의 경우 `참조에 의한 호출(call by reference)` 방식으로 동작한다.
  - 함수를 호출할 때 인자로 참조 타입 객체를 전달할 경우, 객체의 프로퍼티값이 함수의 매개변수로 복사되지 않고 인자로 넘긴 `객체의 참조값`이 그대로 함수 내부에 전달된다.
    - 함수 내부에서 참조값을 이용해 인자로 넘긴 실체 객체의 값을 변경할 수 있다.

```js
var a = 100;
var objA = { value: 100 };

function changeArg(num, obj) {
    num = 200;
    obj.value = 200;

    console.log(num);
    console.log(obj);
}

changeArg(a, objA);

console.log(a);
console.log(objA);
```

```
[출력결과]
200
{ value: 200 }
100
{ value: 200 }
```

<hr>
<br>

## 프로토타입
- 자바스크립트의 `모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있다.`
  - 객체지향의 상속 개념과 같다.
    - 따라서, 부모 객체의 프로퍼티를 자신의 것처럼 쓸 수 있다.

- 자바스크립트는 이러한 부모 객체를 `프로토타입 객체`(줄여서 `프로토타입`)라고 부른다.
    ```js
    var foo = {
        name: 'foo',
        age: 30
    };

    console.log(foo.toString());

    console.dir(foo);
    ```
    - 생성한 foo 객체는 toString() 메서드가 없으므로 에러가 발생해야 한다.
      - 그러나 foo 객체의 프로토타입에 toString() 메서드가 이미 정의되어 있기에 foo 객체가 상속처럼 toString() 메서드를 호출했기 때문이다.

    - 실행 결과를 살펴보면 객체 리터럴로 생성한 name과 age 프로퍼티 이외에도 foo 객체에 `__proto__` 프로퍼티가 있다. 이 프로퍼티가 foo 객체의 부모인 `프로토타입 객체`를 가리킨다.

- ECMAScript 명세서는 `모든 객체는 자신의 프로토타입을 가리키는 [[Prototype]]라는 숨겨진 프로퍼티를 가진다`고 설명한다.
  - 크롬 브라우저에서는 `__proto__`가 `[[Prototype]]` 프로퍼티이다.
  - 즉, 객체는 자신의 부모 객체를 `__proto__`라는 내부 프로퍼티로 연결한다.

- 모든 객체의 프로토타입은 자바스크립트의 룰에 따라 객체를 생성할 때 결정된다.
- 객체를 생성할 때 결정된 프로토타입 객체는 임의의 다른 객체로 변경할 수 있다.
  - 즉, 부모 객체를 동적으로 바꿀 수 있다.

<hr>
<br>

## 배열
- 크기를 지정할 필요가 없다.
- 어떤 위치에 어느 타입의 데이터를 저장하더라도 에러가 발생하지 않는다.

### 배열 리터럴
- 자바스크립트에서 새로운 배열을 만드는데 사용하는 표기법
  - 대괄호([])를 사용한다.
    ```js
    // 배열 리터럴을 통한 5개 원소를 가진 배열 생성
    var colorArr = ['orange', 'yellow', 'blue', 'green', 'red'];
    console.log(colorArr[0]); // orange
    console.log(colorArr[1]); // yellow
    console.log(colorArr[4]); // red
    ```

- 배열 리터럴에는 `각 요소의 값`만 포함한다.
- 접근하고자 하는 원소에 `배열 내 위치 인덱스값`을 넣어서 접근한다.
- 배열 내 첫 번째 원소는 인덱스 0부터 시작한다.

<br>

### 배열의 요소 생성
- 객체가 동적으로 프로퍼티를 추가하듯 배열도 동적으로 프로퍼티를 추가할 수 있다.
- 자바스크립트의 배열은 아무 인덱스 위치에나 값을 동적으로 추가할 수 있다.
    ```js
    // 빈 배열
    var emptyArr = [];
    console.log(emptyArr[0]);       // undefined

    // 배열 요소 동적 생성
    emptyArr[0] = 100;
    emptyArr[3] = 'eight'
    emptyArr[7] = true;
    console.log(emptyArr);          // [100, undefined × 2, "eight", undefined × 3, true]
    console.log(emptyArr.length);   // 8
    ```
    - `자바스크립트는 배열의 크기를 현재 배열의 인덱스 중 가장 큰 값을 기준으로 정한다.`
    - 값이 할당되지 않은 인덱스의 요소는 undefined 값을 기본으로 가진다.
    - `모든 배열은 length 프로퍼티가 있다.`

<br>

### 배열의 length 프로퍼티
- 자바스크립트의 모든 배열은 length 프로퍼티가 있다.
  - length 프로퍼티는 배열 내에 가장 큰 인덱스에 1을 더한 값이다.
    ```js
    var arr = [];
    console.log(arr.length);            // 0

    arr[0] = 0;                         // arr.length = 1
    arr[1] = 1;                         // arr.length = 2
    arr[2] = 2;                         // arr.length = 3
    arr[100] = 100;
    console.log(arr.length);            // 101
    ```

- 배열의 length 프로퍼티는 코드를 통해 명시적으로 값을 변경할 수 있다.
    ```js
    var arr = [0, 1, 2];
    console.log(arr.length);        // 3

    arr.length = 5;
    console.log(arr);               // [0, 1, 2]

    arr.length = 2;
    console.log(arr);               // [0, 1]
    console.log(arr[2]);            // undefined
    ```

<br>

#### 배열 표준 메서드와 length 프로퍼티
- 자바스크립트의 다양한 배열 메서드는 `length 프로퍼티`를 기반으로 동작한다.
    ```js
    // arr 배열 생성
    var arr = ['zero', 'one', 'two'];

    // push() 메서드 호출
    arr.push('three');
    console.log(arr);        // [‘zero’, ‘one’, ‘two’, ‘three’]

    // length 값 변경 후, push() 메서드 호출
    arr.length = 5;
    arr.push('four');
    console.log(arr);       // ['zero', 'one', 'two', 'three', undefined, 'four']
    ```

<br>

### 배열과 객체
```js
// colorsArray 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]);        // orange
console.log(colorsArray[1]);        // yellow
console.log(colorsArray[2]);        // green

// colorsObj 객체
var colorsObj = {
    '0': 'orange',
    '1': 'yellow',
    '2': 'green'
};
console.log(colorsObj[0]);          // orange
console.log(colorsObj[1]);          // yellow
console.log(colorsObj[2]);          // green

// typeof 연산자 비교
console.log(typeof colorsArray);    // object
console.log(typeof colorsObj);      // object

// length 프로퍼티
console.log(colorsArray.length);    // 3
console.log(colorsObj.length);      // undefined

// 배열 표준 베서드
colorsArray.push('red');            // ['orange', 'yellow', 'green', 'red']
colorsObj.push('red');              // Uncaught TypeError: Object #<Object> has no method 'push'
```
- 배열과 객체 생성
  - 자바스크립트 엔진이 [ ] 연잔자 내에 숫자가 사용될 경우 해당 숫자를 자동으로 문자열 형태로 변환한다.

- typeof 연산자 비교
  - typeof 연산 결과는 배열과 객체가 모두 `object`이다.

- length 프로퍼티 존재 여부

    |구분| 객체 | 배열 |
    |:----:|:----:|:----:|
    |length 프로퍼티 | 없음 | 있음

- 배열 표준 메서드 호출 여부
  - 객체에서는 표준 배열 메서드를 사용할 수 없다.
  - 객체는 `Object.prototype 객체가 프로토타입`이다.
  - 배열은 `Array.prototype 객체가 프로토타입`이다.
    - Array.prototype 객체의 프로토타입은 `Object.prototype`이다.
    ```js
    var emptyArray = [];    // 배열 리터럴을 통한 빈 배열 생성
    var emptyObj = {};      // 객체 리터럴을 통한 빈 객체 생성

    console.dir(emptyArray.__proto__);  // 배열의 프로토타입(Array.prototype) 출력
    console.dir(emptyObj.__proto__);    // 객체의 프로토타입(Object.prototype) 출력
    ```

<br>

### 배열의 프로퍼티 동적 생성
```js
// 배열 생성
var arr = ['zero', 'one', 'two'];
console.log(arr.length);            // 3

// 프로퍼티 동적 추가
arr.color = 'blue';
arr.name = 'number_array';
console.log(arr.length);            // 3

// 배열 원소 추가
arr[3] = 'red';
console.log(arr.length);            // 4

// 배열 객체 출력
console.dir(arr);
```
- `배열의 length 프로퍼티는 배열 원소의 가장 큰 인덱스가 변했을 경우만 변경된다.`
- 배열도 객체처럼 `key: value` 형태로 배열 원소 및 프로퍼티가 존재한다.

<br>

### 배열의 프로퍼티 열기
- for in 문을 사용하면 배열 내의 모든 프로퍼티를 열거할 수 있다.
  - 하지만 불필요한 프로퍼티가 출력될 수 있다.
  - 그러므로 for문을 사용하는 것이 좋다.
    ```js
    // 배열 생성
    var arr = ['zero', 'one', 'two'];

    // 프로퍼티 동적 추가
    arr.color = 'blue';
    arr.name = 'number_array';

    // 배열 원소 추가
    arr[3] = 'red';

    for (var prop in arr) {
        console.log(prop, arr[prop]);
    }

    for (var i=0; i<arr.length; i++) {
        console.log(i, arr[i]);
    }
    ```
    ```
    [출력결과]
    0 zero
    1 one
    2 two
    3 red
    color blue
    name number_array

    0 "zero"
    1 "one"
    2 "two"
    3 "red"
    ```

<br>

### 배열 요소 삭제
- 배열도 객체이므로 요소와 프로퍼티를 삭제할 때 `delete 연산자`를 사용할 수 있다.
    ```js
    var arr = ['zero', 'one', 'two', 'three'];
    delete arr[2];
    console.log(arr);           // ["zero", "one", undefined × 1 , "three"]
    console.log(arr.length);    // 4
    ```
    - `delete` 연산자를 사용하면 해당 요소의 값을 undefined로 설정한다.
      - 즉, 원소 자체를 삭제하지 않는다.

    <br>

    - 보통 배열에서 요소들을 완전히 삭제할 경우 splice() 배열 메서드를 사용한다.
        ```js
        splice(start, deleteCount, item...)
        - start // 배열에서 시작 위치
        - deleteCount // start에서 지정한 위치부터 삭제할 요소의 수
        - item // 삭제할 위치에 추가할 요소

        /////////////////////////////////////////////////////////

        var arr = ['zero', 'one', 'two', 'three'];

        arr.splice(2, 1);
        console.log(arr);           // ["zero", "one", "three"]
        console.log(arr.length);    // 3
        ```

<br>

### Array() 생성자 함수
- 배열 리터럴도 Array() 생성자 함수로 배열을 생성하는 과정을 단순화한 것이다.
- 생성자 함수로 배열과 같은 객체를 생성할 때에는 반드시 new 연산자를 써야 한다.
- Array() 생성자 함수는 호출할 때 인자 개수에 따라 동작이 다르다.
  - 호출시 인자가 1개이고 숫자인 경우 : 호출된 인자를 length로 갖는 빈 배열 생성
  - 그 외의 경우 : 호출된 인자를 요소로 갖는 배열 생성
    ```js
    var foo = new Array(3);
    console.log(foo);           // [undefined, undefined, undefined]
    console.log(foo.length);    // 3

    var bar = new Array(1, 2, 3);
    console.log(bar);           // [1, 2, 3]
    console.log(bar.length);    // 3
    ```
<br>

### 유사 배열 객체
- length 프로퍼티가 있는 객체를 `유사 배열 객체(array-like objects)`라고 부른다.
  - 가장 큰 특징은 객체이면서 표준 배열 메서드를 사용하는게 가능하다는 것이다.
    ```js
    var arr = ['bar'];
    var obj = {
        name : 'foo',
        length : 1
    };

    arr.push('baz');
    console.log(arr);  // ['bar', 'baz']

    obj.push('baz');  // Uncaught TypeError: Object #<Object> has no method 'push'
    ```

- 유사 배열 객체의 경우 apply() 메서드를 사용해 표준 배열 메서드를 활용할 수 있다.
    ```js
    var arr = ['bar'];
    var obj = { name : 'foo', length : 1};

    arr.push('baz');
    console.log(arr);   // [‘bar’, ‘baz’]

    Array.prototype.push.apply(obj, ['baz']);
    console.log(obj);   // { '1': 'baz', name: 'foo', length: 2 }
    ```
    - arguments 객체나 jQuery 객체가 유사 배열 객체 형태로 되어 있다.

<hr>
<br>

## 기본 타입과 표준 메서드
- 기본 타입의 값들에 대해 객체 형태로 메서드를 호출할 경우
    - 기본값은 메서드 처리 시 객체로 변환된 다음 각 타입별 표준 메서드를 호출하며, 작업이 끝나면 다시 기본값으로 복귀한다.
        ```js
            // 숫자 메서드 호출
            var num = 0.5;
            console.log(num.toExponential(1)); // '5.0e-1'

            // 문자열 메서드 호출
            console.log("test".charAt(2)); // 's'
        ```
    - `toExponential()` : 숫자를 지수 형태의 문자열로 변환한다.
      - 인자로 받는 값은 소수점 아래 몇 번째 자리까지 표시할 것인지 지정하는 것이다.

    <br>

    - `charAt()` : 문자열에서 인자로 받은 위치에 있는 문자를 반환한다.

- 기본 타입을 위해 정의된 표준 메서드들은 `객체처럼 호출할 수 있다`.

<hr>
<br>

## 연산자
### **+** 연산자
- 더하기 연산과 문자열 연산을 수행한다.
    ```js
    var add1 = 1 + 2;
    var add2 = 'my ' + 'string';
    var add3 = 1 + 'string';
    var add4 = 'string' + 2;

    console.log(add1); // 3
    console.log(add2); // my string
    console.log(add3); // 1string
    console.log(add4); // string2
    ```

<br>

### **typeof** 연산자
- 피연산자의 타입을 문자열 형태로 리턴한다.

    |타입|타입명|반환값|
    |:---:|:---:|:---:|
    |기본 타입|숫자|'number'|
    |기본 타입|문자열|'string'|
    |기본 타입|불린값|'boolean'|
    |기본 타입|null|**'object'**|
    |기본 타입|undefined|'undefined'|
    |참조 타입|객체|'object'|
    |참조 타입|배열|'object'|
    |참조 타입|함수|'function'|

<br>

### **==(동등)** 연산자와 **===(일치)** 연산자
```js
console.log(1 == '1'); // true
console.log(1 === '1'); // false
``` 
- `== 연산자(coercive equality)`
  - 비교하려는 피연산자의 타입이 다를 경우 타입 변환을 거친 다음 비교
- `=== 연산자(strict equality)`
  - 피연산자의 타입이 다르더라도 타입 변환을 거치지 않고 비교한다.

<br>

### **!!** 연산자
- 피연산자를 불린값으로 변환한다.
    ```js
    console.log(!!0);           // false
    console.log(!!1);           // true
    console.log(!!'string');    // true
    console.log(!!'');          // false
    console.log(!!true);        // true
    console.log(!!false);       // false
    console.log(!!null);        // false
    console.log(!!undefined);   // false
    console.log(!!{});          // true
    console.log(!![1,2,3]);     // true
    ```
    - `객체는 값이 비어있는 빈 객체라도 true로 변환된다.`

# 함수와 프로토타입 체이닝
- 함수의 개념
  - 함수 생성
  - 함수 객체
  - 다양한 함수 형태
  - 함수 호출과 this
  - 프로토타입과 프로토타입 체이닝

<hr>
<br>

## 함수 정의
- 함수 생성 방법
  - 함수 선언문(function statement)
  - 함수 표현식(function expression)
  - Function() 생성사 함수

### 함수 리터럴
- 자바스크립트에서는 함수도 일반 객체처럼 값으로 취급한다.
  - 그러므로 함수 리터럴을 이용해 함수를 생성할 수 있다.

<br>

### 함수 선언문 방식으로 함수 생성하기
- 함수 리터럴 선언 방식은 함수 선언문 방식의 형태와 같다.
- 함수 선언문 방식으로 정의된 함수는 반드시 함수명이 정의되어 있어야 한다.
- 특징
  - function 이라는 키워드를 명시적으로 사용한다.
  - 리턴값과 매개변수로 넘기는 값에 변수 타입을 기술하지 않는다.
    ```js
    function add(x, y) {
        return x + y;
    }
    
    console.log(add(3,4));  // (출력값) 7
    ```

<br>

### 함수 표현식 방식으로 함수 생성하기
- 자바스크립트에서는 함수도 하나의 값으로 취급되므로 `일급 객체`라고 한다.
- 함수도 숫자나 문자열처럼 변수에 할당하는 것이 가능하다.
  - 함수 리터럴로 하나의 함수를 만들고 여기서 생성된 함수를 변수에 할당하여 함수를 생성하는 것을 함수 표현식이라고 한다.
    ```js
    // add() 함수 표현식
    var add = function (x, y) {
        return x + y;
    };

    var plus = add;

    console.log(add(3,4));  // 7
    console.log(plus(5,6)); // 11
    ```
    - add와 같이 함수가 할당된 변수를 함수 변수라고 한다.
    - 위의 예제가 익명 함수를 이용한 함수 표현식 방법(익명 함수 표현식)이다.
      - 익명 함수의 호출은 함수 호출 연산자 ( )를 붙여서 할 수 있다.
      - 함수 이름이 포함된 함수 표현식은 기명 함수 표현식이라고 한다.

- 기명 함수 표현식의 함수 호출 방법
    ```js
    var add = function sum(x, y) {
    return x + y;
    };

    console.log(add(3,4)); // 7
    console.log(sum(3,4)); // Uncaught ReferenceError: sum is not defined 에러 발생
    ```
    - 함수 표현식에서 사용된 함수 이름은 외부 코드에서 접근이 불가능하므로 에러가 발생한다.
    - 함수 이름은 정의된 함수 내부에서 해당 함수를 재귀적으로 호출하거나 디버거 등에서 함수를 구분할 때 사용한다.

- 함수 표현식 방식으로 구현한 팩토리얼 함수
    ```js
    var factorialVar = function factorial(n) {
        if(n <= 1) {
            return 1;
        }
        return n * factorial(n-1);
    };

    console.log(factorialVar(3));  // 6
    console.log(factorial(3)); // Uncaught ReferenceError: factorial is not defined 에러 발생
    ```

<br>

### Function() 생성자 함수를 통한 함수 생성하기
- 자바스크립트의 함수도 Function() 이라는 기본 내장 생성자 함수로부터 생성된 객체라고 볼 수 있다.
  - 문법 : `new Function (arg1, arg2, ..., argN, functionBody)`
    ```js
    var add = new Function('x', 'y', 'return x + y');
    console.log(add(3, 4)); // 7
    ```
    - arg1, arg2, ..., argN : 함수의 매개변수
    - functionBody : 함수가 호출될 때 실행될 코드를 포함한 문자열

<br>

### 함수 호이스팅
- 함수를 생성하는 3가지 방법에는 동작 방식이 약간씩 다르다.
  - 이 중 하나가 **함수 호이스팅(Function Hoisting)** 이다.
    ```js
    console.log(add(2,3)); // 5

    // 함수 선언문 형태로 add() 함수 정의
    function add(x, y) {
        return x + y;
    }

    console.log(add(3, 4)); // 7
    ```
    - 함수 선언문 형태로 정의한 함수의 유효 범위는 코드의 맨 처음부터 시작하며 이것을 함수 호이스팅이라고 한다.

    <br>

  - 함수 호이스팅은 함수를 사용하기 전에 반드시 선언해야 한다는 규칙을 무시하므로 코드의 구조를 엉성하게 만들 수도 있으므로 함수 표현식 사용을 권장한다.
    ```js
    add(2,3); // uncaught type error

    // 함수 표현식 형태로 add() 함수 정의
    var add = function (x, y) {
        return x + y;
    };

    add(3, 4);
    ```
    - 함수 표현식 형태로 정의된 함수는 호이스팅이 일어나지 않는다.

- 함수 호이스팅의 원인 자바스크립트의 변수 생성(Instantiation)과 초기화(Initialization)의 작업이 분리되어 진행되기 때문이다.

<hr>
<br>

## 함수 객체 : 함수도 객체다
### 자바스크립트에서는 함수도 객체다
- 자바스크립트에서는 함수도 객체이므로 프로퍼티들을 가질 수 있다.
    ```js
    // 함수 선언 방식으로 add()함수 정의
    function add(x, y) {
    return x+y;
    }

    // add() 함수 객체에 result, status 프로퍼티 추가
    add.result = add(3, 2);
    add.status = 'OK';

    console.log(add.result); // 5
    console.log(add.status); // 'OK'
    ```
    - 함수 코드는 함수 객체의 [[Code]] 내부 프로퍼티에 저장된다.
    - 함수 객체의 프로퍼티를 동적으로 생성하고 접근할 수 있다.

<br>

### 자바스크립트에서의 함수는 값으로 취급된다
- 함수도 일반 객체처럼 취급될 수 있으므로 다음과 같은 동작이 가능하다.
  - 리터럴에 의해 생성
  - 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
  - 함수의 인자로 전달 가능
  - 함수의 리턴값으로 리턴 가능
  - 동적으로 프로퍼티를 생성 및 할당 가능
- 이같은 특징 때문에 자바스크립트에서의 함수는 일급 객체(First Class)라고 불린다.

#### 변수나 프로퍼티의 값으로 할당
- 함수는 숫자나 문자열처럼 변수나 프로퍼티의 값으로 할당될 수 있다.
    ```js
    // 변수에 함수 할당
    var foo = 100;
    var bar = function () { return 100; };
    console.log(bar()); // 100

    // 프로퍼티에 함수 할당
    var obj = {};
    obj.baz = function () {return 200; }
    console.log(obj.baz()); // 200
    ```

#### 함수 인자로 전달
- 함수는 다른 함수의 인자로도 전달이 가능하다.
  ```js
  // 함수 표현식으로 foo() 함수 생성
  var foo = function(func) {
      func(); // 인자로 받은 func() 함수 호출
  };

  // foo() 함수 실행
  foo(function() {
      console.log('Function can be used as the argument.');
  });

  // (출력값) Function can be used as the argument.
  ```

#### 리턴값으로 활용
- 함수는 다른 함수의 리턴값으로도 활용할 수 있다.
  ```js
  // 함수를 리턴하는 foo() 함수 정의
  var foo = function() {
      return function () {
          console.log('this function is the return value.')
      };
  };

  var bar = foo();
  bar();

  // (출력값) this function is the return value.
  ```

<br>

### 함수 객체의 기본 프로퍼티
- 함수는 일반 객체와는 다르게 추가로 `함수 객체만의 표준 프로퍼티`가 정의되어 있다.
    ```js
    function add(x, y) {
        return x + y;
    }

    console.dir(add);
    ```

    ![예제](/02/4-12.jpg)
    - ECMA5 스크립트 명세서에는 모든 함수가 length와 prototype 프로퍼티를 가져야한다고 기술한다.
    - `name 프로퍼티`는 함수의 이름을 나타낸다.
      - 익명 함수라면 name 프로퍼티는 빈 문자열이 된다.
    - `caller 프로퍼티`는 자신을 호출한 함수를 나타낸다.
    - `arguments 프로퍼티`는 함수를 호출할 때 전달된 인자값을 나타낸다.
      - ECMA 표준에서는 `arguments 객체`를 정의한다.
    - `__proto__ 프로퍼티`는 [[Prototype]]과 같은 개념이다.

- length 프로퍼티
  - ECMA Script에서 정한 모든 함수가 가져야하는 표준 프로퍼티
  - 함수가 정상적으로 실행될 때 기대되는 인자의 개수

- prototype 프로퍼티
  - 모든 함수는 객체로서 prototype 프로퍼티를 가지고 있다.
  - 함수 객체의 prototype 프로퍼티는 모든 객체의 부모를 나타내는 내부 프로퍼티 `[[Prototype]]`과 다르다.