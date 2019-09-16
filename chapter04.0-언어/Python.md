# Python-Basic
```python
국비지원교육 구디아카데미에서 교육 받은 것을 정리한 내용임.
```

## 변수 (Varable)
```python
프로그래밍에서 변수는 값을 저장하는 장소
```
   - 변수는 메모리 주소를 가지고 있으며 변수에 들어가는 값은 메모리 주소에 할당된다.
   - 컴퓨터의 구조 : 폰 노이만 아키텍처 
     사용자가 컴퓨터에 값을 입력하거나 프로그램을 실행할 경우 그 정보를 먼저 메모리에 저장시켜
     CPU가 순차적으로 그 정보를 해석하고 계산하여 사용자에게 결과값을 전달
   - 변수이름 작명법 : 알파벳, 숫자, 언더스코어(_) 만든다.

## 자료형 (Fundamental Data Types)
```python
파이썬이 처리하는 기본데이터 유형
```
   - 수치자료형 : 정수(Integer), 실수(Float)
   - 문자형 (String)
   - 논리형 (Boolean)

## 연산자(Operator)와 피연산자(Operand)
```python
"+, -, *, /" 같은 기호들을 연산자, 연산자에 의해 계산이 되는 숫자들은 피연산자라고 말한다.
```
   - "3 + 2" 에서 3과 2는 피연산자, +는 연산자라고 말한다.
   - 수식에서 연산자의 역할은 수학에서 연산자와 동일하다.
   - 문자간에도 + 연산이 가능하다.
   - 제곱승 : **
   - 나머지 : %
   - 몫 : //
   - 증가 또는 감소 연산 : "a += 1 & a = a + 1" 같은 의미로 증가연산이 가능하다. (-=, -)
   
## 자료형 변환 (형변환)
```python
str(), int(), float()
```

## 프로그램과 소통하는 방법
```python
GUI (Graphical User Interface) : 사용자가 편리하게 사용할 수 있도록 입출력 등의 기능을 알기 쉬운 아이콘 따위의 그래픽으로 나타낸 방법
CLI (Command Line Interface) : Text를 사용하여 컴퓨터에서 명령을 입력하는 방법
     -> Console = Terminal = CMD
     -> input()를 이용하여 CMD에서 입력값을 받을 수 있다.
     -> print()를 이용하여 CMD에서 출력값을 보여 줄 수 있다.
```
   - print 사용시 문자열 포맷 코드
   ```python
     -> %s : 문자열 (%10s : 왼쪽 빈공간 10칸 후 문자열 시작 설정)
     -> %c : 문자 1개
     -> %d : 정수
     -> %f : 부동소수 (%0.2f : 소수점 2자리까지 설정)
     -> %o : 8진수
     -> %x : 16진수
     -> %% : Literal % (문자 % 자체)
   ```
   - 문자열 관련 함수 (https://wikidocs.net/13)
   ```python
     -> 문자 개수 세기 : a.count("b")
     -> 위치 알려주기 : a.find("b")
     -> 위치 알려주기 : a.index("b")
     -> 문자열 삽입 : a.join("1234")
     -> 소문자를 대문자로 바꾸기 : a.upper()
     -> 대문자를 소문자로 바꾸기 : a.lower()
     -> 왼쪽 공백 지우기 : a.lstrip()
     -> 오른쪽 공백 지우기 : a.strip()
     -> 문자열 바꾸기 : a.replace("[", "(")
     -> 문자열 나누기 : a.split()
     -> 특정값 바로 대입하기 : "----{0}----".format(값) & "{name}\n{age}".format(name="", age=10)
   ```
     
## Copndition (if문, 조건문)
```python
조건에 따라 특정한 동작을 하게하는 명령어로
```
   - if, else, elif 명령 키워드를 사용한다.
   - if-else문 문법
   ```python
     -> 조건 판단 방법
     -> 조건 일치시 수행 명령 block ":"와 들여쓰기(indentation)
     -> 조건 불일치시 수행 명령 block
   ```
   - 조건 판단 방법
   ```python
     -> <, >, ==, !=, >=, <=
     -> 논리 키워드 사용 : and, or, not()
   ```
   
## List Data (배열)
```python
사용법 : [속성]
시퀀스 자료형, 여러 데이터들의 집합으로 Int, Float 같은 다양한 데이터 Type 포함
```
   - 인덱싱 (indexing) : list에 있는 값들은 주소(offset)를 가질 수 있다.
   - 슬라이싱 (slicing) : a[0:5], a[:], a[-10:10], a[::2], a[::-1]
   ```python
     -> list의 값들을 잘라서 쓰는 것이 슬라이싱
     -> list의 주소 값을 기반으로 부분 값을 반환
   ```
   - len() 를 이용하여 길이를 구할 수 있다.
   - a[0] = 변경값 
   - a * 2 (배열이 반복된다.)
   - 검색할값 in a
   - List 추가와 삭제 : a.append(""), a.extend([]), a.insert(0, ""), a.remove(), del a[0]
   - a.sort() 정렬 가능
   - 패킹과 언패킹
   ```python
     -> 패킹 : 한 변수에 여러 개의 데이터를 넣는 것를 말한다. t  = [1,2,3]
     -> 언패킹 : 한 변수의 데이터를 각각의 변수로 반환 하는 것를 말한다. a, b, c = t
   ```
   - 이차원 리스트 : 리스트 안에 리스트를 만들어 행렬(Matrix) 생성한다. a[0][1]
   
## Loop (for문, while문, 반복문)
```python
정해진 동작을 반복적으로 수행하게 하는 명령문으로 반복 시작 조건, 종료 조건, 수행 명령으로 구성되어 있다.
```
   - 반복문 역시 반복 구문은 들여쓰기와 block으로 구분된다.
   - for문
   ```python
     -> for 변수명 in [1,2,3,4,5]: print(변수명)
     -> for 변수명 in range(0, 5): print(변수명)
     -> for 변수명 in "12345": print(변수명)
     -> for 변수명 in range(1, 10, 2): print(변수명)  # 1부터 9까지 2씩 증가
     -> for 변수명 in range(10, 1, -1): print(변수명) # 10부터 2까지 -1씩 감소
   ```
   - while문
   ```python
     -> i = 1 while i < 10: print(i) i += 1
     -> i = 0 while i < 5: print(i) i = i + 1
   ```
   - 반복의 제어 - break (정지), continue (다음으로 넘어간다 : skip)
   - 반복의 제어 - else : 반복 조건이 만족하지 않을 경우 반복 종료 시 1회 수행
   ```python
     -> for i in range(10): 
            print(i) 
        else: 
            print("End")
     -> i = 0
        while i < 10:
            print(i)
        else:
            print("End")
     -> break로 종료된 반복문은 else block이 수행되지 않는다.
   ```
