# 정보처리기사 예상 기출문제(1000문)

## <span style="color:green;">프로그래밍 언어 활용(90문)</span>
### 같은 타입의 데이터 집합을 만들어 저장할 때 사용하는 데이터 타입은 ?
- 답 : 

<br>

### 다음 C/C++ 데이터 타입의 종류가 다른 것은?
- unsinged short
- unsinged int
- unsinged char
- unsinged long

<br>

### Python 언어의 독자적인 데이터 타입이며 실수와 허수의 합으로 이루어진 복소수의 숫자 표현 데이터 타입은?
- 답 :

<br>

### 다음 데이터 타입 중 크기가 다른 것은?
- C/C++의 short
- C/C++의 char
- Java의 short
- Java의 char

<br>

### 다음 Java 코드의 결과는?
```java
void whatIs(int[] arr) {
    int pointer = 0;

    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                pointer = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = pointer;
            }
        }
    }
}

void main(String[] args) {

    int[] inputArray = {100, 39, 25, 79, 83};
    whatIs(inputArray);
    for (int i = 0; i < inputArray.length; i++) {
        System.out.printf("%d ", inputArray[i]);
    }
}
```
- 답:

<br>

### C/C++의 unsinged 데이터 타입은 부호없는 정수형이라고 한다. 이 데이터 타입의 특징 중 옳은 것은?
- 양수를 제외하고 음수만 표현한다.
- 양수의 표현 범위를 3배로 증가시켰다.
- unsinged short의 경우 0부터 65,535까지 표현한다.
- Java에는 unsinged string 데이터 타입이 존재한다.

<br>


### 다음 중 변수명 작성 규칙에 부합한 변수는?
```
1. _check   2. 3third   3. close Var  4. break
```
- 답 :

<br>

### 다음 설명에 해당하는 변수는?
```
함수나 블록 내에서 선언되며 초기화하지 않으면 쓰레기값이 저장된다.
함수나 블록이 실행되는 동안에만 존재하며 이를 벗어나면 자동으로 소멸된다.
```
- 답 :

<br>

### 다음 설명에 해당하는 변수는?
```
함수 밖에서 선언되며 현재 혹은 다른 파일에서 선언된 변수나 함수를 참조하기 위한 변수
```
- 답 :

<br>

### 다음 설명에 해당하는 변수는?
```
자주 사용되는 변수를 저장하여 처리 속도를 높이기 위해 사용
함수나 블록이 실행되는 동안에만 존재하며 이를 벗어나면 자동으로 소멸
CPU에 저장되므로 메모리 주소를 가지지 않기에 주소 연산자(&) 사용 불가
```
- 답 : 

<br>

### 