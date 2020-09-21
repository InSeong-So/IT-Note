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

# Whitespace
- 탭에는 공백 2개를 설정할 것
  ```
  // bad
  function() {
  ∙∙∙∙var name;
  }

  // bad
  function() {
  ∙var name;
  }

  // good
  function() {
  ∙∙var name;
  }
  ```

- 중괄호({})의 앞에 공백을 하나 넣을 것
  ```js
  // bad
  function test(){
    console.log('test');
  }

  // good
  function test() {
    console.log('test');
  }

  // bad
  dog.set('attr',{
    age: '1 year',
    breed: 'Bernese Mountain Dog'
  });

  // good
  dog.set('attr', {
    age: '1 year',
    breed: 'Bernese Mountain Dog'
  });
  ```

- 파일의 마지막에는 빈 줄을 하나 넣어주십시오.
  ```js
  // bad
  (function(global) {
    // ...stuff...
  })(this);
  ```
  ```js
  // good
  (function(global) {
    // ...stuff...
  })(this);

  ```

- 메소드 체인이 길어지는 경우 적절히 들여쓰기(indentation)를 할 것
  ```js
  // bad
  $('#items').find('.selected').highlight().end().find('.open').updateCount();

  // good
  $('#items')
    .find('.selected')
      .highlight()
      .end()
    .find('.open')
      .updateCount();

  // bad
  var leds = stage.selectAll('.led').data(data).enter().append('svg:svg').class('led', true)
      .attr('width',  (radius + margin) * 2).append('svg:g')
      .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
      .call(tron.led);

  // good
  var leds = stage.selectAll('.led')
      .data(data)
    .enter().append('svg:svg')
      .class('led', true)
      .attr('width',  (radius + margin) * 2)
    .append('svg:g')
      .attr('transform', 'translate(' + (radius + margin) + ',' + (radius + margin) + ')')
      .call(tron.led);
  ```

# Commas
- 선두의 comma는 하지 말 것
  ```js
  // bad
  var once
    , upon
    , aTime;

  // good
  var once,
      upon,
      aTime;

  // bad
  var hero = {
      firstName: 'Bob'
    , lastName: 'Parr'
    , heroName: 'Mr. Incredible'
    , superPower: 'strength'
  };

  // good
  var hero = {
    firstName: 'Bob',
    lastName: 'Parr',
    heroName: 'Mr. Incredible',
    superPower: 'strength'
  };
  ```

- 말미의 불필요한 쉼표도 하지 말 것. 이것은 IE6/7과 quirksmode의 IE9에서 문제를 일으킬 수 있으며 ES3의 일부 구현에서 불필요한 쉼표가 있는 경우, 배열 길이를 추가함
  ```js
  // bad
  var hero = {
    firstName: 'Kevin',
    lastName: 'Flynn',
  };

  var heroes = [
    'Batman',
    'Superman',
  ];

  // good
  var hero = {
    firstName: 'Kevin',
    lastName: 'Flynn'
  };

  var heroes = [
    'Batman',
    'Superman'
  ];
  ```

# Semicolons
- 아래와 같이 사용할 것
  ```js
  // bad
  (function() {
    var name = 'Skywalker'
    return name
  })()

  // good
  (function() {
    var name = 'Skywalker';
    return name;
  })();

  // good
  ;(function() {
    var name = 'Skywalker';
    return name;
  })();
  ```

# Type Casting & Coercion(강제) 원문
- 문의 시작 부분에서 형을 강제할 것
- Strings:
  ```js
  //  => this.reviewScore = 9;

  // bad
  var totalScore = this.reviewScore + '';

  // good
  var totalScore = '' + this.reviewScore;

  // bad
  var totalScore = '' + this.reviewScore + ' total score';

  // good
  var totalScore = this.reviewScore + ' total score';
  ```

- 숫자는 parseInt를 사용할 것. 항상 형변환을 위한 `기수(radix)`를 인수로 전달할 것
  ```js
  var inputValue = '4';

  // bad
  var val = new Number(inputValue);

  // bad
  var val = +inputValue;

  // bad
  var val = inputValue >> 0;

  // bad
  var val = parseInt(inputValue);

  // good
  var val = Number(inputValue);

  // good
  var val = parseInt(inputValue, 10);
  ```

- 어떤 이유에 의해 parseInt가 병목이 되고, 성능적인 이유로 Bitshift를 사용할 필요가 있을 경우, 하려고 하는것에 대해 why(왜)와 what(무엇)의 설명을 코멘트로 남길 것
  ```js
  // good
  /**
   * parseInt가 병목을 일으키므로
   * Bitshift로 문자열을 수치로 강제적으로 변환하는 방법으로
   * 성능을 개선시킵니다.
   */
  var val = inputValue >> 0;
  ```

- Booleans:
  ```js
  var age = 0;

  // bad
  var hasAge = new Boolean(age);

  // good
  var hasAge = Boolean(age);

  // good
  var hasAge = !!age;
  ```

# Naming Conventions
- 한문자 이름은 피하고 이름에서 의도를 읽을 수 있도록 할 것
  ```js
  // bad
  function q() {
    // ...stuff...
  }

  // good
  function query() {
    // ..stuff..
  }
  ```

- Object, 함수, 그리고 인스턴스로는 camelCase를 사용할 것
  ```js
  // bad
  var OBJEcttsssss = {};
  var this_is_my_object = {};
  var this-is-my-object = {};
  function c() {};
  var u = new user({
    name: 'Bob Parr'
  });

  // good
  var thisIsMyObject = {};
  function thisIsMyFunction() {};
  var user = new User({
    name: 'Bob Parr'
  });
  ```

- Class와 생성자에는 PascalCase를 사용할 것
  ```js
  // bad
  function user(options) {
    this.name = options.name;
  }

  var bad = new user({
    name: 'nope'
  });

  // good
  function User(options) {
    this.name = options.name;
  }

  var good = new User({
    name: 'yup'
  });
  ```

- private 속성 이름은 밑줄 _ 을 사용할 것
  ```js
  // bad
  this.__firstName__ = 'Panda';
  this.firstName_ = 'Panda';

  // good
  this._firstName = 'Panda';
  ```

- this의 참조를 저장할 때 _this 를 사용할 것
  ```js
  // bad
  function() {
    var self = this;
    return function() {
      console.log(self);
    };
  }

  // bad
  function() {
    var that = this;
    return function() {
      console.log(that);
    };
  }

  // good
  function() {
    var _this = this;
    return function() {
      console.log(_this);
    };
  }
  ```

- 함수에 이름을 붙여 stack traces를 추적하기 쉽게할 것
  ```js
  // bad
  var log = function(msg) {
    console.log(msg);
  };

  // good
  var log = function log(msg) {
    console.log(msg);
  };
  ```

# Constructors 원문
- 새 Object에서 프로토타입을 재정의하는 것이 아니라 프로토타입 객체에 메서드를 추가할 것
  - 프로토타입을 재정의하면 상속이 불가능함
  - 프로토타입을 리셋하는것으로 베이스 클래스를 재정의 할 수 있음
    ```js
    function Jedi() {
      console.log('new jedi');
    }

    // bad
    Jedi.prototype = {
      fight: function fight() {
        console.log('fighting');
      },

      block: function block() {
        console.log('blocking');
      }
    };

    // good
    Jedi.prototype.fight = function fight() {
      console.log('fighting');
    };

    Jedi.prototype.block = function block() {
      console.log('blocking');
    };
    ```

- 메소드의 반환 값으로 this를 반환함으로써 메소드 체인을 할 수 있습니다.
  ```js
  // bad
  Jedi.prototype.jump = function() {
    this.jumping = true;
    return true;
  };

  Jedi.prototype.setHeight = function(height) {
    this.height = height;
  };

  var luke = new Jedi();
  luke.jump(); // => true
  luke.setHeight(20) // => undefined

  // good
  Jedi.prototype.jump = function() {
    this.jumping = true;
    return this;
  };

  Jedi.prototype.setHeight = function(height) {
    this.height = height;
    return this;
  };

  var luke = new Jedi();

  luke.jump()
    .setHeight(20);
  ```

- 독자적인 toString()을 만들 수도 있지만 올바르게 작동하는지, 부작용이 없는 것만은 확인해 주십시오.
  ```js
  function Jedi(options) {
    options || (options = {});
    this.name = options.name || 'no name';
  }

  Jedi.prototype.getName = function getName() {
    return this.name;
  };

  Jedi.prototype.toString = function toString() {
    return 'Jedi - ' + this.getName();
  };
  ```

# Events
- DOM 이벤트나 Backbone events와 같은 고유의 이벤트 탑재체(payloads)의 값을 전달하는 경우 원시 값(raw value) 대신 해시 인수(hash)를 전달
  - 이렇게하는 것으로 나중에 개발자가 이벤트와 관련된 모든 핸들러를 찾아 업데이트 하지 않고 이벤트 탑재체(payloads)에 값을 추가 할 수 있음

- 이것보단
  ```js
  // bad
  $(this).trigger('listingUpdated', listing.id);

  ...

  $(this).on('listingUpdated', function(e, listingId) {
    // do something with listingId
  });
  ```

- 이게 좋음
  ```js
  // good
  $(this).trigger('listingUpdated', { listingId : listing.id });

  ...

  $(this).on('listingUpdated', function(e, data) {
    // do something with data.listingId
  });
  ```