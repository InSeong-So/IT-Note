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