# `Java`의 디자인 패턴

<div align=center>

<img src="./design-pattern-category.jpg" width="500">

</div>

<br>

## Iterator Pattern(반복자 패턴)
> 복수의 요소가 모여 있는 집합에서 요소를 순서대로 지정해서 처리하는 패턴

`for(int - 0; i < arr.length; i++){...}` 같은 반복문처럼 i를 하나씩 증가시키면 현재 주목하고 있는 배열의 요소를 차례대로 처리해 갑니다.

여기서 사용되는 변수 i의 기능을 추상화하는 것을 Iterator 패턴이라고 합니다.

### 구성요소
- Iterator(반복자)의 역할
  - 요소를 순서대로 검색해가는 인터페이스(API)를 결정합니다.
  - 다음 요소가 존재하는지를 얻기 위해 hasNex() 메소드를, 다음 요소를 얻기 위해 next() 메소드를 사용합니다.

- ConcreteIterator(구체적인 반복자)의 역할
  - Iterator가 결정한 인터페이스(API)를 실제로 구현합니다.

- Aggregate(집합체)의 역할
  - Iterator 역할을 만들어내는 인터페이스(API)를 결정합니다.

- ConcreteAggregate(구체적인 집합체)의 역할
  - Aggregate 역할이 결정한 인터페이스(API)를 실제로 구현합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Adapter Pattern
> 서로 다른 인터페이스(API)를 갖는 클래스들을 연결하는 패턴

요소를 순서대로 검색해 가는 인터페이스(API)를 결정합니다.

다음 요소가 존재하는지를 얻기 위해 hasNex() 메소드를, 다음 요소를 얻기 위해 next() 메소드를 사용합니다.

- Extends 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/adapter/extendsEx/Main.java)

- Instance 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/adapter/instanceEx/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Template Method Pattern
> 상위 클래스에서 처리의 뼈대를 세우고, 구체적인 처리를 하위 클래스에서 실행하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/templateMethod/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Factory Method Pattern
> 상위 클래스에서 인스턴스 작성법의 뼈대를 세우고 구체적인 작성은 하위 클래스에서 실행하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/factory/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Singleton Pattern
> `인스턴스가 한 개밖에 존재지 않음을 보증`하는 패턴

- 싱글톤은 유일한 인스턴스를 얻기 위한 static 메소드를 가지고 있으며, 이 메소드는 언제나 동일한 인스턴스를 반환합니다.

### 특징
- `클래스의 인스턴스가 오직 하나만 필요`할 경우에 사용합니다.
  - 인간이라면 심장, 프로그램이라면 현재의 시스템 설정 등이 있습니다.
  - EX) 시스템 안에서 1개 밖에 존재하지 않는 것을 프로그램으로 표현하고 싶을 경우

- 물론, 주의를 기울여 프로그래밍하여 해당 클래스의 생성자가 1회만 실행되도록 작성되면 인스턴스는 1개만 생성됩니다. 그러나, `프로그래머가 주의를 기울여 1개만 생성되는 것`이 아니라 강제하고 싶은 경우입니다.
  - 지정한 클래스의 인스턴스가 1개밖에 존재하지 않는 것을 `반드시 보증`하고 싶을 때
  - 인스턴스가 1개밖에 존재하지 않는 것을 프로그램 상에 표현하고 싶을 때
  - 복수의 인스턴스가 존재하면 인스턴스들이 서로 영향을 미치고, 뜻하지 않은 버그가 발생할 가능성이 있지만, 인스턴스가 1개밖에 없다라는 보증이 있으면 그 전제 조건 아래에서 프로그래밍할 수 있습니다.

### 관련패턴
- Abstract Factory 패턴
- Builder 패턴
- Facade 패턴
- Prototype 패턴

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Prototype Pattern
> 모형이 되는 인스턴스를 복사해서 인스턴스를 만드는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/prototype/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Builder Pattern
> 복잡한 인스턴스를 단계적으로 조립하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/builder/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Abstact Factory Pattern
> 공장과 같이 부품을 조합해서 인스턴스 생성을 실행하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/abstractFactory/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Bridge Pattern
> 2종류의 확장이 혼재하는 프로그램을 기능의 계층과 구현의 계층으로 분리하고, 그 사이를 연결하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/bridge/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Strategy Pattern
> 알고리즘을 전부 교체해서 수정하기 쉽도록 하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/strategy/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Composite Pattern
> 그릇과 내용물을 동일시해서 재귀적인 구조를 구축하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/composite/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Decorator Pattern
> 장식과 내용물을 동일시해서 장식을 여러 겹 중복되게 하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/decorator/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Visitor Pattern
> 데이터 구조를 돌아다니면서 동일한 조작을 반복해서 적용하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/visitor/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Chain of Responsibility Pattern
> 복수의 오브젝트(객체)가 연결되어 있는 내부의 어딘가에서 일을 수행하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/chain_of_responsibility/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Facade Pattern
> 복잡하게 얽힌 클래스를 개별적으로 제어하는 것이 아니라 창구 역할을 하는 클래스를 하나 배치해서 시스텀 전체의 조작성을 좋게 하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/facade/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Mediator Pattern
> 복수의 클래스가 상호간에 직접 의사 소통을 하는 것이 아니라 중개역을 하는 클래스를 하나 준비하고, 그 클래스하고만 의사 소통을 하게 해서 프로그램을 단순하게 만드는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/mediator/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Observer Pattern
> 상태가 변화하는 클래스와 그 변화를 통지받는 클래스를 분리해서 생각하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/observer/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Memento Pattern
> 현재의 상태를 저장해 두고 필요할 때 복귀시키는 undo 기능을 설정하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/memento/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## State Pattern
> 상태를 클래스로 표현하고 상태에 적합한 switch문의 사용을 줄여주는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/state/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Flyweight Pattern
> 복수의 장소에서 동일한 것이 등장할 때 그것들을 공유해서 낭비를 없애는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/flyweight/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Proxy Pattern
> 정말로 목적한 것이 필요하게 될 때까지 대리인을 사용해서 처리를 진행시키는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/proxy/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Command Pattern
> 요구나 명렁을 형태로 만들어서 클래스로 표현하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/command/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## Interpreter Pattern
> 문법규칙을 클래스로 표현하는 패턴

- 예제 [Link](https://github.com/InSeong-So/IT-Note/blob/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4/java/interpreter/Main.java)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>