# 네트워크

- [네트워크](#네트워크)
    - [:book:HTTP 1.0과 2.0의 차이점](#bookhttp-10과-20의-차이점)
    - [:book:HTTP Method의 종류에 대해 설명할 수 있다.](#bookhttp-method의-종류에-대해-설명할-수-있다http-methodmd)
    - [:book:OSI 7 Layer에 대해 설명할 수 있다.](#bookosi-7-layer에-대해-설명할-수-있다osi-7-layermd)
    - [:book:TCP/IP 4 Layer에 대해 설명할 수 있다.](#booktcpip-4-layer에-대해-설명할-수-있다tcpip-4-layermd)
    - [:book:HTTP와 HTTPS의 차이점](#bookhttp와-https의-차이점)
    - [:book:DNS의 Round Robin 방식에 대해 설명할 수 있다.](#bookdns의-round-robin-방식에-대해-설명할-수-있다)
    - [:book:서버로 요청하면 일어나는 일련의 과정에 대해 설명할 수 있다.](#book서버로-요청하면-일어나는-일련의-과정에-대해-설명할-수-있다)
    - [:book:Routing Table에 대해 설명할 수 있다.](#bookrouting-table에-대해-설명할-수-있다)
    - [:book:URL Encode에 대해 설명할 수 있다.](#bookurl-encode에-대해-설명할-수-있다)
    - [:book:UTF-8에 대해 설명할 수 있다.](#bookutf-8에-대해-설명할-수-있다)
    - [:book:URL과 URI의 차이점](#bookurl과-uri의-차이점)
    - [:book:Cookie와 Session에 대해 설명할 수 있다.](#bookcookie와-session에-대해-설명할-수-있다)

<br>

## :book:HTTP 1.0과 2.0의 차이점

<br>

## :book:[HTTP Method의 종류에 대해 설명할 수 있다.](HTTP-Method.md)

<br>

## :book:[OSI 7 Layer에 대해 설명할 수 있다.](OSI-7-Layer.md)

<br>

## :book:[TCP/IP 4 Layer에 대해 설명할 수 있다.](TCP/IP-4-Layer.md)

<br>

## :book:HTTP와 HTTPS의 차이점

<br>

## :book:DNS의 Round Robin 방식에 대해 설명할 수 있다.
- L4 스위치 같은 로드밸런싱 장비가 부담이 될 때 저렴하고 간단하게 서버 분산을 구현하는 방법이다.
  - 클라이언트 세션을 유지하며 처음 연결한 서버에 지속적으로 연결해주는 기능은 없다.
  - 간단한 요청과 결과로만 이루어진 페이지들이라면 사용할 수 있다.
- 서버가 A, B, C 3대가 있으면 첫 요청에 A, 다음엔 B, 다음에 C로 연결하고 이후엔 다시 A-B-C 절차를 반복한다.

<br>

## :book:서버로 요청하면 일어나는 일련의 과정에 대해 설명할 수 있다.
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

## :book:Routing Table에 대해 설명할 수 있다.
- 라우팅(Rounting) : 주소를 이용하여 목적지까지 메시지를 전달하는 방법을 결정하는 경로 선택 과정이다.
    - 이 과정을 능동적으로 수행하는 장치를 라우터(Router)라고 한다.
    - 경로 선택을 위한 데이터베이스(목록)을 라우팅 테이블(Routing Table)이라고 하며 목적지 네트워크 주소, 라우터의 출구 포트 정보, 최적 경로 산출을 위한 metrics 등의 정보를 포함한다.
        - 라우터가 최적의 경로를 찾아 결정할 때 사용한다.
        - 라우터가 패킷을 수신하면 패킷의 목적지 IP주소를 검사하고, 라우터의 라우팅 테이블 안에 있는 가장 일치하는 네트워크 주소를 검색한다.
        - 라우팅 테이블은 또한 패킷을 전송하는데 사용되는 인터페이스를 포함한다.
        - 부합하는 네트워크를 찾게 되면 라우터는 밖으로 나가는 인터페이스의 데이터 링크 프레임 안에 IP패킷을 캡슐화하고, 그 다음에 그것의 목적지 쪽으로 패킷을 전송한다.

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

<br>

## :book:UTF-8에 대해 설명할 수 있다.

<br>

## :book:URL과 URI의 차이점
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

## :book:Cookie와 Session에 대해 설명할 수 있다.
- [링크](https://github.com/InSeong-So/My_IT_Note/blob/master/chapter4.5-%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/Spring-MVC.md#%EC%84%B8%EC%85%98session%EA%B3%BC-%EC%BF%A0%ED%82%A4cookie)