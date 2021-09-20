# 자바

## :book: `자바의 특징`에 대해 설명해주세요.
1. `이식성이 높은 언어`입니다.
2. `객체 지향 언어`입니다.
3. `함수적 스타일 코딩을 지원`합니다.
4. 메모리를 `자동으로 관리`합니다.
5. `멀티 스레드(Multi-Thread)`를 쉽게 구현할 수 있습니다.
6. `동적 로딩(Dynamic Loading)`을 지원합니다.
7. `오픈소스 라이브러리가 풍부`합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: 자바의 `컴파일 과정`에 대해 설명해주세요.
> 자바 프로그램은 `*.java` 파일을 작성하는 것부터 시작되며 이것을 소스 파일이라고 합니다.

1. 소스 파일을 `컴파일러(javac.exe)`로 컴파일(Compile)하면 확장자가 `*.class`인 바이트 코드 파일(Byte Code File)이 생성됩니다.
2. 바이트 코드 파일은 `JVM 구동 명령어(java.exe)`에 의해 해석되고 해당 운영체제에 맞게 기계어로 번역됩니다.
3. 바이트 코드는 하나지만 `JVM에 의해 번역되는 기계어는 운영체제에 따라 달라`집니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `JVM의 구조`에 대해 설명해주세요.
### Java Classloader
> 자바 클래스(*.class)를 자바 가상 머신(JVM)으로 동적 로드하는 자바 런타임 환경(JRE)의 일부입니다.

- `JVM Memory(Runtime Data Area)` : 클래스로더에 의해 데이터가 적재되는 공간입니다.
- `메소드 영역(Method Area)` : JVM이 시작할 때 생성되고 모든 스레드가 공유하는 영역으로 코드에서 사용되는 클래스들을 클래스로더로 읽어 클래스별로 분류하여 저장합니다.
- `힙 영역(Heap Area)` : 객체와 배열이 생성되는 영역입니다. JVM 스택 영역의 변수나 다른 객체의 필드에서 참조합니다. 참조하는 변수나 필드가 없다면 의미가 없으므로 `Garbage Collector`가 쓰레기 객체를 힙 영역에서 자동으로 제거합니다. 
- `JVM 스택(Stack)` : 각 `스레드마다 하나씩 존재하며 스레드가 시작될 때 할당`됩니다. 메소드를 호출할 때마다 프레임(Frame)을 추가(push)하고 메소드가 종료되면 해당 프레임을 제거(pop)하는 동작을 수행합니다. 프레임 내부에는 `로컬 변수 스택`이 존재할 수 있습니다.
- `PC Registers` : 실행될 명령의 주소(address)를 가지고 있습니다.
- `Native Method Stacks` : 스레드에서 네이티브 방식의 메소드가 실행되면 해당 스택에 쌓인다. C언어로 작성된 메소드가 이에 해당됩니다.
### Execution Engine
> 클래스로더에 의해 JVM 메모리 공간에 적재된 바이트 코드를 실행하기 전에 기계어로 변경 후 사용합니다.

변경 방법에는 인터프리터(`Interpreter`)와 JIT(`Just-In-Time`) compiler가 있습니다.

<br>

### Native Method Interface
> 자바 네이티브 인터페이스(Java Native Interface, JNI)

자바 가상 머신 위에서 실행되고 있는 자바 코드가 `네이티브 응용 프로그램(하드웨어와 운영 체제 플랫폼에 종속된 프로그램들)`과 다른 언어들로 작성된 라이브러리들을 호출하거나 반대로 호출되는 것을 가능하게 하는 프로그래밍 프레임워크입니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `가비지 콜렉션`의 동작 흐름에 대해 설명해주세요.
> GC(Garbage Collector)라는 데몬 스레드에 의해 실행되며 대상이 되는 객체를 힙에서 제거합니다.

GC가 수행되는 절차는 아래와 같습니다.
1. 객체를 메모리에서 제거하기 전 해당 객체의 `finalize() 메소드를 호출`합니다.
2. `GC는 강제로 수행할 수 없습니다`. JVM이 힙 사이즈에 기반해 필요한 경우만 수행합니다.
3. System.gc()와 Runtime.gc()는 GC를 실행시키지 않고 `권유하므로 실행이 보장되지 않습니다`.
4. 힙에 새로운 객체를 생성할 메모리가 없다면 `Out Of Memory Error를 출력`합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: 자바의 `데이터 타입`에 대해 설명해주세요.
### 기본 데이터 타입
> 정수, 실수, 문자, 논리 리터럴을 직접 저장하는 타입입니다.

| 값의 종류 | 기본 타입 | 메모리 사용 크기 |
| --------- | --------- | ---------------- |
| 정수      | byte      | 1byte, 8bit      |
| 정수      | char      | 2byte, 16bit     |
| 정수      | short     | 2byte, 16bit     |
| 정수      | int       | 4byte, 32bit     |
| 정수      | long      | 8byte, 64bit     |
| 실수      | float     | 4byte, 32bit     |
| 실수      | double    | 8byte, 64bit     |
| 논리      | boolean   | 1byte, 8bit      |

<br>

### 데이터 변환
> 데이터 타입을 다른 데이터 타입으로 변환하는 것입니다.

1. 자동 타입 변환(Type Promotion)
   - 프로그램 실행 도중에 `자동적`으로 타입 변환이 일어나는 것입니다.
   - 작은 크기를 가지는 타입이 큰 크기를 가지는 타입에 저장될 때 발생합니다.
2. 강제 타입 변환(Type Casting)
   - `큰 크기의 타입은 작은 크기의 타입`으로 자동 타입 변환할 수 없습니다.
   - 그러나 큰 크기를 작은 크기로 쪼개면(`8byte를 4byte로`) 가능합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `객체`에 대해 설명해주세요.
> Object, 물리적으로 존재하거나 추상적으로 생각할 수 있는 것 중에서 자신의 속성을 가지고 있고 다른 것과 식별 가능한 것을 말합니다.

- 객체는 속성과 동작으로 구성되어 있습니다. 이를 필드(field)와 메소드(method)라고 합니다.
- 현실 세계의 객체를 소프트웨어 객체로 설계하는 것을 객체 모델링(Object Modeling)이라고 합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `캡슐화`에 대해 설명해주세요.
> 객체의 필드, 메소드를 하나로 묶어 실제 구현 내용을 감추는 것입니다.

외부 객체는 객체 내부 구조를 알지 못하며 객체가 제공하는 필드와 메소드만 이용할 수 있으며, 필드와 메소드를 캡슐화로 보호하는 이유는 아래와 같습니다.
  - 외부의 잘못된 사용으로 인해 객체가 손상되지 않도록 하기 때문입니다.
  - 자바는 접근 제한자(Access Modifier)를 사용해 캡슐화 멤버를 노출할지 은닉할지 결정할 수 있습니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `상속`에 대해 설명해주세요.
> 부모가 가지고 있는 성질을 자식에게 물려주는 것입니다.

이는 아래와 같은 설계/성능상 이점이 있습니다.
1. 상위 객체를 재사용하여 하위 객체를 `쉽고 빠르게 설계`할 수 있도록 도와줍니다.
2.  반복되는 `코드의 중복을 줄여`줍니다.
3. `개발 시간을 절약`할 수 있습니다.
4. `유지 보수 시간을 최소화`할 수 있습니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `다형성`에 대해 설명해주세요.
> 같은 타입이지만 실행 결과가 다양한 객체를 이용할 수 있는 성질입니다.

하나의 타입에 여러 객체를 대입함으로써 다양한 기능을 이용할 수 있도록 해주며 부모 타입에는 모든 자식 객체가, 인터페이스 타입에는 모든 구현 객체가 대입될 수 있습니다.
   - 다형성의 효과로 객체는 부품화가 가능합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `객체`와 `클래스`에 대해 설명해주세요.
> 자바에서의 설계도는 클래스입니다. 클래스에는 객체를 생성하기 위한 필드와 메소드가 정의되어 있습니다.

객체를 생성하는 순서는 아래와 같습니다.
1. 개발자가 설계를 하고, 클래스(설계도)를 생성합니다.
2. 클래스로부터 새로운 객체를 생성합니다. 이를 `인스턴스화`라고 합니다.
3. 클래스로부터 새로 생성된 객체를 해당 클래스의 인스턴스(instance)라고 합니다.

하나의 클래스로부터 여러 개의 인스턴스를 만들 수 있다는 것을 확실히 알아두세요!

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `스태틱`에 대해 설명해주세요.
> Static은 `정적`이라는 의미로 정적 변수와 정적 메소드를 선언하는데 사용됩니다.

static 키워드를 붙이면 자바는 메모리 할당을 1회만 수행하며 메모리 사용에 이점을 얻습니다.
1. 같은 곳의 메모리 주소만을 바라보므로 static 변수의 값을 공유합니다.
2. 메모리의 효율을 위해 static을 사용하기보단 공유의 목적으로 많이 사용합니다.

메소드에 static 키워드를 붙이면 해당 메소드의 안에서는 인스턴스 변수 접근이 불가능합니다.
1. static 변수만이 static 메소드에 접근할 수 있습니다.
2. 이러한 메소드는 유틸리티 메소드를 작성할 때 많이 사용됩니다.

Static은 차후 등장하는 `디자인 패턴의 Singleton`과 관련이 깊으니 잘 알아두세요.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `접근 제어자`에 대해 설명해주세요.
> 라이브러리 클래스는 외부 클래스에서 접근할 수 있는 멤버와 접근할 수 없는 멤버로 구분해서 설계해야 합니다.

1. 객세 생성을 막기 위해 생성자를 호출하지 못하게 합니다.
2. 객체의 특정 데이터를 보호하기 위해 해당 필드에 접근하지 못하게 합니다.
3. 특정 메소드를 호출할 수 없도록 제한할 필요가 있습니다.


이러한 기능을 구현하기 위한 것이 접근제한자(Access Modifier)입니다.

| 접근 제한 | 적용대상                     | 접근할 수 없는 클래스                          |
| --------- | ---------------------------- | ---------------------------------------------- |
| public    | 클래스, 필드, 생성자, 메소드 | 없음                                           |
| protected | 필드, 생성자, 메소드         | 자식 클래스가 아닌 다른 패키지에 소속된 클래스 |
| default   | 클래스, 필드, 생성자, 메소드 | 다른 패키지에 소속된 클래스                    |
| private   | 필드, 생성자, 메소드         | 모든 외부 클래스                               |

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `인터페이스`와 `추상 클래스`의 차이점
### 인터페이스(Interface)
> 구현 객체의 같은 동작을 보장하기 위해 사용됩니다.

- 클래스가 아닙니다.
- 클래스와 관련이 없습니다.
- 한 개의 클래스에 여러 개의 인터페이스를 구현할 수 있습니다.

<br>

### 추상 클래스(Abstract class)
> 상속을 강제하여 기능을 확장하기 위해 사용됩니다.

- 클래스입니다.
- 클래스와 관련이 있으며 디자인패턴의 Factory Method에도 연관이 있습니다.
- 한 개의 클래스는 하나의 추상 클래스만을 상속합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `어노테이션`에 대해 설명해주세요.
> 일종의 메타데이터(Metadata)로 컴파일 과정과 실행 과정에서 코드를 어떻게 컴파일하고 처리할 것인지를 알려주는 정보입니다.

어노테이션(Annotation) 자체는 아무런 동작을 가지지 않는 표식일 뿐이나 리플렉션(Reflection)을 이용해 어노테이션의 적용 여부와 엘리먼트 값을 읽고 처리할 수 있습니다. 어노테이션 제공의 목적은 아래와 같다.
1. 컴파일러에게 코드 문법 에러를 체크하도록 정보를 제공합니다.
2. 소프트웨어 개발 툴이 빌드나 배치 시 코드를 자동으로 생성할 수 있도록 정보를 제공합니다.
3. 실행 시 (런타임 시) 특정 기능을 실행하도록 정보를 제공합니다.

선언과 적용은 아래와 같습니다.

```java
public @interface AnnotationName{
	// 엘리먼트 타입은 기본 데이터 타입과 String, 열거, Class, 배열 타입을 사용할 수 있습니다.
	타입 elementName1() [default 값];
	타입 elementName2() [default 값];
}

@AnnotationName(elementName1="값", elementName2=3);
public applyAnnotation(){
  // 정의
}
```

### 적용 대상

| ElementType 열거 상수 | 적용 대상                     |
| --------------------- | ----------------------------- |
| TYPE                  | 클래스, 인터페이스, 열거 타입 |
| ANNOTATION_TYPE       | 어노테이션                    |
| FIELD                 | 필드                          |
| CONSTRUCTOR           | 생성자                        |
| METHOD                | 메소드                        |
| LOCAL_VARIABLE        | 로컬 변수                     |
| PACKAGE               | 패키지                        |

<br>

### 유지 정책

| RetentionPolicy 열거 상수 | 설명                                                                                                           |
| ------------------------- | -------------------------------------------------------------------------------------------------------------- |
| SOURCE                    | 소스에서만 어노테이션 정보를 유지하며 바이트 코드 파일에는 정보가 남지 않음                                    |
| CLASS                     | 바이트 코드 파일까지 어노테이션 정보를 유지하며 리플렉션을 이용해 어노테이션 정보를 얻을 수 없음               |
| RUNTIME                   | 바이트 코드 파일까지 어노테이션 정보를 유지하면서 리플렉션을 이용한 런타임 시에 어노테이션 정보를 얻을 수 있음 |

```java
@Target({ElementType.TYPE, ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface AnnotationName {
}
```

### 어노테이션 정보 사용하기
- 필드, 생성자, 메소드에 적용된 어노테이션 정보를 얻으려면 Class의 메소드를 통해 아래와 같은 타입의 배열을 얻어야 합니다.

  | 리턴 타입     | 메소드명(매개 변수)    | 설명                                  |
  | ------------- | ---------------------- | ------------------------------------- |
  | `Field[]`     | `getFields()`          | 필드 정보를 Field 배열로 리턴         |
  | `Constructor` | `getConstructor()`     | 생성자 정보를 Constructor 배열로 리턴 |
  | `Method[]`    | `getDeclaredMethods()` | 메소드 정보를 Method 배열로 리턴      |

- 그 후 다음 메소드를 통해 어노테이션 정보를 얻을 수 있습니다.

  | 리턴 타입      | 메소드명(매개 변수)                                                | 내용                                                                                                                                                   |
  | -------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `boolean`      | `isAnnotationPresent(Class<? extends Annotation> annotationClass)` | 지정한 어노테이션이 적용되었는지 여부. Class에서 호출했을 때 상위 클래스에 적용된 경우에도 true를 리턴함                                               |
  | `Annotation`   | `getAnnotation(Class<T> annotationClass) `                         | 지정한 어노테이션이 적용되었다면 어노테이션을 리턴하고 아니라면 null을 리턴함. Class에서 호출했을 때 상위 클래스에 적용된 경우에도 어노테이션을 리턴함 |
  | `Annotation[]` | `getAnnotations()`                                                 | 적용된 모든 어노테이션을 리턴함. Class에서 호출했을 때 상위 클래스에 적용된 경우도 모두 포함이며 적용된 어노테이션이 없다면 길이가 0인 배열을 리턴함   |
  | `Annotation[]` | `getDeclaredAnnotations()`                                         | 직접 적용된 모든 어노테이션을 리턴함. Class에서 호출했을 때 상위 클래스에 적용된 어노테이션은 포함되지 않음                                            |

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `Overloading`과 `Overriding`의 차이점
`오버라이딩(Overriding)`은 상위 클래스에 존재하는 메소드를 하위 클래스에서 필요에 맞게 재정의하는 것, `오버로딩(Overloading)`은 상위 클래스의 메소드와 이름, return 값은 동일하지만 매개변수만 다른 메소드를 만드는 것을 의미합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `==` 연산자와 `equals()` 메소드의 차이점
> 연산자와 메소드로 개념이 다릅니다.

`==`는 대상의 주소값을, `equals()`는 대상의 값을 비교합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `equals()`와 `hashCode()`에 대해 설명해주세요.
`equals()`는 두 객체의 내용(값)을, `hashCode()`는 두 객체가 같은 객체인지 확인하는 메소드입니다. `hashCode()`는 해당 객체가 메모리에서 가지는 해쉬 주소값을 반환합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `리플렉션`에 대해 설명해주세요.
> Class 객체를 이용하면 클래스의 생성자, 필드, 메소드 정보를 알아낼 수 있는데 이것이 리플렉션(Reflection)입니다.

class 객체는 `getDeclaredConstructors()`, `getDeclaredFields()`, `getDeclaredMethods()` 메서드를 제공합니다.
- 세 메소드는 각각 `Constructor 배열`, `Field 배열`, `Method 배열`을 반환합니다.
- 그러나 클래스에 선언된 멤버만이 해당되며 상속된 멤버는 가져오지 않습니다.
  - 상속 멤버를 얻고 싶다면 `getFields()`, `getMethods()`를 사용합니다(public 멤버만 가져옵니다).

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `String`, `StringBuffer`, `StringBuilder의` 차이점
### String
> 문자열을 저장하는 String은 내부 문자열을 수정할 수 없습니다.

- `replace()` 메서드의 경우 내부 문자를 대치하는 것이 아니라 대치된 새로운 문자열을 리턴하는 것으로 객체의 내부 데이터를 수정할 수 없으므로 새로운 String 객체를 생성하는 것입니다.

- 문자열을 결합하는 `+` 연산자를 많이 사용하면 String 객체의 수가 늘어나 프로그램 성능이 저하되므로 문자열 변경이 많을 때는 `StringBuffer`와 `StringBuilder` 클래스를 권장합니다.
  - 두 클래스는 내부 버퍼(데이터를 임시로 저장하는 메모리로 buffer 안에서 추가, 수정, 삭제 작업을 할 수 있도록 설계)에 문자열을 저장합니다.

<br>

### StringBuffer, StringBuilder
> 문자열을 수정하면서 메모리가 부족할 경우 자동으로 버퍼 크기를 늘린다.

두 클래스의 사용법은 동일하나 스레드 환경에서의 차이가 존재합니다.
  - `StringBuffer` : **멀티 스레드 환경**에서 사용할 수 있도록 동기화가 적용되어 있어 스레드에 안전합니다.
  - `StringBuilder` : **단일 스레드 환경**에서만 사용하도록 설계되어 있습니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `스레드`에 대해 설명해주세요.
> 일반 스레드(Thread)와 거의 차이가 없으며, 자바 가상 머신이 운영체제의 역할을 합니다.

자바에는 프로세스가 존재하지 않고 스레드만 존재하며, 자바 스레드는 JVM에 의해 스케줄되는 실행 단위 코드 블록입니다. 즉, 자바의 스레드 스케줄링은 모두 자바 가상 머신에 의해 이루어집니다.

아래와 같은 스레드와 관련된 많은 정보들도 자바 가상 머신이 관리합니다.
1. 스레드가 몇 개 존재하는지
2. 스레드로 실행되는 프로그램 코드의 메모리 위치는 어디인지
3. 스레드의 상태는 무엇인지
4. 스레드 우선순위는 얼마인지


**개발자는 자바 스레드로 작동할 스레드 코드를 작성하고, 스레드 코드가 생명을 가지고 실행을 시작하도록 자바 가상 머신에 요청하는 일 뿐입니다.**

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `동기화 메소드`에 대해 설명해주세요.
> 사용 중인 객체를 다른 스레드가 변경할 수 없도록 하려면 작업이 끝날 때까지 객체에 잠금을 걸어야 합니다.

단 하나의 스레드만 실행할 수 있는 코드 영역을 임계 영역(critical section)이라고 하며 자바는 이 임계 영역을 지정하기 위해 동기화 메소드(synchronized method)와 동기화 블록을 제공합니다.

동기화 메소드를 만드는 방법은 메소드 선언에 synchronized 키워드를 붙이면 되고, 일부 내용만 임계 영역으로 지정하고 싶다면 동기화 블록을 만들면 됩니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `제네릭`에 대해 설명해주세요.
> 잘못된 타입이 사용될 수 있는 문제를 컴파일 과정에서 제거할 수 있게 하는 것이 제네릭(Generic)입니다.

클래스와 인터페이스, 메소드를 정의할 때 타입(type)을 파라미터(parameter)로 사용할 수 있도록 합니다. 그로 인해 컴파일 시 강한 타입 체크를 하여 런타임에 발생하는 타입 에러를 사전에 방지합니다.

또한 타입 변환(Type Casting)을 제거합니다. 비제네릭 코드는 불필요한 타입 변환을 하기 때문에 프로그램 성능에 악영향을 미치니까요.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `컬렉션 프레임워크`에 대해 설명해주세요.
> 자료 구조(Data Structure)를 바탕으로 java.util 패키지에 컬렉션과 관련된 인터페이스와 클래스를 포함시켜 놓고 이들을 컬렉션 프레임워크(Collection Framework)라고 부릅니다.

다수의 객체를 저장할 필요가 있을 경우 배열을 사용하지만 배열은 생성 시 크기가 고정되므로 불특정 다수의 객체를 저장하기엔 문제가 있었으며, 객체를 삭제했을 때 해당 인덱스가 비어버리는 문제점도 존재했습니다.

위의 문제를 해결하고 객체들을 효율적으로 추가, 삭제, 검색 할 수 있어야 했기에 등장한 라이브러리입니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `리스트`의 종류와 특징에 대해 설명해주세요.
> List 클래스는 순서를 유지하고 중복 저장이 가능합니다.

구현 클래스는 아래와 같습니다.
1. ArrayList
2. Vector
3. LinkedList

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `셋`의 종류에 대해 설명해주세요.
> Set 클래스는 순서를 유지하지 않고 중복 저장이 불가능합니다.

구현 클래스는 아래와 같습니다.
1. HashSet
2. TreeSet(SortedSet)

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `맵`의 종류에 대해 설명해주세요.
> Map 클래스는 키와 값의 쌍으로 저장되며, 키를 중복으로 저장할 수는 없습니다.

구현 클래스는 아래와 같습니다.
  - HashMap
  - HashTable
  - TreeMap(SortedMap)
  - Properties

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `벡터`와 `배열 리스트`의 차이점
> ArrayList와 동일한 내부 구조를 가지고 있지만 Vector는 동기화된(Synchronized) 메소드로 구성되어 있습니다.

멀티 스레드가 동시에 Vector에 관련된 메소드들을 실행할 수 없습니다. 반드시 하나의 스레드가 실행을 완료해야만 다른 스레드를 실행할 수 있기에 멀티 스레드 환경에서 안전하게 객체를 추가, 삭제할 수 있습니다.

이것을 **스레드가 안전(Thread Safe)** 하다고 합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>

## :book: `직렬화`에 대해 설명해주세요.
> 직렬화(Serialization), 자바 시스템 내부에서 사용되는 객체 또는 데이터를 외부의 자바 시스템에서도 사용할 수 있도록 바이트(byte) 형태로 데이터 변환하는 기술과 바이트로 변환된 데이터를 다시 객체로 변환하는 기술(역직렬화)입니다.

자바 가상 머신의 메모리에 상주(힙 또는 스택)되어 있는 객체 데이터를 바이트 형태로 변환하는 기술과 직렬화된 바이트 형태의 데이터를 객체로 변환해서 자바 가상 머신으로 상주시키며 CSV, JSON의 형태를 가장 많이 사용합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava)</sup>

<hr>
<br>