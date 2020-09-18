# Types
## Primitives
> 원시타입(Primitive type)은 그 값을 직접 조작합니다.

- string
- number
- boolean
- null
- undefined

```js
var foo = 1,
    bar = foo;

bar = 9;

console.log(foo, bar);  // 1, 9
```

<hr>
<br>

## Complex
> 참조형(Complex)은 참조를 통해 값을 조작합니다.

- object
- array
- function

```js
var foo = [1, 2],
    bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]);  // 9, 9
```

# Objects
- Object를 만들 때는 리터럴 구문을 사용할 것
  ```js
  // bad
  var item = new Object();

  // good
  var item = {};
  ```

- IE8에서 동작하지 않으므로 예약어(reserved words)를 키로 사용하지 말 것
  ```js
  // bad
  var superman = {
    default: { clark: 'kent' },
    private: true
  };

  // good
  var superman = {
    defaults: { clark: 'kent' },
    hidden: true
  };
  ```

- 예약어 대신 알기 쉬운 동의어(readable synonyms)를 사용할 것
  ```js
  // bad
  var superman = {
    class: 'alien'
  };

  // bad
  var superman = {
    klass: 'alien'
  };

  // good
  var superman = {
    type: 'alien'
  };
  ```

# Arrays
- Array를 만들 때 리터럴 구문을 사용할 것
  ```js
  // bad
  var items = new Array();

  // good
  var items = [];
  ```

- 길이를 알 수 없는 경우는 Array#push를 사용할 것
  ```js
  var someStack = [];

  // bad
  someStack[someStack.length] = 'abracadabra';

  // good
  someStack.push('abracadabra');
  ```

- 배열을 복사 할 필요가있는 경우 Array#slice를 사용할 것
  ```js
  var len = items.length,
      itemsCopy = [],
      i;

  // bad
  for (i = 0; i < len; i++) {
    itemsCopy[i] = items[i];
  }

  // good
  itemsCopy = items.slice();
  ```

- Array와 비슷한(Array-Like)한 Object를 Array에 변환하는 경우는 Array#slice를 사용할 것
  ```js
  function trigger() {
    var args = Array.prototype.slice.call(arguments);
    ...
  }
  ```

# Strings
- 문자열은 `작은 따옴표('')`를 사용할 것
  ```js
  // bad
  var name = "Bob Parr";

  // good
  var name = 'Bob Parr';

  // bad
  var fullName = "Bob " + this.lastName;

  // good
  var fullName = 'Bob ' + this.lastName;
  ```

- 80 문자 이상의 문자열은 문자열 연결을 사용하여 여러 줄에 걸쳐 기술 할 것
  - 문자열 연결을 남용하면 성능에 영향을 줄 수 있음s  
    ```js
    // bad
    var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

    // bad
    var errorMessage = 'This is a super long error that \
    was thrown because of Batman. \
    When you stop to think about \
    how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // good
    var errorMessage = 'This is a super long error that ' +
      'was thrown because of Batman.' +
      'When you stop to think about ' +
      'how Batman had anything to do ' +
      'with this, you would get nowhere ' +
      'fast.';
    ```

- 프로그램에서 문자열을 생성 할 필요가 있는 경우 (특히 IE는) 문자열 연결 대신 Array#join을 사용할 것
  ```js
  var items,
      messages,
      length,
      i;

  messages = [{
      state: 'success',
      message: 'This one worked.'
  },{
      state: 'success',
      message: 'This one worked as well.'
  },{
      state: 'error',
      message: 'This one did not work.'
  }];

  length = messages.length;

  // bad
  function inbox(messages) {
    items = '<ul>';

    for (i = 0; i < length; i++) {
      items += '<li>' + messages[i].message + '</li>';
    }

    return items + '</ul>';
  }

  // good
  function inbox(messages) {
    items = [];

    for (i = 0; i < length; i++) {
      items[i] = messages[i].message;
    }

    return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
  }
  ```

# Functions
- 함수식(Function expressions)
  ```js
  // 익명함수식(anonymous function expression)
  var anonymous = function() {
    return true;
  };

  // 명명된 함수식(named function expression)
  var named = function named() {
    return true;
  };

  // 즉시실행 함수식(immediately-invoked function expression (IIFE))
  (function() {
    console.log('Welcome to the Internet. Please follow me.');
  })();
  ```
  - `if 및 while 등` 블록 내에서 변수에 함수를 할당하는 대신 함수를 선언하지 말 것
    - 브라우저는 허용하지만 모두 다른 방식으로 해석
    - ECMA-262에서는 block은 statements의 목록에 정의되어 있으나 함수 선언은 statements가 없음
      ```js
      // bad
      if (currentUser) {
        function test() {
          console.log('Nope.');
        }
      }

      // good
      var test;
      if (currentUser) {
        test = function test() {
          console.log('Yup.');
        };
      }
      ```

- 매개 변수(parameter)에 arguments를 절대 지정하지 말 것
  - 이것은 함수 범위로 전달 될 arguments 객체의 참조를 덮어씀
    ```js
    // bad
    function nope(name, options, arguments) {
      // ...stuff...
    }

    // good
    function yup(name, options, args) {
      // ...stuff...
    }
    ```

# Properties
- 속성에 액세스하려면 `도트(.)`를 사용할 것
  ```js
  var luke = {
    jedi: true,
    age: 28
  };

  // bad
  var isJedi = luke['jedi'];

  // good
  var isJedi = luke.jedi;
  ```

- 변수를 사용하여 속성에 접근하려면 `대괄호([])`를 사용할 것
  ```js
  var luke = {
    jedi: true,
    age: 28
  };

  function getProp(prop) {
    return luke[prop];
  }

  var isJedi = getProp('jedi');
  ```

# Variables
- 변수를 선언 할 때는 항상 `var`를 사용할 것.
  - 그렇지 않으면 전역 변수로 선언됨
  - 전역 네임 스페이스를 오염시키지 않도록 Captain Planet도 경고함
    ```js
    // bad
    superPower = new SuperPower();

    // good
    var superPower = new SuperPower();
    ```

- 여러 변수를 선언하려면 하나의 var를 사용하여 변수마다 줄바꿈하여 선언할 것
  ```js
  // bad
  var items = getItems();
  var goSportsTeam = true;
  var dragonball = 'z';

  // good
  var items = getItems(),
      goSportsTeam = true,
      dragonball = 'z';
  ```

- 정의되지 않은 변수를 마지막으로 선언할 것
  - 나중에 이미 할당된 변수 중 하나를 지정해야하는 경우에 유용
    ```js
    // bad
    var i, len, dragonball,
        items = getItems(),
        goSportsTeam = true;

    // bad
    var i, items = getItems(),
        dragonball,
        goSportsTeam = true,
        len;

    // good
    var items = getItems(),
        goSportsTeam = true,
        dragonball,
        length,
        i;
    ```

- 변수의 할당은 스코프의 시작 부분에서 하며 이것은 변수 선언과 Hoisting 관련 문제를 해결함
  ```js
  // bad
  function() {
    test();
    console.log('doing stuff..');

    //..other stuff..

    var name = getName();

    if (name === 'test') {
      return false;
    }

    return name;
  }

  // good
  function() {
    var name = getName();

    test();
    console.log('doing stuff..');

    //..other stuff..

    if (name === 'test') {
      return false;
    }

    return name;
  }

  // bad
  function() {
    var name = getName();

    if (!arguments.length) {
      return false;
    }

    return true;
  }

  // good
  function() {
    if (!arguments.length) {
      return false;
    }

    var name = getName();

    return true;
  }
  ```

# Hoisting
- 해당 스코프의 시작 부분에 Hoist된 변수선언은 할당되지 않음
  ```js
  // (notDefined가 전역 변수에 존재하지 않는다고 가정했을 경우)
  // 이것은 동작하지 않습니다.
  function example() {
    console.log(notDefined); // => throws a ReferenceError
  }

  // 그 변수를 참조하는 코드 후에 그 변수를 선언 한 경우
  // 변수가 Hoist된 상태에서 작동합니다.
  // Note : `true`라는 값 자체는 Hoist되지 않습니다.
  function example() {
    console.log(declaredButNotAssigned); // => undefined
    var declaredButNotAssigned = true;
  }

  // 인터 프린터는 변수 선언을 스코프의 시작 부분에 Hoist합니다.
  // 위의 예는 다음과 같이 다시 작성할 수 있습니다.
  function example() {
    var declaredButNotAssigned;
    console.log(declaredButNotAssigned); // => undefined
    declaredButNotAssigned = true;
  }
  ```

- 익명 함수의 경우 함수가 할당되기 전에 변수가 Hoist될 수 있음
  ```js
  function example() {
    console.log(anonymous); // => undefined

    anonymous(); // => TypeError anonymous is not a function

    var anonymous = function() {
      console.log('anonymous function expression');
    };
  }
  ```

- 명명 된 함수의 경우도 마찬가지로 변수가 Hoist될 수 있으나 함수 이름과 함수 본체는 Hoist되지 않음
  ```js
  function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    superPower(); // => ReferenceError superPower is not defined

    var named = function superPower() {
      console.log('Flying');
    };
  }

  // 함수이름과 변수이름이 같은 경우에도 같은 일이 일어납니다.
  function example() {
    console.log(named); // => undefined

    named(); // => TypeError named is not a function

    var named = function named() {
      console.log('named');
    }
  }
  ```

- 함수 선언은 함수이름과 함수본문이 Hoist 됨
  ```js
  function example() {
    superPower(); // => Flying

    function superPower() {
      console.log('Flying');
    }
  }
  ```

# Conditional Expressions & Equality(조건식과 등가식)
- == 나 != 보다는 === 와 !== 를 사용할 것
- 조건식은 ToBoolean 메소드에 의해 아래와 같이 엄밀하게 비교
  - Objects 는 true 로 평가
  - undefined 는 false 로 평가
  - null 는 false 로 평가
  - Booleans 는 boolean 형의 값으로 평가
  - Numbers 는 true 로 평가되나 +0, -0, or NaN 의 경우는 false
  - Strings 는 true 로 평가되나 빈문자 '' 의 경우는 false
    ```js
    if ([0]) {
      // true
      // Array는 Object 이므로 true 로 평가됩니다.
    }
    ```

- 짧은 형식을 사용할 것
  ```js
  // bad
  if (name !== '') {
    // ...stuff...
  }

  // good
  if (name) {
    // ...stuff...
  }

  // bad
  if (collection.length > 0) {
    // ...stuff...
  }

  // good
  if (collection.length) {
    // ...stuff...
  }
  ```

# Blocks
- 복수행 블록은 `중괄호({})`를 사용할 것
  ```js
  // bad
  if (test)
    return false;

  // good
  if (test) return false;

  // good
  if (test) {
    return false;
  }

  // bad
  function() { return false; }Comments 

  // good
  function() {
    return false;
  }
  ```

# Comments
- 복수행의 코멘트는 `/** ... */` 를 사용할 것
  - 그 안에는 설명과 모든 매개 변수와 반환 값에 대한 형식과 값을 설명
    ```js
    // bad
    // make() returns a new element
    // based on the passed in tag name
    //
    // @param <String> tag
    // @return <Element> element
    function make(tag) {

      // ...stuff...

      return element;
    }

    // good
    /**
    * make() returns a new element
    * based on the passed in tag name
    *
    * @param <String> tag
    * @return <Element> element
    */
    function make(tag) {

      // ...stuff...

      return element;
    }
    ```

- 한 줄 주석에는 `// ...`를 사용할 것
  - 코멘트를 추가하고 싶은 코드의 상단에 작성하고, 주석 앞에 빈 줄을 넣을 것
    ```js
    // bad
    var active = true;  // is current tab

    // good
    // is current tab
    var active = true;

    // bad
    function getType() {
      console.log('fetching type...');
      // set the default type to 'no type'
      var type = this._type || 'no type';

      return type;
    }

    // good
    function getType() {
      console.log('fetching type...');

      // set the default type to 'no type'
      var type = this._type || 'no type';

      return type;
    }
    ```

- 문제를 지적하고 재고를 촉구하거나 문제에 대한 해결책을 제시하는 등 의견의 앞에 FIXME 나 TODO를 붙일 것
  - 다른 개발자의 빠른 이해를 도우며 이러한 어떤 액션을 동반한다는 의미에서 일반 코멘트와는 다름
  - 액션은 `FIXME - 해결책이 필요` 또는 `TODO - 구현`이 필요

- 문제에 대한 코멘트로 `// FIXME :`를 사용할 것
  ```js
  function Calculator() {

    // FIXME: 전역 변수를 사용해서는 안됩니다.
    total = 0;

    return this;
  }
  ```

- 문제 해결책에 대한 코멘트로 `// TODO :`를 사용할 것
  ```js
  function Calculator() {

    // TODO: total은 옵션 매개 변수로 설정되어야 함.
    this.total = 0;
    return this;
  }
  ```