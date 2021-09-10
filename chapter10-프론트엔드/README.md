# 프론트엔드 개발상식
## 인터넷
### 인터넷은 어떻게 작동되나요?
### HTTP는 무엇인가요?
### 브라우저와 동작 원리에 대해 설명해주세요.
### DNS는 무엇이고, 어떻게 동작하나요?
### 도메인 네임은 무엇인가요?
### 호스팅은 무엇인가요?

## HTML
### 기초
### 의미론적(Semantic)인 HTML 작성법
### 폼과 유효성 검사
### 컨벤션과 모범 사례(Best Practice)
### 접근성
### 기본 SEO

## CSS
### 기초
### 레이아웃 만들기
- Floats
- Positioning
- Display
- Box Model
- CSS Grid
- Flex Box
### 반응형 디자인과 미디어쿼리

## JavaScript
### 구문(Syntax)과 문법
### DOM과 DOM의 조작 방법
### Fetch API / Ajax(XHR)
### 모듈러 JavaScript와 ES6+
### 개념 이해하기
- 호이스팅
- 이벤트 버블링
- 스코프
- 프로토타입
- Shadow DOM
- strict

## 버전관리(Version Control Systems)
### Git과 Git의 사용법

## 웹 보안 지식
### HTTPS
### CORS
### 컨텐츠 보안 정책
### OWASP 보안 취약점

## 패키지 매니저
### npm
### yarn

## CSS의 구조(Architecture)와 전처리기(Preprocessor)
### 구조 - BEM
### 전처리기 - SASS
### 전처리기 - PostCSS

## 빌드 도구
### 태스크 러너
- npm scripts
- Gulp
### 모듈 번들러
### Linters / Formatters
- Prettier
- ESLint

## 프레임워크
### ReactJS
- Redux
- Mobx
### VueJs
- VueX

## 최신 CSS
### Styled Components
### CSS Modules
### Styled JSX
### Emotio

## 웹 컴포넌트
### HTML 템플릿
### 커스텀 엘리먼트
### 섀도 DOM

## CSS 프레임워크
### Reactstrap
- JS 기반으로 프레임워크 기반의 JavaScript 애플리케이션과 함께 사용하면 좋음
### Material UI
- JS 기반으로 프레임워크 기반의 JavaScript 애플리케이션과 함께 사용하면 좋음
### Taliwind CSS
- JS 기반으로 프레임워크 기반의 JavaScript 애플리케이션과 함께 사용하면 좋음
### Chakra UI
- JS 기반으로 프레임워크 기반의 JavaScript 애플리케이션과 함께 사용하면 좋음
### Bootstrap
- 기본적으로 JavaScript 구성 요소가 없어도 작동하는 CSS 우선 프레임워크

## 앱 테스트
- 단위(Unit 테스트), 통합(Intergration) 테스트, 기능(function) 테스트의 차이를 익히기
### Jest
### react-testing-library
### Cypress
### Enzyme

## 타입 체커
### TypeScript

## 프로그레시브 웹(PWA)
### PWA 웹 API
- 스토리지
- 웹소캣
- 서비스 워커
- 사용자 위치
- 푸시 알림
- 기기 방향 감지하기
- 결제
- 자격 증명
### 성능 계산, 측정 및 개선
- PRPL 패턴
- RAIL 모델
- 성능 메트릭
- Lighthouse 사용하기
- DevTools 사용하기

## 서버 사이드 렌더링(SSR)
### ReactJS
- NextJS
- AfterJS
### VueJS
- NuxtJS

## GraphQL
### Apollo
### Relay Modern

## 정적 사이트 생성기
### NextJS
### GatsbyJS
### NuxtJS
### Vuepress
### Jekyll
### Hugo
### Gridsome

## 모바일 애플리케이션
### React Native
### Native Script
### Flutter
### Ionic

## 데스크톱 애플리케이션
### Electron

## 웹 어셈블리
- 자바스크립트보다 빠르며 주요 브라우저들은 이미 Wasm 1.0을 지원함

# 프론트엔드 체크포인트
1. FE만의 비즈니스 로직도 구성하고 렌더 최적화

2. 로딩 중엔 인디케이터도 적절히 배치

3. UX 개선을 위한 작업들

4. SEO 를 위한 메타태그, OG 분석, UA 태깅 등을 구성

5. 크롬 Lighthouse 로 성능 체크

6. 웹팩번들 용량 관리

7. 구형 브라우저에 알맞는 패치

8. 속도가 느린 환경, 예외처리도 필수

9. 기획상 변경이 발생하는 상황들

10. state of js, state of css, best of js 등의 사이트 들을 매년 체크

11. 반응형으로 움직이는 특수효과들. lottie, framer motion, remotion 등으로 영상처리

12. 빠진 부분들을 임의로 상상해서 어떻게든 먼저 작업

13. 백엔드 작업이 FE 작업 전 완료되지 못한 경우 http://msw.io  같은 백엔드 모킹 라이브러리

14. 반드시 나와야하는 관리자페이지 같은 페이지가 FE 작업 먼저 진행하게 된 경우

15. react-aria, react-spectrum 등으로 웹 접근성 작업도 틈틈히

16. 소셜로그인 (애플, 구글, 페이스북, 인스타그램, 네이버, 카카오) 를 지원

17. 안정적 버전관리를 위해선, Github Action (CI/CD) 연동을 통한 자동 테스팅 구성

18. abrahamjuliot.github.io/creepjs/ 와 같이 A/B 테스트를 위한 구분점 확보는 순수 FE의 역량

19. Clarity 로 유저들이 어디서 마우스를 멈추고 데드클릭 하는지, 클릭량은 얼마나되는지 등