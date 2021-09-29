# `Javascript`의 디자인 패턴
> 참조 [Link](https://www.telerik.com/blogs/design-patterns-in-javascript)

<br>

<div align=center>

<img src="./img/Behavioral-Design-Patterns.png" width="500">

</div>

<br>

## Flux 패턴
> MVC 패턴은 양방향 데이터 흐름을 만들어 예측하기 어려운 버그를 발생시킵니다. Flux의 가장 큰 특징은, 바로 **단방향 데이터 흐름**이라는 겁니다.

<br>

<div align='center'>

<img src='./img/mvc.png' width='500'/>

<sub>⛔️MVC의 안티 패턴으로, 이 형태가 MVC인 것은 아니에요⛔️</sub>

<br>

<img src='./img/flux.png' width='500'/>

</div>

<br>

차이점이 보이시나요? 데이터가 단방향으로 흐름으로 MVC 패턴보다 데이터 변화를 예측하기 훨씬 쉬워집니다. Flux를 쪼개보면 크게 Dispatcher, Store와 View로 이루어집니다.

개략적으로 살펴보면 아래와 같습니다.
1. Dispatcher : 데이터의 모든 흐름을 총괄하는 허브(Hub)입니다.
2. Store : 중앙 집중형 저장소로 모든 상태 변경은 Store를 통해 이루어집니다.
3. View : 데이터 변경과 그에 따른 화면 출력이 이루어지는 부분입니다.
4. Action Dispatcher와 Store 사이에 인수로서 전달되는 객체입니다. 해당 이벤트에 대한 정보, 데이터 등을 담고 있습니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>