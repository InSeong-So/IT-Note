# 디자인 패턴

## `Disign Pattern` 은 무엇인가요?
> `소프트웨어 공학에서 디자인 패턴(Design pattern)은 프로그램 개발 시에 자주 부닥치는 애로 상황에 대한 일반적이고 재사용 가능한 추상화된 해결책`


## `Java` 의 디자인 패턴

### Iterator Pattern
> Iterator는 무엇인가를 '반복한다'라는 의미이며 반복자라고도 한다.
> - for(int - 0; i < arr.length; i++){...} 에서 i를 하나씩 증가시키면 현재 주목하고 있는 배열의 요소를 차례대로 처리해 간다.
> - 여기서 사용되는 변수 i의 기능을 추상화해서 일반화한 것을 Iterator 패턴이라고 한다.
> - 무엇인가 많이 모여있는 것들을 순서대로 지정하면서 전체를 검색하는 처리를 실행하기 위한 것이다.

- 구성원
  - Iterator(반복자)의 역할
    ```
    요소를 순서대로 검색해가는 인터페이스(API)를 결정한다.
    다음 요소가 존재하는지를 얻기 위해 hasNex() 메소드를, 다음 요소를 얻기 위해 next() 메소드를 사용한다.
    ```

  - ConcreteIterator(구체적인 반복자)의 역할
    ```
    Iterator가 결정한 인터페이스(API)를 실제로 구현한다.
    ```

  - Aggregate(집합체)의 역할
    ```
    Iterator 역할을 만들어내는 인터페이스(API)를 결정한다.
    ```

  - ConcreteAggregate(구체적인 집합체)의 역할
    ```
    Aggregate 역할이 결정한 인터페이스(API)를 실제로 구현한다.
    ```

<br>

### Adapter Pattern
> 어댑터(Adapter)는 'adapt(개조) 시키는 것' 이라는 의미이며 개조자라고도 한다.

```
요소를 순서대로 검색해 가는 인터페이스(API)를 결정한다.
다음 요소가 존재하는지를 얻기 위해 hasNex() 메소드를, 다음 요소를 얻기 위해 next() 메소드를 사용한다.
```

<br>

### Template Method Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter03/templateMethod)

<br>

### Factory Method Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter04/factoryMethod)

<br>

### Singleton Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter05/singleton)

<br>

### Prototype Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter06/prototype)

<br>

### Builder Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter07/builder)

<br>

### Abstact Factory Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter08/abstractFactory)

<br>

### Bridge Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter09/bridge)

<br>

### Strategy Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter10/strategy)

<br>

### Composite Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter11/composite)

<br>

### Decorator Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter12/decorator)

<br>

### Visitor Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter13/visitor)

<br>

### Chain of Responsibility Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter14/chain_of_responsibility)

<br>

### Facade Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter15/facade)

<br>

### Mediator Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter16/mediator)

<br>

### Observer Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter17/observer)

<br>

### Memento Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter18/memento)

<br>

### State Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter19/state)

<br>

### Proxy Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter21/proxy)

<br>

### Command Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter22/command)

<br>

### Interpreter Pattern
- [예제 코드](https://github.com/InSeong-So/Java-DisignPattern/tree/master/src/main/java/designPattern/chapter23/interpreter)

<hr>
<br>