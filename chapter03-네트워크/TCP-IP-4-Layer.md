# TCP/IP(Transmission Control Protocol/Internet Protocol)

## TCP/IP 4 Layer에 대해 설명하시오.
## TCP와 UDP의 차이점
- TCP는 신뢰성이 있는 연결을 지향하며, UDP는 빠른 전송을 지향한다.
  - TCP는 Stateful(상태유지)이며 UDP는 Stateless(무상태) 프로토콜이다.
- TCP는 내가 보낸 데이터가 확실히 상대방에게 전달이 되었는지 포커를 맺고, UDP는 일방적으로 전송을 한다.
- UDP의 한 예로 스트리밍 방송이 있는데, 방송을 하다가 중간에 신호가 끊어져도 다음으로 그냥 이어서 방송을 하는 것처럼 UDP는 일방적인 데이터 전송을 하는 반면, TCP는 데이터 하나라도 놓치지 않고 완벽히 보내는 것이 목표이기 때문에 방향성이 완전히 다르다.
- UDP는 알고리즘이 간단한 반면, TCP는 연결부터 끊는 과정까지 상대적으로 복잡하다.

## TCP-3-hands-shaking에 대해 설명할 수 있다.