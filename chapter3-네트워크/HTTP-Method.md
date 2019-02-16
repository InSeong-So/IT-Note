# HTTP(HyperText Transfer Protocol) Method

## HTTP Method의 종류에 대해 설명하시오.
- OPTIONS: 요청한 URL에 어떠한 메소드 요청이 가능한지 묻는다.
- GET: 다른 작업없이 데이터의 검색에 이용.
- HEAD: 데이터의 검색에 이용하나 GET과는 다르게 응답 HEADER만 받는다.
- POST: URL에 새로운 데이터를 보낼때 사용한다.
- PUT: URL에 저장될 정보를 보낸다.
- DELETE: URL의 리소스를 삭제한다.
- TRACE: 보낸 메세지를 다시 돌려받는다.
- CONNECT: 프록시에서 사용되는 예약 메소드이다.

<br>

## GET, POST 방식의 차이점

<br>

## Status Code
- 1xx - Informational - 정보교환
- 2xx - Success - 성공
  - 200 - OK	- 요청이 성공적으로 전송됨
- 3xx - Redirection - 방향 지정
  - 301 - Moved Permanently - 요청 페이지의 영구적인 위치 변화
  - 302 - Found	- 요청 페이지이 일시적인 위치 변화
- 4xx - Client Error - 클라이언트 오류
  - 404 - Not Found - 요청받은 자원을 서버에서 찾을 수 없을때 나타나는 상태 
  - 405 - Method Not Allowed - 서버에서 사용자가 요청한 주소의 메소드를 지원하지 않을때 나타남
- 5xx - server Error - 서버 오류

<br>

## 요청 / 응답 메세지
Request-Line
*(( general-header | request-header | entity-header ) CRLF)
CRLF
[ message-body ]

Request-line: method, request url, http버전
Request-header: general-header, request-header, entity-header가 존재하며 필요에 따라 사용
Status-Line

*(( general-header | response-header | entity-header ) CRLF)
CRLF
[ message-body ]

status-line: http 버전, 상태 코드, 상태 메세지
Request-header: general-header, response-header, entity-header