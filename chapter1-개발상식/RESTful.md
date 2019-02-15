# RESTful(Representational State Transfer~ful)

<!-- TOC -->

- [RESTful(Representational State Transfer~ful)](#restfulrepresentational-state-transferful)
  - [RESTful에 대해 설명하시오.](#restful%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%98%EC%8B%9C%EC%98%A4)
    - [REST의 특징](#rest%EC%9D%98-%ED%8A%B9%EC%A7%95)
    - [REST의 구성](#rest%EC%9D%98-%EA%B5%AC%EC%84%B1)
  - [RESTful API에 대해 설명하시오.](#restful-api%EC%97%90-%EB%8C%80%ED%95%B4-%EC%84%A4%EB%AA%85%ED%95%98%EC%8B%9C%EC%98%A4)
    - [RESTful한 API란?](#restful%ED%95%9C-api%EB%9E%80)
    - [RESTful API 설계](#restful-api-%EC%84%A4%EA%B3%84)
    - [장점과 단점](#%EC%9E%A5%EC%A0%90%EA%B3%BC-%EB%8B%A8%EC%A0%90)
    - [RESTful API 표준](#restful-api-%ED%91%9C%EC%A4%80)

<!-- /TOC -->

## RESTful에 대해 설명하시오.
- REST는 Representational State Transfer라는 용어의 약자로서 웹의 장점을 최대한 활용할 수 있는 아키텍처이다.
  - 최근의 서버 프로그램은 다양한 브라우저와 모바일 디바이스에서도 통신을 할 수 있어야 한다.
- REST 아키텍처는 Hypermedia API의 기본을 충실히 지키면서 범용성을 보장한다.

### REST의 특징
- **Client - Server Architecture (클라이언트 - 서버 구조)**
  - 클라이언트-서버 스타일은 사용자 인터페이스에 대한 관심(concern)을 데이터 저장에 대한 관심으로부터 분리함으로써 클라이언트의 이식성과 서버의 규모확장성을 개선한다.
- **Stateless (무상태성)**
  - 클라이언트와 서버의 통신에는 상태가 없어야한다.
  - 모든 요청은 필요한 모든 정보를 담고 있어야한다.
    - 요청 하나만 봐도 바로 뭔지 알 수 있으므로 가시성이 개선된다.
    - task 실패시 복원이 쉬우므로 신뢰성이 개선된다.
    - 상태를 저장할 필요가 없으므로 규모확장성이 개선된다.
    - 메시지로만 처리하기 때문에 구현이 단순하다.
- **Cache (캐시 처리 가능)**
  - 캐시가 가능해야한다.
  - 모든 서버 응답은 캐시 가능한지 그렇지 아닌지 알 수 있어야 한다.
    - 효율, 규모확장성, 사용자 입장에서의 성능이 개선된다.
- **Uniform (유니폼 인터페이스)**
  - 구성요소(클라이언트, 서버 등) 사이의 인터페이스는 균일(uniform)해야한다.
  - 인터페이스의 일반화로 얻어지는 이점
    - 전체 시스템 아키텍처가 단순해진다.
    - 상호작용의 가시성이 개선된다.
    - 구현과 서비스가 분리되므로 독립적인 진화가 가능해진다.
- **Layered System(Hierarchical System, 계층형 구조)**
  - 계층(hierarchical layers)으로 구성이 가능해야한다.
    - 각 레이어에 속한 구성요소는 인접하지 않은 레이어의 구성요소를 볼 수 없어야한다.
- **Code-On-Demand (Optional)**
  - Code-On-Demand가 가능해야한다.
  - 서버가 네트워크를 통해 클라이언트에게 프로그램을 전달하면 클라이언트에서 실행될 수 있어야한다(Java applet이나 Javascript 같은 것을 말함).
  - 다만, 이 제약조건은 필수는 아니다.

<hr>

### REST의 구성
- 자원(Resource) - URI
- 행위(Verb) - HTTP Method (GET, PUT, POST, DELETE등등)
- 표현(Representations)


## RESTful API에 대해 설명하시오.

### RESTful한 API란?
- 리소스와 행위는 명시적이고 직관적으로 분리되어야 한다.
- Message는 Header와 Body를 명확히 분리하여 사용한다.
- API 버전을 관리할 수 있어야 한다.
- 서버와 클라이언트가 같은 방식을 사용하여 요청하도록 한다.

### RESTful API 설계
- URI는 정보의 자원을 표현해야한다.(리소스명은 동사보다는 명사를 사용)
- 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현

> 주의할 점
>> - 슬래시 구분자(/)는 계층 관계를 나타내는데 사용
>> - URI 마지막 문자로 슬래시(/)를 포함하지 않는다.
>> - 하이픈(-)은 URI 가독성을 높이는데 사용
>> - 밑줄(_)은 URI에 사용하지 않는다.
>> - URI 경로에는 소문자가 적합하다.
>> - 파일확장자는 URI에 포함하지 않는다.

### 장점과 단점
- 장점
  - Open API를 제공하기 쉽다.
  - 멀티 플랫폼 지원과 연동이 쉽다.
  - 원하는 타입으로 데이터를 송수신할 수 있다.
  - 기존 웹 인프라(HTTP)를 사용한다.
- 단점
  - 사용할 수 있는 메소드가 적다.
  - 분산환경에 부적합하다.
  - HTTP 통신 모델에 대해서만 지원한다.

### RESTful API 표준
| endpoint        | 기능           |
| ------------- |:-------------:|
| GET /todos |	List all todos |
| POST /todos |	Create a new todo |
| GET /todos/:id |	Get a todo |
| PUT /todos/:id |	Update a todo |
| DELETE /todos/:id |	Delete a todo and its items |
| GET /todos/:id/items |	Get a todo item |
| PUT /todos/:id/items |	Update a todo item |
| DELETE /todos/:id/items |	Delete a todo item |
