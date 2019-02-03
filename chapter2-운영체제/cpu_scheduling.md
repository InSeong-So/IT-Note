# CPU Scheduling
**다중 프로그래밍을 가능하게 하는 운영 체제의 동작 기법으로 운영 체제는 자원 배정을 통해 시스템의 성능을 개선**
- 장기, 중기, 단기 스케줄링이 있다.

<!-- TOC -->

- [CPU Scheduling](#cpu-scheduling)
    - [단계](#단계)
    - [결정 시점](#결정-시점)
    - [비선점형과 선점형](#비선점형과-선점형)
        - [비선점형(Non-preemptive Scheduling)](#비선점형non-preemptive-scheduling)
        - [비선점형 프로세스 알고리즘](#비선점형-프로세스-알고리즘)
        - [선점형(Preemptive Scheduling)](#선점형preemptive-scheduling)
        - [선점형 프로세스 알고리즘](#선점형-프로세스-알고리즘)
    - [평가 기준](#평가-기준)

<!-- /TOC -->

## 단계
- 1단계 스케줄링
  - 작업 스케줄링(Job scheduling). 어느 작업부터 시스템 내의 자원들을 실제로 사용할 수 있도록 할지를 결정한다. 승인 스케줄링(Admission scheduling)이라고도 한다.
- 2단계 스케줄링
  - 어느 프로세스부터 CPU를 차지할 수 있게 할지를 결정한다. 프로세스들을 보류시키고 다시 활성화시키는 기법을 사용하여 시스템에 대한 단기적인 부하를 조절한다.
  - 작업 승인(1단계)와 CPU 배당(3단계) 사이의 완충 작용을 한다.
- 3단계 스케줄링
  - CPU가 사용 가능한 경우 어느 프로세스에게 배당할지를 결정한다.

## 결정 시점
**프로세스의 상태변화가 있을 때**
- 수행 → 대기
- 수행 → 준비
- 대기 → 준비
- 수행 → 종료

## 비선점형과 선점형

### 비선점형(Non-preemptive Scheduling)
- 어떤 프로세스가 CPU를 할당 받으면 그 프로세스가 종료되거나 입출력 요구가 발생하여 자발적으로 중지될 때까지 계속 실행되도록 보장한다.
- 순서대로 처리되는 공정성이 있고 다음에 처리해야 할 프로세스와 관계없이 응답 시간을 예상할 수 있으며 선점 방식보다 스케줄러 호출 빈도가 낮고 문맥 교환에 의한 오버헤드가 적다.
- 일괄 처리 시스템에 적합하며, CPU 사용 시간이 긴 하나의 프로세스가 CPU 사용 시간이 짧은 여러 프로세스를 오랫동안 대기시킬 수 있으므로, 처리율이 떨어질 수 있다는 단점이 있다.

<hr>

### 비선점형 프로세스 알고리즘
- [FCFS 스케줄링(First Come First Served Scheduling)](https://ko.wikipedia.org/wiki/%EC%84%A0%EC%9E%85_%EC%84%A0%EC%B2%98%EB%A6%AC_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)
- [SJF 스케줄링(Shortest Job First Scheduling)](https://ko.wikipedia.org/wiki/SJF_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)
- [HRRN 스케줄링(Highest Response Ratio Next Scheduling)](https://ko.wikipedia.org/wiki/HRRN_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)

<hr>

### 선점형(Preemptive Scheduling)
- 어떤 프로세스가 CPU를 할당받아 실행 중에 있어도 다른 프로세스가 실행 중인 프로세스를 중지하고 CPU를 강제로 점유할 수 있다.
- 모든 프로세스에게 CPU 사용 시간을 동일하게 부여할 수 있다. 빠른 응답시간을 요하는 대화식 시분할 시스템에 적합하며 긴급한 프로세서를 제어할 수 있다.
- '운영 체제가 프로세서 자원을 선점'하고 있다가 각 프로세스의 요청이 있을 때 특정 요건들을 기준으로 자원을 배분하는 방식이다.

<hr>

### 선점형 프로세스 알고리즘
- [RR 스케줄링(Round Robin Scheduling)](https://ko.wikipedia.org/wiki/RR_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)
- [SRTF 스케줄링(Shortest Remaining-Time First Scheduling)](https://ko.wikipedia.org/wiki/SRTF_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)
- [다단계 큐 스케줄링(Multilevel Queue Scheduling)](https://ko.wikipedia.org/wiki/%EB%8B%A4%EB%8B%A8%EA%B3%84_%ED%81%90_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)
- [다단계 피드백 큐 스케줄링(Multilevel Feedback Queue Scheduling)](https://ko.wikipedia.org/wiki/%EB%8B%A4%EB%8B%A8%EA%B3%84_%ED%94%BC%EB%93%9C%EB%B0%B1_%ED%81%90_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)
- [RM 스케줄링(Rate Monotonic Scheduling)](https://ko.wikipedia.org/wiki/RM_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)
- [EDF 스케줄링(Earliest Deadline First Scheduling)](https://ko.wikipedia.org/wiki/EDF_%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A7%81)

<hr>

## 평가 기준
- CPU 사용률(CPU Utilization) : 전체 시스템 시간 중 CPU가 작업을 처리하는 시간의 비율.
- 처리량(Throughput) : CPU가 단위 시간당 처리하는 프로세스의 개수.
- 응답 시간(Response Time) : 대화식 시스템에서 요청 후 응답이 오기 시작할 때까지의 시간.
- 대기 시간(Waiting Time) : 프로세스가 준비 큐 내에서 대기하는 시간의 총합.
- 반환 시간(Turnaround Time) : 프로세스가 시작해서 끝날 때까지 걸리는 시간.