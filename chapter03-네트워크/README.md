# 네트워크
## `HTTP` 란 무엇인가요?
> HyperText Transfer Protocol 의 약자로 WWW(Worl-Wide-Web, 월드 와이드 웹)에 내재된 프로토콜
> - WWW 에서 하이퍼텍스트(hypertext) 문서를 교환하기 위하여 사용되는 통신규약

### WWW 와 HTTP
- 초기에 `Mesh` 라고 불리며 1990년 구현 과정에서 월드 와이드 웹으로 이름을 바꿨습니다.

- 기존 TCP/IP 프로토콜에 4개의 빌딩 블록으로 구성됩니다.
  - 하이퍼텍스트 문서를 표현하기 위한 텍스트 형식의 하이퍼텍스트 마크업 언어 (`HTML`).
  
  - 문서 같은 것을 교환하기 위한 간단한 프로토콜인 하이퍼텍스트 전송 프로토콜 (`HTTP`).
  
  - 문서를 디스플레이(그리고 우발적으로 수정)하기 위한 클라이언트인 월드 와이드 웹(`WorldWideWeb`)이라고 불리는 첫번째 브라우저.
  
  - 문서에 접근하도록 해주는, `httpd` 의 초기 버전.

- 초기 단계에 사용되던 HTTP 프로토콜은 매우 간단했으며 `HTTP/0.9` 버전을 부여 받은 이후 `원-라인 프로토콜`로 불리기도 했습니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `HTTP 1.1`과 `HTTP 2.0`의 차이점은 뭐에요?
### HTTP/0.9 – 원-라인 프로토콜
> HTTP 초기 버전에 번호가 없어 차후 버전과 구별하기 위해 0.9로 호칭

- 기능
  - 요청은 `단일 라인`으로 구성되며 리소스에 대한 요청 가능한 메서드는 `GET` 이 유일
  
  - 응답은 `파일 내용 자체로만 구성`하여 극도로 단순
  
  - HTTP 헤더가 없어 `HTML 파일만 전송`될 수 있으며 다른 유형의 문서는 전송 불가
  
  - 상태 혹은 오류 코드가 없어 문제가 발생하면 사람이 처리할 수 있도록 `해당 파일 내부에 문제에 대한 설명을 첨부`하여 응답

<br>

### HTTP/1.0 – 확장성 만들기
> 매우 제한적이지만 브라우저와 서버 모두 융통성을 가지도록 빠르게 확장

- 기능
  - `버전 정보`가 각 요청 사이내로 전송되기 시작 *(HTTP/1.0 이 GET 라인에 붙은 형태로)*
  
  - `상태 코드 라인`은 응답의 시작 부분과 `함께` 전송되며, 이점은 아래와 같습니다.
    - 브라우저가 요청에 대한 성공과 실패를 알 수 있습니다.
    
    - 성공과 실패에 따른 결과 동작(로컬 캐시를 갱신하거나 사용하는 등)을 할 수 있습니다.
  
  - `HTTP 헤더`는 요청과 응답 모두를 위해 메타데이터 전송을 허용하고 프로토콜을 극도로 유연하고 확장 가능하도록 만들어 주었습니다.
  
  - 새로운 `HTTP 헤더(Content-Type)`의 도움으로, 평이한 HTML 파일들 외에 다른 문서들을 전송할 수 있게 되었습니다.

<br>

### HTTP/1.1 – 표준 프로토콜
> 구현과 표준화를 동시에 진행했던 HTTP/1.0 의 개선된 결과물

- 기능
  - `커넥션의 재사용이 가능합니다`. 탐색된 단일 원본 문서에 임베드된 리소스들을 출력하기 위해 사용된 커넥션을 다시 열어 시간을 절약할 수 있게 되었습니다.
  
  - `파이프라이닝`을 추가하여 첫번째 요청에 대한 응답이 완전히 전송되기 이전에 두번째 요청 전송을 가능하게 해 커뮤니케이션 레이턴시를 낮췄습니다.
    - 레이턴시(latency) : 자극과 반응 사이의 시간으로 더 일반적인 관점에서는 관찰되는 시스템에서의 어떠한 물리적 변화에 대한 원인과 결과 간의 지연 시간입니다.
  
  - `청크된 응답 또한 지원`합니다.
  
  - 추가적인 `캐시 제어 메커니즘이 도입`되었습니다.
  
  - 언어, 인코딩 혹은 타입을 포함한 `컨텐츠 협상이 도입`되어 클라이언트와 서버로 하여금 교환하려는 가장 적합한 컨텐츠인지 판단하게 되었습니다.
  
  - `Host 헤더` 덕분에 동일 IP 주소에 다른 도메인을 호스트하는 기능인 `서버 코로케이션`이 가능해졌습니다.

<br>

### HTTP/2.0 – 더 나은 성능을 위한 프로토콜
> SPDY 프로토콜로 응답성 증가 능력을 입증하고 전송된 데이터 중복에 관한 문제를 해결

- HTTP/2.0 과 SPDY 의 관계 : Google의 HTTP 의 단점들을 보완하여 인터넷 환경을 보다 효율적으로 이용하기 위해 제안한 `speedy`한 새로운 프로토콜입니다.

- SPDY의 특징
  - TLS(Transport Layer Security, SSL이라는 용어로 많이 불립니다) 위에서 동작하며, HTTPS에서만 적용할 수 있습니다.
  
  - HTTP 헤더의 요청마다 반복되는 내용을 압축해 성능을 향상했습니다.
  
  - 바이너리로 프레임을 구성하여 파싱 속도가 향상되고 오류확률은 낮아진다.
  
  - 다중 연결을 지원하여 다수의 요청, 응답을 동시에 처리 할 수 있으니 속도가 향상됩니다.
  
  - 인터리빙을 허용하여 우선순위가 높은 데이터가 더 빨리 전송 될 수 있습니다.
    - 인터리빙(Interleaving) : IP 네트워크, 즉 유선 통신 네트워크 또는 무선 통신 구간을 통하여 트래픽을 전송할 때 발생할 수 있는 군집 에러를 랜덤 에러로 변환하여, 에러 정정을 용이하게 하기 위하여 사용되는 기법입니다.
  
  - 서버 푸시가 가능합니다.

- 기능
  - 텍스트 프로토콜 보다는 `이진 프로토콜`에 가까운 형태로서 읽을 수도, 수작업으로 만들어 낼 수도 없습니다. 따라서 새로운 최적화 기술이 구현될 수 있습니다.
  
  - 병렬 요청이 동일한 커넥션 상에서 다루어질 수 있는 `다중화 프로토콜`입니다. `순서를 제거`하고 HTTP/1.x 프로토콜이 지닌 제약사항을 해소합니다.
  
  - 전송된 데이터의 `중복`과 그런 데이터로부터 유발된 불필요한 `오버헤드의 제거`로 연속된 요청 사이에 유사한 내용으로 존재하는 헤더들을 압축시킬 수 있습니다.
  
  - 서버는 `서버 푸쉬`라고 불리는 메커니즘을 통해 `클라이언트 캐시`에 필요한 데이터를 채우도록 허용합니다.

<br>

### 정리 및 결론
- HTTP/1.0 은 TCP connection 에서 한 번에 하나의 요청만이 가능했습니다.

- HTTP/1.1 에서는 request pipelining을 사용하여 위의 문제를 해결했으나 HOL Blocking 문제는 해결되지 않았습니다.
  - 따라서, HTTP/1.1 이 사용하는 전송방식(RFC7230)에는 몇가지 문제점이 존재했습니다.

- HTTP/2.0 은 오랫동안 변화하지 않았던 HTTP를 현재의 웹 환경에 맞게 발전시켜 속도의 향상을 도모했습니다.
  - 효율적인 페이지 로딩을 위해 URL의 이미지, 스크립트 등의 자원을 압축해 페이지 렌더링을 위한 요청횟수를 감소시켰습니다.

  - 서버 푸시가 가능해졌으므로 웹페이지의 렌더링이 필요하면 추가 요청없이 서버가 리소스를 제공합니다.

  - 성능 개선을 위한 요청 다중화, 헤더 압축, HOL Blocking 해결을 위한 요청 우선순위 결정 등이 있습니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `HTTP Method` 의 종류는 뭐가 있나요?
### 메소드의 종류

|메소드명|역할|설명|
|:------:|----|-------------|
|`GET`|`리소스 취득`|`서버에서 데이터를 가져온다.`|
|*HEAD*|메세지 헤더 취득|서버에서 데이터의 응답 HEADER 만 가져온다.|
|`POST`|`엔티티 바디 전송`|`서버에 데이터의 처리를 요청한다.`|
|*PUT*|리소스 전송|요청 바디에 저장될 정보를 전송한다.|
|*DELETE*|리소스 삭제|URL 의 리소스를 삭제한다.|
|*TRACE*|경로 조사|보낸 메세지를 다시 돌려받는다.|
|*CONNECT*|프록시 터널링 요구|프록시에서 사용되는 예약 메소드로 암호화 된 것을 터널링 시킨다.|
|*OPTIONS*|서포트 메소드 문의|요청한 URL 에 어떠한 메소드 요청이 가능한지 묻는다.|

<br>

### `상태 코드` *(Status Code)*
- `1xx` *(Informational, 조건부 응답)*

- `2xx` *(Success, 성공)*
  - `200` : OK, 요청이 성공적으로 전송됨

- `3xx` *(Redirection, 리다이렉션 완료)*
  - 301 : Moved Permanently, 요청 페이지의 영구적인 위치 변화

  - 302 : Found, 요청 페이지이 일시적인 위치 변화

- `4xx` *(Client Error, 요청 오류(클라이언트 오류))*
  - `404` : Not Found, 요청받은 자원을 서버에서 찾을 수 없을때 나타나는 상태 

  - 405 : Method Not Allowed, 서버에서 사용자가 요청한 주소의 메소드를 지원하지 않을때 나타남

- `5xx` *(server Error, 서버 오류)*
  - `500` : Internal Server Error, 서버에 오류가 발생하여 요청 수행 불가
  
  - 503 : Service Unavailable, 서버의 오버로드 / 다운으로 현재 사용할 수 없으나 대개 일시적인 상태
  
  - 504 : Gateway Time-out, 서버가 게이트웨이나 프록시 역할을 하고 있거나 업스트림 서버에서 제때 요청을 받지 못함

<br>

### Request Message *(요청 메세지)*
- 메세지 구조
  ```
  □ Request Line
    - HTTP 메서드 / URL, 또는 프로토콜, 포트, 도메인의 절대 경로 / ​​​​HTTP 버전

  □ Request Header : Key - Value 형태
    - Accept : 클라이언트가 받을 수 있는 컨텐츠
    - Cookie : 쿠키
    - Content-Type : 메세지 바디 종류
    - Content-Length : 메세지 바디 길이
    - If-Modified-Since : 특정 날짜 이후 변경됐을 때

  □ Request Body (Entity Body)
  ```

- [Content-Type](https://www.w3.org/Protocols/rfc1341/4_Content-Type.html)
  - `form` *(URL Encoded)*
    - application/x-www-form-urlencoded *(메세지 바디의 구성은 쿼리 스트링)*
  
  - `json`
    - application/json
  
  - `multipart` *(이진파일 전송에 사용되며 하나의 메세지 바디에 파트를 나눠 작성)*
    - `multipart/form-data` : boundary=frontier *(boundary, 파트 구분자)*

<br>

### Response Message *(응답 메세지)*
- 메세지 구조
  ```
  □ Response Line (Status Line)
    - 프로토콜 버전 / 상태코드 / 상태코드 정의
  
  □ Response Header
    - Content-Type : 바디 데이터의 타입
    - Content-Length : 바디 데이터 크기
    - Set-Cookie : 쿠키 설정
    - ETag : 엔티티 태그

  □ Response Body
    - HTML, JSON, Octet Stream 등
  ```

- Content-Type
  - text/plain, text/html
  
  - application/xml, application/json
  
  - image/png, image/jpg
  
  - audio/mp3, video/mp4

<br>

### Header의 구분
> HTTP 헤더는 클라이언트와 서버가 요청 또는 응답으로 부가적인 정보를 전송할 수 있도록 해줍니다.
> - 헤더는 컨텍스트에 따라 그룹핑될 수 있습니다.

- 구분
  - `General header`, 요청과 응답 모두에 적용되지만 바디에서 최종적으로 전송되는 데이터와는 관련이 없는 헤더
  
  - `Request header`, 페치될 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더

  - `Response header`, 위치 또는 서버 자체에 대한 정보(이름, 버전 등)와 같이 응답에 대한 부가적인 정보를 갖는 헤더
  
  - `Entity header`, 컨텐츠 길이나 MIME 타입과 같이 엔티티 바디에 대한 자세한 정보를 포함하는 헤더

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `GET`, `POST` 방식의 차이점은 무엇인가요?

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `HTTP` 와 `HTTPS` 의 차이점은요?
### HTTP의 개요
- 인터넷상에서 데이터를 주고 받기 위한 서버/클라이언트 모델을 따르는 전송 프로토콜이자 애플리케이션 레벨의 프로토콜로 TCP/IP위에서 작동합니다.
  - 클라이언트에서 요청(request)를 보내면 서버는 요청을 처리해서 응답(response)합니다.
  - 암호화가 되지 않은 평문 데이터를 전송하는 프로토콜로서, 제 3자가 중요한 정보를 조회할 수 있는 문제가 있었습니다.
  - 또한 통신 상대를 확인하지 않으므로 위장이 가능했으며, 완전성을 증명할 수 없어 변조까지 가능했습니다.

- 상태를 가지고 있지 않는 Stateless 프로토콜입니다.
  - Method, Path, Version, Headers, Body 등으로 구성됩니다.

- 기본적으로 80번 포트를 사용합니다.

<br>

### 비상태연결 *(Stateless, Connectless)*
> 서버에 연결하고 요청해서 응답을 받으면 연결을 끊습니다.

- 장점
  - 접속유지 최소화
  - 불특정 다수를 대상으로 하는 서비스에 유리

- 단점
  - 연결을 끊어버리므로 클라이언트의 이전 상태를 알 수 없음
  - 따라서 로그인을 해도 정보유지 불가
  - 이를 해결하기 위해 쿠키, 세션 등을 이용

<br>

### Keep Alive *(HTTP 1.1 부터 지원)*
> HTTP는 하나의 연결 시 하나의 요청과 응답이 기준

- 페이지에 여러 리소스가 존재하면 해당 수만큼 연결하여 리소스를 다운하고 연결 해제를 반복합니다.
  - 이처럼 TCP 통신 과정에서 비용이 많이 소모되어 등장한 개념으로 지정된 시간 동안 연결이 끊기지 않고 요청과 응답을 계속해서 보낼 수 있습니다.

<br>

### HTTPS의 개요
- HTTP 통신 소켓을 SSL(Secure Socket Layer)/TLS(Transport Layer Security) 프로토콜로 대체했습니다.
  - 즉, `HTTP-SSL-TCP`와 통신하는 시스템으로 암호화와 증명서, 안전성 보호를 이용할 수 있게 되었습니다.
  - 공개키/개인키 암호화를 지원하여 데이터를 보호합니다.

- 평문 통신에 비해 암호화 통신은 CPU나 메모리가 많이 필요하여 민감한 정보를 다룰 때에만 사용합니다.
  - HTTP 2.0이 발전되면서 HTTPS가 HTTP보다 빠르다고 합니다. [Link](https://tech.ssut.me/https-is-faster-than-http/)

- 기본적으로 443번 포트를 사용합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `OSI` 가 뭐죠?
### 들어가기에 앞서
- PDU(Protocol Data Unit) : 프로토콜 데이터 단위
  - 계층이 전달한 데이터에 붙이는 제어 정보입니다.
  - 데이터는 동일하나 Layer를 거치면서 헤더 정보가 갱신되며 이름이 달라집니다. 사용자는 Data로, TCP는 Segment, IP는 Packet처럼 말이죠.

<br>

### OSI 의 개요
> OSI 모형(Open Systems Interconnection Reference Model)은  국제표준화기구(ISO)에서 개발한 모델

- 컴퓨터 네트워크 프로토콜 디자인과 통신을 계층으로 나누어 설명한 것으로 `OSI 7 계층 모형(OSI 7-Layer Model)`이라고 합니다.

<br>

### OSI 7 Layer
- `1 Layer : Physical` *(물리 계층)*
  - 역할 : 실제 장치들을 연결하기 위해 필요한 전기적, 물리적 세부 사항들을 정의합니다.
  - PDU : 비트(Bit)
  - 프로토콜 : Modem, Cable, Fiber, RS-232C
  - 관련 장비 : 리피터, 허브

- `2 Layer : Data link` *(데이터 링크 계층)*
  - 역할 : 포인트 투 포인트(Point to Point) 간 신뢰성 있는 전송을 보장합니다. 송수신 속도 차이를 해결하기 위한 흐름 제어와 프레임 동기화 등의 역할을 합니다.
  - PDU : 프레임(Frame)
  - 프로토콜 : 이더넷, MAC, PPP, ATM, LAN, Wifi
  - 관련 장비 : 랜카드, 브릿지, 스위치

- `3 Layer : Network` *(네트워크 계층)*
  - 역할 : 여러 개의 노드를 거칠 때마다 경로를 찾아주는 역할을 합니다.
  - PDU : 패킷(Packet)
  - 프로토콜 : IP, ICMP 등
  - 관련 장비 : 라우터, L3 스위치

- `4 Layer : Transport` *(전송 계층)*
  - 역할 : 양 끝단(End to end)의 사용자들이 신뢰성있는 데이터를 주고 받을 수 있도록 해줍니다. 헤드에는 세그먼트가 포함되며 주소 설정, 오류 및 흐름 제어, 다중화를 수행합니다.
  - PDU : 세그먼트(Segment)
  - 프로토콜 : TCP, UDP , ARP, RTP
  - 관련 장비 : 게이트웨이, L4 스위치

- `5 Layer : Session` *(세션 계층)*
  - 역할 : 양 끝단의 응용 프로세스가 통신을 관리하기 위한 방법을 제공합니다.
  - PDU : 메세지(Message)
  - 프로토콜 : NetBIOS, SSH, TLS

- `6 Layer : Presentation` *(표현 계층)*
  - 역할 : 표현계층은 송신측과 수신측 사이에서 데이터의 형식(png, jpg, jpeg...)을 정합니다. 받은 데이터를 코드 변환, 구문 검색, 암호화, 압축의 과정을 통해 올바른 표준방식으로 변환해 줍니다.
  - PDU : 메세지(Message)
  - 프로토콜 : JPG, MPEG, SMB, AFP

- `7 Layer : Application` *(응용 계층)*
  - 역할 : 응용 프로세스와 직접 관계하여 일반적인 응용 서비스를 수행합니다.
  - PDU : 메세지(Message)
  - 프로토콜 : HTTP, SMTP, SNMP, FTP, Telnet, SSH & Scp, NFS, RTSP 

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `TCP` 와 `UDP` 의 차이점은 무엇이죠?
- TCP(Stateful, 상태유지)는 신뢰성이 있는 연결, UDP(Stateless, 무상태)는 빠른 전송을 지향하는 프로토콜입니다.

- TCP는 내가 보낸 데이터가 확실히 상대방에게 전달이 되었는지 포커를 맺고, UDP는 일방적으로 전송을 합니다.

- UDP의 한 예로 스트리밍 방송이 있는데, 방송을 하다가 중간에 신호가 끊어져도 다음으로 그냥 이어서 방송을 하는 것처럼 UDP는 일방적인 데이터 전송을 하는 반면, TCP는 데이터 하나라도 놓치지 않고 완벽히 보내는 것이 목표이기 때문에 방향성이 완전히 다릅니다.

- UDP는 알고리즘이 간단한 반면, TCP는 연결부터 끊는 과정까지 상대적으로 복잡합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `TCP/IP` 는 뭐죠?

<div align=center>

<img src="img/osi7layer_tcp-ip4layer.png" alt="osi7layer_tcp-ip4layer" width="500"/>

</div>

<br>

### TCP/IP 의 개요
> TCP/IP (Transmission Control Protocol / Internet Protocol)

- 인터넷 통신의 기반이 되는 프로토콜로 이를 이용해 컴퓨터를 연결하는 체계를 이더넷(Ethernet)이라고 합니다.

<br>

### 계층
- `1 Layer : Network Access` or Network Interface Layer *(네트워크 액세스 계층)*
  > OSI 7계층의 물리계층과 데이터 링크 계층에 해당하며 물리적인 주소로 MAC을 사용합니다.

  - LAN, 패킷망 등

- `2 Layer : Internet Layer` *(인터넷 계층)*
  > OSI 7계층의 네트워크 계층에 해당하며 통신 노드 간의 IP패킷을 전송하는 기능과 라우팅 기능을 담당합니다.

  - IP, ARP, RARP 등


- `3 Layer : Transport Layer` *(전송 계층)*
  > OSI 7계층의 전송 계층에 해당하며 통신 노드 간의 연결을 제어하고, 신뢰성 있는 데이터 전송을 담당합니다.

  - TCP, UDP 등

- `4 Layer : Application Layer` *(응용 계층)*
  > OSI 7계층의 세션 계층, 표현 계층, 응용 계층에 해당하며 TCP/UDP 기반의 응용 프로그램을 구현할 때 사용합니다.

  - FTP, HTTP, SSH 등

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `TCP-3-way-hands-shaking` 에 대해 설명해주세요.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `DNS` 의 `Round Robin` 방식을 설명해주세요.
- L4 스위치 같은 로드밸런싱 장비가 부담이 될 때 저렴하고 간단하게 서버 분산을 구현하는 방법입니다.
  - 클라이언트 세션을 유지하며 처음 연결한 서버에 지속적으로 연결해주는 기능은 없습니다.

  - 간단한 요청과 결과로만 이루어진 페이지들이라면 사용할 수 있습니다.

- 서버가 A, B, C 3대가 있으면 첫 요청에 A, 다음엔 B, 다음에 C로 연결하고 이후엔 다시 A-B-C 절차를 반복합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## 서버로 요청하면 일어나는 `일련의 과정`에 대해 설명해주세요.
```브라우저에 도메인 입력 → DNS서버에 IP주소 요청 → 수신한 IP주소에 해당하는 웹서버 접속```

- 정보 확인
  > 로컬 PC에서 hosts파일 확인, 입력한 도메인의 매핑 정보 존재 여부 확인
- 외부와 통신할 준비
  > DHCP에서 사용자의 IP주소, 가장 가까운 라우터의 IP주소, 가장 가까운 DNS서버의 IP주소를 수신
  >> ARP 프로토콜을 이용해 IP주소를 기반으로 가장 가까운 라우터의 MAC주소를 확인
- DNS서버와의 IP주소 송수신
  > DNS Query를 DNS 서버에 송신
  >> DNS 서버는 웹 서버의 IP주소를 사용자 PC로 반환
  - 사용자의 PC는 가장 먼저, 지정된 DNS서버(통신사마다 DNS서버 존재)에 DNS Query를 송신
  - 예로 [www.naver.com](https://www.naver.com/)를 검색하면 지정된 DNS서버는 Root 네임서버에 `www.naver.com`을 질의하고, Root 네임서버는 `.com` 네임서버의 ip주소를 알려줌
  - 그 후 `.com` 네임서버에 www.naver.com을 질의하면 naver.com 네임서버의 IP주소를 받고, 그곳에 질의를 송신하여 www.naver.com의 IP주소를 수신

  > 과정이 복잡한 이유는 도메인의 계층화 구조에 따라 DNS서버도 계층화되어 있기 때문입니다. 도메인의 가장 최상단, 즉 가장 뒷쪽(.com, .kr 등등)을 담당하는 DNS서버는 전세계에 13개 뿐입니다.

- 웹 서버 접속
    > HTTP Request를 위해 TCP Socket을 개방하고 연결한다. 이 과정에서 3-Hand-Shaking이 일어납니다.
    >> TCP 연결에 성공하면 HTTP Request가 소켓을 통해 전송됩니다.
    >>> 이에 서버가 응답하면 웹 페이지의 정보가 사용자 PC로 수신됩니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `Routing Table` 은 무엇인가요?
> 주소를 이용하여 목적지까지 메시지를 전달하는 방법을 결정하는 경로 선택 과정입니다.
> - 이 과정을 능동적으로 수행하는 장치를 라우터(Router)라고 합니다.
  
- 경로 선택을 위한 데이터베이스(목록)을 라우팅 테이블(Routing Table)이라고 하며 목적지 네트워크 주소, 라우터의 출구 포트 정보, 최적 경로 산출을 위한 metrics 등의 정보를 포함합니다.
  - 라우터가 최적의 경로를 찾아 결정할 때 사용합니다.
  
  - 라우터가 패킷을 수신하면 패킷의 목적지 IP주소를 검사하고, 라우터의 라우팅 테이블 안에 있는 가장 일치하는 네트워크 주소를 검색합니다.
  
  - 라우팅 테이블은 또한 패킷을 전송하는데 사용되는 인터페이스를 포함합니다.
  
  - 부합하는 네트워크를 찾게 되면 라우터는 밖으로 나가는 인터페이스의 데이터 링크 프레임 안에 IP패킷을 캡슐화하고, 그 다음에 그것의 목적지 쪽으로 패킷을 전송합니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `URL Encode` 는 무엇인가요?
> Encoding이란 정보의 형태, 형식을 내용의 변경 없이 변환하는 처리 방식입니다.

- 암호화로는 사용할 수 없으며 ASCII, URL, Base64, MS Script 등이 있습니다.

### ASCII Encoding이란?
- ASCII (American Standard Code for Information Interchange, 미국 정보 교환 표준 부호, 아스키 코드)
  - 미국 ANSI에서 표준화한 정보교환용 7비트 부호체계입니다.
  - 나머지 1비트는 패리티 비트(Parity bit)로 정보 전달 시 오류 발생여부를 검사하기 위해 사용했습니다.
    - 체크에 검출되지 않는 신호 에러도 생길 수 있고 현재는 더 이상 쓰이지 않습니다.
  - 000(0x00)부터 127(0x7F)까지 총 128개의 부호가 사용됩니다.
  - 영문 키보드로 입력할 수 있는 모든 기호들로 할당되어 매우 단순하고 간단합니다.
  - 8비트 문자 인코딩에서는 맨 앞 비트에 0을 붙이고 이어서 7비트가 이어지는 식의 인코딩이 일반적입니다.

<br>

### URL Encode란?
- 주소 지정을 목적으로 웹 브라우저 / 서버가 이해할 수 있는 문자로 특수 문자를 대체합니다.
  - ASCII 코드에서 표현하지 않는 외국어와 특수문자를 표현하기 위해 사용합니다.
  - 코드의 앞에 %문자가 포함되는 형태입니다.

<br>

### Base64 Encoding이란?

<br>

### MS script Encoding이란?

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `UTF-8`을 설명해주세요.
> 가장 많이 사용되는 가변 길이 유니코드 인코딩입니다.

- 표현 가능한 길이는 최대 6바이트지만 다른 인코딩과의 호환을 위해 4바이트까지만 사용합니다.

- 아스키 코드의 0~127까지는 UTF-8로 완전히 동일하게 기록됩니다.
  - 아스키로 구축된 사이트를 별다른 변환 처리 없이 그대로 쓸 수 있는 엄청난 장점이 있습니다.

- UTF-8은 엔디안에 상관없이 똑같이 읽을 수 있으므로 크로스플랫폼 호환성도 뛰어납니다.
  - 엔디안(Endianness) : 메모리와 같은 1차원의 공간에 여러 개의 연속된 대상을 배열하는 방법입니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `URL` 과 `URI` 의 차이점을 모르겠어요.
> `URI는 식별`하고 `URL은 식별하고 찾습`니다.

- 모든 URL과 URN은 URI이지만 모든 URI는 URL이 아닙니다.

- 통합 자원 식별자(Uniform Resource Identifier, URI)는 인터넷에 있는 자원을 나타내는 유일한 주소입니다.
  - URL은 해당 리소스를 얻는 데 필요한 특정 정보를 제공합니다.

- URI의 하위개념으로 URL, URN 이 있습니다.
  - URL(Uniform Resource Locator) : 파일 식별자, 유일자원지시기
  - URN(Uniform Resource Name) : 통합 자원 이름
    - 영속적이며 위치에 독립적인 자원을 위한 지시자로 사용하기 위한 것입니다.

- 문법
  - URI
    > scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]

  - URL
    > scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]

  - URN
    > `<URN>` ::= "urn:" `<NID>` ":" `<NSS>`

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `Server 의 인증방식`에 대해 설명해주세요.
### 인증이 필요한 이유
> 서버에서는 사용자가 보낸 요청을 받았을 때 그것이 누구의 요청인지 정확하게 알아야 합니다.

- `Front-end 관점` : 사용자의 로그인, 회원가입과 같이 사용자의 도입 부분을 가리킵니다.

- `Server-side 관점` : 모든 API 요청에 대해 사용자를 확인하는 작업

<br>

### 계정 정보를 Request Header 에 넣는 방식

<br>

### 세션(Session)과 쿠키(Cookie)
> `무연결 프로토콜` *(Connectionless Protocol)*의 불편함을 해결하기 위해 클라이언트-서버의 연결을 유지해주는 방법들입니다.

- 웹 서비스는 클라이언트와 서버의 관계를 유지하지 않는 특성을 지닌 HTTP 프로토콜을 기반으로 합니다.
  - 서버의 부하가 최소화되나 기능 구현은 어렵습니다.

- 서버와 클라이언트의 연결 상태를 유지
  - 클라이언트`[ 요청(Request) ]` : 서버 연결 시작
  - 서버`[ 응답(Response) ]` : 서버 연결 종료
  ```
  [클라이언트] 로그인 요청 | 로그인 응답 [서버]
  [클라이언트] 상품 주문 요청 | 상품 주문 응답 [서버]
  ```

  - 서버의 부하를 줄일 수 있는 장점은 있으나 클라이언트의 요청마다 매번 새로운 연결이 생성되어 일반적인 상태 유지 기능의 구현이 어렵습니다.
  - 이러한 Connectionless Protocol의 불편함을 해결하기 위해서 세션과 쿠키를 이용합니다. 


|방법|내용| 
|----|----|
|Session|서버에서 연결 정보를 관리|
|Cookie|클라이언트에서 연결 정보를 관리|

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>
