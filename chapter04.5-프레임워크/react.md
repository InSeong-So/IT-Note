## :book: 리액트란 무엇인가?
## :book: React의 주요 특징은 무엇입니까?
## :book: JSX란 무엇인가?
## :book: 엘리먼트와 컴포넌트의 차이점은 무엇입니까?
## :book: React에서 컴포넌트를 만드는 방법
## :book: 함수 컴포넌트와 클래스 컴포넌트의 차이점 경우
## :book: 순수 컴포넌트란?
## :book: 리액트의 state는 무엇입니까?
## :book: 리액트의 props은 무엇입니까?
## :book: 상태와 props의 차이점은 무엇인가?
## :book: 왜 우리가 DOM을 직접 업데이트하지 말아야 하는가?
## :book: setState()의 인수로서 콜백 함수의 목적은 무엇인가?
## :book: HTML과 React 이벤트 처리의 차이점은 무엇입니까?
## :book: JSX 콜백에서 메서드 또는 이벤트 핸들러를 바인딩하는 방법은?
## :book: 이벤트 핸들러 또는 콜백에 매개 변수를 전달하는 방법은 무엇입니까?
## :book: 리액트에서 합성 이벤트는 무엇입니까?
SyntheticEvent는 브라우저의 기본 이벤트 주위에 있는 크로스 브라우저 래퍼입니다. API는 이벤트가 모든 브라우저에서 동일하게 작동한다는 점을 제외하고 StopPropagation() 및 preventionDefault()를 포함하여 브라우저의 기본 이벤트와 동일합니다.

## :book: 인라인 조건부 표현이란 무엇인가?
JS에서 사용할 수 있는 문 또는 삼항식 중 하나를 사용하여 조건부로 식을 렌더링할 수 있습니다. 이러한 접근 방식 외에도 중괄호로 묶은 다음 JS 논리 연산자를 사용하여 JSX에 식을 포함시킬 수도 있습니다.

## :book: "key" props이란 무엇이며 요소 배열에서 props을 사용하면 어떤 이점이 있습니까?
## :book: refs는 무슨 용도인가요?
## :book: refs를 만드는 방법은?
## :book: forward refs란 무엇인가?
## :book: 콜백 레퍼런스 및 findDOMNet()에서 선호하는 옵션은 무엇입니까?
## :book: String Refs가 왜 레거시일까요?
## :book: 가상 DOM이란?
## :book: 가상 DOM 작동 방식
## :book: Shadow DOM과 Virtual DOM의 차이점은 무엇입니까?
## :book: React Fiber란 무엇인가?
## :book: React Fiber의 주요 목적은 무엇인가?
## :book: 제어된(컨트롤드) 컴포넌트란 무엇입니까?
## :book: 제어되지 않은(언컨트롤드) 컴포넌트란?
## :book: createElement와 cloneElement의 차이점은 무엇입니까?
## :book: 상태 끌어올리기(Lifting State Up)란?
https://berkbach.com/react-docs-%EB%B2%88%EC%97%AD-lifting-state-up-e7c8d980c2b3

## :book: 컴포넌트 라이프사이클의 다른 단계는 무엇입니까?
## :book: React의 라이프사이클 메서드는 무엇입니까?
## :book: 고차 컴포넌트란?
## :book: HOC 컴포넌트에 대한 props 프록시를 만드는 방법
## :book: 문맥(context)이란 무엇인가?
## :book: children props이란 무엇인가?
## :book: 리액트에서 주석을 쓰는 방법은?
## :book: props 인수에 super() constructor를 사용하는 목적은 무엇입니까?
## :book: 재조정(reconciliation) 무엇인가?
## :book: dynamic key name으로 state를 설정하는 방법은?
## :book: 컴포넌트를 렌더링할 때마다 기능이 호출되는 일반적인 실수는 무엇입니까?
## :book: lazy 함수는 named exports를 지원하는가?
## :book: React가 class가 아닌 className을 사용하는 이유는 무엇입니까?
## :book: 프래그먼트(fragments)란?
## :book: 왜 프래그먼트가 container div보다 더 좋은가?
## :book: React의 포털은 무엇인가?
포털은 하위 항목을 상위 구성 요소의 DOM 계층 구조 외부에 있는 DOM 노드로 렌더링하는 데 권장되는 방법입니다.

```js
ReactDOM.createPortal(child, container);
```
- 첫 번째 인수는 요소, 문자열 또는 조각과 같은 렌더링 가능한 리액트 하위 인수입니다. 두 번째 인수는 DOM 요소입니다.

## :book: 무상태(stateless) 컴포넌트란 무엇입니까?
## :book: 상태(stateful) 컴포넌트란 무엇입니까?
## :book: React에서 props에 대한 유효성 검사를 적용하는 방법은?
## :book: 리액트의 장점은 무엇인가?
## :book: React의 한계는 무엇입니까?
## :book: React v16의 오류 경계(error boundaries)란?
## :book: React v15에서 오류 경계가 어떻게 처리됩니까?
## :book: 정적 타입 검사를 위해 권장되는 방법은 무엇인가?
## :book: 리액트-돔 패키지의 용도는 무엇입니까?
## :book: 리액트-돔의 렌더링 방법의 목적은 무엇인가?
## :book: ReactDOMServer란 무엇인가?
## :book: 리액트에서 InnerHtml를 사용하는 방법은?
## :book: React에서 스타일을 사용하는 방법?
## :book: React의 이벤트들은 어떻게 다른가?
리액트 컴포넌트의 이벤트 처리에는 몇 가지 구문적 차이가 있습니다.

1. 리액트 이벤트 핸들러는 소문자가 아닌 camelCase를 사용하여 명명됩니다.
2. JSX를 사용하면 문자열이 아닌 이벤트 핸들러로 함수를 전달합니다.

## :book: 생성자에서 setState를 사용하면 어떻게 됩니까?
## :book: 키가 인덱스가 미치는 영향은 무엇입니까?
## :book: componentWillMount() 메서드에서 setState()를 사용하는 것이 좋습니까?
## :book: 만약 당신이 초기 state에서 props을 사용한다면 어떤 일이 일어날까요?
## :book: 컴포넌트를 조건부로 렌더링하려면 어떻게 해야 합니까?
## :book: DOM 요소에 props을 spreadOpreator 때 주의해야 하는 이유는 무엇입니까?
## :book: 리액트에서는 데코레이터(decorators)를 어떻게 사용합니까?
## :book: 컴포넌트를 기록(memoize)하는 방법은 무엇입니까?
## :book: 서버 측 렌더링 또는 SSR를 구현하는 방법
React는 노드 서버에서 렌더링을 처리할 수 있도록 이미 장착되어 있습니다. 클라이언트 측과 동일한 패턴을 따르는 DOM 렌더러의 특수 버전을 사용할 수 있습니다.

```js
import ReactDOMServer from 'react-dom/server'
import App from './App'

ReactDOMServer.renderToString(<App />)
```
- 이 메서드는 일반 HTML을 문자열로 출력한 다음 서버 응답의 일부로 페이지 본문 내부에 배치할 수 있습니다. 클라이언트 측에서는 React가 미리 렌더링된 내용을 감지하고 중단한 부분을 원활하게 복구합니다.

## :book: React에서 production 모드를 활성화하는 방법?
## :book: CRA와 CRA의 이점은 무엇입니까?
## :book: 마운팅 시 라이프사이클 메소드의 순서는 어떤가요?
라이프사이클 메서드는 구성 요소의 인스턴스를 만들어 DOM에 삽입할 때 다음 순서로 호출됩니다.

1. `constructor()`
2. `static getDerivedStateFromProps()`
3. `render()`
4. `componentDidMount()`

## :book: React v16에서 사용되지 않는 라이프사이클 메서드는 무엇입니까?
## :book: DreasiveStateFromProps() 라이프사이클 메서드의 목적은 무엇입니까?
## :book: getSnapshotBeforeUpdate() 라이프사이클 메서드의 목적은 무엇입니까?
## :book: Hooks가 렌더링 props 및 고차 컴포넌트을 대체할 수 있나요?
## :book: 컴포넌트의 이름을 지정하는 권장 방법은 무엇입니까?
## :book: 컴포넌트 클래스에서 권장되는 메소드 순서는 무엇입니까?
## :book: 스위칭 컴포넌트란 무엇입니까?
## :book: 함수를 setState()에 전달해야 하는 이유는 무엇입니까?
## :book: React에서 엄격한 모드는 무엇입니까?
## :book: 리액트 Mixins 이란 무엇인가?
## :book: isMounted()가 안티패턴인 이유 및 해결책은 무엇입니까?
## :book: 리액트에서 지원되는 포인터 이벤트는 무엇입니까?
## :book: 컴포넌트 이름은 대문자로 시작해야 하는 이유는 무엇입니까?
## :book: 커스텀 DOM Attribute는 React v16에서 지원됩니까?
## :book: constructor와 getInitialState의 차이점은 무엇입니까?
## :book: setState를 호출하지 않고 컴포넌트를 강제로 다시 렌더링할 수 있습니까?
## :book: ES6 등급의 리액트에서 super()와 super(props)의 차이점은 무엇입니까?
## :book: JSX 내부에서 반복문을 수행하는 방법?
## :book: 따옴표가 존재하는 attribute에서 props에 어떻게 접근합니까?
## :book: shape가 있는 React PropType Array란 무엇입니까?
## :book: class attribute를 조건부로 적용하는 방법은?
## :book: React와 ReactDOM의 차이점은 무엇입니까?
## :book: ReactDOM과 React가 분리되는 이유는 무엇입니까?
## :book: React에서 label 엘리먼트를 사용하는 방법
## :book: 여러 인라인 스타일의 객체를 결합하는 방법은?
## :book: 브라우저 크기가 조정될 때 보기를 다시 렌더링하는 방법은 무엇입니까?
## :book: setState와 replaceState 방법의 차이점은 무엇입니까?
## :book: state변화에 어떻게 감지하는가?
## :book: 리액트 state에서 Array Element를 제거할 때 권장되는 접근 방식은 무엇입니까?
## :book: HTML을 렌더링하지 않고 React를 사용할 수 있습니까?
## :book: React로 JSON을 예쁘게 출력하는 방법?
## :book: React에서 props을 업데이트할 수 없는 이유는 무엇입니까?
## :book: 페이지 로드 시 input element에 focus하는 방법은?
## :book: state에서의 객체를 업데이트할 수 있는 방법은 무엇입니까?
## :book: 브라우저에서 실행시 React 버전을 어떻게 찾을 수 있습니까?
## :book: CRA에 polyfills을 포함시키는 방법은 무엇입니까?
## :book: create-react-app에서 http 대신 https를 사용하는 방법
## :book: create-react-app에서 상대 경로 가져오기를 사용하지 않는 방법은?
## :book: 리액트 Router를 위한 Google Analytics를 추가하는 방법은?
## :book: 매초마다 컴포넌트를 업데이트하는 방법은?
## :book: React에서 인라인 스타일에 벤더 접두사를 어떻게 적용합니까?
React는 벤더 접두사를 자동으로 적용하지 않습니다. 벤더 접두사를 수동으로 추가해야 합니다.

```js
<div style={{
  transform: 'rotate(90deg)',
  WebkitTransform: 'rotate(90deg)', // note the capital 'W' here
  msTransform: 'rotate(90deg)' // 'ms' is the only lowercase vendor prefix
}} />
```

## :book: 리액트 및 ES6를 사용하여 컴포넌트을 import/export하는 방법은?
## :book: 왜 컴포넌트 생성자는 한 번만 호출되나요?
## :book: 리액트에서 상수를 정의하는 방법은?
## :book: React에서 클릭 이벤트를 트리거하는 방법?
## :book: 순수 리액트에서 async/await 사용이 가능합니까?
## :book: React의 일반적인 폴더 구조는 무엇입니까?
## :book: 인기 애니메이션 패키지는 무엇입니까?
## :book: 스타일 모듈의 이점은 무엇입니까?
## :book: 인기 있는 리액트 전용 린터는 무엇입니까?
## :book: AJAX 호출 방법 및 AJAX 호출을 수행하는 컴포넌트 수명 주기 메서드는 무엇입니까?

Axios, jQuery AJAX 및 브라우저의 built-in `fetch API` 등의 AJAX 라이브러리를 사용할 수 있습니다. `componentDidMount()` 구성 요소 수명 주기 메서드에서 데이터를 가져와야 합니다. 따라서 데이터 검색 시 `setState()`를 사용하여 구성 요소를 업데이트할 수 있습니다.

예를 들어 API에서 가져온 직원 목록과 로컬 상태를 설정합니다.

```js
class MyComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employees: [],
      error: null
    }
  }

  componentDidMount() {
    fetch('https://api.example.com/items')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result.employees
          })
        },
        (error) => {
          this.setState({ error })
        }
      )
  }

  render() {
    const { error, employees } = this.state
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <ul>
          {employees.map(employee => (
            <li key={employee.name}>
              {employee.name}-{employee.experience}
            </li>
          ))}
        </ul>
      )
    }
  }
}

```

## :book: render props이란 무엇입니까?
# :book: 리액트 라우터
## :book: 리액트 라우터란?
## :book: 라우터는 history library과 어떻게 다른가?
## :book: React Router v4의 <라우터> 컴포넌트는 무엇입니까?
## :book: push()와 replace() 메서드의 history 관리 목적 무엇인가?
## :book:React 라우터 v4를 사용하여 프로그래밍 방식으로 탐색하는 방법은 무엇입니까?
## :book:리액트 라우터 v4에서 쿼리 매개 변수를 가져오는 방법
## :book:왜 "라우터는 한 엘리먼트만 있을 수 있습니다" 경고를 받는가?
## :book:React Router v4에서 history.push 메서드에 param을 전달하는 방법?
## :book: default 페이지 또는 NotFound 페이지를 구현하는 방법
## :book: React Router v4의 히스토리를 가져오는 방법은?
## :book: 로그인 후 자동으로  리디렉션을 수행하는 방법은 무엇입니까?
<!-- 리액트 국제화
140 React-Intl이란 무엇인가?
141 React Intl의 주요 기능은 무엇입니까?
142 React Intl에서 포맷하는 두 가지 방법은 무엇입니까?
143 Respect Intl을 사용하여 FormatedMessage를 자리 표시자로 사용하는 방법?
144 React Intl을 사용하여 현재 로케일에 액세스하는 방법
145 React Intl을 사용하여 날짜를 포맷하는 방법
리액트 테스트
146 리액트 테스트에서 얕은 렌더러는 무엇입니까?
147 React의 TestRenderer 패키지는 무엇입니까?
148 ReactTestUtils 패키지의 목적은 무엇입니까?
149 제스트란 무엇인가?
재스민에 비해 제스트의 장점은 무엇인가?
151 Jest 테스트 사례의 간단한 예를 제시하라. -->
# 리액트 리덕스
## :book: 플럭스(flux)란 무엇인가?
## :book: 리덕스란 무엇인가?
## :book: Redux의 핵심 원리는 무엇인가?
## :book: Redux와 Flux의 단점은 무엇입니까?
## :book: mapStateToProps()와 mapDispatchToProps()의 차이점은 무엇입니까?
## :book: 리듀서로 action을 dispatch 할 수 있습니까?
## :book: 컴포넌트 외부의 Redux 저장소에 액세스하는 방법은 무엇입니까?
## :book: MVW 패턴의 단점
1. DOM 조작은 애플리케이션이 느리게 동작하고 비효율적으로 동작하게 하는 매우 많은 비용이 듭니다.
2. 순환 종속성 때문에 모델과 뷰를 중심으로 복잡한 모델이 생성되었습니다.
3. 공동 작업 응용 프로그램(예: Google Docs)에서 많은 데이터 변경이 발생합니다.
4. 코드를 너무 많이 추가하지 않고는 쉽게 실행 취소(시간 경과)할 수 없습니다.

## :book: Redux와 RxJS 사이에 유사점이 있습니까?
## :book: dispatch한 action을 로드하는 방법?
## :book: React Redux의 connect()를 어떻게 사용합니까?
## :book: Redux에서 state를 초기화(resest)하는 방법?
## :book: 리덕스 커넥트 데코레이터의 `at` 심볼의 용도는 무엇입니까?
## :book: React Context와 React Redux의 차이점은 무엇입니까?
## :book: Redux state 기능을 reducers라고 부르는 이유는 무엇입니까?
## :book: Redux에서 AJAX 요청을 하는 방법은?
## :book: 모든 컴포넌트의 state를 Redux 저장소에 보관해야 합니까?
## :book: Redux 저장소에 접근하는 올바른 방법은 무엇입니까?
## :book: React Redux의 컴포넌트와 컨테이너의 차이점은 무엇입니까?
## :book: Redux에서 상수의 목적은 무엇입니까?
## :book: mapDispatchToProp()을 작성하는 다른 방법은 무엇입니까?
## :book: mapStateToProps() 및 mapDispatchToProps()에서 ownProps 변수는 어떤 용도로 사용됩니까?
## :book: Redux 최상위 디렉터리를 구성하는 방법은?
## :book: redux-saga란 무엇인가?
## :book: 리덕스 사가의 정신적 모델은 무엇인가?
## :book: 리덕스 사가의 call()과 put()의 차이점은 무엇입니까?
## :book: Redux Thunk란 무엇인가?
## :book: Redux-saga와 Redux-thunk의 차이점은 무엇인가?
## :book: Redux DevTools란?
## :book: Redux DevTools의 기능은 무엇입니까?
## :book: Redux selectors란 무엇이며 왜 사용해야 하는가?
## :book: Redux Form이란?
## :book: Redux Form의 주요 기능은 무엇입니까?
## :book: 리덕스에 미들웨어를 여러 개 추가하는 방법은?
## :book: Redux의 초기 state를 설정하는 방법은?
## :book: 릴레이(Relay)와 Redux의 차이점은 무엇입니까?
## :book: Redux에서 액션은 무엇인가?

# 리액트 네이티브
## :book: 리액트 네이티브와 리액트의 차이점은 무엇입니까?
## :book: 네이티브 리액트 앱 테스트 방법
React Native는 iOS 및 안드로이드와 같은 모바일 시뮬레이터에서만 테스트할 수 있습니다. [엑스포 앱](https://expo.io)을 사용하여 모바일에서 앱을 실행할 수 있습니다. QR 코드를 사용하여 동기화할 경우 모바일과 컴퓨터가 동일한 무선 네트워크에 있어야 합니다.

## :book: React Native에서 로그인은 어떻게 합니까?
## :book: 리액트 네이티브 앱을 디버그하는 방법은?
다음 단계에 따라 React Native 앱을 디버그하십시오.

1. iOS 시뮬레이터에서 애플리케이션을 실행합니다.
2. Command + D 키를 누르면 웹페이지 [localhost:8081/debugger-ui](http://localhost:8081/debugger-ui)가 열립니다.
3. 더 나은 디버깅 환경을 위해 탐지된 예외에 일시 중지를 사용하도록 설정합니다.
4. Command + Option + I를 눌러 크롬 개발자 도구를 열거나 View -> Developer -> Developer Tools를 통해 엽니다.
5. 이제 평소처럼 디버깅할 수 있습니다.

# 지원되는 라이브러리 및 통합 대응
## :book: reselect란 무엇이며 어떻게 작동하는가?
Reselect는 메모화 개념을 사용하는 선택기 라이브러리입니다. 원래 Redux와 유사한 애플리케이션 상태에서 파생된 데이터를 계산하기 위해 작성되었지만 아키텍처나 라이브러리에 연결할 수 없습니다.

Reselect는 마지막 호출의 입력/출력 사본을 보관하고 입력 중 하나가 변경되는 경우에만 결과를 다시 계산합니다. 동일한 입력이 연속으로 두 번 제공된 경우 Reselect는 캐시된 출력을 반환합니다. 메모라이제이션과 캐시는 완전히 사용자 정의할 수 있습니다.

## :book: Flow란 무엇인가?
Flow는 JavaScript에서 유형 오류를 찾기 위해 설계된 정적 유형 검사기입니다. 흐름 유형은 기존 유형 시스템보다 훨씬 세분화된 차이를 나타낼 수 있습니다. 예를 들어, 대부분의 유형 시스템과 달리 흐름은 null과 관련된 오류를 잡는 데 도움이 됩니다.

## :book: Flow와 PropType의 차이점은 무엇입니까?
Flow는 언어의 상위 집합을 사용하는 정적 분석 도구(정적 검사기)로, 컴파일 시 모든 코드에 유형 주석을 추가하고 전체 클래스 버그를 잡을 수 있습니다.

PropTypes는 React에 패치된 기본 형식 검사기(런타임 검사기)입니다. 지정된 구성 요소에 전달되는 소품 유형 외에는 확인할 수 없습니다. 전체 프로젝트에 대해 보다 유연한 타이페싱을 원할 경우 Flow/TypeScript를 선택하는 것이 좋습니다.

## :book: 리액트에서 Font Awesome icons을 사용하는 방법?
1. Install font-awesome
  ```sh
  npm install --save font-awesome
  ```
2. Import font-awesome in your index.js file
  ```js
  import 'font-awesome/css/font-awesome.min.css'
  ```
3. Add Font Awesome classes in className
  ```js
  render() {
    return <div><i className={'fa fa-spinner'} /></div>
  }
  ```

## :book: React Dev Tools란?
React Developer Tools를 사용하여 구성 요소 프로포트와 상태를 포함한 구성 요소 계층을 검사할 수 있습니다. 브라우저 확장(Chrome 및 Firefox용)과 독립 실행형 앱(Safari, IE 및 React Native를 포함한 다른 환경에서 작동)으로 모두 존재합니다.

다른 브라우저 또는 환경에서 사용할 수 있는 공식 확장입니다.

1. Chrome extension
2. Firefox extension
3. Standalone app (Safari, React Native, etc)

## :book: 로컬 파일의 경우 DevTools가 Chrome에서 로드되지 않는 이유는 무엇입니까?
브라우저에서 로컬 HTML 파일(파일://...)을 연 경우 먼저 Chrome Extensions를 열고 파일 URL에 대한 액세스 허용을 선택해야 합니다.

## :book: 리액트에서 Polymer를 어떻게 사용하는가?
1. Polymer 엘리먼트 생성
  ```js
  <link rel='import' href='../../bower_components/polymer/polymer.html' />
  Polymer({
    is: 'calender-element',
    ready: function() {
      this.textContent = 'I am a calender'
    }
  })
  ```

2. HTML 문서로 가져와서 폴리머 구성요소 HTML 태그를 만듭니다. 예를 들어, React 응용프로그램의 index.html로 가져옵니다.
  ```html
  <link rel='import' href='./src/polymer-components/calender-element.html'>
  ```

3. 사용하기
  ```js
  import React from 'react'

  class MyComponent extends React.Component {
    render() {
      return (
        <calender-element />
      )
    }
  }

  export default MyComponent
  ```


## :book: React가 Vue.js보다 좋은 점은 무엇인가?
> React는 Vue.js에 비해 다음과 같은 이점이 있습니다.

1. 대형 애플리케이션 개발에 더 많은 유연성을 제공합니다.
2. 테스트하기 쉽습니다.
3. 모바일 앱을 만드는 데 적합합니다.
4. 더 많은 정보와 솔루션을 이용할 수 있습니다.

## :book: React와 Angular의 차이점은 무엇입니까?
- 리액트는 라이브러리로 뷰 계층만 존재합니다.
  - Angular는 프레임워크이며 완전한 MVC 기능을 가지고 있다.

- 리액트는 서버사이드 랜더링을 처리합니다.
  - AngularJS는 클라이언트 측에서만 렌더링하지만 Angular 2 이상은 서버 측 렌더링

- React는 JS에서 HTML처럼 보이는 JSX를 사용하며 이는 혼동을 일으킬 수 있다.
  - Angular는 코드를 더 짧고 이해하기 쉽게 만드는 HTML을 위한 템플릿 접근 방식을 따릅니다.

- React Native - 모바일 애플리케이션을 구축하는 React 유형으로서 더 빠르고 안정적입니다.
  - Ionic, Angular의 모바일 네이티브 앱은 상대적으로 안정성이 떨어지고 속도가 느립니다.

- React에서 데이터는 한 가지 방식으로만 흐르기 때문에 디버깅이 쉽습니다.
  - Angular에서 데이터 흐름은 양쪽 모두, 즉 자식과 부모 사이에 양방향 데이터 바인딩이 있으므로 디버깅이 종종 어렵습니다.

## :book: DevTools에 React 탭이 표시되지 않는 이유는 무엇입니까?
페이지가 로드되면 React DevTools는 __REACT_DEVTOOLS_GLOBAL_HOOK__이라는 전역 이름을 설정합니다.그런 다음 React는 초기화 중에 해당 후크와 통신합니다. 웹 사이트가 React를 사용하지 않거나 React가 DevTools와 통신하지 못하면 탭이 표시되지 않습니다.

## :book: Styled Components은 무엇입니까?
Styled Components는 스타일링 리액트 응용 프로그램을 위한 자바스크립트 라이브러리입니다. 스타일과 컴포넌트 간의 매핑을 제거하고, 자바스크립트로 증강된 실제 CSS를 작성할 수 있습니다.

## :book: Styled Components의 예를 들면?
- 특정 스타일로 <Title> 및 <Wrapper> 컴포넌트를 생성해 보겠습니다.
  ```js
  import React from 'react'
  import styled from 'styled-components'

  // Create a <Title> component that renders an <h1> which is centered, red and sized at 1.5em
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `

  // Create a <Wrapper> component that renders a <section> with some padding and a papayawhip background
  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `
  ```

- <Title> 및 <Wrapper> 두 변수는 이제 다른 리액트 컴포넌트와 마찬가지로 렌더링할 수 있는 컴포넌트가 되었습니다.

## :book: 릴레이란?
릴레이는 리액트 뷰 계층을 사용하여 웹 애플리케이션에 데이터 계층과 클라이언트-서버 통신을 제공하기 위한 자바스크립트 프레임워크이다.

## :book: CRA에서 TypeScript를 사용하는 방법
react-scripts@2.1.0 이상부터는 typescript를 기본 지원합니다. 즉, create-react-app는 typescript를 기본적으로 지원합니다. 아래와 같이 --typescript 옵션을 전달할 수 있습니다.

```sh
npx create-react-app my-app --typescript

# or

yarn create react-app my-app --typescript
```

그러나 하위 버전의 리액트 스크립트인 경우 새 프로젝트를 만드는 동안 `--scripts-version` 옵션으로 `react-scripts-ts`로 주면 됩니다. `react-scripts-ts`는 CRA 프로젝트 파이프라인을 사용하고 TypeScript를 혼합하기 위한 계산 옵션입니다.

이제 프로젝트 레이아웃은 다음과 같아야 합니다.

```
my-app/
├─ .gitignore
├─ images.d.ts
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ package.json
├─ tsconfig.json
├─ tsconfig.prod.json
├─ tsconfig.test.json
└─ tslint.json
```

# 기타
## :book: Reselect library의 주요 특징은 무엇입니까?
1. 선택기는 파생 데이터를 계산할 수 있으므로 Redux가 가능한 최소 상태를 저장할 수 있습니다.
2. 선택기가 효율적입니다. 인수 중 하나가 변경되지 않는 한 선택기는 재계산되지 않습니다.
3. 선택기는 합성이 가능합니다. 다른 선택기에 대한 입력으로 사용할 수 있습니다.
## :book: Reselect의 사용 예를 들면?
단순화된 재판매 방식을 사용하여 배송 주문의 계산과 금액을 계산해 보겠습니다.

```js
import { createSelector } from 'reselect'

const shopItemsSelector = state => state.shop.items
const taxPercentSelector = state => state.shop.taxPercent

const subtotalSelector = createSelector(
  shopItemsSelector,
  items => items.reduce((acc, item) => acc + item.value, 0)
)

const taxSelector = createSelector(
  subtotalSelector,
  taxPercentSelector,
  (subtotal, taxPercent) => subtotal * (taxPercent / 100)
)

export const totalSelector = createSelector(
  subtotalSelector,
  taxSelector,
  (subtotal, tax) => ({ total: subtotal + tax })
)

let exampleState = {
  shop: {
    taxPercent: 8,
    items: [
      { name: 'apple', value: 1.20 },
      { name: 'orange', value: 0.95 },
    ]
  }
}

console.log(subtotalSelector(exampleState)) // 2.15
console.log(taxSelector(exampleState))      // 0.172
console.log(totalSelector(exampleState))    // { total: 2.322 }
```

## :book: 정적(Static) 객체는 React의 ES6 클래스와 함께 작동합니까?
- 스태틱은 React.createClass()에만 동작합니다.
  ```js
  someComponent= React.createClass({
    statics: {
      someMethod: function() {
        // ..
      }
    }
  })
  ```

- 그러나 ES6+ 클래스 내에서 아래와 같이 스태틱을 작성할 수 있습니다.
  ```js
  class Component extends React.Component {
    static propTypes = {
      // ...
    }

    static someMethod() {
      // ...
    }
  }
  ```
  - 또는 아래와 같이 class 밖에서 사용할 수 있습니다.
    ```js
    class Component extends React.Component {
      // ....
    }

    Component.propTypes = {...}
    Component.someMethod = function(){....}
    ```

## :book: Redux는 React에서만 사용할 수 있습니까?
Redux는 모든 UI 계층의 데이터 저장소로 사용할 수 있습니다. 가장 일반적인 용법은 React와 React Native에 사용되지만 Angular, Angular 2, Vue, Mithril 등에 사용 가능한 바인딩이 있습니다. Redux는 다른 코드에서 단순하게 사용할 수 있는 구독 메커니즘을 제공합니다.

## :book: Redux를 사용하려면 특정 빌드 도구가 필요합니까?
Redux는 원래 ES6에서 작성되었으며 웹 팩과 Babel이 포함된 ES5로 생산을 위해 변환됩니다. 당신은 당신의 자바스크립트 빌드 프로세스에 상관없이 그것을 사용할 수 있어야 한다. Redux는 또한 빌드 프로세스 없이 직접 사용할 수 있는 UMD 빌드를 제공합니다.

## :book: state로부터 Redux Form initialValues를 업데이트하는 방법
- enableReinitialize : true 설정을 추가해야 합니다.
  ```js
  const InitializeFromStateForm = reduxForm({
    form: 'initializeFromState',
    enableReinitialize : true
  })(UserEdit)
  ```

초기 값 프로그램이 업데이트되면 양식도 업데이트됩니다.

## :book: PropType이 하나의 Prop에 대해 다른 유형을 허용하는 방법은 무엇입니까?
PropTypes의 oneOfType() 메소드를 사용하면 되며, 다음과 같이 문자열 또는 숫자 유형으로 높이 속성을 정의할 수 있습니다.

```js
Component.PropTypes = {
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}
```

## :book: 리액트 컴포넌트로 SVG 파일을 가져올 수 있습니까?
SVG를 파일로 로드하는 대신 컴포넌트로 직접 가져올 수 있습니다. 이 기능은 react-scripts@2.0.0 이상에서 사용할 수 있습니다.

```js
import { ReactComponent as Logo } from './logo.svg'

const App = () => (
  <div>
    {/* Logo is an actual react component */}
    <Logo />
  </div>
)
```

## :book: 인라인 ref callbacks 또는 함수가 권장되지 않는 이유는 무엇입니까?
참조 콜백이 인라인 함수로 정의되는 경우, 업데이트 중에 처음에는 null로, 그 다음에는 DOM 요소로 두 번 호출됩니다. 이는 각 렌더에서 함수의 새 인스턴스가 생성되기 때문에 React는 이전 참조를 지우고 새 참조를 설정해야 합니다.

```js
class UserForm extends Component {
  handleSubmit = () => {
    console.log("Input Value is: ", this.input.value)
  }


  render () {
   return (
     <form onSubmit={this.handleSubmit}>
       <input
         type='text'
         ref={(input) => this.input = input} /> // Access DOM input in handle submit
       <button type='submit'>Submit</button>
     </form>
   )
 }
}
```

그러나 구성 요소가 마운트되면 레퍼런스 콜백이 한 번 호출될 것으로 예상됩니다. 빠른 해결 방법 중 하나는 ES7 클래스 속성 구문을 사용하여 함수를 정의하는 것입니다.

```js
class UserForm extends Component {
 handleSubmit = () => {
   console.log("Input Value is: ", this.input.value)
 }

 setSearchInput = (input) => {
   this.input = input
 }

 render () {
   return (
     <form onSubmit={this.handleSubmit}>
       <input
         type='text'
         ref={this.setSearchInput} /> // Access DOM input in handle submit
       <button type='submit'>Submit</button>
     </form>
   )
 }
}
```

## :book: React에서 render 하이재킹이란 무엇인가?
렌더 하이재킹의 개념은 구성요소가 다른 구성요소에서 출력할 내용을 제어하는 기능입니다. 실제로 구성 요소를 고차 구성 요소로 포장하여 장식합니다. 줄바꿈을 통해 추가 프로포트를 주입하거나 다른 변경을 수행할 수 있으며, 이로 인해 렌더링 논리가 변경될 수 있습니다. 실제로 하이재킹이 가능하지는 않지만 HOC를 사용하면 구성 요소가 다른 방식으로 작동하도록 할 수 있습니다.

## :book: HOC 팩토리 구현이란 무엇입니까?
React에서 HOC를 구현하는 두 가지 주요 방법이 있습니다.

- 프록시 프롭스(Props Proxy, PP)
  - 이 접근 방식에서 HOC의 렌더링 메서드는 RapedComponent 유형의 리액트 요소를 반환합니다. 우리는 또한 HOC가 수신하는 소품을 통과하므로 Props Proxy라는 이름이 붙는다.
  ```js
  function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props}/>
    }
  }
  }
  ```



- 상속 반전(Inheritance Inversion, II)입니다.
  - 이 접근 방식에서 반환된 HOC 클래스(Enhancer)는 랩핑 컴포넌트를 확장한다. 일부 Enhancer 클래스를 확장하는 WrapedComponent 대신 Enhancer에 의해 수동적으로 확장되기 때문에 이것은 Inhergence Inversion이라고 불립니다. 이런 식으로 그들 사이의 관계는 역행하는 것처럼 보인다.
  ```js
  function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render()
    }
  }
  }
  ```

그러나 랩핑 컴포넌트를 조작하기 위해 서로 다른 접근 방식을 사용합니다.

## :book: 리액트 컴포넌트에 Number를 전달하는 방법은?
중괄호({})를 통해 숫자를 전달해야 합니다. 여기서 따옴표의 문자열로 사용됩니다.

```js
React.render(<User age={30} department={"IT"} />, document.getElementById('container'));
```

## :book: 모든 state를 Redux로 유지해야 합니까? 리액트 내부 state를 사용해야 합니까?
그것은 개발자의 결정에 달려있다. 즉, 어떤 종류의 주가 당신의 애플리케이션을 구성하고, 각 주의 부분이 어디에 살아야 하는지를 결정하는 것은 개발자 일이다. 일부 사용자는 애플리케이션의 완전한 직렬화 및 제어 버전을 항상 유지하기 위해 Redux에 모든 데이터를 보관하는 것을 선호합니다. 구성 요소의 내부 상태 내에 "현재 이 드롭다운이 열려 있습니까"와 같은 중요하지 않은 상태 또는 UI 상태를 유지하는 것을 선호하는 사람도 있습니다.

다음은 Redux에 넣어야 하는 데이터 종류를 결정하는 기본 규칙입니다.

1. 애플리케이션의 다른 부분이 이 데이터에 대해 신경을 쓰고 있습니까?
2. 이 원본 데이터를 기반으로 더 많은 파생 데이터를 생성할 수 있어야 합니까?
3. 동일한 데이터가 여러 구성 요소를 구동하는 데 사용되고 있습니까?
4. 이 상태를 지정된 시점(즉, 시간 여행 디버깅)으로 복원할 수 있는 가치가 있습니까?
5. 데이터를 캐시하시겠습니까(즉, 데이터를 재요청하는 대신 이미 존재하는 경우 상태 그대로 사용)?

## :book: 리액트에서 registerServiceWorker를 등록하는 목적은 무엇입니까?
React는 기본적으로 구성 없이 서비스 작업자를 생성합니다. 서비스 근로자는 사용자가 오프라인 상태이거나 느린 네트워크에 있을 때에도 화면에 결과를 볼 수 있도록 자산 및 기타 파일을 캐시할 수 있도록 도와주는 웹 API로, 현재 서비스 근로자에 대해 알아야 할 더 나은 사용자 환경을 구축하는 데 도움이 됩니다. 사이트에 오프라인 기능을 추가하는 것입니다.

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
```

## :book: React의 memo 함수란?
PureComponent 또는 shouldComponentUpdate를 사용하여 입력 프로포트가 동일한 경우 클래스 구성 요소의 렌더링을 제한할 수 있습니다. 이제 React.memo로 기능 구성요소를 포장하여 동일한 작업을 수행할 수 있습니다.

```js
const MyComponent = React.memo(function MyComponent(props) {
 /* only rerenders if props change */
});
```

## :book: React lazy 기능이란?
React.lazy 함수를 사용하여 동적 가져오기를 컴포넌트로 렌더링할 수 있습니다. 컴포넌트가 렌더링되면 OtherComponent가 포함된 번들이 자동으로 로드됩니다. React 컴포넌트가 포함된 기본 내보내기가 있는 모듈로 확인하는 약속을 반환해야 합니다.

## :book: setState를 사용하여 불필요한 업데이트를 방지하는 방법
상태의 현재 값을 기존 상태 값과 비교하여 페이지를 다시 렌더링할지 여부를 결정할 수 있습니다. 값이 같으면 null을 반환하여 재렌더링을 중지해야 하며 그렇지 않으면 최신 상태 값을 반환해야 합니다.

예를 들어, 사용자 프로파일 정보는 다음과 같이 조건부로 렌더링됩니다.

```js
getUserProfile = user => {
  const latestAddress = user.address;
  this.setState(state => {
    if (state.address === latestAddress) {
      return null;
    } else {
      return { title: latestAddress };
    }
  });
};
```

## :book: Respect 16 버전에서 Array, String, Number를 어떻게 렌더링합니까?
- 배열 : 이전 버전과 달리 렌더링 메서드가 React16에서 단일 엘리먼트를 반환하는지 확인할 필요가 없습니다. 배열을 반환하여 래핑 엘리먼트 없이 여러 형제 엘리먼트를 반환할 수 있습니다.

  - 예를 들어, 아래를 살펴보자.
    ```js
    const ReactJSDevs = () => {
      return [
        <li key="1">John</li>,
        <li key="2">Jackie</li>,
        <li key="3">Jordan</li>
      ];
    }
    ```

  - 이 항목 배열을 다른 배열 컴포넌트에 에 병합할 수도 있습니다.
    ```js
    const JSDevs = () => {
      return (
        <ul>
          <li>Brad</li>
          <li>Brodge</li>
          <ReactJSDevs/>
          <li>Brandon</li>
        </ul>
      );
    }
    ```

- 문자열과 숫자 : 렌더링 메서드에서 String, Number Type을 반환할 수도 있습니다.
  ```js
  render() {
  return 'Welcome to ReactJS questions';
  }
  // Number
  render() {
  return 2018;
  }
  ```

## :book: React 클래스에서 클래스 필드 선언 구문을 사용하는 방법은 무엇입니까?
리액트 클래스 컴포넌트는 클래스 필드 선언을 사용하여 훨씬 더 간결하게 만들 수 있습니다. 생성자를 사용하지 않고 로컬 상태를 초기화하고 바인딩할 필요 없이 화살표 함수를 사용하여 클래스 메서드를 선언할 수 있습니다.

생성자를 사용하지 않고 상태에 대한 클래스 필드 선언과 바인딩되지 않은 메서드를 사용하는 경우를 예로 들어 보겠습니다.

```js
class Counter extends Component {
  state = { value: 0 };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1
    }));
  };

  render() {
    return (
      <div>
        {this.state.value}

        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    )
  }
}
```

## :book: Hooks란 무엇인가?
후크는 클래스를 작성하지 않고 상태 및 기타 반응 기능을 사용할 수 있는 새로운 기능(React 16.8)입니다.

useState hook 예제를 봅시다.

```js
import { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## :book: Hooks에 대한 규칙은 무엇입니까?
Hooks를 사용하기 위해서는 두 가지 규칙을 따라야 합니다.

1. 리액트 함수의 최상위 레벨에서만 Hooks를 호출합니다. 즉, 루프, 조건 또는 중첩 함수 내에서 Hooks를 호출하면 안 됩니다. 이렇게 하면 컴포넌트가 렌더링될 때마다 동일한 순서로 후크가 호출되고 여러 useState와 useEffect 호출 사이의 Hooks 상태가 유지됩니다.
2. React Functions에서만 Hooks를 호출합니다. 즉, 일반 자바스크립트 함수에서 Hooks을 호출해서는 안 됩니다.

## :book: Hooks가 프로젝트의 규칙을 준수하는지 확인하는 방법은 무엇입니까?
React 팀은 이 두 가지 규칙을 적용하는 eslint-plugin-react-hooks라는 ESLint 플러그인을 릴리스했습니다. 아래 명령을 사용하여 이 플러그인을 프로젝트에 추가할 수 있습니다.

```sh
npm install eslint-plugin-react-hooks@next
```

그리고 ESLint config 파일에 아래 config를 적용하세요.

```json
// Your ESLint configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error"
  }
}
```

## :book: Flux와 Redux의 차이점은 무엇입니까?
다음은 플럭스와 리덕스의 주요 차이점입니다.

|Flux|Redux|
|----|----|
|State는 변할 수 있습니다.|State는 불변입니다.|
|Store에는 State 및 변경 logic이 모두 포함되어 있습니다.|Store와 변경 logic은 분리되어 있습니다.|
|여러 개의 Store가 존재할 수 있습니다.|단 하나의 Store만 존재합니다.|
|모든 Store는 연결이 끊어지고 수평적입니다.|단일 Store는 여러 reducer로 계층 구조를 가집니다.|
|Singletone Dispatcher입니다.|정해진 컨셉이 없는 Dispatcher입니다.|
|리액트 컴포넌트들은 Store를 통해 subscribe합니다.|컨테이너 컴포넌트를 사용해 function과 연결합니다.|


## :book: React Router V4의 이점은 무엇입니까?
다음은 React Router V4 모듈의 주요 이점입니다.

1. React Router v4(버전 4)에서 API는 완전히 컴포넌트에 관한 것입니다. 라우터는 특정 하위 라우터 컴포넌트(`<Route/>`)를 래핑하는 단일 컴포넌트(`<BrowserRouter/>`)로 시각화될 수 있습니다.
2. 기록을 수동으로 설정할 필요가 없습니다. 라우터 모듈은 `<BrowserRouter/>` 구성 요소로 경로를 포장하여 관리 기록을 확인합니다.
3. 특정 라우터 모듈(웹, 코어 또는 네이티브)만 추가하면 응용 프로그램 크기가 줄어듭니다.


## :book: componentDidCatch LifeCycle 메서드에 대해 설명해주실 수 있습니까?
componentDidCatch 라이프사이클 메서드는 하위 구성 요소에 의해 오류가 발생한 후 호출됩니다. 메소드는 두 개의 매개 변수를 수신합니다.

- 오류: 발생한 오류 개체
- 정보: 구성 요소Stack 키가 있는 개체에는 오류를 발생시킨 구성 요소에 대한 정보가 포함되어 있습니다.
- 메서드 구조는 다음과 같습니다.
  ```js
  componentDidCatch(error, info)
  ```

## :book: 어떤 시나리오에서 오류 경계가 오류를 포착하지 않는가?
1. 내부 이벤트 핸들러
2. setTimeout 또는 requestAnimationFrame 콜백을 사용하는 비동기 코드
3. 서버 측 렌더링 중
4. 오류 경계 코드 자체에 오류가 발생한 경우

## :book: 이벤트 핸들러에 오류 경계가 필요하지 않은 이유는 무엇입니까?
## :book: 시도 잡기 블록과 오류 경계 사이의 차이점은 무엇입니까?
## :book: 리액트 16에서 발견되지 않은 오류가 발생하면 어떻게 됩니까?
## :book: 오류 경계의 적절한 위치는?
## :book: 오류경계로부터의 컴포넌트 스택 추적의 이점은 무엇인가?
## :book: 클래스 컴포넌트에 대해 정의되는 필수 방법은 무엇입니까?
## :book: 가능한 렌더링 방법의 반환 유형은 무엇입니까?
## :book: 시공자의 주된 목적은 무엇입니까?
## :book: React 컴포넌트에 대한 생성자의 정의는 필수인가?
## :book: 기본 props이란 무엇입니까?
## :book: 컴포넌트에서 setState를 호출하지 않는 이유는 무엇입니까?
## :book: DreasiveStateFromError를 얻는 목적은 무엇입니까?
## :book: 컴포넌트을 다시 렌더링할 때 주문하는 방법은 무엇입니까?
## :book: 오류 처리 중에 호출되는 방법은 무엇입니까?
## :book: 이름 클래스 속성을 표시하는 목적은 무엇입니까?
## :book: 리액션 애플리케이션의 브라우저 지원은 무엇입니까?
## :book: UnmountComponentAtNode 방법의 목적은 무엇입니까?
## :book: 코드 분할이란?
## :book: 엄격한 모드의 이점은 무엇입니까?
## :book: 키 조각이란 무엇인가?
## :book: React는 모든 HTML 속성을 지원합니까?
## :book: HOC의 제한은 무엇입니까?
## :book: DevTools에서 ForwardRefs를 디버깅하는 방법
## :book: 컴포넌트 프로포트가 true로 기본 설정될 때?
## :book: NextJS 및 주요 기능은 무엇입니까?
## :book: 이벤트 핸들러를 컴포넌트에 어떻게 전달합니까?
## :book: 렌더링방식에 화살표 함수를 사용하는 것이 좋은가?
## :book: 어떤 기능이 여러 번 호출되는 것을 방지하는 방법은?
## :book: JSX가 주입 공격을 방지하는 방법
## :book: 렌더링된 요소를 어떻게 업데이트합니까?
## :book: props은 어떻게 읽기 전용이라고 합니까?
## :book: state 업데이트를 병합하는 방법은 무엇입니까?
## :book: 이벤트 핸들러에게 인수를 전달하려면 어떻게 해야 합니까?
## :book: 컴포넌트의 렌더링을 방지하는 방법
## :book: 지수를 안전하게 열쇠로 사용하기 위한 조건은 무엇인가?
## :book: 키가 전체적으로 고유해야 합니까?
## :book: 폼 핸들링으로 인기 있는 것은 무엇입니까?
## :book: 폼 라이브러리보다 폼익의 장점은 무엇입니까?
## :book: 상속을 사용할 필요가 없는 이유는 무엇입니까?
## :book: 리액션 응용 프로그램에서 웹 컴포넌트를 사용할 수 있습니까?
## :book: 동적 가져오기란?
## :book: 적재 가능한 컴포넌트란?
## :book: 서스펜스란 무엇인가?
## :book: 경로 기반 코드 분할이란?
## :book: 맥락을 사용하는 방법에 대한 예를 들어보자.
## :book: 문맥상 채무불이행의 목적은 무엇인가?
## :book: contextType은 어떻게 사용합니까?
## :book: 소비자란 무엇인가?
## :book: 컨텍스트를 사용하는 동안 성능 코너 사례를 어떻게 해결합니까?
## :book: HOC에서 전향적 참조의 목적은 무엇입니까?
## :book: 모든 기능 또는 클래스 컴포넌트에 대해 참조할 수 있습니까?
## :book: 참고 자료를 사용하는 동안 컴포넌트 라이브러리에 대한 추가 관리가 필요한 이유는 무엇입니까?
## :book: ES6 없이 리액션 클래스 컴포넌트를 생성하는 방법은?
## :book: JSX 없이 리액션 사용이 가능한가요?
## :book: 디핑 알고리즘이란 무엇인가?
## :book: 디핑 알고리즘으로 적용되는 규칙은 무엇입니까?
## :book: 레퍼런스 이용은 언제 필요하세요?
## :book: 렌더링 props에는 반드시 렌더링 props 이름을 붙여야 합니까?
## :book: 순수한 컴포넌트로 렌더링 props을 사용하는 것의 문제는 무엇입니까?
## :book: 렌더링 프로포트를 사용하여 HOC를 만드는 방법은 무엇입니까?
## :book: 윈도우 기술이란 무엇인가?
## :book: JSX에서 허위값은 어떻게 출력합니까?
## :book: 포털의 대표적인 활용 사례는 무엇인가?
## :book: 제어되지 않는 컴포넌트의 기본값을 설정하는 방법은 무엇입니까?
## :book: 가장 좋아하는 리액트 스택은 무엇입니까?
## :book: Real DOM과 Virtual DOM의 차이점은 무엇입니까?
## :book: 대응 애플리케이션에 부트스트랩을 추가하는 방법
## :book: react를 프런트 엔드 프레임워크로 사용하여 상위 웹 사이트나 응용 프로그램을 나열할 수 있습니까?
## :book: React에서 CSS In JS 기법을 사용하는 것이 권장되는가?
## :book: 모든 수업 컴포넌트를 Hooks로 다시 작성해야 하나요?
## :book: React Hook으로 데이터를 가져오는 방법?
## :book: Hooks는 수업의 모든 사용 사례에 적용되는가?
## :book: Hooks 서포트의 안정적인 릴리스는 무엇입니까?
## :book: useState에서 배열 파괴(대괄호 표기)를 사용하는 이유는 무엇입니까?
## :book: Hooks를 도입하기 위해 사용되는 출처는 무엇인가?
## :book: 웹 컴포넌트의 필수 API에 어떻게 액세스합니까?
## :book: 포믹이란 무엇인가?
## :book: Redux에서 비동기식 호출을 처리하기 위해 선택하는 일반적인 미들웨어는 무엇입니까?
## :book: 브라우저가 JSX 코드를 이해합니까?
## :book: 리액트하는 데이터 흐름에 대해 설명하십시오.
## :book: 리액션 스크립트란?
## :book: 리액트 생성 앱의 기능은 무엇입니까?
## :book: renderToNodeStream 방법의 목적은 무엇입니까?
## :book: MobX란 무엇인가?
## :book: Redux와 MobX의 차이점은 무엇입니까?
## :book: ReactJS를 배우기 전에 ES6를 배워야 합니까?
## :book: 동시 렌더링이란?
## :book: 비동기 모드와 동시 모드의 차이점은 무엇입니까?
## :book: react16.9에서 javascript url을 사용할 수 있습니까?
## :book: Hooks를 위한 eslint 플러그인의 목적은 무엇입니까?
## :book: 임페러티브와 선언적 리액트의 차이점은 무엇인가?
## :book: 리액션과 함께 활자본을 사용하면 어떤 이점이 있습니까?
## :book: Context API State Management를 사용하는 동안 페이지 새로 고침 시 사용자가 인증 state를 유지하도록 하려면 어떻게 해야 합니까?
## :book: 새로운 JSX 혁신의 이점은 무엇입니까?
## :book: 새로운 JSX는 이전 변환과 어떻게 다릅니까?
## :book: 어떻게 창조-리액트-앱을 사용하여 리덕스 발판을 만들 수 있을까요?
## :book: React Server 컴포넌트란?