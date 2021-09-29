# 데이터베이스

## :book:SQL은 뭐죠?
> SQL(Strucured Query Language), RDBMS의 데이터를 관리하기 위해 설계된 특수 목적의 프로그래밍 언어

- 개요
  - RDBMS를 효과적으로 제어하기 위해 고안
    - 자료의 검색과 관리 가능
    - 데이터베이스 스키마 생성과 수정 가능
    - 데이터 베이스 객체 접근 조정 관리 가능
  
  - 많은 수의 RDBMS가 SQL을 표준으로 채택 중

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

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

  - 수직적 확장 *(Vertical Scaling)* 가능
    - 데이터베이스 서버의 성능을 향상시키는 것

- 사용 권장
  - 관계를 맺은 데이터가 자주 변경되는 경우
  - 변경될 여지가 없으며 명확한 스키마가 존재하는 경우

<br>

### NoSQL
- 특징
  - RDB의 확장성 이슈를 해결하기 위해 나온 데이터베이스 모델
    - 여러 개의 테이블이 아닌, 큰 테이블(Document) 하나만을 사용
  
  - SQL문을 사용하지 않음
    - 가장 많이 쓰이는 NoSQL의 방식은 Key-Value방식으로 데이터를 관리
    - 대표적으로 MongoDB(Document-Oriented), Redies(Key-Value)가 존재
  
  - 분산 컴퓨팅 활용이 목적이므로 비교적 저렴한 가격에 성능 향상 가능(`Scale Out`)
    - `Schema-Less`, 구조 변경이 쉽고 데이터 형식 다양하여 정확성 보다는 데이터 양이 중요한 빅데이터(Big Data)에 사용

  - 수평적 확장 *(Horizontal Scaling)* 가능
    - 더 많은 서버가 추가되어 데이터베이스가 전체적으로 분산되는 것
    - 하나의 데이터베이스지만 여러 호스트에서 작동

- 사용처
  - 정확한 데이터 구조를 알 수 없으며, 변경 및 확장이 가능한 경우
  - 데이터의 읽기 행위가 대다수이며 변경 행위는 많지 않은 경우(여러 데이터를 변경할 필요가 없는 경우)
  - 데이터베이스를 수평으로 확장(막대한 양의 데이터로 인한)해야 하는 경우

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## :book:DB Normalization이 무엇인가요?
> 관계형 데이터베이스의 설계 단계에서 데이터의 중복을 최소화하기 위해 데이터의 구조를 결정하는 작업
> - 데이터베이스 정규화(Database Normalization)
> - 일반적으로 거대하고 체계적으로 작성되지 않은 테이블과 테이블 간의 관계를 분리하여 체계적으로 만드는 행위

<br>

<div align=center>

<src="img/ src="data-model-normalization.jpg" alt="MVC Pattern" width="500"/>

</div>

<br>

### 제 1 정규형(First Normal Form, *1NF*)
> 테이블에 존재하는 필드가 모두 Scalar Value만을 가지며, 필드의 값이 모두 `Atomic`할 때, 1NF라고 한다.

- 테이블에 중복되는 항목이 존재하지 않아야 한다는 것과 같으나, 이는 명확하지 않으며 1NF에 대한 정의는 여러 개가 존재할 수 있다.

<br>

### 제 2 정규형(Second Normal Form, *2NF*)
> 2NF는 1NF의 속성을 만족하면서, 테이블에 존재하는 모든 함수 종속 관계가 `완전 함수 종속`이어야 한다.

- 어떤 테이블 R의 필드 Y가 필드의 집합 X에 함수 종속이면서, X 자신을 제외한 X의 어떤 부분 집합에도 함수 종속이 아니면, Y는 X에 완전 함수 종속이라고 한다.

<br>

### 제 3 정규형(Third Normal Form, *3NF*)
> 2NF의 정의를 만족하면서, 어떠한 테이블에 존재하는 key가 아닌 필드들이 `서로 독립적일 때` 3NF라고 한다.

- key가 아닌 필드 사이에 어떠한 종속 관계도 존재하지 않아야 한다.

<br>

### BCNF(Boyce-Codd Normal Form)
> 어떠한 테이블에 대해 테이블에 존재하는 모든 함수 종속 관계의 Determinant가 Candidate key이면, BCNF라고 한다.

- 함수 종속 관계를 만족하는 것은 Determinant 항목이자 Candidate key에 해당해야 한다.

<br>

### 제 4 정규형(Fourth Normal Form, *4NF*)
> 4NF는 `MVD(Multivalued Dependency)`라는 개념을 통해 정의된다.

- MVD는 functional dependency의 일반화된 개념이다.
  - functional dependency에서는 determinant X에 의해 Y의 값이 하나만 결정되었다면, MVD에서는 determinant X에 의해 다수의 Y값이 결정된다. 위와 같은 MVD 관계는 X →→ Y로 표기한다.

- MVD의 종류
  - Trivial MVD : Y가 X의 부분집합이거나, X와 Y를 합한 것이 테이블 그 자체인 경우 (X U Y = R)
  - Nontrivial MVD : 위에서 정의된 trivial MVD가 아닌 모든 MVD

<br>

### 제 5 정규형(Fifth Normal Form, *5NF*)
> 5NF는 어떠한 테이블이 오직 테이블의 Candidate key를 포함하는 부분집합에 의해서만 Join Dependency가 성립되는 것이다.

- 어떠한 테이블 필드들의 부분집합을 포함하는 테이블들을 JOIN 하여 작성하면, 테이블 T는 join dependency를 갖는다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## :book:SQL문의 Merge 구문에 대해 알려주세요.
> Oralce DB, MS-SQL에서 지원되는 여러 DML문을 단일 SQL문으로 사용하는 방법

### 동일한 테이블 구조를 가진 테이블 A에서 B로 데이터를 조작하기
```sql
MERGE INTO TMP_TABLE A
     USING TMP_TABLE B
        ON (A.TMP_ID = B.TMP_ID AND A.TMP_SUB_ID = B.TMP_SUB_ID)
      WHEN MATCHED THEN
          -- 일치 시 : UPDATE, INSERT, DELETE 구문을 사용
          UPDATE SET A.CREATED_DATE = B.CREATED_DATE
  WHEN NOT MATCHED THEN
          -- 불일치 시 : UPDATE, INSERT, DELETE 구문을 사용
          INSERT (A.COURSE_ID, A.STUDENT_ID, A.CREATED_DATE) 
          VALUES (B.COURSE_ID, B.STUDENT_ID, B.CREATED_DATE)
```

<br>

### 파라미터나 변수 등을 통해 직접 테이블 A로 데이터 조작하기
```sql
MERGE INTO TMP_TABLE A
     USING DUAL
        ON (A.TMP_ID = 'SUPER' AND A.TMP_SUB_ID = 'ADMIN')
      WHEN MATCHED THEN
          UPDATE SET A.CREATED_DATE = TO_CHAR(SYSDATE, 'yyyymmdd')
  WHEN NOT MATCHED THEN
          INSERT (A.COURSE_ID, A.STUDENT_ID, A.CREATED_DATE) 
          VALUES ('SUPER', 'ADMIN', TO_CHAR(SYSDATE, 'yyyymmdd'))

```

### 일치/불일치 시 하나만 실행하기
```sql
MERGE INTO TMP_TABLE A
     USING DUAL
        ON (A.TMP_ID = 'SUPER' AND A.TMP_SUB_ID = 'ADMIN')
  WHEN NOT MATCHED THEN
          INSERT (A.COURSE_ID, A.STUDENT_ID, A.CREATED_DATE) 
          VALUES ('SUPER', 'ADMIN', TO_CHAR(SYSDATE, 'yyyymmdd'))
```

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## :book:SQL문의 Join 구문에 대해 알려주세요.
### 표준 조인 : 일반 집합 연산자

<div align=center>

<src="img/ src="SQL_075.jpg" alt="" width="500"/>

</div>

<br>

- `UNION` : 합집합. 공통 교집합의 중복을 없애기 위해 사전 작업으로 정렬 작업 발생
- `UNION ALL` : 합집합. 공통 교집합을 중복해서 출력하므로 정렬 작업 미발생
- `INTERSECTION` : 교집합. 두 집합의 공통집합을 추출
- `DIFFERENCE` : (오라클은 MINUS) 차집합. 첫 번째 집합에서 두 번째 집합과의 공통집합을 제외
- `PRODUCT` : CROSS(ANIS/ISO 표준) PRODUCT라고 불리는 곱집합. 양쪽 집합의 M*N 건의 데이터 조합이 발생

<br>

### 표준 조인 : 순수 관계 연산자

<div align=center>

<src="img/ src="SQL_076.jpg" alt="" width="500"/>

</div>

<br>

- SELECT 연산은 WHERE 절 기능으로 구현되었다.
- PROJECT 연산은 SELECT 절의 컬럼 선택 기능으로 구현되었다.
- JOIN 연산은 여러 JOIN 기능으로 가장 다양하게 구현되었다.
- DIVIDE 연산은 현재 사용되지 않는다.
- 관계형 데이터베이스의 경우 엔터티 확정 및 정규화 과정, 그리고 M:M (다대다) 관계를 분해하는 절차를 거치게 된다.
- 정규화는 데이터 정합성과 데이터 저장 공간의 절약을 위해 엔터티를 최대한 분리하는 작업이며 일반적으로 3차 정규형이나 보이스코드 정규화까지 진행한다.
- 정규화를 거치면 하나의 주제에 관련 있는 엔터티가 여러 개로 나누어지게 된다.
  - 해당 엔터티들이 주로 테이블이 되는데 흩어진 데이터를 연결해서 원하는 데이터를 가져오는 작업이 JOIN 이다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## :book:데이터베이스에서의 Index를 설명해주세요.
> 인덱스(index)는 SQL 수행 속도를 향상시키기 위해 고안되었으며, 이는 사전의 인덱스와 같다
> - 사전에서 ‘Name’이라는 단어를 찾을 때 가장 먼저 사전의 목록에서 첫 글자 ‘N’을, 두 번째는 ‘a’를 찾는다.
> - 만약 인덱스가 없다면 사전 전체를 한 장 한 장 넘기며 찾아야 한다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>

## :book: B-tree에 대해 설명해주세요.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>