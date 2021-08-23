# 5일차

## CSS 속성 - 띄움(정렬), 위치

### float

> 요소를 좌우 방향으로 띄움(수평 정렬)

| 값           | 의미                       | 기본값 |
| ------------ | -------------------------- | ------ | --- |
| none         | 선 없음                    | none   |     |
| underline    | 밑줄을 지정                |        |
| overline     | 윗줄을 지정                |        |
| line-through | 중앙 선(가로지르는)을 지정 |        |

- 요소에 `float 속성`을 적용하면 적용된 요소 주변으로 문자(text)가 흐르게 된다.
- float이 속성이 적용된 요소의 주위로 다른 요소들이 흐르게 되는데 이를 방지하기 위해 속성을 해제해야 한다.

  1. 형제요소에 clear: (left,right,both) 추가하여 해제

     ```css
     .float-left {
       width: 100px;
       height: 100px;
       background: red;
       float: left;
     }
     .next {
       clear: both;
     }
     ```

     ````html
     <div class="float-left"></div>
     <div class="float-left"></div>
     <div class="next"></div>
     ```
     ````

  2. 부모 요소에 overflow: (hidden,auto) 추가하여 해제

     ```css
     .parent {
       overflow: hidden; /* or `auto` */
     }
     .child {
       float: left;
     }
     ```

     ```html
     <div class="parent">
       <div class="child"></div>
       <div class="child"></div>
     </div>
     ```

  3. 부모 요소에 clearfix 클래스 추가하여 해제 : 미리 지정된 clearfix 클래스 추가

     ```css
     /* 사전 정의 */
     .clearfix::after {
       content: '';
       clear: both; /* left or right */
       display: block; /* or `table` 다음 줄에 표시되어야 하므로 */
     }
     .child {
       float: left;
     }
     ```

     ```html
     <!-- float이 있는 형제 요소에는 무조건 모든 형제가 float으로 구성되어야 한다.-->
     <div class="parent clearfix">
       <div class="child"></div>
       <div class="child"></div>
     </div>
     ```

- display 수정 : `float` 속성이 추가된 요소는 `display` 속성의 값이 대부분 `block`으로 수정됨

  | 지정값             | 변화값                           |
  | ------------------ | -------------------------------- |
  | inline             | block                            |
  | inline-block       | block                            |
  | inline-table       | block                            |
  | table-row          | block                            |
  | table-row-group    | block                            |
  | table-column       | block                            |
  | table-column-group | block                            |
  | table-cell         | block                            |
  | table-caption      | block                            |
  | table-header-group | block                            |
  | table-footer-group | block                            |
  | flex               | flex / float속성 효과없음        |
  | inline-flex        | inline-flex / float속성 효과없음 |
  | 그외               | 변화없음                         |

  ```css
  a,
  span {
    width: 100px;
    height: 100px;
    background: red;
    float: left;
  }
  ```

  ```html
  <a href="#"></a> <span></span>
  ```

  - `<a>, <span>` 요소는 대표적인 inline요소로 가로/세로 너비를 가질 수 없지만 float 속성이 있을 경우 가로/세로 너비를 사용할 수 있다.

### clear

> `float` 속성이 적용되지 않도록 지정(해제)

| 값    | 의미                              | 기본값 |
| ----- | --------------------------------- | ------ |
| none  | 요소 띄움 허용                    | none   |
| left  | 왼쪽 띄움 해제                    |        |
| right | 오른쪽 띄움 해제                  |        |
| both  | 양쪽(왼쪽, 오른쪽) 모두 띄움 해제 |

### position

> 요소의 위치 지정 방법의 유형(기준)을 설정

| 값       | 의미                              | 기본값 |
| -------- | --------------------------------- | ------ |
| static   | 유형(기준) 없음 / 배치 불가능     | static |
| relative | 요소 자신을 기준으로 배치         |        |
| absolute | 위치 상 부모 요소를 기준으로 배치 |        |
| fixed    | 브라우저(뷰포트)를 기준으로 배치  |        |
| sticky   | 스크롤 영역 기준으로 배치         |        |

- position의 `위치값`

  - top : 요소의 position 기준에 맞는 위쪽에서의 거리(위치) 선정(%, 세로 비율)
  - bottom : 요소의 position 기준에 맞는 아래쪽에서의 거리(위치) 선정(%, 세로 비율)
  - left : 요소의 position 기준에 맞는 왼쪽에서의 거리(위치) 선정(%, 가로 비율)
  - right : 요소의 position 기준에 맞는 오른쪽에서의 거리(위치) 선정(%, 가로 비율)

- relative : 요소 자신을 기준으로 배치

  ```css
  /* 배치의 용도로 활용하는 걸 권장하지 않는다. */
  .box {
    position: relative; /* 기준 + 배치 */
    top: 50px;
    right: 100px;
  }
  ```

  - 요소가 실제로 움직이지 않고, 기존 위치 값을 그대로 가진 채 출력 위치가 변경된다.

- absolute : 위치 상 조상 요소를 기준으로 배치

  - 위치 상 부모 요소에 static을 제외한 position속성의 값이 반드시 존재해야 한다.
  - 위치 상 부모 요소에 미리 적용된 position속성의 값이 없는 경우, relative 값을 적용한다.

    ```html
    <div class="parent-box">
      <div class="child-box"></div>
    </div>
    ```

    ```css
    .parent-box {
      position: relative; /* 기준 */
    }
    .child-box {
      position: absolute; /* 배치 */
      top: 50px;
      right: 100px;
    }
    ```

  - 부모 요소에 position속성의 값이 없다면 조상(상위)요소로 올라가면서 위치 상 부모 요소를 찾아 기준한다.

    ```html
    <div class="grand-box">
      <div class="parent-box">
        <div class="child-box"></div>
      </div>
    </div>
    ```

    ```css
    .grand-box {
      position: relative; /* 기준 */
    }
    .parent-box {
      /* 기준 아님 */
    }
    .child-box {
      position: absolute; /* 배치 */
      top: 50px;
      right: 100px;
    }
    ```

- fixed : 사용자의 브라우저 창을 기준으로 배치

  ```css
  /* 브라우저를 기준으로 배치 */
  .box {
    position: fixed;
    top: 50px;
    right: 100px;
  }
  ```

- sticky : 스크롤 영역 기준으로 배치
  ```css
  /* IE 지원 불가 */
  .box {
    position: sticky;
    /* top, bottom, left, right 등 한 가지 이상의 속성이 존재해야 한다*/
    top: 0;
  }
  ```

### position 특징

- 요소 쌓임 순서 : 요소가 쌓여 있는 순서를 통해 어떤 요소가 사용자와 가깝게 있는지(더 위에 쌓이는지)를 결정(Z축)

1. static을 제외한 position속성의 값이 있을 경우 가장 위에 쌓임(값은 무관)
2. position이 모두 존재한다면 z-index속성의 숫자 값이 높을 수록 위에 쌓임
3. position속성의 값이 있고, z-index속성의 숫자 값이 같다면,
4. 'HTML'의 마지막 코드일 수록 위에 쌓임(나중에 작성한 코드(요소))

- display 수정 : `absolute`, `fixed` 속성 값이 적용된 요소는 `display`속성의 값이 대부분 `block`으로 수정
  - float과 동일

## CSS 속성 - 배경

### background

> 요소의 배경을 설정

```css
background: 색상 이미지경로 반복 위치 스크롤특성;

.box1 {
  background: red url('../img/image.jpg') no-repeat left top scroll;
  /* 색상 이미지경로 반복 위치 스크롤특성 */
}
.box2 {
  background: url('../img/image.jpg') no-repeat right 100px;
  /* 이미지경로 반복 위치 */
}
.box3 {
  background: red;
  /* 색상 */
}
```

- 단축 속성이다.

| 값                    | 의미                            | 기본값      |
| --------------------- | ------------------------------- | ----------- |
| background-color      | 배경 색상                       | transparent |
| background-image      | 하나 이상의 배경 이미지         | none        |
| background-repeat     | 배경 이미지의 반복              | repeat      |
| background-position   | 배경 이미지의 위치              | 0 0         |
| background-attachment | 배경 이미지의 스크롤 여부(특성) | scroll      |

### background-color

> 요소의 배경 색상 지정

| 값          | 의미   | 기본값      |
| ----------- | ------ | ----------- |
| 색상        | 요소의 | 배경 색상   |
| transparent | 투명   | transparent |

```css
background-color: 색상;

.box1 {
  background-color: red;
}
.box2 {
  background-color: #000;
}
.box3 {
  background-color: rgba(255, 0, 0, 0.5);
  /* Red Green Blue Alpha */
}
```

### background-image

> 요소의 배경에 하나 이상의 이미지를 삽입

- 배경 이미지 삽입 시, 요소의 크기가 설정되어 있어야 배경 이미지가 출력된다.

  ```css
  background-image: url('경로');

  .box {
    background-image: url('../img/image.jpg');
    width: 120px;
    height: 80px;
  }
  .box1 {
    /* 개별속성 */
    background-image: url('../img/i1.jpg'), url('../img/i2.jpg'),
      url('../img/i3.jpg');
  }
  .box2 {
    /* 단축속성 */
    background: url('../img/i1.jpg') no-repeat, url('../img/i2.jpg') no-repeat
        100px 50px, url('../img/i3.jpg') repeat-x;
  }
  ```

  - 하나 이상의 배경 이미지를 삽입할 경우 `,`로 구분한다.
    - 먼저 작성된 이미지가 더 위에 쌓이며 `다중 배경 이미지`는 IE8 이하 버전에 사용할 수 없다.

### background-repeat

> 배경 이미지의 반복 설정

| 값        | 의미                              | 기본값 |
| --------- | --------------------------------- | ------ |
| repeat    | 배경 이미지를 수직, 수평으로 반복 | repeat |
| repeat-x  | 배경 이미지를 수평으로 반복       |        |
| repeat-y  | 배경 이미지를 수직으로 반복       |        |
| no-repeat | 반복 없음                         |        |

```css
background-repeat: 반복;

.box1 {
  background-image: url('../img/image.jpg');
  background-repeat: no-repeat;
  width: 300px;
  height: 200px;
}
.box2 {
  background: url('../img/image.jpg') no-repeat;
  width: 300px;
  height: 200px;
}
```

### background-position

> 배경 이미지의 위치를 설정

| 값   | 의미                                                       | 기본값 |
| ---- | ---------------------------------------------------------- | ------ |
| %    | 왼쪽 상단 모서리는 0% 0%, 오른쪽 하단 모서리는 100% 100%   | 0% 0%  |
| 방향 | 방향을 입력하여 위치 설정 top, bottom, left, right, center |        |
| 단위 | px, em, cm 등 단위로 지정                                  |        |

```css
.box {
  background-position: left top; /* 왼쪽, 위쪽 */
  background-position: top left; /* 위쪽, 왼쪽  */
  background-position: center center; /* 가운데, 가운데 */
  background-position: center; /* 가운데, 가운데 */

  background-position: 0% 0%; /* X: 0%, Y: 0% */
  background-position: 0 0; /* X: 0, Y: 0 (추천!) */
  background-position: 20% 50%; /* X: 20%, Y: 50% */
  background-position: 10%; /* X: 10%, Y: 0% */
  background-position: 50%; /* X: 50%, Y: 50% (가운데) */
  background-position: 10px 20px; /* X: 10px, Y: 20px */
  background-position: 10px; /* X: 10px, Y: 0 */
  background-position: 50% 30px; /* X: 50%, Y: 30px */

  background-position: 30% bottom; /* X: 30%, 아래쪽 */
  background-position: left 50px; /* 왼쪽, Y: 50px */
  background-position: 50px left; /* ERROR */
  background-position: top 30%; /* ERROR */
}
```

- 값이 방향일 경우

  ```css
  background-position: 방향1 방향2;
  ```

- 값이 단위(`%`, `px` 등)일 경우
  ```css
  background-position: X축 Y축;
  ```

### background-attachment

> 요소가 스크롤될 때 배경 이미지의 스크롤 여부(특성) 설정

| 값     | 의미                                                                   | 기본값 |
| ------ | ---------------------------------------------------------------------- | ------ |
| scroll | 배경 이미지가 요소를 따라서 같이 스크롤 됨                             | scroll |
| fixed  | 배경 이미지가 뷰포트(Viewport)에 고정되어, 요소와 같이 스크롤되지 않음 |        |
| local  | 요소 내 스크롤 시 배경 이미지가 같이 스크롤 됨                         |        |

```html
<div class="parent">
  <div class="child"></div>
</div>
```

```css
background-attachment: 스크롤특성;

.parent {
  width: 500px;
  height: 300px;
  /* local 값을 사용하면 overflow: [auto, scroll] 속성이 필요 */
  background: url('../img/image.png') no-repeat local;
  overflow: auto;
}
.child {
  width: 500px;
  height: 600px;
}
```

### background-size

> 배경 이미지의 크기 지정

| 값      | 의미                                                                | 기본값 |
| ------- | ------------------------------------------------------------------- | ------ |
| auto    | 배경 이미지가 원래의 크기로 표시됨                                  | auto   |
| 단위    | px, em, % 등 단위로 지정                                            |        |
|         | width height형태로 입력 가능(E.g. 120px 370px)                      |        |
|         | width만 입력하면 비율에 맞게 지정됨(E.g. 120px)                     |        |
| cover   | 배경 이미지의 크기 비율을 유지하며, 요소의 더 넓은 너비에 맞춰진다. |        |
|         | 이미지가 잘릴 수 있다.                                              |        |
| contain | 배경 이미지의 크기 비율을 유지하며, 요소의 더 짧은 너비에 맞춰진다. |        |
|         | 이미지가 잘리지 않는다.                                             |        |
