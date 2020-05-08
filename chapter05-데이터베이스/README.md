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

<hr>
<br>

## :book:DB Normalization이 무엇인가요?
> 관계형 데이터베이스의 설계 단계에서 데이터의 중복을 최소화하기 위해 데이터의 구조를 결정하는 작업
> - 데이터베이스 정규화(Database Normalization)
> - 일반적으로 거대하고 체계적으로 작성되지 않은 테이블과 테이블 간의 관계를 분리하여 체계적으로 만드는 행위

<br>

<div align=center>

<img src="data-model-normalization.jpg" alt="MVC Pattern" width="500"/>

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
