# RESTful(Representational State Transfer~ful)

## RESTful에 대해 설명하시오.
- REST는 Representational State Transfer라는 용어의 약자로서 웹의 장점을 최대한 활용할 수 있는 아키텍처이다.
  - 최근의 서버 프로그램은 다양한 브라우저와 안드로이폰, 아이폰과 같은 모바일 디바이스에서도 통신을 할 수 있어야 한다.
- REST 아키텍처는 Hypermedia API의 기본을 충실히 지키면서 범용성을 보장한다.

### REST의 특징
- **Uniform (유니폼 인터페이스)**
  - Uniform Interface는 URI로 지정한 리소스에 대한 조작을 통일되고 한정적인 인터페이스로 수행하는 아키텍처 스타일
- **Stateless (무상태성)**
  - 상태가 있다 없다는 의미는 사용자나 클라이언트의 컨택스트를 서버쪽에 유지 하지 않는다는 의미한다.
  - 세션이나 쿠키등을 별도로 관리하지 않기 때문에 API서버는 요청만을 들어오는 메시지로만 처리하기 때문에 구현이 단순하다.
- **Cacheable (캐시 처리 가능)**
  - REST의 가장 큰 특징 중 하나는 HTTP라는 기존 웹표준을 그대로 사용한다.
  - HTTP가 가진 캐싱 기능이 적용 가능하다. HTTP 프로토콜 표준에서 사용하는 Last-Modified태그나 E-Tag를 이용하면 캐싱 구현이 가능하다.
- **Self-descriptiveness (자체 표현 구조)**
  - REST의 또 다른 큰 특징 중 하나는 REST API 메시지만 보고도 이를 쉽게 이해 할 수 있는 자체 표현 구조로 되어 있다는 것
- **Client - Server Architecture (클라이언트 - 서버 구조)**
  - REST 서버는 API를 제공하고, 제공된 API를 이용해서 비즈니스 로직 처리 및 저장을 책임진다.
  - 클라이언트의 경우 사용자 인증이나 컨택스트(세션,로그인 정보)등을 직접 관리하고 책임진다.
  - 서로간의 의존성이 줄어들게 된다.
- **계층형 구조**
  - 클라이언트 입장에서는 REST ApI 서버만 호출한다.
  - REST 서버는 다중 계층으로 구성될 수 있다. 예를 들어 보안, 로드 밸런싱, 암호화, 사용자 인증등등 추가하여 구조상의 유연성을 줄 수 있다.

<hr>

### REST의 구성
- 자원(Resource) - URI
- 행위(Verb) - HTTP Method (GET, PUT, POST, DELETE등등)
- 표현(Representations)


## RESTful API에 대해 설명하시오.

### RESTful API 설계
- URI는 정보의 자원을 표현해야 한다.(리소스명은 동사보다는 명사를 사용)
- 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE 등)으로 표현

> 주의할 점
>> - 슬래시 구분자(/)는 계층 관계를 나타내는데 사용
>> - URI 마지막 문자로 슬래시(/)를 포함하지 않는다.
>> - 하이픈(-)은 URI 가독성을 높이는데 사용
>> - 밑줄(_)은 URI에 사용하지 않는다.
>> - URI 경로에는 소문자가 적합하다.
>> - 파일확장자는 URI에 포함하지 않는다.

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