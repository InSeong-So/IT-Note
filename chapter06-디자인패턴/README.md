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

<br>

### Factory Method Pattern

<br>

### Singleton Pattern
> `인스턴스가 한 개밖에 존재지 않음을 보증`하는 패턴
> - 싱글톤은 유일한 인스턴스를 얻기 위한 static 메소드를 가지고 있으며, 이 메소드는 언제나 동일한 인스턴스를 반환한다.

- 특징
  - `클래스의 인스턴스가 오직 하나만 필요`할 경우에 사용한다.
    - 예 : 시스템 안에서 1개 밖에 존재하지 않는 것을 프로그램으로 표현하고 싶을 경우
    - 인간이라면 심장, 프로그램이라면 현재의 시스템 설정 등이 있다.

  - 물론, 주의를 기울여 프로그래밍하여 해당 클래스의 생성자가 1회만 실행되도록 작성되면 인스턴스는 1개만 생성된다. 그러나, `프로그래머가 주의를 기울여 1개만 생성되는 것`이 아니라 강제하고 싶은 경우이다.
    - `지정한 클래스의 인스턴스가 '절대로' 1개밖에 존재하지 않는 것을 '보증'하고 싶을 때`
    - `인스턴스가 1개밖에 존재하지 않는 것을 프로그램 상에 표현하고 싶을 때`

    - 복수의 인스턴스가 존재하면 인스턴스들이 서로 영향을 미치고, 뜻하지 않은 버그가 발생할 가능성이 있지만, 인스턴스가 1개밖에 없다라는 보증이 있으면 그 전제 조건 아래에서 프로그래밍할 수 있다.

- 클래스 다이어그램
  ```
  Singletone(클래스 명)
  -singleton(객체 선언부)
  -Singleton(private 생성자)
  +getInstance(static 메소드)
  ```

- 관련패턴
  - Abstract Factory 패턴
  - Builder 패턴
  - Facade 패턴
  - Prototype 패턴

<br>

### Prototype Pattern

<br>

### Builder Pattern

<br>

### Abstact Factory Pattern

<br>

### Bridge Pattern

<br>

### Strategy Pattern

<br>

### Composite Pattern

<br>

### Decorator Pattern

<br>

### Visitor Pattern

<br>

### Chain of Responsibility Pattern

<br>

### Facade Pattern

<br>

### Mediator Pattern

<br>

### Observer Pattern

<br>

### Memento Pattern

<br>

### State Pattern

<br>

### Proxy Pattern

<br>

### Command Pattern

<br>

### Interpreter Pattern

<hr>
<br>