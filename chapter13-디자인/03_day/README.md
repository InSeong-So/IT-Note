# 3일차

## 멀티미디어와 내장 콘텐츠, 스크립트

### img

> 이미지 삽입

- `width, height` 옵션은 이미지가 가진 본래 배율대로 조절한다.
- `srcset, sizes` : 반응형 이미지를 처리하기 위한 속성
  ```html
  <!-- srcset, sizes -->
  <!-- 다양한 디스플레이 해상도에 맞는 최적의 이미지를 브라우저가 선택해서 사용 -->
  <img
    srcset="./small.jpg 320w, ./medium.jpg 640w, ./large.jpg 1024w"
    sizes="(max-width: 480px) 300px,
            (max-width: 800px) 600px,
            900px"
    src="./small.jpg"
    alt="The image"
  />
  <img
    srcset="./image.jpg, ./image-1.5x.jpg 1.5x, ./image-2x.jpg 2x"
    src="./image.jpg"
    alt="The image"
  />
  ```
  - [참조](https://heropy.blog/2019/06/16/html-img-srcset-and-sizes/)
  - 댓글
    ```
    먼저 이해하셔야 하는 내용은,
    srcset 속성을 사용한다는 것은 개발자가 원하는 상황을 만드는 것이 아니고 (사용자)브라우저에게 그 권한을 넘기는 것입니다.
    개발자는 브라우저가 알아서 사용할 수 있는 여러 크기의 이미지만 제공하는 것입니다.
    그리고 질문하신 것처럼 큰 이미지가 먼저 출력(렌더링)되었다면 그 큰 이미지는 브라우저에 캐싱 되었을 것이고 브라우저 입장에서는 이미 가지고 있는 큰 이미지(좋은 해상도의 이미지)가 있으니 굳이 작은 이미지(비교적 안 좋은 해상도의 이미지)로 교체하는 데 비용(네트워크, 성능, 시간 등)을 들일 필요가 없다고 판단하는 것이고 그래서 바뀌지 않는 것입니다.
    반대로 작은 이미지가 먼저 출력된 이후에 상황에 따라 브라우저가 더 좋은 해상도의 이미지가 필요하다고 판단하면 큰 이미지를 가지고 와서 출력하는데 그 비용을 지불합니다.
    그리고 만약 새로고침을 해도 같은 상황이 발생한다면 이미 캐싱 된 큰 이미지가 있기 때문이니, 강력 새로고침(클리어 캐시 새로고침, 맥: Cmd+Shift+R, 윈도우: Ctrl+F5)이나 캐싱 된 이미지를 삭제하고 다시 테스트해 보세요.
    브라우저는 사용자에게 더 좋은 상황과 더 좋은 해상도의 이미지를 제공하기 위해 노력합니다.
    여기서 더 좋은 해상도의 이미지라는 것은 브라우저가 정확히 알 수 없으니, 개발자는 x 혹은 w 디스크립터를 통해 이미지 해상도 정보의 일부를 수동으로 명시하는 것이죠.
    (브라우저가 이미지 해상도를 자동으로 알려면 일단 이미지를 가져와서 확인해야 합니다, 막대한 네트워크 및 성능비용이 소모되죠, 그래서 그런 비용 없이도 브라우저가 알 수 있게 개발자가 x 혹은 w 디스크립터로 명시하는 겁니다)
    그러니 개발자는 다양한 크기의 이미지를 브라우저에 쥐여주고 "알아서 잘 골라 쓰렴!"이라고 하는 것이 바로 srcset 속성의 역할입니다.
    아무튼 그 뒤로는 브라우저가 알아서 원하는 이미지를 사용하는 것이기 때문에 개발자는 언제 어떤 이미지가 나올지 신경 쓰지 않아도 됩니다.
    이 포스트 여러 댓글의 핵심 내용은 '그래서 이런저런 상황에 원하는 크기의 이미지가 왜 안 나오는가?'입니다.
    (물론 다른 내용의 댓글도 있고 해당 댓글들을 어떤 의미에서든 비하하려는 의도는 전혀 없습니다, 함축적으로 표현하기 위함이니 양해 부탁드려요)
    물론 언제 어떤 이미지가 나올지 알고 있는 것도 중요한 개발 정보이긴 합니다만,
    제가 강조하고 싶은 것은 그것을 모르더라도 제공하는 이미지의 종류만 다양하면 브라우저가 알아서 최적화된 크기의 이미지를 골라서 사용할 것이라는 겁니다.
    개발자가 브라우저가 동작하는 모든 환경에 대해 꼭 이해해야 할까요? 저는 특히 이 srcset 속성에 대해선 그럴 필요가 없다고 생각합니다.
    맥북이나 해상도 확대 레벨을 조정한 윈도우즈 운영체제의 브라우저에서 발생하는 '스케일링' 현상이 대표적인데,
    우리는 그 현상을 이해하기 위해서 많은 배경지식을 필요로 하지만, 브라우저는 이미 알아서 최적화된 형태로 그 환경에 맞는 이미지를 제공했을 뿐이고 우리가 그 현상을 이해하거나 그렇지 않더라도 달라지는 것은 없습니다.
    정리하자면,
    다양한 사용자 환경을 고려하는 경우, 그 수 많은 환경을 고려해서 개발하기보단 단순히 다양한 크기의 이미지를 준비해서 srcset에 잘 명시하면 브라우저가 알아서 최적화 이미지를 골라 사용할 테니 개발자는 충분히 편할 수 있다는 겁니다.
    (물론 상황에 따라 정확한 배수 이미지를 요구하는 환경이 있습니다. 대표적으로 iOS 개발이 그렇습니다, 이런 환경에서의 개발은 w보단 x 디스크립터가 더 효율적일 수 있거나, 개발자에게 정확히 w가 아닌 x 디스크립터 작성을 요구할 수도 있습니다)
    그리고 마지막으로, srcset 속성을 사용할 때는 같은 비율의 크기만 다른 같은 내용 이미지를 사용하시는 것을 권장하며, 비율이 다르거나 전혀 다른 내용 이미지를 사용하는 것은 권장하지 않습니다.
    여기서 다른 내용 이미지라는 건, 큰 이미지는 강아지고 작은 이미지는 고양이라는 것이고 그러면 고양이를 출력해야 하는 개발자가 정확히 원하는 상황이라는 것이 생기기 때문에 판단을 브라우저에 위임하는 의미에서는 권장되는 방법이 아니라는 겁니다.
    만약 비율이 다르거나 전혀 다른 내용 이미지를 사용하기 원하시면,
    원하는 상황(해상도)을 개발자가 직접 명시할 수 있는 CSS 미디어쿼리(@media)가 좋은 선택입니다.
    ```

### audio

> 소리 콘텐츠(mp3 등)을 삽입

- `autoplay`가 지정되면 `preload`는 무시된다.

### video

> 동영상 콘텐츠(mp4 등)을 삽입

- `autoplay`가 지정되면 `preload`는 무시된다.

### figure, figcaption

> 이미지나 삽화, 도표 등의 영역을 설정하고 설명을 표시

- `figure`: 이미지나 삽화, 도표 등의 영역을 설정함
- `figcaption`: figure에 포함되어 이미지나 삽화 등의 설명을 표시(Figure Caption)

  ```html
  <figure>
    <img src="milk.jpg" alt="A milk" />
    <figcaption
      >Milk is a nutrient-rich, white liquid food produced by the mammary glands
      of mammals.</figcaption
    >
  </figure>
  ```

### iframe

> 다른 HTML 페이지를 현재 페이지에 삽입

- 중첩된 브라우저 컨텍스트(프레임)를 표시한다.

  ```html
  <iframe
    width="1280"
    height="720"
    src="https://www.youtube.com/embed/Q9yn1DpZkHQ"
    frameborder="0"
    allowfullscreen
  ></iframe>
  ```

### canvas

> canvas API, WebGL API를 사용하여 그래픽이나 애니메이션을 랜더링

### script

> 스크립트 코드를 문서에 포함하거나 참조(외부 스크립트)

### noscript

> 스크립트를 지원하지 않는 경우에 삽입할 HTML 정의

## 표 콘텐츠 & 양식

### table

> 데이터 표(`<table>`)의 행/줄(`<tr>`)과 열/칸/셀(`<th>, <td>`)을 생성

- Table Row, Table Header, Table Data

  ```html
  <table>
    <caption>Fruits</caption>
    <colgroup>
      <col span="2" style="background-color: yellowgreen;" />
      <col style="background-color: tomato;" />
    </colgroup>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>F123A</td>
        <td>Apple</td>
        <td>$22</td>
      </tr>
      <tr>
        <td>F098B</td>
        <td>Banana</td>
        <td>$19</td>
      </tr>
    </tbody>
  </table>
  ```

### th

> 머리글 칸을 지정

### td

> 일반 칸을 지정

### caption

> 표의 제목을 지정

- 열리는 `<table>` 태그 바로 다음에 작성한다.
- `table 당 하나의 caption만` 사용 가능하다.

### colgroup, col

> 표의 열들을 공통적으로 정의하는 컬럼(`<col>`)과 그 집합(`<colgroup>`)

### thead, tbody, tfoot

> 표의 머리글(`<thead>`), 본문(`<tbody>`), 바닥글(`<tfoot>`)을 지정

- 기본적으로 테이블의 레이아웃에 영향을 주지 않는다.

### form

> 웹 서버에 정보를 제출하기 위한 양식 범위를 정의

- `<form>`이 다른 `<form>`을 자식 요소로 포함할 수 없다.

| 속성         | 의미                                                              | 값              | 기본값 |
| ------------ | ----------------------------------------------------------------- | --------------- | ------ |
| action       | 전송한 정보를 처리할 웹페이지의 URL                               | URL             |        |
| autocomplete | 사용자가 이전에 입력한 값으로 자동 완성 기능을 사용할 것인지 여부 | on, off         | on     |
| method       | 서버로 전송할 HTTP 방식                                           | GET, POST       | GET    |
| name         | 고유한 양식의 이름                                                |                 |        |
| novalidate   | 서버로 전송시 양식 데이터의 유효성을 검사하지 않도록 지정         |                 |        |
| target       | 서버로 전송 후 응답받을 방식을 지정                               | \_self, \_blank | \_self |

### input

> 사용자에게 입력 받을 데이터 양식

### label

> for 속성으로 라벨 가능 요소를 참조하거나 콘텐츠로 포함

- 라벨 가능 요소: `<button>`, `<input>`, `<progress>`, `<select>`, `<textarea>`

  ```html
  <!-- 라벨 가능 요소를 참조 -->
  <input type="checkbox" id="user-agreement" />
  <label for="user-agreement">동의하십니까?</label>

  <!-- 라벨 가능 요소를 포함 -->
  <label><input type="checkbox" />동의하십니까?</label>
  ```

### button

> 선택 가능한 버튼을 지정

### textarea

> 여러 줄의 일반 텍스트 양식을 지정

### fieldset, legend

> 같은 양식을 그룹화(`<fieldset>`)하여 제목(`<legend>`)을 지정

- fieldset : 같은 목적의 양식 그룹화

  ```html
  <form>
    <fieldset>
      <legend>Coffee Size</legend>
      <label>
        <input type="radio" name="size" value="tall" />
        Tall
      </label>
      <label>
        <input type="radio" name="size" value="grande" />
        Grande
      </label>
      <label>
        <input type="radio" name="size" value="venti" />
        Venti
      </label>
    </fieldset>
  </form>
  ```

### select, datalist, optgroup, option

> 옵션(`<option>`, `<optgroup>`)의 선택 메뉴(`<select>`)나 자동완성(`<datalist>`)을 제공

- select : 옵션을 선택하는 메뉴
- datalist : `<input>`에 미리 정의된 옵션을 지정하여 자동완성(Autocomplete) 기능을 제공하는 데 사용

  - `<input>`의 list 속성 바인딩
  - `<option>`을 포함하여 정의된 옵션을 지정

- optgroup : `<option>`을 그룹화
- option : 선택 메뉴(`<select>`)나 자동완성(`<datalist>`)에서 사용될 옵션
  - 선택적 빈(Empty) 태그로 사용 가능.
  ```html
  <select>
    <optgroup label="Coffee">
      <option>Americano</option>
      <option>Caffe Mocha</option>
      <option label="Cappuccino" value="Cappuccino"></option>
    </optgroup>
    <optgroup label="Latte" disabled>
      <option>Caffe Latte</option>
      <option>Vanilla Latte</option>
    </optgroup>
    <optgroup label="Smoothie">
      <option>Plain</option>
      <option>Strawberry</option>
      <option>Banana</option>
      <option>Mango</option>
    </optgroup>
  </select>
  ```

### progress

> 작업의 완료 진행률 표시

```html
<progress value="70" max="100">70 %</progress>
<progress value="0.7">70 %</progress>
```

## 전역 속성(Global Attributes)

> 모든 HTML 요소에서 공통적으로 사용 가능한 속성

### class

> 공백으로 구분된 요소의 별칭을 지정

- CSS / JavaScript의 요소 선택기
- 별명(중복)을 선택할 때 사용한다.

### id

> 문서에서 고유한 식별자(identifier, ID)를 정의

- CSS / JavaScript의 요소 선택기
- 이름(고유)을 선택할 때 사용한다.

### style

> 요소에 적용할 CSS를 선언

### title

> 요소의 정보(설명)을 지정

### lang

> 요소의 언어(ISO 639-1)를 지정

### data-\*

> 사용자 정의 데이터 속성을 지정

- HTML에 JavaScript에서 이용할 수 있는 데이터(정보)를 저장하는 용도로 사용한다.

  ```html
  <!-- data-custom-data-attributes -->
  <div id="me" data-my-name="Heropy" data-my-age="851">Heropy</div>
  ```

  ```js
  // dataset.customDataAttributes
  const $me = document.getElementById('me');
  console.log($me.dataset.myName); // "Heropy"
  console.log($me.dataset.myAge); // "851"
  ```

### draggable

> 요소가 Drag and Drop API를 사용 가능한지 여부를 지정

```html
<div draggable="true">The element to drag.</div>
```

### hidden

> 요소를 숨김

```html
<form id="hidden-form" action="/form-action" hidden>
  <!-- 하위 양식이 숨겨짐 -->
</form>
<button form="hidden-form" type="submit">전송</button>
```

### tabindex

> Tab키를 이용해 요소를 순차적으로 포커스 탐색할 순서를 지정

- 대화형 콘텐츠(Interactive Content)는 기본적으로 코드 순서대로 탭 순서가 지정된다.
- 비대화형 콘텐츠에 `tabindex="0"`을 지정하여 대화형 콘텐츠와 같이 탭 순서를 사용한다.

  - `tabindex="-1"`을 통해 포커스는 가능하지만 탭 순서에서 제외할 수 있다.
  - `tabindex="1"` 이상의 양수 값은 논리적 흐름을 방해하기 때문에 사용을 추천하지 않는다.

  ```html
  <h1 tabindex="0">Sign In</h1>
  <label>Username: <input type="text" /></label>
  <label>Password: <input type="password" /></label>
  <label>PS: <input type="text" tabindex="-1" /></label>
  <input type="submit" value="Sign In" />
  ```

### 절대 경로와 상대 경로

> 도메인 주소가 기준

- 상대경로 : 현재 위치를 기준으로 파일을 찾음

  ```
  ./ (생략가능), 현재 위치
  ../ 상위 폴더
  ```

- 절대경로 : 정해진 base 위치를 기준으로 파일을 찾음

  ```
  http (https)
  / (//)
  ```
