# 데이터베이스

## :book:SQL은 뭐죠?
> SQL(Strucured Query Language), RDBMS의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어

- 개요
  - RDBMS를 효과적으로 제어하기 위해 고안
    - 자료의 검색과 관리 가능
    - 데이터베이스 스키마 생성과 수정 가능
    - 데이터 베이스 객체 접근 조정 관리 가능
  
  - 많은 수의 RDBMS가 SQL을 표준으로 채택 중

<hr>
<br>

## :book:RDB vs NoSQL
> RDB : Relational Database, 관계형 데이터베이스
> NoSQL : Not only SQL, 비관계형 데이터베이스

### RDB
- 특징
  - 테이블(Table) 마다 스키마(Schema)를 정의
    - 데이터 타입과 제약(Constraint)를 통해서 데이터의 정확성을 보장
  
  - SQL문을 통해 요청 처리
    - 대표적으로 MySQL, MS-SQL, Oracle DB가 존재
  
  - 성능을 높이려며 하드웨어를 고성능으로 교체(`Scale Up`)해야 함
    - 고성능 하드웨어는 가격이 비싸므로 RDB의 성능 확정에는 불리

<br>

### NoSQL
- 특징
  - RDB의 확장성 이슈를 해결하기 위해 나온 데이터베이스 모델
  - 분산 컴퓨팅 활용이 목적이므로 비교적 저렴한 가격에 성능 향상 가능(`Scale Out`)
  - 여러 개의 테이블이 아닌, 큰 테이블(Document) 하나만을 사용
  - 가장 많이 쓰이는 NoSQL의 방식은 Key-Value방식으로 데이터를 관리합니다.
  - SQL문을 사용하지 않음
  - Schema-Less (구조 변경이 용이하고, 데이터 형식이 다양하며, 바꾸기 쉬우며, 정확성 보다는 데이터 양이 중요한 빅데이터(Big Data)에 사용합니다.
  - 대표적으로 MongoDB(document-oriented), Redies(Key-Value)가 존재

<hr>
<br>

## :book:DB Normalization이 무엇인가요?

<hr>
<br>

## :book:SQL문의 Merge 구문에 대해 알려주세요.

<hr>
<br>

## :book:SQL문의 Join 구문에 대해 알려주세요.

<hr>
<br>

## :book:데이터베이스에서의 Index를 설명해주세요.

<hr>
<br>
