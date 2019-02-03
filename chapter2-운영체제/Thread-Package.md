# User Thread와 Kernel Thread

<!-- TOC -->

- [User Thread와 Kernel Thread](#user-thread와-kernel-thread)
    - [:book:Thread-Package Architectures의 종류](#bookthread-package-architectures의-종류)
    - [:book:User-level threads](#bookuser-level-threads)
        - [문제점](#문제점)
    - [:book:Kernel-level threads](#bookkernel-level-threads)
        - [문제점](#문제점-1)
    - [:book:Multiplexed threads](#bookmultiplexed-threads)
        - [문제점](#문제점-2)
    - [:book:Scheduler Activation(kernel-supported user-level threads)](#bookscheduler-activationkernel-supported-user-level-threads)
        - [문제점](#문제점-3)

<!-- /TOC -->

## :book:Thread-Package Architectures의 종류
- User-level threads
- Kernel-level threads
- Multiplexed threads
- Kernel-supported User-level threads

## :book:User-level threads
- User-Level threads는 응용 프로그램과 Link/Load가 되는 라이브러리로 구현되어진다.
  - 이 라이브러리에 동기화, 스케줄링 기능을 모두 담고 있습니다.
- 커널에서는 아무런 지원을 해주지 않으며, 커널이 보기에는 단지 그냥 Single process이다.
- 프로세스마다 런타임 라이브러리의 Copy가 호출되므로 스케줄링 정책을 프로세스마다 달리 취할 수 있으며, 각 Thread마다 time quantum을 소모할 필요 없고, 런타임 라이브러리가 context를 유지하기때문에 switching을 할 필요가 없다.
  - 그래서 User-Level Threads는 빠르고, 매우 효율적이다. 그러나 장애가 꽤 있다.

### 문제점
- Blocking System Calls
  - Blocking function이란 처리가 완료되지 않으면 return되지 않는 함수인데, 만약 특정 Thread에서 Blocking이 되어 버리면, 전체 process가 Blocking이 되어린다. 이런 이유로 운영체제가 제공하는 non-blocking 함수들만 사용해야 하며, 사용 빈도가 높은 함수(read,select,wait,...)들은 해당 함수의 non-blocking 버젼으로 대체해야할 필요가 있다. 
- Shared System Resources
  - 동기화나 Locking없이 Thread끼리 공유하는 변수(드러나지 않고 감춰져 있는 경우)가 있을때, 그 Thread가 thread-safe하지 않으면 Overwrite되는 문제가 생길 수 있다. 이 이유로 User-Level, Kernel-Level 함수까지 모두 재진입이 가능해야한다.
- signal Handling, Thread Scheduling
  - User-Level에서 이것을 구현하기란 상당히 어렵다. Timeslice를 다루기 위해 Hardware Clock 인터럽트를 보통의 방법으로는 받지 못한다. 선점형(Preemptive) 스케줄링을 하기 위해서는 커널로 부터 Time Siganl을 받는 함수를 등록해두어야 하며, Timer Alarm Siganl을 다루는것은 다른 시그널을 다루는 것보다 아주 어럽다.
- Multiprocess Utilization
  - 하나의 프로세스에서 Time을 공유하고 있기때문에 여러개의 CPU를 동시에 사용할 수는 없다.

> 구현상의 어려움과 복잡성 그리고, 몇가지 장애에도 불구하고, concurrency와 efficiency의 이득이 있다.

<hr>

## :book:Kernel-level threads
- Kernel-level에 있는 Threads는 독립적으로 스케줄되므로 특정 Thread에서의 Blocking이 process로 전파되지 않는다.
  - 그래서 Blocking System Calls를 이용할수 있으며 각 Threads끼리 Signal을 주고 받을 수 있다.
- Kernel-level threads는 특별히 고려할만한 장애를 가지고 있지는 않다. 물론 마찬가지로 Thread-Safe해야 하지만, OS 개발자들은 대개의 표준 라이브러리를 Thread-Safe하게(재진입해도 문제없겠끔) 만들기에 User-level threads보다 문제가 적다.

### 문제점
- Kernel-level threads는 안정성에 비해서 너무 느리다.
  - Thread Context-Switch 때문에 약 10배정도 느리다고 한다.

<hr>

## :book:Multiplexed threads
- User-level threads와 Kernel-level threads를 섞은 방법이다.
- User-level thread(줄여서 Thread)는 LWP(가벼워진 프로세스, Lightweight Processes)에 의해 multiplex 된다.
  - 커널은 LWP를 스케줄링/실행하고, LWP는 대기중인 thread를 골라서 실행한다.
  - thread는 하나의 LWP에서 실행이 되어지며, Time slice가 바뀔때 LWP도 바뀌어질 수 있다.
  - 프로그래머는 thread를 사용할 수도 있고, LWP를 직접 사용할수 있고, 둘 모두를 동시에 사용할 수도 있다.
- User-level threads처럼 작동하면서 Hardware Parallelism과 Blocking calls에 대처할 수 있으며, Context-Switch을 많이 하지 않는다.

### 문제점
- LWP가 Blocking이 되면 이 LWP가 가진 몇개의 Thread도 동시에 Blocking이 된다.
- LWP의 Context-Switch 비용은 Kernel-level threas보다 비싸다.
- 다중 CPU에서 효율적일려면 각 Thread는 각각 다른 LWP에 할당되야 한다.
  - 각 Thread의 LWP 할당과 LWP의 CPU 할당은 별개로서 이루어지기 때문에, 각 Thread가 서로다른 CPU에 할당되려면 매커니즘이 필요하다.

> 이러한 이유로 LWP에 의한 multiplexed threads는 궁극의 해결책은 못 되지만 Kernel-level threads의 결정적인 단점인 Thread Context-Switch를 user-level threds만큼 빠르게만 한다면 모든 장애는 해결된다.

<hr>

## :book:Scheduler Activation(kernel-supported user-level threads)
 - User-level threads들을 위한 특별한 지원을 kernel이 해준다.
  - Scheduler Activation이라 하며 User-level threads 라이브러리는 커널에게 프로세스를 요구할때와 양도할때를 알려준다.
  - 커널의 Scheduler Activation은 이것을 커널에 의한 프로세스 주소 공간으로 할당된 Virtual Processor로 표현한다.
  - 여기서는 스케줄링과 Blocking 감지가 이루어지며, Granted processor, Preemptive thread, Blocked, Unblocked등등의 Event를 User-level의 런타임 시스템에게 알려준다.

### 문제점
- 커널과 라이브러리 코드가 효율적인 교신을 위해 같은 주소 공간을 공유하기 때문에 예외적으로 높은 신뢰를 가지고 있어야 하며 bug-free이어야한다.
  - 이 방법은 개념적으로 비정상적인 작동(의도적인 비정상적 작동 포함)과 버그에 대해서 강건함(robust)을 가지지 못한다.





ref: http://www.sftw.umac.mo/resource/LDP/FAQ/Threads-FAQ/ThreadLibs.html
