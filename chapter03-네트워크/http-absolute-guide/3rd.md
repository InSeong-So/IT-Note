## 3.1 메시지의 흐름

- HTTP 메시지: HTTP 애플리케이션간에 주고 받은 데이터의 블록. 텍스트 메타 정보와 데이터(옵션)을 포함
    - 클라이언트, 서버, 프락시 사이를 흐름
- 트랜잭션의 방향
    - 인바운드/아웃바운드
        - 인바운드: 서버 방향
        - 아웃바운드: 사용자 에이전트 방향
    - 업스트림/다운스트림
        - 업스트림:  메세지의 발송자는 수신자의 업스트림
        - 다운스트림: 요청, 응답과 관계없이 모든 메세지는 다운스트림으로 흐름

## 3.2 메시지의 각 부분

- 메시지는 시작 줄(어떤 메시지인지), 헤더 블록(속성), 본문(데이터, 옵션)으로 이루어진다.

### 3.2.1 메시지 문법

- 요청과 응답은 모두 기본적으로 같은 구조이며, 시작 줄만 다르다

요청 메시지의 형식

```
<메서드> <요청 URL> <버전>
<헤더>

<엔터티 본문>
```

응답 메시지

```
<버전> <상태 코드> <사유 구절>
<헤더>

<엔터티 본문>
```

### 3.2.2 시작줄

***요청줄 / 응답줄***

- 모든 필드는 공백으로 구분

***요청 URL***

- 동작의 대상 리소스를 지칭하는 완전한 URL 혹은 URL의 경로 컴포넌트.

***메서드***

- 클라이언트에서 서버가 리소스에 대해 수행해주길 바라는 동작.
- 공통 요청 메서드의 집합은 HTTP 명세에 정의되어있음
    - GET: 서버에서 어떤 문서를 가져온다. 본문 X
    - HEAD: 서버에서 어떤 문서에 대한 헤더만 가져온다.  본문 X
    - POST: 서버가 처리해야 할 데이터를 보낸다. 본문 O
    - PUT: 서버에 요청 메세지의 본문을 저장한다. 본문 O
    - TRACE: 메세지가 프락시를 거쳐 서버에 도달하는 과정 추적. 본문 X
    - OPTIONS: 서버가 어떤 메서드를 수행할 수 있는지 확인. 본문 X
    - DELETE: 서버에서 문서를 제거. 본문 X
- 모든 서버가 메서드 모두를 구현하지 않고, 서버가 오리지널 메소드를 만들었을 수도 있음(확장 메서드).

***상태코드***

- 클라이언트에게 요청 중에 무엇이 일어났는지 설명하는 세자리 숫자
- 상태 코드의 종류는 다음과 같으며, 범위보다 더 적은 수의 코드가 정의 되어있지만, 추후 확장될 가능성 있음
    - 100-199(실제 정의된 범위 100-101): 정보
    - 200-299(실제 정의된 범위 200-206): 성공
    - 300-399(실제 정의된 범위 300-305): 리다이렉션
    - 400-499(실제 정의된 범위 400-415): 클라이언트 에러
    - 500-599(실제 정의된 범위 500-505): 서버 에러
- 실제 정의된 범위 밖의 에러코드를 받는다면, 그 응답을 전체 범위내 코드로 간주해야 함
    - 예: 515를 받았다면 500대 서버 에러로 간주

***사유 구절(reason-phrase)***

- 상태 코드를 사람이 이해할 수 있도록 설명하는 문구로, 상태 코드와 1:1 대응.
- HTTP 명세 상에 사유 구절에 대한 엄격한 규칙은 없으므로, 사유 구절은 사람이 읽기 위한 목적으로만 사용하고 프로그래밍은 상태 코드를 기반으로 해야 함.

***버전 번호***

- 이 메시지에서 사용 중인 HTTP 버전. `HTTP/<메이저>.<마이너>` 형식을 따른다.
- 애플리케이션에게 해당 메시지의 형식과 가능한 능력에 대한 단서를 제공하기 위함

### 3.2.3 헤더

- 시작 줄 다음에 0+개의 해더가 오며, 헤더 필드는 기본적으로 key-value 쌍의 목록.
- 특정 버전의 HTTP는 요청이나 응답에 특정 헤더가 포함되어야 유효.
- HTTP 헤더의 분류:
    - 일반 헤더: 요청, 응답 양쪽에 모두 나타날 수 있음
    - 요청 헤더: 요청에 대한 부가 정보를 제공
    - 응답헤더 : 응답에 대한 부가 정보를 제공
    - Entity 헤더: 본문 크기와 콘텐츠, 혹은 리소스 그 자체를 서술
    - 확장 헤더: 명세에 정의되지 않은 새로운 헤더
- HTTP 헤더의 문법
    - 이름, 쉼표, 공백(옶션), 필드값을 포함
    - 빈 줄(CRLF)로 끝나 엔터티 본문과 구분.
- HTTP 헤더의 예
    - `Data: Tue, 3 Octt 1997 02:16:03 GMT` : 서버가 응답을 만들어 낸 시각
    - `Content-length: 15040` : 15,040바이트의 데이터를 포함한 엔터티 본문
    - `Content-type: image/gif` : 엔터티 본문은 GIF 이미지이다
    - `Accept: image/gif, image/jpeg, tetxt/html` : 클라이언트는 GIF, JPEG, HTML을 받아들일 수 있다

***헤더를 여러 줄로 나누기***

- 긴 헤더 줄은 여러줄로 쪼개서 읽기 좋게 할 수 있음. 추가 줄 앞에는 최소 하나의 스페이스 혹은 탭 문자가 와야한다.

```
HTTP/1.0 200 OK
Content-Type: image/gif
Content-Length: 8572
Server: Test Server
	Version 1.0 ← 쪼개진 헤더 
```

### 3.2.4 엔터티 본문

- 여러가지 종류의 데이터 블록을 포함하는 optional 값.

### 3.2.5 버전 0.9 메시지

- HTTP 프로토콜 초기 버전으로, 현재의 요청, 응답 메셋지의 시초지만 훨씬 단순한 프로토콜.
    - 요청: 메서드, 요청 URL
    - 응답: 엔터티
- 너무 단순하여 다양한 상황에 대응할 수 없고, 책에서 설명하는 기능 및 애플리케이션도 구현 불가능
    - 그럼에도 설명하는 것은 오래된 소프트웨어들이 계속 사용하기도 하기때문에 제약사항을 알아두기 위함

## 3.3 메서드

- HTTP 1.1 과 호환되려면 최소 GET, HEAD 메서드를 구현해야 함

### 3.3.1 안전한 메서드(Safe Method)

- GET, HEAD는 HTTP 요청의 결과로 서버에 어떤 작용도 없으므로 안전한 메서드
    - 의미상으로 안전한거지, 웹 개발자의 명세에 맞춰 개발하지 않는 경우 서버에 작용을 유발할 수도 있다.

[책 외 참고 링크(MDN)](https://developer.mozilla.org/en-US/docs/Glossary/safe)

### 3.3.2 GET

- 가장 흔히 쓰이는 메서드로, 서버에게 리소스를 달라고 요청하기 위해 사용

### 3.3.3 HEAD

- 정확히 GET처럼 행동하지만, 서버는 응답을 헤더만 돌려줌(엔터티 본문 X)
    - 서버 개발자들은 GET과 동일한 헤더를 돌려줌을 보장해야함.
- 클라이언트가 리소스를 실제로 가져올 필요 없이 헤더만 조사할 수 있도록 해줌
    - 리소스를 가져오지 않고 무엇인지(타입 등)을 알아낼 수 있음
    - 응답 상태 코드를 통해 개체 존재 유무 확인
    - 헤더 확인하여 리소스 변경여부 검사

### 3.3.4 PUT

- 서버에 문서를 작성.
    - 서버가 요청의 본문으로 요청 URL의 이름의 새 문서를 만들거나, 이미 존재한 URL이라면 본문을 교체
- PUT은 콘텐츠 변경을 할 수 있게 하므로, 많은 웹서버가 PUT을 수행 전 로그인을 요구

### 3.3.5 POST

- 서버에 입력데이터를 전송하기위해 사용.
    - POST는 서버에 데이터를 보내기위해. PUT은 서버의 리소스에 데이터를 입력하기 위해
- 실제로, HTML 폼 지원에 많이 사용되어, 폼 데이터를 서버에 전송

### 3.3.6 TRACE

- TRACE는 클라이언트에게 자신의 요청이 서버에 도달했을 때 어떻게 보이는지 알려줌
    - 요청은 방화벽, 프락시, 게이트웨이 등의 애플리케이션을 통과히며, 이들은 원래의 HTTP 요청을 수정할 수도 있음
- TRACE 요청은 목적지 서버에서 '**루프백(loopback)**' 진단을 시작
    - 서버는 자신이 받은 요청 메세지를 본문에 넣어 TRACE 응답을 되돌려 줌
    - 클라이언트는 자신과 서버 사이의 모든 HTTP 애플리케이션 요청/응답 연쇠를 따라가면서 망가지거나 수정되었는지, 그렇다면 어떻게 바뀌었는지 확인 가능
- TRACE는 주로 진단용으로 사용. 의도한 요청/응답 연쇄를 거쳐가는지 검사. 또는 다른 애플리케이션이 요청에 어떤 영향을 주는지 확인
- 많은 HTTP 애플리케이션은 메서드마다 다르게 동작하는데, TRACE는 메서드를 구별하는 메커니즘 미제공. TRACE 요청을 어떻게 처리할 것인지는 일반적으로 중간 애플리케이션이 결정.
- TRACE 요청은 엔터티 본문을 보낼 수 없다. TRACE 응답에는 서버가 받은 요청이 그대로 들어있다.

### 3.3.7 OPTIONS

- 웹 서버에게 특정 리소스에 대해 어떤 메서드가 지원되는지  지원 범위 문의.
- 실제로 여러 리소스에 대해 접근하지 않고도 어떻게 접근할 수 있는지 확인하는 수단으로 제공 됨

### 3.3.8 DELETE

- 서버에게 요청 URL로 지정한 리소스를 삭제할 것을 요청.
- HTTP 명세상 서버가 클라이언트에게 알리지않고 DELETE 요청을 무시할 수 있으므로, 삭제가 보장되지는 않음

### 3.3.9 확장메서드

- HTTP는 설계상 필요에 따라 확장해도 됨.
    - "엄격하게 보내고 관대하게 받아들여라" 라는 관용 규칙이 있음
- 대표적인 확장 메서드
    - LOCK: 사용자가 리소스를 잠글 수 있게 해줌. 예: 문서 동시 편집 방지
    - MKCOL: 사용자가 문서 생성할 수 있게 함.
    - COPY: 서버에 있는 리소스 복사
    - MOVE: 서버에 있는 리소스 옮기기
- 알려지지 않은 메서드가 요청으로 오면, 관용적으로 [501 Not Implemented](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/501) 상태코드로 응답해야함

## 3.4 상태 코드

### 3.4.1 100-199: 정보성 상태 코드

- HTTP/1.1 에서 도입.
- 상태 코드의 종류
    - [100 Continue](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/100): 요청의 시작 부분 일부가 받아들여졌으며, 클라이언트가 나머지를 계속 보내야 함. 서버는 100 전송 후, 반드시 그 다음 요청을 받아 응답해야 함
    - [101 Switching Protocols](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/101): 클라이언트가 Upgrade 헤더에 나열한 것 중 하나로 서버가 프로토콜을 바꾸었음

***클라이언트와 100 Continue***

- 엔터티 전송 예정, 그 전에 100 Continue 대기 → 100-continue를 값으로하는 Expect  요청 헤더 전송
    - 전송 이후 100 Continue 미 응답시 계속 기다리지말고, 타임아웃 후에 엔터티 전송 필요 (오래된 구현사항 대비용)
- 엔터티를 미전송 → 100-continue Expect 헤더 미전송
    - 전송시 엔터티를 보낼 것이라고 서버가 기대함

***서버와 100 Continue***

- 100-continue Expect 헤더 수신시 → 100 Continue 혹은 에러코드로 응답
    - 100 Continue 전송 전에 엔터티의 일부 혹은 전체를 수신하였다면 클라이언트는 계속 전송한다는 뜻으로, 서버는 100 Continue 를 전송할 필요가 없다
        - 하지만 요청을 다 읽은 후에 그 요청에 대한 최종 응답은 보내야한다(100 Continue 생략)
    - 본문 수신 전에 에러등의 이유로 요청을 끝내려고 할 때, 그냥 응답을 보내고 연결을 닫으면 안됨.
        - 클라이언트가 응답을 받을 수 없기 때문
- 100-continue Expect 헤더 미수신시 → 100 Continue  미전송

***프락시와 100 Continue***

- 클라이언트로부터 100-continue 응답을 의도한 요청을 받은 프락시는, 다음 홉(next-hop) 서버가
    - HTTP/1.1, 또는 버전을 모름 → Expect 헤더를 포함시켜 요청을 전달 필요.
    - HTTP/1.0과 그 이하 → 417 Expectation Faile 에러 응답
- 클라이언트가 HTTP/1.0과 그 이하일 때, 클라이언트 대신 Expect헤더와 100-continue를 요청에 포함한다면
    - 클라이언트가 응답할 줄 모르므로 서버의 100 Continue 응답을 클라이언트에 전달하지 않는다.

### 3.4.2 200-299: 성공 상태 코드

- 상태 코드의 종류
    - [200 OK](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/200): 요청이 정상, 엔터티 본문에 요청된 리소스 포함됨
    - [201 Created](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/201): 서버에 객체를 생성하는 요청(PUT 등)이 성공적으로 처리됨.
        - 서버는 상태 코드를 보내기전 반드시 객체를 생성하고, 생성된 리소스에 대한 구체적인 참조가 담긴 Location 헤더, 그 리소스를 참조할 수 있는 여러 URL을 본문에 포함해야함.
    - [202 Accepted:](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/202) 요청은 받아들여졌으나, 서버는 아직 어떤 동작도 수행하지 않음(수행보장 X).
        - 서버는 엔터티 본문에 요청에 대한 상태,  (가급적) 요청의 처리가 언제 완료되는지에 대한 정보를 포함해야 함
    - [203 Non-Authoritative Information](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/203): 엔터티 헤더에 들어있는 정보가 원래 서버가 아닌 리소스 사본에서 옴. 중개자가 리소스 사본을 들고 있지만, 리소스에 대한 메타 정보(헤더를) 검증 못/안한 케이스. 엔터티 헤더가 원래 서버에서 온 것이였다면 200일 경우 였을 애플리케이션을 위한 선택사항
    - [204 No Content](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/204): 응답 메시지에 엔터티 본문이 없음. 주로 웹 브라우저를 새문서로 이동하지않고 갱신할 때 (예: 폼 리프레시)
    - [205 Reset Content](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/205): 주로 브라우저에게 사용되는 코드로, 현재 페이지에 있는 HTML 폼을 비우라고 알려줌
    - [206 Partial Content](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/206): 부분 혹은 범위 요청 성공. 클라이언트는 특별한 헤더를 사용해, 문서의 부분 혹은 특정 범위를 요청할 수 있음.
        - 서버는 Content-Rage와 Data 헤더를 반드시 포함해야함. Etag / Content-Location 중 하나의 헤더도 포함해야함.

### 3.4.3 300-399: 리다이렉션 상태 코드

- 해당 리소스에 대해 다른 위치를 사용하라고 하거나, 리소스 내용 대신 다른 응답 제공
    - 리다이렉션 상태코드와 선택적 Location 헤더를 보낼 수 있음
- 상태 코드 종류:
    - [300 Multiple Choices](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/300): 클라이언트가 동시에 여러 리소스를 가리키는 URL을 요청한 경우, 해당 리소스의 목록과 함께 반환(Location 헤더에 선호하는 URL 포함 가능). 유저는 목록중에 선택 가능. (예: 어떤 문서가 두 언어로 제공 등)
    - [301 Moved Permanetly](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/301): 요청한 URL이 옮겨졌음. 응답은 Locatiton 헤더에 현재 리소스가 존재하는 URL 포함
    - [302 Found](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/302): 301과 동일하지만, Location 헤더로 주어진 URL 리소스를 임시로 가리키기 위한 목적으로 사용. 이후 요청에서는 원래 URL 사용.
    - [303 See Other](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/303): 클라이언트에게 리소스를 다른 URL에서 가져와야한다고 전달 할때. 새 URL은 응답 메세지의 Location 헤더에 있음. 주로 POST 요청에 대한 응답으로 클라이언트에게 리소스 위치를 알려줄 때 사용
    - [304 Not Modified](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/304): 클라이언트 헤더를 이용해 조건부 요청을 .
        - 이상태 코드를 동반한 응답에는 엔터티 본문이 없어야 함
    - [305 Use Proxy](https://tools.ietf.org/html/rfc7231#section-6.4.5): 리소스를 반드시 프락시를 통해서 접근해야 함. 보안 이슈로 미사용.
    - [306 (Unused)](https://tools.ietf.org/html/rfc7231#section-6.4.6): HTTP 1.1 이전 스펙으로 현재 미사용.
    - [307 Temporary Redirect](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/307): 301 상태코드와 유사하나, 클라이언트는 Location 헤더로 주어진 URL 리소스를 임시로 가리키기 위한 목적으로 사용. 이후 요청에서는 원래 URL 사용.
- 302, 303, 307이 중복되는 부분이 있으며, 이 차이는 HTTP/1.0, HTTP/1.1 이 상태코드를 다루는 방식의 차이에서 기인
    - 1.0 클라이언트: POST 요청을 보내고 302를 받으면 클라이언트는 Location 헤더에 있는 리다이렉트 URL을 GET  요청으로 따라감
    - 1.0 서버: POST 요청을 받고 302를 보내면, 서버는 클라이언트가 리다이렉션 URL에 GET 요청으로 리다이렉트를 따라가기를 기대
    - 1.1 서버: 해당 케이스에는 뒤이어 GET 요청이 오도록 POST 요청을 리다이렉션하기 위해 303을 전송
        - 이 혼란을 막기 위해, 302는 HTTP 1.0에게 남겨두고 HTTP 1.1은 일시적인 리다이렉트로 307을 사용하도록 함
        - 307은 Method 와 Body 를 변경하지 않고 리다이렉트 요청을 하도록 보장. [출처](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/307)
    - 서버는 리다이렉트 응답에 들어갈 가장 적절한 리다이렉트 상태 코드를 선택하기위해 클라이언트의 HTTP 버전을 검사할 필요가 있음

### 3.4.4 400-499: 클라이언트 에러 상태 코드

- 상태 코드 종류:
    - [400 Bad Request](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/400): 클라이언트가 잘못된 요청을 보냄
    - [401 Unauthorized](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/401): 리소스를 얻기전에 클라이언트가 인증이 필요함
    - [402 Payment Required](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/402): 사용될 것으로 예정하고 예약된 미사용 코드
    - [403 Forbbiden](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/403): 서버에 의해 요청 거부됨. 거부사유를 엔터티 본문에 포함할 수 있지만, 주로 이유를 숨기는 용도로 사용
    - [404 Not Found](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/404): 요청한 URL을 찾을 수 없음. 사용자에게 없음을 보여주기위한 엔터티가 포함되기도 함
    - [405 Method Not Allowed](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/405): 지원하지 않는 메서드. 어떤 메서드가 사용 가능한지 알려주기 위해 응답에 Allow 헤더가 포함되어야 함
    - [406 Not Acceptable](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/406): 클라이언트는 자신이 어떤 종류의 엔터티를 받아들이고자하는지를 매개변수로 명시할 수 있는데, 이 코드는 주어진 URL에 대한 리소스 중 클라이언트가 받아들일 수 있는 것이 없는 경우에 사용. 추가로 왜 요청이 만족될 수 없는지 알려주는 헤더를 포함할 수 있음.
    - [407 Proxy Authentication Required](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/407): 401과 같으나 리소스에 대해 인증을 요구하는 프락시 서버용
    - [408 Request Timeout](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/408): 요청을 완수하기에 시간이 너무 많이 걸리는 경우, 서버는 이 코드를 반환하고 연결을 끊을 수 있음. 타임아웃의 길이는 서버마다 다르지만 대개 충분히 길다.
    - [409 Conflict](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/409): 요청이 리소스에 대해 충돌을 일으킬 염려가 있다고 생각될 때. 응답은 충돌에 대해 설명하는 본문을 포함
    - [410 Gone](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/410): 404와 유사하나, 한때 그 리소스를 가지고 있다는 점이 다름. 유지보수 시에 기존 리소스가 제거된 경우를 알려주기 위함
    - [411 Length Required](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/411): Content-Length 헤더를 요구할 때 사용
    - [412 Precondition Failed](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/412): 클라이언트의 조건부 요청 중 하나가 실패했을 때. 조건부 요청에는 Expect 헤더를 포함.
    - [413 Request Entity Too Large](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/413): 서버가 처리할 수 있는, 처리하고자 하는 한계를 넘은 크기의 요청
    - [414 Request URI Too Long](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/414): 서버가 처리할 수 있는, 처리하고자 하는 한계를 넘은 길이의 요청 URL
    - [415 Unsupported Media Type](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/415): 서버가 이해 하거나 지원하지 못하는 내용의 유형의 엔터티를 클라이언트가 보냈을 때
    - [416 Requested Range Not Satisfiable](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/416): 요청 메세지가 리소스의 특정 범위를 요청했는데, 그 범위가 잘못된 경우
    - [417 Expectation Failed](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/417): 요청에 포함된 Expect 요청 헤더에 서버가 만족시킬 수 없는 기대가 있는 경우. 프락시나 다른 중개자 애플리케이션은 원 서버가 요청을 만족할 수 없다는 명확한 근거가있으면 이 응답 전송 가능.

### 3.4.5 500-599: 서버 에러 상태 코드

- 상태 코드 종류:
    - [500 Internal Server Error](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/500): 서버가 요청을 처리할 수 없게만드는 에러를 만났을 때
    - [501 Not Implemented](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/501): 클라이언트가 서버의 능력을 넘은 요청을 했을 때(예: 서버가 지원하지 않는 메서드 사용)
    - [502 Bad Gateway](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/502): 프락시나 게이트웨이처럼 행동하는 서버가 요청 응답 연쇄에 있는 다음 링크로부터 가짜 응답에 맞닥뜨렸을 때(예: 자신의 부모 게이트웨이에 접속하는 것이 불가능 할때)
    - [503 Service Unavailable](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/503):  현재는 서버가 요청을 처리해 줄수 없지만, 나중에 가능함을 의미. 언제 사용 가능할 수 있을지 알 수 있다면, 서버 Retry-After 헤더를 응답에 포함시킬 수 있다.
    - [504 Gateway Timeout](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/504): 408과 유사하지만, 요청은 서버로 보내고 타임아웃이 발생한 게이트웨이나 프락시에서 응답이 옴.
    - [505 HTTP Version Not Supported](https://developer.mozilla.org/ko/docs/Web/HTTP/Status/505): 서버가 지원할 수 없거나, 지원하지 않으려고 하는 버전의 프로토콜로 요청을 받았을 때.

## 3.5 헤더

### 3.5.1 일반 헤더

- 아주 기본적인 정보를 제공하며 클라이언트와 서버 양쪽 모두 사용.
- 헤더 종류
    - Connection: 클라이언트와 서버가 요청/응답 연결에 대한 옵션을 지정
    - Date: 메시지가 언제 만들어졌는지
    - MIME-Version: 발송자가 사용한 MIME 버전
    - Trailer chunked transfer: 인코딩으로 인코딩된 메시지의 끝 부분에 위치한 헤더들의 목록
    - Transfer-Encoding: 수신자에게 안전한 전송을 위해 메시지에 어떤 인코딩이 적용되었는지
    - Upgrade: 발송자가 '업그레이드'하길 원하는 새 버전이나 프로토콜
    - Via: 이 메시지가 어떤 중개자(프락시, 게이트웨이)를 거쳐왔는지

***일반 캐시 헤더***

- 원 서버로부터 객체를 가져오는 대신 로컬 복사본으로 캐시할 수 있도록 해주는 헤더.
    - Cache-Control: 메시지와 함께 캐시 지시자를 전달
    - Pragma: 메시지와 함께 지시자를 전달하는 또 다른 방법.

### 3.5.2 요청 헤더

- Client-IP: 클라이언트가 실행된 컴퓨터의 IP
- From: 클라이언트 사용자의 메일 주소
- Host: 요청 대상이 되는 서버의 호스트 명과 포트
- Referer: 현재 요청 URI가 들어있던 문서의 URL
- UA-Color: 클라이언트 기기 디스플레이의 색상 능력
- UA-CPU: 클라이언트 CPU 종료나 제주사
- UA-Disp: 클라이언트 디스플레이 능력
- UA-OST: 클라이언트 기기에서 동작 중인 운영체제의 이름과 버전
- UA-Pixels: 클라이언트 기기 디스플레이에 대한 픽셀 정보
- User-Agent: 요청을 보낸 애플리케이션 이름

***Accept 관련 헤더***

- Accept: 서버에게 서버가 보내도 되는 미디어 종류 안내
- Accept-Charset: 서버에게 서버가 보내도 되는 문자 집합 안내
- Accept-Encoding: 서버에게 서버가 보내도 되는 인코딩 안내
- Accept-Language: 서버에게 서버가 보내도 되는 언어 안내
- TE(Transfer-Encoding): 서버에게 서버가 보내도 되는 확장 전송 코딩 안내

***조건부 요청 헤더***

- Except: 클라이언트가 요청에 필요한 서버의 행동 열거
- If-Match: 문서의 엔터티 태그가 주어진 엔터티 태그와 일치하는 경우에만 문서 가져오기
- If-Modified-Since: 주어진 날짜 이후에 리소스가 변경되지 않았다면 요청 제한
- If-None-Match: 문서의 엔터티 태그가 주어진 엔터티 태그와 일치하지 않는 경우에만 문서 가져오기
- If-Range: 문서의 특정 범위에 대한 요청을 할 수 있게 해줌
- If-Unmodified-Since: 주어진 날짜 이후에 리소스가 변경되었다면 요청 제한
- Range: 서버가 범위 요청을 지원한다면, 리소스에 대한 특정 범위 요청

***요청 보안 헤더***

- Authrization: 클라이언트가 서버에게 제공하는 인증 정보
- Cookie: 클라이언트가 서버에게 토큰을 전달할 때 사용. 진짜 보안 헤더는 아니지만, 보안에 영향을 줌
- Cockie2: 요청자가 지원하는 쿠키의 버전을 알려줄 때 사용. [RFC 2965](https://tools.ietf.org/html/rfc2965)로 정의된 쿠키.

***프락시 요청 헤더***

- Max-Forwards: 요청이 원 서버로 향하는 과정에서 다른 프락시나 게이트웨이로 전달될 수 있는 최대 횟수. TRACE와 함께 사용
- Proxy-Authorization: Authrization 과 같지만, 프락시에서 인증을 할 때 사용.
- Proxy-Connection: Connection 과 같지만, 프락시에서 연결을 맺을 때 사용.

### 3.5.3 응답 헤더

- Age: 응답이 얼마나 오래되었는지
- Public: 서버가 특정 리소스에 대해 지원하는 요청 메서드의 목록
- Retry-After: 현재 리소스가 사용 불가능한 상태일 때, 언제 가능해지는지 날짜 혹은 시각
- Server: 서버 애플리케이션의 이름과 버전
- Title: HTML 문서에서 주어진 것과 같은 제목
- Warning: 사유 구절에 있는 것보다 더 자세한 경고 메시지

***협상 헤더***

- Accept-Ragnes: 서버가 자원에 대해 받아들일 수 있는 범위의 형태
- Vary: 서버가 확인해 보아야 하고,  그 때문에 응답에 영향을 줄 수 있는 헤더들의 목록.

***응답 보안헤더***

- Proxy-Authenticate: 프락시에서 클라이언트로 보낸 인증 요구의 목록
- Set-Cookie: 서버가 클라이언트를 인증할 수 있도록 클라이언트 측 토큰을 설정하기위해 사용
- Set-Cookie2: Set-Cookie와 유사하지만 [RFC 2965](https://tools.ietf.org/html/rfc2965)로 정의된 쿠키.
- WWW-Authenticate: 서버에서 클라이언트로 보낸 인증 요구의 목록

### 3.5.4 엔터티 헤더

- 메세지 내의 엔터티를 설명하는 헤더로, 엔터티가 요청/응답에 포함될 수 있으므로, 요청/응답 모두에 나타날 수 있음.
- 종류
    - Allow: 이 엔터티에 대해 수행될 수 있는 요청 메서드 나열
    - Location: 클라이언트에게 엔터티가 실제로 어디에 위치하고 있는지 말해 줌. 수신자에게 리소스에 대한 (아마도 새로운) 위치(URL)를 알려줄 때 사용

***콘텐츠 헤더***

- Content-Base: 본문에서 사용된 상대 URL을 계산하기 위한 기저 URL
- Content-Encoding: 본문에 적용된 어떤 인코딩
- Content-Language: 본문을 이해하는데 가장 적절한 자연어
- Content-Length: 본문의 길이나 크기
- Content-Location: 리소스가 실제로 어디에 위치하는지
- Content-MD5: 본문의 MD5 체크섬(checksum)
- Content-Range: 전체 리소스에서 이 엔터티가 해당하는 범위를 바이트 단위로 표현
- Content-Type: 이 본문이 어떤 종류의 객체인지

***엔터티 캐싱헤더***

- ETag: 엔터티에 대한 엔터티 태그
- Expires: 이 엔터티가 더 이상 유효하지 않아 원본을 다시 받아와야 하는 일시
- Last-Modified: 가장 최근 이 엔터티가 변경된 일시
