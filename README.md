# Developer's Note
### :blue_heart: 개요 :blue_heart:
:star2:리뉴얼중입니다!:star2:

> 해당 저장소는 아래와 같은 목적으로 작성하고 있습니다.
1. 누가 보아도 쉽게 이해할 수 있는 IT 기술의 기록을 지향합니다.
2. 산재 되어 있는 조각 데이터를 수집하고, 흩어진 저장소를 통합하고 있습니다.
3. 코드를 기록하더라도 주석과 개념 정리를 하게끔 노력합니다.
4. 미비된 정보와 누락된 내용은 상시 수정하고 있습니다.
5. 면접 질문으로, 답변으로, 자신이 알고 있는 IT 기술에 대한 검증으로 쓰일 수 있습니다.

<br>

### :book: 짤막한 IT 용어사전 :book:
<details><summary>:persevere:너무 길어요:sob: <strong>자세히보기!</strong></summary>

<br>

|용어|정의|
|----|----|
|`Annotation`|자바 소스 코드에 추가하여 사용할 수 있는 메타데이터의 일종|
|`API`|Application Programming Interface, 응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스|
|`Architecture`|시스템의 구조나 구조들로 각 요소들과 외부에 보이는 특성들 및 요소간의 관계|
|`Class`|객체를 정의 하기 위한 상태(멤버변수)와 메서드(멤버변수)로 구성되는 틀|
|`CSS`|Cascading Style Sheet, 문서의 콘텐츠와 레이아웃, 글꼴 및 시각적 요소들로 표현되는 문서의 외관(디자인)을 분리하기 위한 목적으로 사용하는 언어|
|`Cursor`|테이블에서 여러 개의 행을 쿼리한 후에, 쿼리의 결과인 행 집합을 한 행씩 처리하기 위해 사용하는 데이터베이스 객체|
|`DCL`|Double checked locking, 멀티 스레드 환경에 안전한 Singleton 패턴을 구현하기 위한 기법. 이미 인스턴스가 생성된 경우에 동기화 블록에 들어가지 않도록 하기위해 두 번의 검사를 하도록 하는 프로그래밍 기법|
|`Encapsulation`|객체의 속성(data fields)과 행위(메서드, methods)를 하나로 묶고, 실제 구현 내용 일부를 외부에 감추어 은닉하고자 하는 프로그래밍 속성|
|`Factory`|어떤 클래스의 인스턴스를 만들지를 서브클래스에서 결정하게 하는 객체 생성 디자인패턴|
|`GC`|Garbage Collector, 힙 메모리에 남아있는 데이터를 효율적으로 관리(삭제)하는 역할을 하는 도구|
|`Glue`|Code 코드간 단단하게 결합되어 동작의 수정 및 테스트가 어려운 코드|
|`Index`|데이터들의 ROWID 정보를 별도의 세그먼트에 관리하는 데이터의 위치정보를 가진 데이터베이스 객체|
|`Inheritance`|한 클래스가 다른 클래스에서 정의된 속성(데이터, 함수)를 이어받아 그대로 사용하는 객체지향 속성|
|`Instance`|추상화 개념 또는 클래스 객체, 컴퓨터 프로세스 등과 같은 템플릿이 실제 구현된 것|
|`JDK`|Java Development Kit, 자바 SE, 자바 EE, 또는 자바 ME 플랫폼 중 하나를 구현한 것으로 솔라리스, 리눅스, 맥 OS X, 또는 윈도 자바 개발자를 대상으로 오라클에 의해 바이너리 제품으로 제공되는 개발 도구|
|`JNI`|Java Native Interface, 자바 가상 머신(JVM)에 실행되고 있는 자바코드를 네이티브 응용 프로그램(특히 하드웨어와 운영 체제 플랫폼)과 C, C++ 그리고 어샘블리 같은 다른 언어들로 구현된 라이브러리에 의해 호출되거나 호출할 수 있는 프로그래밍 프레임워크|
|`JS`|넷스케이프에서 만든 인터프리터형 프로그래밍 또는 스크립트 언어
|`JSP`|HTML 내에 자바 코드를 삽입하여 웹 서버에서 동적으로 웹 페이지를 생성하여 웹 브라우저에 돌려주는 언어
|`JVM`|Java Virtual Machine, 자바의 소스 코드를 컴파일 하게 되면 바이트 코드로 변환되는데 JVM 은 이러한 바이트 코드를 읽어서 실행할 수 있도록 해주는 도구
|`Log`|프로그램 개발이나 운영 시 발생하는 문제점을 추적하거나 운영 상태를 모니터링하기 위한 텍스트
|`Modularity`|비슷한 기능을 갖는 코드들은 같은 단위 프로그램 코드 내에 함께 포함시켜야 하며, 다른 기능들은 별도의 독립적인 단위 코드로 개발됨으로써, 유지보수와 타 프로그램들에서 쉽게 이 코드들을 재사용할 수 있도록 개발해야 한다는 프로그래밍 개념|
|`OOP`|Object-Oriented Promgramming, 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러 개의 독립된 단위, 즉 "객체"들의 모임으로 파악하고자 하는 프로그래밍 패러다임
|`Optimizer`|사용자가 질의한 SQL 문을 처리 가능한 실행계획을 탐색하고 각 실행계획에 대한 비용을 추정하여 최적의 실행계획을 수립하는 DBMS 의 핵심엔진
|`OS`|Operating System, 시스템 하드웨어를 관리할 뿐 아니라 응용 소프트웨어를 실행하기 위하여 하드웨어 추상화 플랫폼과 공통 시스템 서비스를 제공하는 시스템 소프트웨어
|`Overloding`|같은 함수 이름을 가지고 있으나 매개변수, 리턴타입 등의 특징은 다른 여러개의 서브프로그램 생성을 가능하게 하는 프로그래밍 기법
|`Overriding`|객체 지향 프로그래밍에서 서브클래스 또는 자식 클래스가 자신의 슈퍼클래스들 또는 부모 클래스들 중 하나에 의해 이미 제공된 메소드를 특정한 형태로 구현하는 것을 제공하는 프로그래밍 기법
|`Package`|클래스 또는 인터페이스를 포함 시킬 수 있으며, 서로 관련된 클래스들끼리 그룹 단위로 나누어 놓아 클래스 관리를 용이하게 하는 클래스의 묶음
|`Platform`|소프트웨어가 구동 가능한 하드웨어 아키텍처나 소프트웨어 프레임워크. 일반적으로 컴퓨터의 아키텍처, 운영 체제(OS), 프로그램 언어, 그리고 관련 런타임 라이브러리 또는 GUI 를 포함하는 개념 
|`Polymorphism`|하나의 객체를 여러 개의 타입으로, 하나의 타입으로 여러 종류의 객체를 여러 가지 모습으로 해설할 수 있는 프로그래밍 속성|
|`Procedure`|일련의 쿼리를 마치 하나의 함수처럼 실행하기 위한 쿼리의 집합|
|`Prototype`|생성할 객체들의 타입이 프로토타입인 인스턴스로부터 결정되도록 하며, 인스턴스가 새 객체를 만들기 위해 자신을 복제(clone)하는 디자인패턴|
|`Serialization`|데이터 구조나 오브젝트 상태를 동일하거나 다른 컴퓨터 환경에 저장하고 나중에 재구성할 수 있는 포맷으로 변환하는 과정|
|`Servlet`|자바를 사용하여 웹페이지를 동적으로 생성하는 서버측 프로그램 혹은 그 사양|
|`Singleton`|생성자가 여러 차례 호출되더라도 실제로 생성되는 객체는 하나이고 최초 생성 이후에 호출된 생성자는 최초의 생성자가 생성한 객체를 리턴하는 디자인패턴|
|`Spring Framework`|동적인 웹 사이트를 개발하기 위한 여러 가지 서비스를 제공하는 자바 플랫폼을 위한 오픈소스 애플리케이션 프레임워크|
|`SQL`|Structured Query Language, 관계형 데이터베이스 관리 시스템(RDBMS)의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어|
|`Synonym`|오라클 객체(테이블, 뷰, 시퀀스, 프로시저)에 대한 대체이름(Alias)를 말하며, 실질적으로 그 자체가 객체가 아니라 객체에 대한 직접적인 참조|
|`Thread-Safe`|멀티 스레드 프로그래밍에서 일반적으로 어떤 함수나 변수, 혹은 객체가 여러 스레드로부터 동시에 접근이 이루어져도 프로그램의 실행에 문제가 없어야 한다는 원칙|
|`Transaction`|데이터베이스 등의 시스템에서 사용되는 쪼갤 수 없는 업무처리의 단위|
|`Trigger`|테이블에 대한 이벤트에 반응해 자동으로 실행되는 작업|
|`XML`|Extensible Markup Language, 다른 특수한 목적을 갖는 마크업 언어를 만드는데 사용하도록 권장하는 다목적 마크업 언어|
|`IaaS(Infrastructure as a Service)`|PaaS 와 SaaS 의 기반인 Iass 를 서비스로 제공하기 위해 기존 서버 호스팅보다 H/W 확장성이 좋고 탄력적이며 빠른 제공을 할 수 있는 가상화 기술을 이용|
|`PaaS(Platform as a Service)`|서비스를 개발 할 수 있는 안정적인 환경(Platform)과 그 환경을 이용하는 응용 프로그램을 개발 할 수 있는 API 까지 제공하는 형태|
|`SaaS(Software as a Service)`|Cloud 환경에서 동작하는 응용프로그램을 서비스 형태로 제공|

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

</details>

<hr>
<br>

### :point_down: 챕터 바로가기 :point_down:
<details><summary>:persevere:너무 길어요:sob: <strong>자세히보기!</strong></summary>

<br>

<table align="center">
  <thead>
    <th>구분</th>
    <th>항목</th>  
  </thead>
  <tbody>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D">:cat:개발상식</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-api%EC%99%80-sdk%EB%A5%BC-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">API와 SDK를 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EA%B3%BC-5%EA%B0%80%EC%A7%80-%EC%9B%90%EC%B9%99%EC%9D%84-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">객체 지향형 프로그래밍과 5가지 원칙을 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%9D%80-%EB%AD%90%EC%97%90%EC%9A%94">함수형 프로그래밍은 뭐에요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EC%88%9C%EC%88%98-%ED%95%A8%EC%88%98%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">순수 함수란 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EA%B0%9D%EC%B2%B4-%EC%A7%80%ED%96%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EA%B3%BC-%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%98-%EA%B0%80%EC%9E%A5-%ED%81%B0-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">객체 지향 프로그래밍과 함수형 프로그래밍의 가장 큰 차이점은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%99%80-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">라이브러리와 프레임워크의 차이점을 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-model1%EA%B3%BC-model2%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4-%EB%8B%A4%EB%A5%B8%EA%B0%80%EC%9A%94  ">Model1과 Model2는 무엇이 다른가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-mvc-%ED%8C%A8%ED%84%B4%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">MVC 패턴은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-mvp-%ED%8C%A8%ED%84%B4%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">MVP 패턴은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-mvvm-%ED%8C%A8%ED%84%B4%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">MVVM 패턴은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-flux-%ED%8C%A8%ED%84%B4%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">Flux 패턴은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-rest-restful%EC%9D%80-%EB%AD%90%EC%A3%A0-restful-api%EB%8A%94%EC%9A%94">REST, RESTful은 뭐죠? RESTful API는요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EC%A0%95%EC%A0%81%EB%8F%99%EC%A0%81-%ED%83%80%EC%9D%B4%ED%95%91%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">정적/동적 타이핑에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-tdd%EB%8A%94%EC%9A%94">TDD는요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-git%EA%B3%BC-github%EC%9D%80-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8B%AC%EB%9D%BC%EC%9A%94">Git과 Github 은 어떻게 달라요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-spa%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">SPA는 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-pwa%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">PWA란 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-csr%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-ssr%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EC%A3%A0">CSR은 무엇이고, SSR은 무엇이죠?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-aot%EC%99%80-jit%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">AOT와 JIT에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EB%B0%98%EC%9D%91%ED%98%95reactivity-%EC%8B%9C%EC%8A%A4%ED%85%9C%EC%9D%B4%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">반응형(reactivity) 시스템이란 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EC%9B%B9-%EC%82%AC%EC%9D%B4%ED%8A%B8%EB%A5%BC-%EB%A7%8C%EB%93%A4-%EB%95%8C-%EA%B3%A0%EB%A0%A4%ED%95%B4%EC%95%BC-%ED%95%A0-%EC%82%AC%ED%95%AD%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94">웹 사이트를 만들 때 고려해야 할 사항은 무엇이 있을까요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EC%9B%B9-%ED%8E%98%EC%9D%B4%EC%A7%80%EB%A5%BC-%EB%A7%8C%EB%93%A4-%EB%95%8C%EC%9D%98-%EA%B3%BC%EC%A0%95%EC%9D%84-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%8B%A4-%EC%88%98-%EC%9E%88%EC%9D%84%EA%B9%8C%EC%9A%94">웹 페이지를 만들 때의 과정을 설명해주실 수 있을까요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EC%A0%90%EC%A7%84%EC%A0%81-%ED%96%A5%EC%83%81%EB%B2%95%EA%B3%BC-%EC%9A%B0%EC%95%84%ED%95%9C-%EC%84%B1%EB%8A%A5%EC%A0%80%ED%95%98%EB%B2%95%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%A5%BC-%EC%84%A4%EB%AA%85%ED%95%98%EC%8B%A4-%EC%88%98-%EC%9E%88%EC%8A%B5%EB%8B%88%EA%B9%8C">점진적 향상법과 우아한 성능저하법의 차이를 설명하실 수 있습니까?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%ED%91%9C%EC%A4%80%EC%9D%98-%EC%A4%91%EC%9A%94%EC%84%B1%EC%97%90-%EA%B4%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">표준의 중요성에 관해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-%EB%AA%A8%EB%85%B8%EB%A0%88%ED%8F%AC%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EC%A7%80-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">모노레포는 무엇인지 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter01-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D#book-fouc%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94-%EB%98%90-fouc%EB%A5%BC-%ED%94%BC%ED%95%98%EA%B8%B0-%EC%9C%84%ED%95%B4%EC%84%A0-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98%EC%9A%94">FOUC에 대해 설명해주세요. 또 FOUC를 피하기 위해선 어떻게 해야 하나요?</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C">:dog:운영체제</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#ram-%EA%B3%BC-rom-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">RAM 과 ROM 에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#process-%EC%99%80-thread-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Process 와 Thread 의 차이점을 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#multi-process-%EC%99%80-multi-thread-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Multi-Process 와 Multi-Thread 에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#user-thread-%EC%99%80-kernel-thread-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">User Thread 와 Kernel Thread 의 차이점은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#context-switching-%EC%9D%B4-%EB%AC%B4%EC%97%87%EC%9D%B8%EC%A7%80-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Context-Switching 이 무엇인지 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#deadlock-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Deadlock 에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#mutex-%EC%99%80-semaphore-monitor-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Mutex 와 Semaphore, Monitor 의 차이점을 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#memory-hierarchy-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Memory Hierarchy 에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#%EB%A9%94%EB%AA%A8%EB%A6%AC-%EA%B4%80%EB%A6%AC-%EC%A0%84%EB%9E%B5%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">메모리 관리 전략에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#%EB%A9%94%EB%AA%A8%EB%A6%AC-%ED%95%A0%EB%8B%B9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">메모리 할당 알고리즘에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#%ED%8E%98%EC%9D%B4%EC%A7%80-%EA%B5%90%EC%B2%B4-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">페이지 교체 알고리즘에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#fragmentation-%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">Fragmentation 란 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#paging-%EA%B3%BC-segmentation-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Paging 과 Segmentation 의 차이점에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#cisc-risc-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">CISC, RISC 의 차이점을 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#cpu-scheduling-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">CPU Scheduling 에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#sync-%EC%99%80-async-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Sync 와 Async 의 차이점을 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#virtual-memory-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Virtual Memory 에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#cache-memory-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Cache Memory 에 대해 알려주세요.</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC">:mouse:네트워크</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter02-%EC%9A%B4%EC%98%81%EC%B2%B4%EC%A0%9C#cache-memory-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">HTTP란 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#http-11%EA%B3%BC-http-20%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80-%EB%AD%90%EC%97%90%EC%9A%94">HTTP 1.0과 HTTP 2.0의 차이점은 뭐에요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#book-spdy-%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">SPDY 프로토콜에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#book-http-%EB%A9%94%EC%84%B8%EC%A7%80%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">HTTP 메세지란 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#book-http-%EB%A9%94%EC%84%9C%EB%93%9C-%EC%9D%98-%EC%A2%85%EB%A5%98%EB%8A%94-%EB%AD%90%EA%B0%80-%EC%9E%88%EB%82%98%EC%9A%94">HTTP 메서드의 종류는 뭐가 있나요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#book-http-%EC%83%81%ED%83%9C-%EC%BD%94%EB%93%9C-%EC%9D%98-%EC%A2%85%EB%A5%98%EB%8A%94-%EB%AD%90%EA%B0%80-%EC%9E%88%EB%82%98%EC%9A%94">HTTP 상태 코드란 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#%EC%84%9C%EB%B2%84%EB%A1%9C-%EC%9A%94%EC%B2%AD%ED%95%98%EB%A9%B4-%EC%9D%BC%EC%96%B4%EB%82%98%EB%8A%94-%EC%9D%BC%EB%A0%A8%EC%9D%98-%EA%B3%BC%EC%A0%95%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">서버로 요청하면 일어나는 일련의 과정에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#http-method-%EC%9D%98-%EC%A2%85%EB%A5%98%EB%8A%94-%EB%AD%90%EA%B0%80-%EC%9E%88%EB%82%98%EC%9A%94">GET, POST 방식의 차이점은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#http-%EC%99%80-https-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80%EC%9A%94">HTTP 와 HTTPS 의 차이점은요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#osi-%EA%B0%80-%EB%AD%90%EC%A3%A0">OSI 가 뭐죠?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#tcp-%EC%99%80-udp-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B4%EC%A3%A0">TCP 와 UDP 의 차이점은 무엇이죠?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#tcpip-%EB%8A%94-%EB%AD%90%EC%A3%A0">TCP/IP 는 뭐죠?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#tcp-3-way-hands-shaking-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">TCP-3-hands-shaking 에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#dns-%EC%9D%98-round-robin-%EB%B0%A9%EC%8B%9D%EC%9D%84-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">DNS 의 Round Robin 방식을 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#routing-table-%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">Routing Table 은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#url-encode-%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">URL Encode 는 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#utf-8%EC%9D%84-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">UTF-8을 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#url-%EA%B3%BC-uri-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EB%AA%A8%EB%A5%B4%EA%B2%A0%EC%96%B4%EC%9A%94">URL 과 URI 의 차이점을 모르겠어요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter03-%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC#server-%EC%9D%98-%EC%9D%B8%EC%A6%9D%EB%B0%A9%EC%8B%9D%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Server 의 인증방식에 대해 설명해주세요.</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4">:hamster:언어</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter04.0-%EC%96%B8%EC%96%B4#bookjava">Java</a></p>
        <p>Python</p>
        <p>JavaScript</p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter04.5-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC">:rabbit:프레임워크와 라이브러리</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter04.5-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC#java">Spring 면접&질문 | Java</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter04.5-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC#react">React 면접&질문 | JavaScript</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter04.5-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC#vue">Vue 면접&질문 | JavaScript</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter05-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4">:wolf:데이터베이스</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter05-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4#booksql%EC%9D%80-%EB%AD%90%EC%A3%A0">SQL은 뭐죠?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter05-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4#bookrdb-vs-nosql">RDB vs NoSQL</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter05-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4#bookrdb-vs-nosql">DB Normalization이 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter05-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4#bookrdb-vs-nosql">SQL문의 Merge 구문에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter05-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4#bookrdb-vs-nosql">SQL문의 Join 구문에 대해 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter05-%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B2%A0%EC%9D%B4%EC%8A%A4#bookrdb-vs-nosql">데이터베이스에서의 Index를 설명해주세요.</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4">:frog:디자인 패턴</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter06-%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4#%EB%94%94%EC%9E%90%EC%9D%B8%ED%8C%A8%ED%84%B4">디자인 패턴에 대해 알려주세요.</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98">:tiger:자료구조와 알고리즘</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#book-%EB%B9%85%EC%98%A4big-o-%ED%91%9C%EA%B8%B0%EB%B2%95%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">빅오(Big-O) 표기법에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#book-%EB%B0%B0%EC%97%B4-%EB%A6%AC%EC%8A%A4%ED%8A%B8array-list%EC%99%80-%EC%97%B0%EA%B2%B0-%EB%A6%AC%EC%8A%A4%ED%8A%B8linked-list%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90%EC%9D%84-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">배열 리스트(Array List)와 연결 리스트(Linked List)의 차이점을 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#book-%EC%8A%A4%ED%83%9Dstack%EA%B3%BC-%ED%81%90queue%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">스택(Stack)과 큐(Queue)는 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#book-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84-%ED%81%90priority-queue%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B4%EA%B3%A0-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%8F%99%EC%9E%91%ED%95%98%EB%82%98%EC%9A%94">우선순위 큐(Priority Queue)는 무엇이고, 어떻게 동작하나요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookhash-%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Hash 에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookhashtable-%EC%9D%98-%EC%9D%B4%EC%A4%91-%ED%95%B4%EC%89%AC%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">HashTable 의 이중 해쉬에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#booktree-%EA%B5%AC%EC%A1%B0%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">Tree 구조는 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookbinary-tree%EC%99%80-%ED%8A%B8%EB%A6%AC-%EC%88%9C%ED%9A%8C%EB%B2%95%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Binary Tree와 트리 순회법에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookred-black-tree-%EA%B5%AC%EC%A1%B0%EB%A5%BC-%EC%95%8C%EB%A0%A4%EC%A3%BC%EC%84%B8%EC%9A%94">Red-Black-Tree 구조를 알려주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookb-tree-%EA%B5%AC%EC%A1%B0%EB%8A%94-%EB%AD%90%EC%97%90%EC%9A%94">B+ Tree 구조는 뭐에요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookheap-%EA%B5%AC%EC%A1%B0%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">Heap 구조는 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookgraph-%EA%B5%AC%EC%A1%B0%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Graph 구조에 대해 설명해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookbinary-search-tree-%EC%9D%98-%EC%B5%9C%EC%95%85%EC%9D%84-%EB%A7%90%ED%95%98%EC%9E%90%EB%A9%B4-%EC%96%B4%EB%96%A4%EA%B0%80%EC%9A%94">Binary Search Tree 의 최악을 말하자면 어떤가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookdfs-%EC%99%80-bfs-%EB%8A%94-%EB%AD%94%EA%B0%80%EC%9A%94">DFS 와 BFS 는 뭔가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookbubble-sort-%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Bubble Sort 를 구현해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookselection-sort-%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Selection Sort 를 구현해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookinsertion-sort-%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Insertion Sort 를 구현해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookquick-sort-%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Quick Sort 를 구현해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookmerge-sort-%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Merge Sort 를 구현해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookheap-sort-%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Heap Sort 를 구현해주세요.</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#booksorting-algorithm-%EC%A4%91-%EA%B0%80%EC%9E%A5-%EB%B9%A0%EB%A5%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%9D%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94">Sorting Algorithm 중 가장 빠른 알고리즘은 무엇인가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#book%EC%88%AB%EC%9E%90%ED%98%95-%EB%B0%B0%EC%97%B4%EC%9D%B4-%EC%A3%BC%EC%96%B4%EC%A7%80%EB%A9%B4-%EC%96%B4%EB%96%A4-sorting-algorithm-%EC%9D%84-%EC%82%AC%EC%9A%A9%ED%95%A0-%EA%B1%B4%EA%B0%80%EC%9A%94">숫자형 배열이 주어지면 어떤 Sorting Algorithm 을 사용할 건가요?</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#bookfactorial-%EB%A5%BC-%EA%B5%AC%ED%98%84%ED%95%98%EB%8A%94-%EC%97%AC%EB%9F%AC-%EB%B0%A9%EC%8B%9D%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%B4%EC%A3%BC%EC%84%B8%EC%9A%94">Factorial 를 구현하는 여러 방식에 대해 설명해주세요.</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter08-%EC%9C%A0%EB%8B%89%EC%8A%A4%EC%99%80_%EB%A6%AC%EB%88%85%EC%8A%A4">:penguin:유닉스와 리눅스</a></td>
      <td></td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D">:dolphin:정규표현식</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D%EC%9D%98-%ED%8C%A8%ED%84%B4">정규표현식의 패턴</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C-%ED%98%B8%EC%8A%A4%ED%8A%B8%EB%AA%85-%ED%8F%AC%ED%8A%B8-%EB%B2%88%ED%98%B8-%EB%B0%8F-%EA%B2%BD%EB%A1%9Curl%EB%A5%BC-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">프로토콜, 호스트명, 포트 번호 및 경로를 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%9D%B4%EB%A9%94%EC%9D%BC-%EC%A3%BC%EC%86%8C-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">이메일 주소 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_righthtml-%ED%83%9C%EA%B7%B8-%EC%B0%BE%EA%B8%B0">HTML 태그 찾기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_righthtml%EC%9D%98-%EC%A3%BC%EC%84%9D-------%EC%B0%BE%EA%B8%B0">HTML의 주석 찾기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%9D%BC%EB%B0%98%EC%A0%81%EC%9D%B8-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-%EC%96%B8%EC%96%B4%EC%9D%98-%EC%A3%BC%EC%84%9D---%EC%B0%BE%EA%B8%B0">일반적인 프로그래밍 언어의 주석 찾기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%8B%A0%EC%9A%A9%EC%B9%B4%EB%93%9C-%EB%B2%88%ED%98%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">신용카드 번호 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%A0%84%ED%99%94%EB%B2%88%ED%98%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">전화번호 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EB%82%A0%EC%A7%9C-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">날짜 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EB%82%A0%EC%A7%9C-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">jpg, gif 또는 png 확장자를 가진 그림 파일명 찾기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right1%EB%B6%80%ED%84%B0-50-%EC%82%AC%EC%9D%B4%EC%9D%98-%EB%B2%88%ED%98%B8-%EC%B0%BE%EA%B8%B0">1부터 50 사이의 번호 찾기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right16%EC%A7%84%EC%88%98%EB%A1%9C-%EC%9D%B4%EB%A3%A8%EC%96%B4%EC%A7%84-%EC%83%89%EA%B9%94-%EB%B2%88%ED%98%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">16진수로 이루어진 색깔 번호 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">비밀번호 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%98%81%EB%AC%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">영문 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%ED%95%9C%EA%B8%80-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">한글 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%88%AB%EC%9E%90-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">숫자 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%ED%95%9C%EA%B8%80%EA%B3%BC-%EC%98%81%EB%AC%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">한글과 영문 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%88%AB%EC%9E%90-%EC%98%81%EB%AC%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">숫자, 영문 검증하기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter09-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#mag_right%EC%A3%BC%EB%AF%BC%EB%B2%88%ED%98%B8-%EA%B2%80%EC%A6%9D%ED%95%98%EA%B8%B0">주민번호 검증하기</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%83%81%EC%8B%9D">:watch:프론트엔드</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%9D%B8%ED%84%B0%EB%84%B7">인터넷</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#html">HTML</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#css">CSS</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#javascript">JavaScript</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EB%B2%84%EC%A0%84%EA%B4%80%EB%A6%ACversion-control-systems">JavaScript</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%9B%B9-%EB%B3%B4%EC%95%88-%EC%A7%80%EC%8B%9D">HTTPS</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%ED%8C%A8%ED%82%A4%EC%A7%80-%EB%A7%A4%EB%8B%88%EC%A0%80">패키지 매니저</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EB%B9%8C%EB%93%9C-%EB%8F%84%EA%B5%AC">빌드 도구</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC">프레임워크</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%B5%9C%EC%8B%A0-css">최신 CSS</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8">웹 컴포넌트</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#css-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC">CSS 프레임워크</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%95%B1-%ED%85%8C%EC%8A%A4%ED%8A%B8">앱 테스트</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%ED%83%80%EC%9E%85-%EC%B2%B4%EC%BB%A4">타입 체커</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%ED%94%84%EB%A1%9C%EA%B7%B8%EB%A0%88%EC%8B%9C%EB%B8%8C-%EC%9B%B9pwa">PWA</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%84%9C%EB%B2%84-%EC%82%AC%EC%9D%B4%EB%93%9C-%EB%A0%8C%EB%8D%94%EB%A7%81ssr">SSR</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#graphql">GraphQL</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%A0%95%EC%A0%81-%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%83%9D%EC%84%B1%EA%B8%B0">정적 사이트 생성기</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EB%AA%A8%EB%B0%94%EC%9D%BC-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98">모바일 애플리케이션</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EB%8D%B0%EC%8A%A4%ED%81%AC%ED%86%B1-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98">데스크톱 애플리케이션</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter10-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C#%EC%9B%B9-%EC%96%B4%EC%85%88%EB%B8%94%EB%A6%AC">웹 어셈블리</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter11-%EB%B0%A9%EB%B2%95%EB%A1%A0">:bird:방법론</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter11-%EB%B0%A9%EB%B2%95%EB%A1%A0#bar_chart-waterfall">폭포수(Waterfall)</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter11-%EB%B0%A9%EB%B2%95%EB%A1%A0#wrench-agile">애자일(Agile)</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter12-%EB%B9%8C%EB%8D%94">:maple_leaf:빌더</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter12-%EB%B9%8C%EB%8D%94#ant">Ant</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter12-%EB%B9%8C%EB%8D%94#maven">Maven</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter12-%EB%B9%8C%EB%8D%94#gradle">Gradle</a></p>
      </td>
    </tr>
    <tr>
      <td><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8">:cherry_blossom:디자인</a></td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8/01_day#%EA%B0%9C%EC%9A%94">HTML/CSS의 기본 개념</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8/02_day#css-%EA%B8%B0%EB%B3%B8-%EB%AC%B8%EB%B2%95">CSS의 기본 문법 1</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8/03_day#%EB%A9%80%ED%8B%B0%EB%AF%B8%EB%94%94%EC%96%B4%EC%99%80-%EB%82%B4%EC%9E%A5-%EC%BD%98%ED%85%90%EC%B8%A0-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8">CSS의 기본 문법 2</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8/04_day#css">CSS 제어</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8/05_day#css-%EC%86%8D%EC%84%B1---%EB%9D%84%EC%9B%80%EC%A0%95%EB%A0%AC-%EC%9C%84%EC%B9%98">CSS 속성 1</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8/06_day#css-%EC%86%8D%EC%84%B1---%EC%A0%84%ED%99%98--%EB%B3%80%ED%99%98">CSS 속성 2</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/chapter13-%EB%94%94%EC%9E%90%EC%9D%B8/07_day#css-%EC%86%8D%EC%84%B1---grid">CSS3 속성</a></p>
      </td>
    </tr>
    <tr>
      <td>:mortar_board:시험 정리</td>
      <td>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/etc01-%EC%8B%9C%ED%97%98_%EC%A0%95%EB%A6%AC/%EC%A0%95%EB%B3%B4%EC%B2%98%EB%A6%AC%EA%B8%B0%EC%82%AC">정보처리기사</a></p>
        <p><a href="https://github.com/InSeong-So/IT-Note/tree/master/etc01-%EC%8B%9C%ED%97%98_%EC%A0%95%EB%A6%AC/SQLD">SQLD</a></p>
      </td>
    </tr>
  </tbody>
</table>


<br>

[👋 상단으로 돌아가기 👋](https://github.com/InSeong-So/IT-Note#point_down-%EC%B1%95%ED%84%B0-%EB%B0%94%EB%A1%9C%EA%B0%80%EA%B8%B0-point_down)

<br>

</details>

<hr>
<br>

### :link: 참조할 만한 사이트 :link:
> 아래 내용에 해당하는 사이트의 링크 모음입니다. :100:

- :one: 개발 기술에 관련된 내용인가?
- :two: 취직, 이직에 관련된 내용인가?
- :three: 개발 시 참고하기 좋은 내용인가?
- :four: 공부법, 노력과 관련된 내용인가?

<br>

<details><summary>:persevere:너무 길어요:sob: <strong>자세히보기!</strong></summary>

<br>

#### :sunglasses: 취업 사이트
[잡코리아](https://www.jobkorea.co.kr/)
- 개발자는 사이트의 공고보다는 합격자소서 확인해요.

[잡플래닛](https://www.jobplanet.co.kr/welcome/index)
- 대중적인 기업 평점 확인하기 좋습니다.

[오픈샐러리](https://www.opensalary.com/)
- 입/퇴사자, 연봉 추이를 확인할 수 있습니다.

[로켓펀치](https://www.rocketpunch.com/)
- IT 채용관입니다.

[원티드](https://www.wanted.co.kr/)
- 채용보상금이 있습니다. IT 채용관입니다.

[슈퍼루키](https://www.superookie.com/jobs)
- IT 채용관입니다.

[링크드인](https://www.linkedin.com/feed/)
- 글로벌한 IT 채용관입니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: 취업 준비에 대한 조언
[청천향로(이동욱)님의 junior-recruit-scheduler](https://github.com/jojoldu/junior-recruit-scheduler/blob/master/README.md)

[JBee(한재엽)님의 Interview_Question_for_Beginner](https://github.com/JaeYeopHan/Interview_Question_for_Beginner)

[개발자의 포트폴리오](https://gmlwjd9405.github.io/2018/05/04/how-to-write-a-resume-for-a-developer.html)

[캡틴판교(장기효)님의 프론트엔드 개발 면접](https://joshua1988.github.io/web-development/interview/frontend-questions/)

[프론트엔드 면접 문제 은행](https://h5bp.org/Front-end-Developer-Interview-Questions/translations/korean/#JS-%EA%B4%80%EB%A0%A8-%EC%A7%88%EB%AC%B8)

[프론트엔드 면접 질문](https://devowen.com/283?category=778540)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: 알고리즘
[프로그래머스](https://programmers.co.kr/)
- 코딩테스트, 과제전형을 폭 넓게 다루며 최근에는 채용관의 역할도 하고 있습니다.

[백준 온라인 저지](https://www.acmicpc.net/)
- 국내 최다 문제가 수록된 알고리즘 사이트입니다.

[코딜리티](https://www.codility.com/)

[해커랭크](https://www.hackerrank.com/)

[부경대학교-권오흠님 강의](http://www.kocw.net/home/search/kemView.do?kemId=1148815)

[리브레위키-컴퓨터공학](https://librewiki.net/wiki/%EC%8B%9C%EB%A6%AC%EC%A6%88:%EC%88%98%ED%95%99%EC%9D%B8%EB%93%AF_%EA%B3%BC%ED%95%99%EC%95%84%EB%8B%8C_%EA%B3%B5%ED%95%99%EA%B0%99%EC%9D%80_%EC%BB%B4%ED%93%A8%ED%84%B0%EA%B3%BC%ED%95%99/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98_%EA%B8%B0%EC%B4%88)

[나무위키-알고리즘](https://namu.wiki/w/%EB%B6%84%EB%A5%98:%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)

[알고리즘 공부 시작 방법 및 순서](https://blog.yena.io/studynote/2018/11/14/Algorithm-Basic.html)

[수열의 적용 이론을 검색하는 사이트](https://oeis.org/)

[그래프 구조를 시각화해주는 사이트](https://csacademy.com/app/graph_editor/)

[코드포스-자료구조란?](http://codeforces.com/blog/entry/15729)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: CS 1, 네트워크

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: CS 2, 데이터베이스

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: CS 3, 운영체제
[이화여자대학교-반효경님 강의](http://www.kocw.net/home/cview.do?mty=p&kemId=1226304)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: FE 1, HTML/CSS
[프론트엔드 개발자라면 반드시 알아야 할 32가지 UI 요소](https://velog.io/@oneook/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EB%B0%98%EB%93%9C%EC%8B%9C-%EC%95%8C%EC%95%84%EB%91%90%EC%96%B4%EC%95%BC-%ED%95%A0-32%EA%B0%80%EC%A7%80%EC%9D%98-UI-%EC%9A%94%EC%86%8C-%EB%B2%88%EC%97%AD)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: FE 2, JavaScript
[일반적인 비동기 프로그래밍 개념](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Asynchronous/Concepts)
- MDN의 아주 잘 정리된 비동기적 프로그래밍과 관련된 몇개의 개념에 대한 글입니다.

[왜 비동기적 프로그래밍을 해야 하는가?](https://velog.io/@hjkdw95/%EC%99%9C-%EB%B9%84%EB%8F%99%EA%B8%B0%EC%A0%81-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%EC%9D%84-%ED%95%B4%EC%95%BC%ED%95%98%EB%8A%94%EA%B0%80)
- hjkdw95님의 블로그 글입니다.

[이벤트 버블링, 이벤트 캡처, 그리고 위임](https://joshua1988.github.io/web-development/JavaScript/event-propagation-delegation/#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%B2%84%EB%B8%94%EB%A7%81---event-bubbling)
- 캡틴판교(장기효)님의 글입니다. 이벤트에 대한 내요이 잘 정리되어 있습니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: FE 3, Vue.js
[뷰 시작하기](https://kr.vuejs.org/v2/guide/installation.html)
- 뷰 공식 사이트로, 한글화가 되어 풍부한 기술 문서를 확인할 수 있습니다.

[뷰 라이프사이클 이해하기](https://beomy.tistory.com/47)
- 조금 더 상세히 라이프사이클을 알 수 있습니다.

[뷰에 TDD 적용하기](https://lmiller1990.github.io/vue-testing-handbook/ko/#%EC%9D%B4-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94)

[Vue.js로 간단한 가계부 구현하기](https://rinae.dev/posts/hanami-vuejs-moneybook-frontend-2)

[고양이도 할 수 있는 Vue.js](https://rintiantta.github.io/jpub-vue/guide/chapter4.html#%EC%9B%8C%EC%B2%98-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95)
- 뷰를 이해하고 응용해봅시다.

[Vutify](https://v15.vuetifyjs.com/en/getting-started/quick-start)
- 뷰 컴포넌트 오픈소스 라이브러리입니다.

[Vuex, Vue-Router, Axios로 SPA 구현하기](https://jeonghwan-kim.github.io/2018/03/26/vue-authentication.html)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: FE 4, React.js
[리액트 시작하기](https://ko.reactjs.org/tutorial/tutorial.html)
- 리액트 공식 사이트로, 한글화가 되어 풍부한 기술 문서를 확인할 수 있습니다.

[김민준님의 모던 리액트](https://react.vlpt.us/)
- 리액트를 다루는 기술의 저자가 운영하는 사이트입니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: BE 1, Java
[이펙티브 자바 3판 한글화](https://github.com/WegraLee/effective-java-3e-source-code)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: BE 2, Python
[파이썬을 파이썬답게](https://programmers.co.kr/learn/courses/4008)
- 프로그래머스 무료 강의입니다. 동영상도 제공되지만 텍스트가 더 많아요.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: BE 3, Node.js
[package.json](https://programmingsummaries.tistory.com/385)
- 원문 [Link](https://docs.npmjs.com/cli/v7/configuring-npm/package-json/)을 번역하신 글입니다.

[황준일님의 Todo App 개발](http://junil-hwang.com/blog/restfulapi-todoapp/)
- Node.js, Javascript를 사용한 Todo App 개발 내용입니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: Dev 1, Apache
[톰캣 메모리 설정](https://aljjabaegi.tistory.com/218)
- 알짜배기 프로그래머님의 웹 개발 블로그 글입니다.

[톰캣 server.xml 설정](https://pshcode.tistory.com/109)
- 박성훈님의 웹 개발 블로그 글입니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: Dev 2, Docker
[가장 빨리 만나는 Docker](http://pyrasis.com/book/DockerForTheReallyImpatient/Chapter07/09)
- 가장 빨리 만나는 Docker, 저자 이재홍님의 블로그 글입니다.

[도커 이미지의 레이어 구조, 의존성, Size](https://m.blog.naver.com/PostView.nhn?blogId=alice_k106&logNo=220403041813&proxyReferer=https:%2F%2Fwww.google.co.kr%2F)
- alice님의 웹 개발 블로그 글입니다.

[Docker Network 구조](https://bluese05.tistory.com/15)
- 클쏭님의 웹 개발 블로그 글입니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: Dev 3, Rasberry Pi
[라즈베리파이3 B+ 설치 가이드](https://geeksvoyage.com/raspberry%20pi/install-pi-wo-monitor/)

[라즈베리파이 SVN 설치 방법](https://guzene.tistory.com/233)

[vsftpd 설정하기](https://kkamagistory.tistory.com/97)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: 기술 블로그
[카카오 기술 블로그](https://tech.kakao.com/blog/)

[우아한 형제들 기술 블로그](https://techblog.woowahan.com/)

[쿠팡 기술 블로그](https://medium.com/coupang-tech/technote/home)

[왓챠 기술 블로그](https://medium.com/watcha)

[마켓 컬리 기술 블로그](https://helloworld.kurly.com/)

[뱅크 샐러드 기술 블로그](https://blog.banksalad.com/)

[NHN 기술 블로그](https://meetup.toast.com/)

[하이퍼커넥트 기술 블로그](https://hyperconnect.github.io/)

[당근마켓 기술 블로그](https://medium.com/daangn)

[강남언니 기술 블로그](https://blog.gangnamunni.com/blog/tech/)

[딜리버리 히어로 코리아 기술블로그](https://medium.com/deliverytechkorea)

[이스트소프트 AI 기술 블로그](https://blog.est.ai/)

[레진 코믹스 기술 블로그](https://tech.lezhin.com/)

[라인 기술 블로그](https://engineering.linecorp.com/ko/blog/)

[쏘카 기술 블로그](https://tech.socarcorp.kr/)

[리디 기술 블로그](https://www.ridicorp.com/story-category/tech-blog/)

[네이버 D2 기술 블로그](https://d2.naver.com/home)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: Gihub
[카카오 깃허브](https://github.com/kakao)

[네이버 깃허브](http://woowabros.github.io/)

[커밋 스타일 가이드](https://udacity.github.io/git-styleguide/)

[깃허브로 취업하기](http://sujinlee.me/professional-github/)

[깃허브 독스-테이블 만드는 방법](https://docs.github.com/en/github/writing-on-github/working-with-advanced-formatting/organizing-information-with-tables)

[깃허브에서 사용할 Emoji 모음](https://www.webfx.com/tools/emoji-cheat-sheet/)

[.gitignore 생성 사이트](https://www.gitignore.io/)

[깃허브 마크다운 badge 생성 사이트](https://shields.io/category/license)

[좋은 git commit 메시지를 위한 영어 사전](https://blog.ull.im/engineering/2019/03/10/logs-on-git.html)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: IDE
[VSCode 단축키](https://www.youtube.com/watch?v=EVxCdenPbFs)
- 유튜브 영상입니다. 차후 다른 글로 대체할 예정이에요.

[Intellij 단축키](http://redutan.github.io/2016/03/23/intellij-favorite-keymap-osx)
- 인텔리제이의 단축키를 정리한 글입니다. mac-os 기준으로 작성되었습니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: IT 커뮤니티
[okky](https://okky.kr/)

[생활코딩](https://opentutorials.org/)

[뎁스노트](https://devsnote.com/)

[가리사니](https://gs.saro.me/dev)

[DBA 커뮤니티 구루비](http://gurubee.net/roadmap/oracle)

[개발자 QA 커뮤니티](https://hashcode.co.kr/)

[커리어리](https://careerly.co.kr/?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3MjQ3MywiaWF0IjoxNjIyNTQ2ODc0fQ.y67eO_W_gKyUb54M32ACoiMqXQ5QhGZ1Nj2ENFLszVs)

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

#### :sunglasses: 온라인 강의
[인프런](https://www.inflearn.com/?gclid=CjwKCAiAlb_fBRBHEiwAzMeEdkY6B2RaHXi3oXSkFtStO642L4MZ3542qb1zkogTv_jWR-LQhBAVjBoCL60QAvD_BwE)
- 유/무료 온라인 강의 플랫폼입니다. 강의의 품질이 높아요.

[tutorialspoint](https://www.tutorialspoint.com/tutorialslibrary.htm)
- 외국 사이트로 모든 IT 기술에 대한 튜토리얼을 진행할 수 있습니다.

[이웅모님의 웹 프로그래밍 튜토리얼](https://poiemaweb.com/)
- 모던 자바스크립트 Deep Dive의 저자가 운영하는 사이트입니다.

[파이썬을 이용한 데이터 사이언스 스쿨](https://datascienceschool.net/)
- 무료입니다. 데이터 분석을 시작하려면 해당 사이트에서 도움을 받을 수 있습니다.

</details>

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

### :speech_balloon: 커밋 메세지 작성법 :speech_balloon:

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>

### :eyes: 중요하지 않은 저장소 마크다운 작성 규칙 :eyes:
1. `*.md` 파일의 첫 헤드라인은 `#`을 사용합니다.
2. 항목별 정리 시 `##`를 사용하고, 소항목은 `###`입니다.
     - `##` 항목의 끝에 상위 문서로 갈 수 있는 링크를 붙입니다.
       ```
       ## 예시
       - 내용

       <br>

       <sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

       <hr>
       <br>

       ## 예시
       - 계속...
       ```
3. TOC는 생성하지 않습니다.
4. 문서 내의 한 항목에서 설명하는 내용이 100줄을 넘어가면 분리합니다.
5. 바로가기 링크는 `Link`로 표현합니다.

<br>

<sup>[⏫⏫ 최상단으로 돌아가기 ⏫⏫](https://github.com/InSeong-So/IT-Note#developers-note)</sup>

<hr>
<br>
