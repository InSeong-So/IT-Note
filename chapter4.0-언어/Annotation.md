# 어노테이션(Annotation)	
- 일종의 메타데이터(Metadata)로 컴파일 과정과 실행 과정에서 코드를 어떻게 컴파일하고 처리할 것인지를 알려주는 정보이다.
- 어노테이션 자체는 아무런 동작을 가지지 않는 표식일 뿐이나 리플렉션(Reflection)을 이용해 어노테이션의 적용 여부와 엘리먼트 값을 읽고 처리할 수 있다.

## 목적	
```
1. 컴파일러에게 코드 문법 에러를 체크하도록 정보를 제공한다.
2. 소프트웨어 개발 툴이 빌드나 배치 시 코드를 자동으로 생성할 수 있도록 정보를 제공한다.
3. 실행 시 (런타임 시) 특정 기능을 실행하도록 정보를 제공한다.
```

---
## 선언 방법
```java
public @interface AnnotationName{
	// 엘리먼트 타입은 기본 데이터 타입과 String, 열거, Class, 배열 타입을 사용할 수 있음
	타입 elementName1() [default 값];
	타입 elementName2() [default 값];
}
```
---
## 적용 방법
```@AnnotationName(elementName1="값", elementName2=3);```

---
## 적용 대상
ElementType 열거 상수 | 적용 대상
------------ | -------------
TYPE | 클래스, 인터페이스, 열거 타입
ANNOTATION_TYPE | 어노테이션
FIELD | 필드
CONSTRUCTOR | 생성자
METHOD | 메소드
LOCAL_VARIABLE | 로컬 변수
PACKAGE | 패키지
---
## 유지 정책
RetentionPolicy 열거 상수 | 설명
------------ | -------------
SOURCE | 소스에서만 어노테이션 정보를 유지하며 바이트 코드 파일에는 정보가 남지 않음
CLASS | 바이트 코드 파일까지 어노테이션 정보를 유지하며 리플렉션을 이용해 어노테이션 정보를 얻을 수 없음	
RUNTIME | 바이트 코드 파일까지 어노테이션 정보를 유지하면서 리플렉션을 이용한 런타임 시에 어노테이션 정보를 얻을 수 있음	
```	java
@Target({ElementType.TYPE, ElementType.FIELD, ElementType.METHOD})
@Retention(RetentionPolicy.RUNTIME)
public @interface AnnotationName {
}
```	
---
## 어노테이션 정보 사용하기
---
### 필드, 생성자, 메소드에 적용된 어노테이션 정보를 얻으려면 Class의 메소드를 통해 아래와 같은 타입의 배열을 얻어야 함
리턴 타입 | 메소드명(매개 변수) | 설명
------------ | ------------ | -------------
Field[] | getFields() | 필드 정보를 Field 배열로 리턴
Constructor | getConstructor | 생성자 정보를 Constructor 배열로 리턴
Method[] | getDeclaredMethods() | 메소드 정보를 Method 배열로 리턴
---
### 이후 다음 메소드를 통해 어노테이션 정보를 얻을 수 있음
리턴 타입 | 메소드명(매개 변수)	| 내용
------------ | ------------ | ------------
boolean | isAnnotationPresent(Class<? extends Annotation> annotationClass) | 지정한 어노테이션이 적용되었는지 여부. Class에서 호출했을 때 상위 클래스에 적용된 경우에도 true를 리턴함
Annotation | getAnnotation(Class<T> annotationClass) | 지정한 어노테이션이 적용되었다면 어노테이션을 리턴하고 아니라면 null을 리턴함. Class에서 호출했을 때 상위 클래스에 적용된 경우에도 어노테이션을 리턴함
Annotation[] | getAnnotations()	| 적용된 모든 어노테이션을 리턴함. Class에서 호출했을 때 상위 클래스에 적용된 경우도 모두 포함이며 적용된 어노테이션이 없다면 길이가 0인 배열을 리턴함
Annotation[] | getDeclaredAnnotations()	 | 직접 적용된 모든 어노테이션을 리턴함. Class에서 호출했을 때 상위 클래스에 적용된 어노테이션은 포함되지 않음