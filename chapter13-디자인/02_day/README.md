# 2일차

## CSS 기본 문법

```css
div {
  font-size: 20px;
  color: red;
}
```

## 속성(Properties)과 값(Value)

```css
div {
  color: red; /* 글자색 지정 */
  font-size: 20px; /* 글자 크기 지정 */
  width: 300px; /* 가로 너비 지정 */
  margin: 20px; /* 외부 여백 지정 */
  padding: 10px 20px; /* 내부 여백 지정 */
  position: absolute; /* 위치 */
}
```

## 선언 방식

- 태그에 직접 작성하기(Inline)

  ```html
  <div style="color: red;">태그에 직접 작성하기</div>
  ```

- HTML에 포함하기(include)

  ```html
  <head>
    <style>
      div {
        color: red;
      }
    </style>
  </head>
  <body>
    <div>HTML에 포함하기</div>
  </body>
  ```

- 외부에서 불러오기

  ```css
  /* main.css */
  div {
    color: red;
  }
  ```

  ```html
  <!-- HTML 1 -->
  <head>
    <link rel="stylesheet" href="/css/main.css" />
  </head>
  <body>
    <div>외부에서 불러오기</div>
  </body>
  ```

## 선택자

- 선택자의 역할

  > HTML에 스타일(CSS)을 적용하기 위해 특정 요소를 선택하는 Sign

- 태그로 찾기

  ```html
  <div>
    <h1>h1주제</h1>
    <p>p본문</p>
  </div>
  ```

  ```css
  h1 {
    color: red;
  }
  p {
    color: blue;
  }
  ```

- 클래스로 찾기

  > `.`은 클래스를 나타내며 CSS의 `.title`은 HTML의 `class="title"`와 동일

  ```html
  <div>
    <h1 class="title">h1주제</h1>
    <p class="main-text">p본문</p>
  </div>
  ```

  ```css
  .title {
    color: red;
  }
  .main-text {
    color: blue;
  }
  ```

## 속성

### 크기

- `width` : 요소의 가로 너비

  ```css
  div {
    /*요소의 가로 너비를 300px로 적용*/
    width: 300px;
  }
  ```

- `height` : 요소의 세로 너비

  ```css
  div {
    /*요소의 세로 너비를 150px로 적용*/
    height: 150px;
  }
  ```

- `font-size` : 글자(text)의 크기

  ```css
  div {
    /*글자의 크기를 16px로 적용*/
    font-size: 16px;
  }
  ```

### 여백

- `margin` : 요소의 바깥 여백

  > 요소와 요소 사이의 여백(거리, 공간)을 생성할 때 사용

  ```css
  div {
    /*단축 속성*/
    margin: 20px; /*요소의 바깥 여백(상, 우, 하, 좌)을 20px로 적용*/

    /*개별 속성*/
    margin-top: 20px; /*요소 위의 바깥 여백을 20px로 적용*/
    margin-right: 20px; /*요소 오른쪽의 바깥 여백을 20px로 적용*/
    margin-bottom: 20px; /*요소 아래의 바깥 여백을 20px로 적용*/
    margin-left: 20px; /*요소 왼쪽의 바깥 여백을 20px로 적용*/
  }
  ```

- `padding` : 요소의 내부 여백

  > 자식 요소를 감싸는 여백

  ```css
  div {
    /*단축 속성*/
    padding: 20px; /*요소의 내부 여백(상, 우, 하, 좌)을 20px로 적용*/

    /*개별 속성*/
    padding-top: 20px; /*요소 위의 내부 여백을 20px로 적용*/
    padding-right: 20px; /*요소 오른쪽의 내부 여백을 20px로 적용*/
    padding-bottom: 20px; /*요소 아래의 내부 여백을 20px로 적용*/
    padding-left: 20px; /*요소 왼쪽의 내부 여백을 20px로 적용*/
  }
  ```

### 색상

- `color` : 글자의 색상

  ```css
  div {
    /*글자의 색상을 빨간색으로 지정*/
    color: red;
  }
  ```

- `background` : 요소의 색상

  ```css
  div {
    /*background의 개별 속성*/
    background-color: red; /*요소의 색상을 빨간색으로 지정*/
  }
  ```

## HTML 블록 레벨(Block level)과 인라인(Inline) 요소

### 블록

> div, h1, p

1. 사용 가능한 전체 너비를 사용한다.
2. 크기를 지정할 수 있다.
3. `width:100%; height:0;`으로 시작한다.
4. 수직으로 쌓인다.
5. margin, padding 위, 아래, 좌, 우 사용 가능
6. 레이아웃(Layout) 작업
7. `display:block;`으로 시작한다.

### 인라인

> span, img

1. 필요한 만큼의 너비를 사용한다.
2. 크기를 지정할 수 없다.
3. `width:0; height:0;`으로 시작한다.
4. 수평으로 쌓인다.
5. margin, padding, 좌, 우만 사용 가능
6. 텍스트(Text) 작업
7. `display:inline;`으로 시작한다.

## HTML 콘텐츠 구분 & 문자 콘텐츠

div 영역으로도 충분히 레이아웃을 표현할 수 있었지만, HTML5로 변경되면서 의미를 가지는 태그가 많이 생겨났다(Sementic). 가령 `<div class="header"></div>`를 `<header></header>`로 표현하는 것과 같다.

```html
<!DOCTYPE html>
<html>
  <head>
    <title> HTML 5 Tags </title>
  </head>
  <body>
    <header>
      <nav></nav>
    </header>
    <section>
      <article> </article>
    </section>
    <aside>
      <nav></nav>
    </aside>
    <footer> </footer>
  </body>
</html>
```

### header

> 소개나 탐색을 돕는 것의 그룹

- body 태그의 자식 중 최상단에 위치함

### footer

> 작성자 구획, 저작권 데이터, 관련된 문서의 링크를 포함

### h1 ~ h6

> 6단계의 문서 제목을 구현

### main

> body 태그의 주요 콘텐츠를 나타내며, 문서의 핵심 주제나 애플리케이션의 핵심 기능성에 대한 것임

### article

> 독립적으로 구분되거나 재사용 가능한 영역을 설정

- 일반적으로 `<h1> ~ <h6>`를 포함하여 식별한다.
- 작성일자와 시간을 `<time>의 datetime 속성`으로 작성한다.

### section

> 문서의 일반적인 영역 설정

- 일반적으로 `<h1> ~ <h6>`를 포함하여 식별한다.

### aside

> 문서의 별도 콘텐츠를 설정

### nav

> 다른 페이지 링크를 제공하는 영역을 설정

- Navigation, 보통 메뉴(Home, About, Contact), 목차, 색인 등을 설정한다.

### address

> body, article, footer 등에서 연락처 정보를 제공하기 위해 사용

### div

> 본질적으로 아무것도 나타내지 않는 콘텐츠 영역

### ref

[참조](https://heropy.blog/2019/05/26/html-elements/)

## 콘텐츠 구분과 문자 콘텐츠

### ol, ul, li

- 각 항목(`<li>`)의 정렬된 목록(`<ol>`)이나 정렬되지 않은 목록(`<ul>`)을 설정한다.
- `<ol>`과 `<ul>`은 자식으로 `<li>`만 포함된다.
- `<li>`는 단독으로 사용할 수 없으며, `<ol>`이나 `<ul>`에 자식으로 포함되어야 한다.
- 정렬된 목록(`<ol>`)으 항목 순서는 중요도를 의미할 수 있다.
- `<ol>`과 `<ul>`은 `display:block;`속성이며 `<li>`는 `display:list-item;` 요소이다.

> ol(order list)

- 정렬된 목록 설정

> ul(unordered list)

- 정렬되지 않은 목록 설정

> li(list item)

- 항목 설정

### dl, dt, dd

- 용어(`<dt>`)와 정의(`<dd>`) 쌍들의 영역(`<dl>`)을 설정한다.
- `<dl>`은 `<dd>`, `<dt>`만을 포함해야 한다.
- 키(key)/값(value) 형태를 표시할 때 유용하다.
- `<dl>`과 `<dd>`, `<dt>`는 `display:block;`속성이다.

### p

> Paragraph, 하나의 문단을 설정

- 일반적으로 정보통신보조기기 등은 다음 문단(`<p>`)으로 넘어갈 수 있는 단축키를 제공한다.

### hr

> 문단의 분리(주제에 의한)를 설정

- 대부분의 경우 수평선(border)으로 표시되나 의미적 관점으로만 사용해야 한다.

### pre

> 서식이 미리 지정된 텍스트를 설정

- 텍스트의 공백과 줄바꿈을 유지하여 표시할 수 있다.
- 기본적으로 Monospace 글꼴 계열로 표시된다.
- 원하는 서식, 양식, 공백이나 줄 바꿈 등이 그대로 표시된다.

### blockquote

> 일반적인 인용문을 설정

## 인라인 텍스트 & 수정

### a

> 다르거나 같은 페이지 위치(#), 파일, 이메일 주소 등 다른 URL로 연결할 수 있는 하이퍼링크를 설정

### abbr

> 약어를 지정한다.

- 보통 title 속성을 사용하여 전체 글자나 설명을 제공한다.

### b

> 문체가 다른 글자의 범위를 설정

- 특별한 의미를 가지지 않는다.
- 읽기 흐름에 도움을 주는 용도로 사용한다.
- 다른 태그가 적합하지 않은 경우 마지막 수단으로 사용한다.
- 기본적으로 글자가 두껍게(Bold) 표신된다.

### mark

> 사용자의 관심을 끌기 위해 하이라이팅 할 때 사용

- 형광펜을 사용한 것처럼 글자 배경이 노란색(yellow)으로 표시됨

### em

> 단순한 의미 강조 표시

- 중첩이 가능하다.
- 중첩될 수록 의미가 강해진다.
- 정보통신보조기기 등에서 구두 강조로 발음된다.
- 기본적으로 이탤릭체(Italic Type)로 표시된다.

### strong

> 의미의 중요성을 나타내기 위해 사용

- 기본적으로 글자가 두껍게(Bold) 표시된다.

### i

> em, strong, mark, cite, dfn 등에서 표현할 수 있는 적합한 의미가 아닌 경우 사용

- 아이콘, 특수 기호를 표시하기 위해 사용된다.
- 기본적으로 이탤릭체(Italic Type)로 표시된다.

### dfn

> 용어를 정의할 때 사용

### cite

> 창작물에 대한 참조를 설정

- 책, 논문, 영화, TV 프로그램, 노래, 게임 등의 제목이다.
- 기본적으로 이탤릭체(Italic Type)로 표시된다.

### q

> 짧은 인용문을 설정

- 긴 인용문은 위의 `<blockquote>`를 사용한다.

### u

> 밑줄이 있는 글자를 설정한다.

- 순수하게 꾸미는 용도이다.
- `<a>`와 헷갈릴 수 있으므로 주의해야 한다.
- `style="text-decoration: underline;"`이 가능하다면 사용을 지양한다.

### code

> 컴퓨터 코드 범위를 설정한다.

```html
<code>document.getElementById('id-value')</code> is a piece of computer code.
```

- 기본적으로 고정폭(Monospace) 글꼴 계열로 표시된다.

### kbd

> 텍스트 입력 장치(키보드)에서 사용자 입력을 나타내는 텍스트 범위를 설정

```html
<p> <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>K</kbd></p> , <kbd>ESC</kbd>
```

### sup, sub

> 위 첨자(sup), 아래 첨자(sub)를 설정한다.

```html
X<sup>4</sup> + Y<sup>2</sup>, H<sub>2</sub>O
```

### time

> 날짜나 시간을 나타내기 위한 목적으로 사용

- IE는 지원이 불가능하다.

```html
<!-- yyyy-mm-dd -->
<p>
  The Cure will be celebrating their 40th anniversary on
  <time datetime="2018-07-07">July 7</time> in London's Hyde Park.
</p>
```

### span

> 본질적으로 아무것도 나타내지 않는 콘텐츠 영역을 설정

### br

> 줄바꿈 설정

- empty tag이다.

### del

> 삭제(변경)된 텍스트 범위 지정

### ins

> 새로 추가(변경)된 텍스트 범위 지정
