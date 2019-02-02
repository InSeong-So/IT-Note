[Process와 Thread의 차이점](Process-Thread.md)

## Context-Switching에 대해 설명하시오.
**CPU에서 여러 프로세스를 돌아가면서 작업을 처리하는 데 이 과정**
- 동작 중인 프로세스가 대기를 하면서 해당 프로세스의 상태(Context)를 보관, 대기하던 다음 프로세스가 동작하면서 이전에 보관한 프로세스의 상태를 복구하는 작업을 말한다.

## Deadlock에 대해 설명하시오.
**교착 상태. 운영체제 혹은 소프트웨어의 잘못된 자원 관리로 인하여 둘 이상의 프로세스(심하면 운영체제 자체도 포함해서)가 함께 멈추어 버리는 현상**

### 발생조건
- 상호 배제 (Mutual exclusion)
  - 프로그램이 자원을 점유하는 데 있어서 배타적이다. 즉 자원 자체를 동시에 쓸 수 없는 경우
- 점유 상태로 대기 (Hold and wait)
  - 자원을 붙잡은 상태에서 다른 자원을 기다리고 경우
- 선점 불가 (No preemption)
  - 다른 프로세스가 자원을 뺏어올 방법이 없는 경우
- 순환성 대기 (Circular wait)
  - 대기가 꼬리를 물고 사이클이 되어 자기 순서로 돌아와도 기다리는 경우

<hr>

## Mutex와 Semaphore, Monitor의 차이점
**교착 상태를 해결하기 위한 방법들**

### Mutex
> 일종의 Locking 매커니즘으로 lock을 가지고 있을 경우에만 공유 데이터에 접근 가능
>> - Lock에 대한 소유권이 있어 Lock을 획득한 사람만 반납할 수 있다.

<hr>

### Semaphore
> 동시에 리소스에 접근할 수 있는 '허용 가능한 Counter의 갯수'를 가지고 있는 Counter
>> - Counter가 1개의 경우 Binary, 2개 이상의 경우 Counting Semaphore라고 부른다.
>> -  Binary Semaphore의 경우 개념적으로 Mutex와 같다

<hr>

### Monitor
> Mutex(Lock)와 Condition Variables(Queue라고도 함)을 가지고 있는 Synchronization 메카니즘
>> - 공유자원에 안전하게 접근하기 위해 Mutual Exclusion가 랩핑된 Thread-Safe한 클래스, 객체, 모듈들을 의미하기도 함

<hr>

## Memory Hierarchy에 대해 설명하시오.
![Memory_Hierarchy](Memory_Hierarchy.jpg "Memory_Hierarchy")
**CPU가 메모리에 더 빨리 접근하기 위해 필요에 따라 나눈 메모리 계층 구조(Memory hierarchy)**
- 레지스터와 캐시는 CPU 내부에 존재한다.
  - 당연히 CPU는 아주 빠르게 접근할 수 있다.
- 메모리는 CPU 외부에 존재한다.
  - 레지스터와 캐시보다 더 느리게 접근 할 수 밖에 없다.
- 하드 디스크는 CPU가 직접 접근할 방법조차 없다.
  - CPU는 하드 디스크의 데이터를 메모리로 이동시키고, 메모리에서 접근해야 하므로 아주 느린 접근 밖에 불가능하다.

## 메모리 관리 전략에 대해 설명하시오.
ref : http://blog.naver.com/PostView.nhn?blogId=yeop9657&logNo=220728971005&parentCategoryNo=&categoryNo=123&viewDate=&isShowPopularPosts=true&from=search

## 메모리 할당 알고리즘에 대해 설명하시오.
**새로 적재되어야 할 데이터를 주기억장치 영역 중 어느 곳에 배치할지를 결정하는 전략**
- 페이지, 세그먼트 따위가 적재될 위치를 결정하는 정책

### first-fit(최초 적합)
- 가용공간 중 수용가능한 첫번째 기억공간을 할당하는 방법

<hr>

### best-fit(최적 적합)
- 모든 공간 중에서 수용가능한 가장 작은 곳을 선택

<hr>

### worst-fit(최악 적합)
- 모든 공간 중에서 수용가능한 가장 큰 곳을 선택

### 성능
- 공간효율성 : 최적적합 > 최초적합 ≫ 최악적합
- 시간효율성 : 최초적합 > 최적적합 ≒ 최악적합
> 최악적합은 잘 사용되지 않음

<hr>

## 페이지 교체 알고리즘에 대해 설명하시오.
**페이지 부재 발생 시 새로운 페이지를 할당하기 위해 현재 할당된 페이지 중 어느 것과 교체할지를 결정하는 전략**
- OPT 페이지 교체 :	이론상 최적 알고리즘
- NRU 페이지 교체 :	not recently used. 최근 미사용 페이지 교체
- NFU 페이지 교체
- LRU 페이지 교체 :	least recently used. 최저 사용 빈도 페이지 교체
- 랜덤 페이지 교체
- FIFO : first-in, first-out
- 2차 기회 : second chance. FIFO의 변형판
- 클럭	
- 에이징
- 참조비트 없는 하드웨어 기법

## CISC, RISC의 차이점

### Instruction Set
**Computer Hardware가 직접 해독∙실행이 가능한 명령어 집합**
- 설계 목표 : 효율적인 Implementation을 통해 속도 최적화
  - Instruction Field의 효율적 사용

<hr>

### CISC(Complex Instruction Set Computer)
- 전통적 Von Neumann 방식의 명령어 내장 방식
- 컴퓨터가 지원하는 명령어가 많을수록 프로그램내의 Instruction count는 줄어듦
- 명령어의 길이가 상이
- Micro programming control

<hr>

### RISC(Reduced Instruction Set Computer)
- 자주 사용하지 않는 명령어 제거 및 단순화
- 모든 명령어의 길이를 일정하게 만듦
- 하나의 Cycle에 여러 명령어 수행
- Hardwired control

<hr>

## CPU Scheduling에 대해 설명하시오.

## Sync와 Async의 차이점

## Virtual Memory에 대해 설명하시오.

## Cache Memory에 대해 설명하시오.