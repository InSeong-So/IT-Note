# 네트워크

<br>

## `HTTP` 란 무엇인가요?
> HyperText Transfer Protocol 의 약자로 WWW(Worl-Wide-Web, 월드 와이드 웹)에 내재된 프로토콜
> - WWW 에서 하이퍼텍스트(hypertext) 문서를 교환하기 위하여 사용되는 통신규약

### WWW 와 HTTP
- 초기에 `Mesh` 라고 불리며 1990년 구현 과정에서 월드 와이드 웹으로 이름을 바꿨다.

- 기존의 TCP, 그리고 IP 프로토콜 상에 만들어지면서 4개의 빌딩 블록으로 구성되었다.
  - 하이퍼텍스트 문서를 표현하기 위한 텍스트 형식의 하이퍼텍스트 마크업 언어 (`HTML`).
  
  - 문서 같은 것을 교환하기 위한 간단한 프로토콜인 하이퍼텍스트 전송 프로토콜 (`HTTP`).
  
  - 문서를 디스플레이(그리고 우발적으로 수정)하기 위한 클라이언트인 월드 와이드 웹(`WorldWideWeb`)이라고 불리는 첫번째 브라우저.
  
  - 문서에 접근하도록 해주는, `httpd` 의 초기 버전.

- 초기 단계에 사용되던 HTTP 프로토콜은 매우 간단했으며 `HTTP/0.9` 버전을 부여 받은 이후 `원-라인 프로토콜`로 불리기도 했다.

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `HTTP 1.1`과 `HTTP 2.0`의 차이점은 뭐에요?
### HTTP/0.9 – 원-라인 프로토콜
> HTTP 초기 버전에 번호가 없어 차후 버전과 구별하기 위해 0.9로 불리다

- 기능
  - 요청은 `단일 라인`으로 구성되며 리소스에 대한 요청 가능한 메서드는 `GET` 이 유일
  
  - 응답은 `파일 내용 자체로만 구성`하여 극도로 단순
  
  - HTTP 헤더가 없어 `HTML 파일만 전송`될 수 있으며 다른 유형의 문서는 전송 불가
  
  - 상태 혹은 오류 코드가 없어 문제가 발생하면 사람이 처리할 수 있도록 `해당 파일 내부에 문제에 대한 설명을 첨부`하여 응답

<br>

### HTTP/1.0 – 확장성 만들기
> 매우 제한적이지만 브라우저와 서버 모두 융통성을 가지도록 빠르게 확장되다

- 도입된 개선사항
  - `버전 정보`가 각 요청 사이내로 전송되기 시작 *(HTTP/1.0 이 GET 라인에 붙은 형태로)*
  
  - `상태 코드 라인`은 응답의 시작 부분과 `함께` 전송된다.
    - 브라우저가 요청에 대한 성공과 실패를 알 수 있다.
    
    - 성공과 실패에 따른 결과 동작(특정 방법으로 그것의 로컬 캐시를 갱신하거나 사용하는 것과 같은)을 할 수 있다.
  
  - `HTTP 헤더`는 요청과 응답 모두를 위해 메타데이터 전송을 허용하고 프로토콜을 극도로 유연하고 확장 가능하도록 만들어주었다.
  
  - 새로운 `HTTP 헤더(Content-Type)`의 도움으로, 평이한 HTML 파일들 외에 다른 문서들을 전송하는 기능이 추가되었다.

<br>

### HTTP/1.1 – 표준 프로토콜
> 구현과 표준화를 동시에 진행했던 HTTP/1.0 의 개선된 결과물

- 도입된 개선사항
  - `커넥션의 재사용이 가능`해졌다.
    - 탐색된 단일 원본 문서에 임베드된 리소스들을 디스플레이하기 위해 사용된 커넥션을 다시 열어 시간을 절약할 수 있게 되었다.
  
  - `파이프라이닝`을 추가하여 첫번째 요청에 대한 응답이 완전히 전송되기 이전에 두번째 요청 전송을 가능하게 해 커뮤니케이션 레이턴시를 낮췄다.
  
  - `청크된 응답 또한 지원`한다.
  
  - 추가적인 `캐시 제어 메커니즘이 도입`되었다.
  
  - 언어, 인코딩 혹은 타입을 포함한 `컨텐츠 협상이 도입`되어 클라이언트와 서버로 하여금 교환하려는 가장 적합한 컨텐츠인지 판단하게 되었다.
  
  - `Host 헤더` 덕분에 동일 IP 주소에 다른 도메인을 호스트하는 기능인 `서버 코로케이션`이 가능해졌다.

<br>

### HTTP/2.0 – 더 나은 성능을 위한 프로토콜
> SPDY 프로토콜로 응답성 증가 능력을 입증하고 전송된 데이터 중복에 관한 문제를 해결

- HTTP/2.0 과 SPDY 의 관계 : Google 이 ‘speedy’ 라는 단어를 기반으로 제안한 새로운 프로토콜. HTTP 의 단점들을 보완하여 인터넷 환경을 보다 효율적으로 이용하기 위함이다.

- SPDY의 특징
  - TLS 위에서 동작한다.
    - https에서만 적용할 수 있다.
  
  - HTTP 헤더를 압축한다.
    - 요청마다 반복되는 내용을 압축해 성능 향상 효과가 나타난다.
  
  - 바이너리로 프레임을 구성한다.
    - 파싱 속도가 향상되고 오류확률은 낮아진다.
  
  - 다중 연결을 지원한다.
    - 다수의 요청, 응답 을 동시에 처리 할 수 있어 속도가 향상된다.
  
  - 인터리빙을 허용한다.
    - 우선순위가 높은 데이터가 더 빨리 전송 될 수있다.
  
  - 서버 푸시가 가능하다.

- 도입된 개선사항이자 HTTP/1.x 버전과의 차이점
  - 텍스트 프로토콜 보다는 `이진 프로토콜`에 가까운 형태
    - 읽을 수도, 수작업으로 만들어 낼 수도 없다. 따라서 새로운 최적화 기술이 구현될 수 있다.
  
  - 병렬 요청이 동일한 커넥션 상에서 다루어질 수 있는 `다중화 프로토콜`
    -  `순서를 제거`하고 HTTP/1.x 프로토콜의 제약사항을 해소한다.
  
  - 전송된 데이터의 `중복`과 그런 데이터로부터 유발된 불필요한 `오버헤드의 제거`
    - 연속된 요청 사이에 유사한 내용으로 존재하는 헤더들을 압축시킨다.
  
  - 서버는 `서버 푸쉬`라고 불리는 메커니즘을 통해 `클라이언트 캐시`에 필요한 데이터를 채우도록 허용한다.

- 정리
  - 효율적인 페이지 로딩을 위해 URL의 이미지, 스크립트 등의 자원을 압축해 페이지 렌더링을 위한 요청횟수를 감소시켰다.
  
  - server가 push가 가능해 웹페이지의 렌더링이 필요하단 사실을 알게되면 추가 요청없이 서버가 리소스를 제공한다.
  
  - 성능 개선을 위한 요청 다중화, 헤더 압축, HOL Blocking 해결을 위한 요청 우선순위 결정 등이 있다.

- 결론
  - HTTP/1.1 이 사용하는 전송방식(RFC7230)에는 몇가지 문제점이 존재했다.
  
  - HTTP/1.0 은 TCP connection 에서 한 번에 하나의 요청만이 가능했다.
    - HTTP/1.1 에서는 request pipelining 을 사용하여 위의 문제를 해결했으나 HOL Blocking 문제는 해결되지 않았다.
  
  - HTTP/2.0 은 오랫동안 변화하지 않았던 HTTP를 현재의 웹 환경에 맞게 발전시켜 속도의 향상을 도모했다.

<br>

<sup>[(목차로)](#목차)</sup>
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
- 1xx : Informational, 조건부 응답

- 2xx : Success, 성공
  - `200` : OK, 요청이 성공적으로 전송됨

- 3xx : Redirection, 리다이렉션 완료
  - 301 : Moved Permanently, 요청 페이지의 영구적인 위치 변화

  - 302 : Found, 요청 페이지이 일시적인 위치 변화

- 4xx : Client Error, 요청 오류(클라이언트 오류)
  - `404` : Not Found, 요청받은 자원을 서버에서 찾을 수 없을때 나타나는 상태 

  - 405 : Method Not Allowed, 서버에서 사용자가 요청한 주소의 메소드를 지원하지 않을때 나타남

- 5xx : server Error, 서버 오류
  - `500` : Internal Server Error, 서버에 오류가 발생하여 요청 수행 불가
  
  - 503 : Service Unavailable, 서버의 오버로드 / 다운으로 현재 사용할 수 없으나 대개 일시적인 상태
  
  - 504 : Gateway Time-out, 서버가 게이트웨이나 프록시 역할을 하고 있거나 업스트림 서버에서 제때 요청을 받지 못함

<br>

### 요청 / 응답 메세지
- 요청 라인 *(Request-Line)*
```
□ Request-Line
- HTTP 메서드 / URL, 또는 프로토콜, 포트, 도메인의 절대 경로 / ​​​​HTTP 버전
□ Header
- general-header : Via 와 같은 헤더는 메시지 전체에 적용
- request-header : 아래 항목을 추가하여 요청 내용을 수정
 : User-Agent, Accept 등과 같은 헤더는 요청의 내용을 좀 더 구체화
 : 컨텍스를 제공(Referer)
 : 조건에 따른 제약 사항 추가(If-None) 
- entity-header : Content-Length 와 같은 헤더는 요청 본문에 적용
 : 요청 내에 본문이 없는 경우 entity 헤더는 전송되지 않습니다.
□ Message-body
```

- 응답 라인 *(Status-Line)*
```
□ Status-Line
- 프로토콜 버전 / 상태코드 / 상태코드 정의
*(( general-header | response-header | entity-header ))
□ Message-body
```

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `GET`, `POST` 방식의 차이점은 무엇인가요?

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `HTTP` 와 `HTTPS` 의 차이점은요?
- HTTP의 문제점
  - HTTP 는 평문 통신이기 때문에 도청이 가능하다.
  - 통신 상대를 확인하지 않기 때문에 위장이 가능하다.
  - 완전성을 증명할 수 없기 때문에 변조가 가능하다.

- HTTP의 문제점을 보완한 HTTPS
  - HTTP 통신 소켓을 SSL(Secure Socket Layer) / TLS(Transport Layer Security) 프로토콜로 대체했다.
  - HTTP - SSL - TCP와 통신하는 시스템이다.
    - 따라서 암호화와 증명서, 안전성 보호를 이용할 수 있게 되었다.
  - 평문 통신에 비해 암호화 통신은 CPU나 메모리가 많이 필요하여 민감한 정보를 다룰 때에만 사용했다.
    - [HTTP 2.0이 발전되면서 HTTPS가 HTTP보다 빠르다고 한다.](https://tech.ssut.me/https-is-faster-than-http/)

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `OSI 7 Layer` 가 뭐죠?
> 7 : Application (응용 계층)
> - HTTP, SMTP, SNMP, FTP, Telnet, SSH & Scp, NFS, RTSP 

> 6 : Presentation (표현 계층)
> - JPEG, MPEG, XDR, ASN.1, SMB, AFP 

> 5 : Session (세션 계층)
> - TLS, SSH, ISO 8327 / CCITT X.225, RPC, NetBIOS, AppleTalk 

> 4 : Transport (전송 계층)
> - TCP, UDP, RTP, SCTP, SPX, AppleTalk 

> 3 : Network (네트워크 계층)
> - IP, ICMP, IGMP, X.25, CLNP, ARP, RARP, BGP, OSPF, RIP, IPX, DDP 

> 2 : Data link (데이터 링크 계층)
> - Ethernet, Token Ring, PPP, HDLC, Frame relay, ISDN, ATM, 무선랜, FDDI 

> 1 : Physical (물리 계층)
> - 전선, 전파, 광섬유, 동축케이블, 도파관, PSTN, Repeater, DSU, CSU, Modem

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `TCP` 와 `UDP` 의 차이점은 무엇이죠?
- TCP는 신뢰성이 있는 연결을 지향하며, UDP는 빠른 전송을 지향한다.
  - TCP는 Stateful(상태유지)이며 UDP는 Stateless(무상태) 프로토콜이다.

- TCP는 내가 보낸 데이터가 확실히 상대방에게 전달이 되었는지 포커를 맺고, UDP는 일방적으로 전송을 한다.

- UDP의 한 예로 스트리밍 방송이 있는데, 방송을 하다가 중간에 신호가 끊어져도 다음으로 그냥 이어서 방송을 하는 것처럼 UDP는 일방적인 데이터 전송을 하는 반면, TCP는 데이터 하나라도 놓치지 않고 완벽히 보내는 것이 목표이기 때문에 방향성이 완전히 다르다.

- UDP는 알고리즘이 간단한 반면, TCP는 연결부터 끊는 과정까지 상대적으로 복잡하다.

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `TCP/IP 4 Layer` 는 뭐죠?

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `TCP-3-hands-shaking` 에 대해 설명해주세요.

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `DNS` 의 `Round Robin` 방식을 설명해주세요.
- L4 스위치 같은 로드밸런싱 장비가 부담이 될 때 저렴하고 간단하게 서버 분산을 구현하는 방법이다.
  - 클라이언트 세션을 유지하며 처음 연결한 서버에 지속적으로 연결해주는 기능은 없다.

  - 간단한 요청과 결과로만 이루어진 페이지들이라면 사용할 수 있다.

- 서버가 A, B, C 3대가 있으면 첫 요청에 A, 다음엔 B, 다음에 C로 연결하고 이후엔 다시 A-B-C 절차를 반복한다.

<br>

<sup>[(목차로)](#목차)</sup>
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
  > DNS Query를 DNS 서버에 송신한다.
  >> DNS 서버는 웹 서버의 IP주소를 사용자 PC로 반환한다.
    ```
      사용자의 PC는 가장 먼저, 지정된 DNS서버(통신사마다 DNS서버 존재)에 DNS Query를 송신한다.
      
      예로 http://www.naver.com를 검색하면 지정된 DNS서버는 Root 네임서버에 www.naver.com을 질의하고 Root 네임서버는 .com 네임서버의 ip주소를 알려준다.
      그 후 .com 네임서버에 www.naver.com을 질의하면 naver.com 네임서버의 IP주소를 받고, 그곳에 질의를 송신하여 www.naver.com의 IP주소를 수신하게 된다.

      과정이 복잡한 이유는 도메인의 계층화 구조에 따라 DNS서버도 계층화되어 있기 때문이다. 도메인의 가장 최상단, 즉 가장 뒷쪽(.com, .kr 등등)을 담당하는 DNS서버는 전세계에 13개 뿐이다.
    ```

- 웹 서버 접속
    > HTTP Request를 위해 TCP Socket을 개방하고 연결한다. 이 과정에서 3-Hand-Shaking이 일어난다.
    >> TCP 연결에 성공하면 HTTP Request가 소켓을 통해 전송된다.
    >>> 이에 서버가 응답하면 웹 페이지의 정보가 사용자 PC로 수신된다.

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `Routing Table` 은 무엇인가요?
- 라우팅(Rounting) : 주소를 이용하여 목적지까지 메시지를 전달하는 방법을 결정하는 경로 선택 과정이다.
    - 이 과정을 능동적으로 수행하는 장치를 라우터(Router)라고 한다.
    - 경로 선택을 위한 데이터베이스(목록)을 라우팅 테이블(Routing Table)이라고 하며 목적지 네트워크 주소, 라우터의 출구 포트 정보, 최적 경로 산출을 위한 metrics 등의 정보를 포함한다.
        - 라우터가 최적의 경로를 찾아 결정할 때 사용한다.
        - 라우터가 패킷을 수신하면 패킷의 목적지 IP주소를 검사하고, 라우터의 라우팅 테이블 안에 있는 가장 일치하는 네트워크 주소를 검색한다.
        - 라우팅 테이블은 또한 패킷을 전송하는데 사용되는 인터페이스를 포함한다.
        - 부합하는 네트워크를 찾게 되면 라우터는 밖으로 나가는 인터페이스의 데이터 링크 프레임 안에 IP패킷을 캡슐화하고, 그 다음에 그것의 목적지 쪽으로 패킷을 전송한다.

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `URL Encode` 는 무엇인가요?

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `UTF-8`을 설명해주세요.
- 가장 많이 사용되는 가변 길이 유니코드 인코딩이다.
- 표현 가능한 길이는 최대 6바이트지만 다른 인코딩과의 호환을 위해 4바이트까지만 사용한다.
- 아스키 코드의 0~127까지는 UTF-8로 완전히 동일하게 기록된다.
  - 아스키로 구축된 사이트를 별다른 변환 처리 없이 그대로 쓸 수 있는 엄청난 장점이 있다.
- UTF-8은 엔디안에 상관없이 똑같이 읽을 수 있으므로 크로스플랫폼 호환성도 뛰어나다.
  - 엔디안(Endianness) : 메모리와 같은 1차원의 공간에 여러 개의 연속된 대상을 배열하는 방법이다.

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `URL` 과 `URI` 의 차이점을 모르겠어요.
- **URI는 식별하고 URL은 식별하고 찾는다.**
  - 모든 URL과 URN은 URI이지만 모든 URI는 URL이 아니다.
- 통합 자원 식별자(Uniform Resource Identifier, URI)는 인터넷에 있는 자원을 나타내는 유일한 주소이다.
  - URL은 해당 리소스를 얻는 데 필요한 특정 정보를 제공한다.
- URI의 하위개념으로 URL, URN 이 있다.
  - URL(Uniform Resource Locator) : 파일 식별자, 유일자원지시기
  - URN(Uniform Resource Name) : 통합 자원 이름
    - 영속적이며 위치에 독립적인 자원을 위한 지시자로 사용하기 위한 것이다.
- 문법
  - URI
    > scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]
  - URL
    > scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]
  - URN
    > `<URN>` ::= "urn:" `<NID>` ":" `<NSS>`

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## `Server 의 인증방식`에 대해 설명해주세요.
### 인증이 필요한 이유
- Front-end 관점 : 사용자의 로그인, 회원가입과 같이 사용자의 도입 부분을 가리킴

- Server-side 관점 : 모든 API 요청에 대해 사용자를 확인하는 작업

- 서버에서는 사용자가 보낸 요청을 받았을 때 그것이 누구의 요청인지 정확하게 알아야 함

<br>

### 세션(Session)과 쿠키(Cookie)

## Connectionless Protocol

> 웹 서비스는 클라이언트와 서버의 관계를 유지하지 않는 특성을 지닌 HTTP 프로토콜을 기반으로 한다.

    # 서버의 부하가 최소화, 기능 구현 어려움
    	클라이언트 |요청(Request) : 서버 연결 / 응답(Response) : 서버 연결 종료 | 서버
    
    
    # 서버와 클라이언트의 연결 상태를 유지
    	클라이언트 | 로그인 요청 / 응답, 상품 주문 요청 / 응답 | 서버

> 이는 서버의 부하를 줄일 수 있는 장점은 있으나 클라이언트의 요청마다 매번 새로운 연결이 생성되어 일반적인 상태 유지 기능의 구현이 어렵다.이러한 Connectionless Protocol의 불편함을 해결하기 위해서 세션과 쿠키를 이용한다.세션과 쿠키는 클라이언트-서버의 연결을 유지해주는 방법이다.


|방법|내용| 
|----|----|
|Session|서버에서 연결 정보를 관리|
|Cookie|클라이언트에서 연결 정보를 관리|

<br>

<sup>[(목차로)](#목차)</sup>
<br>
<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>


<br>

## :book:Encoding에 대해 설명할 수 있다.
- Encoding이란 정보의 형태, 형식을 내용의 변경 없이 변환하는 처리 방식이다.
  - 암호화로는 사용할 수 없다.
  - 종류로는 ASCII, URL, Base64, MS Script가 있다.

### ASCII Encoding이란?
- ASCII (American Standard Code for Information Interchange, 미국 정보 교환 표준 부호, 아스키 코드)
  - 미국 ANSI에서 표준화한 정보교환용 7비트 부호체계이다.
  - 나머지 1비트는 패리티 비트(Parity bit)로 정보 전달 시 오류 발생여부를 검사하기 위해 사용했다.
    - 체크에 검출되지 않는 신호 에러도 생길 수 있고 현재는 더 이상 쓰이지 않는다. 
  - 000(0x00)부터 127(0x7F)까지 총 128개의 부호가 사용된다.
  - 영문 키보드로 입력할 수 있는 모든 기호들로 할당되어 매우 단순하고 간단하다.
  - 8비트 문자 인코딩에서는 맨 앞 비트에 0을 붙이고 이어서 7비트가 이어지는 식의 인코딩이 일반적이다.

### URL Encode란?
- 주소 지정을 목적으로 웹 브라우저 / 서버가 이해할 수 있는 문자로 특수 문자를 대체한다.
  - ASCII 코드에서 표현하지 않는 외국어와 특수문자를 표현하기 위해 사용한다.
  - 코드의 앞에 %문자가 포함되는 형태이다.

### Base64 Encoding이란?

### MS script Encoding이란?
