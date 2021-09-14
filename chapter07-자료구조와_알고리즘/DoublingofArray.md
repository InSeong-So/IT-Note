# 더블링(Doubling of Array)
## 개념
> 정보가 많아 해당 배열에 데이터를 모두 담지 못할 때, 두 배 큰 배열을 만들어 기존의 배열에서 데이터를 모두 옮기기까지의 작업입니다.

<br>

## 장점
- 유연한 메모리의 사용량으로 배열을 구현할 수 있습니다.

<br>

## 단점
- 더블링 연산을 할 때마다 비용이 증가합ㄴ디ㅏ.

<br>

## 비용
> 크기 n의 배열에 n+1번째 요소가 삽입되는 상황입니다.


1. n + 1번째 요소가 추가 될 때의 비용
   - `t`
2. n번째 요소까지 전송(Transferring)하는 비용
   - `n * t`
3. n번째 요소까지 추가되면서 들어간 비용
   - `(t / 2) * n + (t / 4) * n + (t / 8) * n + ... <= t * n`
4. 즉, 크기 n의 배열에 n + 1번째 요소가 삽입될 때의 계산량은 `2t * n`입니다.

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/blob/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/README.md)</sup><br>
<sup>[(최상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>