# Part 2-3 Python

* [Generator](#generator)
* [클래스를 상속했을 때 메서드 실행 방식](#클래스를-상속했을-때-메서드-실행-방식)
* [GIL 과 그로인한 성능 문제](#gil-과-그로인한-성능-문제)
* [GC 작동 방식](#gc-작동-방식)
* [Celery](#celery)
* [PyPy 가 CPython 보다 빠른 이유](#pypy가-cpython보다-빠른-이유)
* [메모리 누수가 발생할 수 있는 경우](#메모리-누수가-발생할-수-있는-경우)
* [Duck Typing](#Duck-Typing)

[뒤로](https://github.com/JaeYeopHan/for_beginner)

## Generator

[Generator(제네레이터)](https://docs.python.org/3/tutorial/classes.html#generators)는 제네레이터 함수가 호출될 때 반환되는 [iterator(이터레이터)](https://docs.python.org/3/tutorial/classes.html#iterators)의 일종이다. 제네레이터 함수는 일반적인 함수와 비슷하게 생겼지만 `yield 구문`을 사용해 데이터를 원하는 시점에 반환하고 처리를 다시 시작할 수 있다. 일반적인 함수는 진입점이 하나라면 제네레이터는 진입점이 여러개라고 생각할 수 있다. 이러한 특성때문에 제네레이터를 사용하면 원하는 시점에 원하는 데이터를 받을 수 있게된다.

### 예제

```python
>>> def generator():
...     yield 1
...     yield 'string'
...     yield True

>>> gen = generator()
>>> gen
<generator object generator at 0x10a47c678>
>>> next(gen)
1
>>> next(gen)
'string'
>>> next(gen)
True
>>> next(gen)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
StopIteration
```

### 동작

1.  yield 문이 포함된 제네레이터 함수를 실행하면 제네레이터 객체가 반환되는데 이 때는 함수의 내용이 실행되지 않는다.
2.  `next()`라는 빌트인 메서드를 통해 제네레이터를 실행시킬 수 있으며 `next()` 메서드 내부적으로 iterator 를 인자로 받아 이터레이터의 `__next__()` 메서드를 실행시킨다.
3.  처음 `__next__()` 메서드를 호출하면 함수의 내용을 실행하다 yield 문을 만났을 때 처리를 중단한다.
4.  이 때 모든 local state 는 유지되는데 변수의 상태, 명령어 포인터, 내부 스택, 예외 처리 상태를 포함한다.
5.  그 후 제어권을 상위 컨텍스트로 양보(yield)하고 또 `__next__()`가 호출되면 제네레이터는 중단된 시점부터 다시 시작한다.

> yield 문의 값은 어떤 메서드를 통해 제네레이터가 다시 동작했는지에 따라 다른데, `__next__()`를 사용하면 None 이고 `send()`를 사용하면 메서드로 전달 된 값을 갖게되어 외부에서 데이터를 입력받을 수 있게 된다.

### 이점

List, Set, Dict 표현식은 iterable(이터러블)하기에 for 표현식 등에서 유용하게 쓰일 수 있다. 이터러블 객체는 유용한 한편 모든 값을 메모리에 담고 있어야 하기 때문에 큰 값을 다룰 때는 별로 좋지 않다. 제네레이터를 사용하면 yield 를 통해 그때그때 필요한 값만을 받아 쓰기때문에 모든 값을 메모리에 들고 있을 필요가 없게된다.

> `range()`함수는 Python 2.x 에서 리스트를 반환하고 Python 3.x 에선 range 객체를 반환한다. 이 range 객체는 제네레이터, 이터레이터가 아니다. 실제로 `next(range(1))`를 호출해보면 `TypeError: 'range' object is not an iterator` 오류가 발생한다. 그렇지만 내부 구현상 제네레이터를 사용한 것 처럼 메모리 사용에 있어 이점이 있다.

```python
>>> import sys
>>> a = [i for i in range(100000)]
>>> sys.getsizeof(a)
824464
>>> b = (i for i in range(100000))
>>> sys.getsizeof(b)
88
```

다만 제네레이터는 그때그때 필요한 값을 던져주고 기억하지는 않기 때문에 `a 리스트`가 여러번 사용될 수 있는 반면 `b 제네레이터`는 한번 사용된 후 소진된다. 이는 모든 이터레이터가 마찬가지인데 List, Set 은 이터러블하지만 이터레이터는 아니기에 소진되지 않는다.

```python
>>> len(list(b))
100000
>>> len(list(b))
0
```

또한 `while True` 구문으로 제공받을 데이터가 무한하거나, 모든 값을 한번에 계산하기엔 시간이 많이 소요되어 그때 그때 필요한 만큼만 받아 계산하고 싶을 때 제네레이터를 활용할 수 있다.

### Generator, Iterator, Iterable 간 관계

![](http://nvie.com/img/relationships.png)

#### Reference

* [제네레이터 `__next__()` 메서드](https://docs.python.org/3/reference/expressions.html#generator.__next__)
* [제네레이터 `send()` 메서드](https://docs.python.org/3/reference/expressions.html#generator.send)
* [yield 키워드 알아보기](https://tech.ssut.me/2017/03/24/what-does-the-yield-keyword-do-in-python/)
* [Generator 와 yield 키워드](https://item4.github.io/2016-05-09/Generator-and-Yield-Keyword-in-Python/)
* [Iterator 와 Generator](http://pythonstudy.xyz/python/article/23-Iterator%EC%99%80-Generator)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## 클래스를 상속했을 때 메서드 실행 방식

인스턴스의 메서드를 실행한다고 가정할 때 `__getattribute__()`로 bound 된 method 를 가져온 후 메서드를 실행한다. 메서드를 가져오는 순서는 `__mro__`에 따른다. MRO(method resolution order)는 메소드를 확인하는 순서로 파이썬 2.3 이후 C3 알고리즘이 도입되어 지금까지 사용되고있다. 단일상속 혹은 다중상속일 때 어떤 순서로 메서드에 접근할지는 해당 클래스의 `__mro__`에 저장되는데 왼쪽에 있을수록 우선순위가 높다. B, C 를 다중상속받은 D 클래스가 있고, B 와 C 는 각각 A 를 상속받았을 때(다이아몬드 상속) D 의 mro 를 조회하면 볼 수 있듯이 부모클래스는 반드시 자식클래스 이후에 위치해있다. 최상위 object 클래스까지 확인했는데도 적절한 메서드가 없으면 `AttributeError`를 발생시킨다.

```python
class A:
    pass

class B(A):
    pass

class C(A):
    pass

class D(B, C):
    pass

>>> D.__mro__
(__main__.D, __main__.B, __main__.C, __main__.A, object)
```

![](https://makina-corpus.com/blog/metier/2014/python-mro-conflict)

Python 2.3 이후 위 이미지와 같은 상속을 시도하려하면 `TypeError: Cannot create a consistent method resolution` 오류가 발생한다.

#### Reference

* [INHERITANCE(상속), MRO](https://kimdoky.github.io/python/2017/11/28/python-inheritance.html)
* [What does mro do](https://stackoverflow.com/questions/2010692/what-does-mro-do)
* [Python 2.3 이후의 MRO 알고리즘에 대한 파이썬 공식 문서](https://www.python.org/download/releases/2.3/mro/)
* [What is a method in python](https://stackoverflow.com/questions/3786881/what-is-a-method-in-python/3787670#3787670)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## GIL 과 그로인한 성능 문제

GIL 때문에 성능 문제가 대두되는 경우는 압축, 정렬, 인코딩 등 수행시간에 CPU 의 영향이 큰 작업(CPU bound)을 멀티 스레드로 수행하도록 한 경우다. 이 땐 GIL 때문에 멀티 스레드로 작업을 수행해도 싱글 스레드일 때와 별반 차이가 나지 않는다. 이를 해결하기 위해선 멀티 스레드는 파일, 네트워크 IO 같은 IO bound 프로그램에 사용하고 멀티 프로세스를 활용해야한다.

### GIL(Global Interpreter Lock)

GIL 은 스레드에서 사용되는 Lock 을 인터프리터 레벨로 확장한 개념인데 여러 스레드가 동시에 실행되는걸 방지한다. 더 정확히 말하자면 어느 시점이든 하나의 Bytecode 만이 실행되도록 강제한다. 각 스레드는 다른 스레드에 의해 GIL 이 해제되길 기다린 후에야 실행될 수 있다. 즉 멀티 스레드로 만들었어도 본질적으로 싱글 스레드로 동작한다.

![](https://cdn-images-1.medium.com/max/1600/1*hqWXEQmyMZCGzAAxrd0N0g.png)

<sup> _출처 [mjhans83 님의 python GIL](https://medium.com/@mjhans83/python-gil-f940eac0bef9)_ </sup>

### GIL 의 장점

코어 개수는 점점 늘어만 가는데 이 GIL 때문에 그 장점을 제대로 살리지 못하기만 하는 것 같으나 이 GIL 로 인한 장점도 존재한다. GIL 을 활용한 멀티 스레드가 그렇지 않은 멀티 스레드보다 구현이 쉬우며, 레퍼런스 카운팅을 사용하는 메모리 관리 방식에서 GIL 덕분에 오버헤드가 적어 싱글 스레드일 때 [fine grained lock 방식](http://fileadmin.cs.lth.se/cs/education/eda015f/2013/herlihy4-5-presentation.pdf)보다 성능이 우월하다. 또한 C extension 을 활용할 때 GIL 은 해제되므로 C library 를 사용하는 CPU bound 프로그램을 멀티 스레드로 실행하는 경우 더 빠를 수 있다.

#### Reference

* [동시성과 병렬성](https://www.slideshare.net/deview/2d4python)
* [Understanding the Python GIL](http://www.dabeaz.com/python/UnderstandingGIL.pdf)
* [Threads and the GIL](http://jessenoller.com/blog/2009/02/01/python-threads-and-the-global-interpreter-lock)
* [Python GIL](https://medium.com/@mjhans83/python-gil-f940eac0bef9)
* [Old GIL 과 New GIL](https://blog.naver.com/parkjy76/30167429369)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## GC 작동 방식

파이썬에선 기본적으로 [garbage collection](https://docs.python.org/3/glossary.html#term-garbage-collection)(가비지 컬렉션)과 [reference counting](https://docs.python.org/3/glossary.html#term-reference-count)(레퍼런스 카운팅)을 통해 할당 된 메모리를 관리한다. 기본적으로 참조 횟수가 0 이된 객체를 메모리에서 해제하는 레퍼런스 카운팅 방식을 사용하지만, 참조 횟수가 0 은 아니지만 도달할 수 없는 상태인 reference cycles(순환 참조)가 발생했을 때는 가비지 컬렉션으로 그 상황을 해결한다.

> 엄밀히 말하면 레퍼런스 카운팅 방식을 통해 객체를 메모리에서 해제하는 행위가 가비지 컬렉션의 한 형태지만 여기서는 순환 참조가 발생했을 때 cyclic garbage collector 를 통한 **가비지 컬렉션**과 **레퍼런스 카운팅**을 통한 가비지 컬렉션을 구분했다.

여기서 '순환 참조가 발생한건 어떻게 탐지하지?', '주기적으로 감시한다면 그 주기의 기준은 뭘까?', '가비지 컬렉션은 언제 발생하지?' 같은 의문이 들 수 있는데 이 의문을 해결하기 전에 잠시 레퍼런스 카운팅, 순환 참조, 파이썬의 가비지 컬렉터에 대한 간단한 개념을 짚고 넘어가자. 이 개념을 알고 있다면 바로 [가비지 컬렉션의 작동 방식 단락](#가비지-컬렉션의-작동-방식)을 읽으면 된다.

#### 레퍼런스 카운팅

모든 객체는 참조당할 때 레퍼런스 카운터를 증가시키고 참조가 없어질 때 카운터를 감소시킨다. 이 카운터가 0 이 되면 객체가 메모리에서 해제한다. 어떤 객체의 레퍼런스 카운트를 보고싶다면 `sys.getrefcount()`로 확인할 수 있다.

<details>
    <summary>
        <code>Py_INCREF()</code>와 <code>Py_DECREF()</code>를 통한 카운터 증감
    </summary>
<br>

카운터를 증감시키는 명령은 아래와 같이 [object.h](https://github.com/python/cpython/blob/master/Include/object.h)에 선언되어있는데 카운터를 증가시킬 때는 단순히 `ob_refcnt`를 1 증가시키고 감소시킬때는 1 감소시킴과 동시에 카운터가 0 이되면 메모리에서 객체를 해제하는 것을 확인할 수 있다.

```c
#define Py_INCREF(op) (                         \
    _Py_INC_REFTOTAL  _Py_REF_DEBUG_COMMA       \
    ((PyObject *)(op))->ob_refcnt++)

#define Py_DECREF(op)                                   \
    do {                                                \
        PyObject *_py_decref_tmp = (PyObject *)(op);    \
        if (_Py_DEC_REFTOTAL  _Py_REF_DEBUG_COMMA       \
        --(_py_decref_tmp)->ob_refcnt != 0)             \
            _Py_CHECK_REFCNT(_py_decref_tmp)            \
        else                                            \
            _Py_Dealloc(_py_decref_tmp);                \
    } while (0)
```

더 정확한 정보는 [파이썬 공식 문서](https://docs.python.org/3/extending/extending.html#reference-counting-in-python)를 참고하면 자세하게 설명되어있다.

</details>

#### 순환 참조

순환 참조의 간단한 예제는 자기 자신을 참조하는 객체다.

```python
>>> l = []
>>> l.append(l)
>>> del l
```

`l`의 참조 횟수는 1 이지만 이 객체는 더이상 접근할 수 없으며 레퍼런스 카운팅 방식으로는 메모리에서 해제될 수 없다.

또 다른 예로는 서로를 참조하는 객체다.

```python
>>> a = Foo()  # 0x60
>>> b = Foo()  # 0xa8
>>> a.x = b  # 0x60의 x는 0xa8를 가리킨다.
>>> b.x = a  # 0xa8의 x는 0x60를 가리킨다.
# 이 시점에서 0x60의 레퍼런스 카운터는 a와 b.x로 2
# 0xa8의 레퍼런스 카운터는 b와 a.x로 2다.
>>> del a  # 0x60은 1로 감소한다. 0xa8은 b와 0x60.x로 2다.
>>> del b  # 0xa8도 1로 감소한다.
```

이 상태에서 `0x60.x`와 `0xa8.x`가 서로를 참조하고 있기 때문에 레퍼런스 카운트는 둘 다 1 이지만 도달할 수 없는 가비지가 된다.

#### 가비지 컬렉터

파이썬의 `gc` 모듈을 통해 가비지 컬렉터를 직접 제어할 수 있다. `gc` 모듈은 [cyclic garbage collection 을 지원](https://docs.python.org/3/c-api/gcsupport.html)하는데 이를 통해 reference cycles(순환 참조)를 해결할 수 있다. gc 모듈은 오로지 순환 참조를 탐지하고 해결하기위해 존재한다. [`gc` 파이썬 공식문서](https://docs.python.org/3/library/gc.html)에서도 순환 참조를 만들지 않는다고 확신할 수 있으면 `gc.disable()`을 통해 garbage collector 를 비활성화 시켜도 된다고 언급하고 있다.

> Since the collector supplements the reference counting already used in Python, you can disable the collector if you are sure your program does not create reference cycles.

### 가비지 컬렉션의 작동 방식

순환 참조 상태도 해결할 수 있는 cyclic garbage collection 이 어떤 방식으로 동작하는지는 결국 **어떤 기준으로 가비지 컬렉션이 발생**하고 **어떻게 순환 참조를 감지**하는지에 관한 내용이다. 이에 대해 차근차근 알아보자.

#### 어떤 기준으로 가비지 컬렉션이 일어나는가

앞에서 제기했던 의문은 결국 발생 기준에 관한 의문이다. 가비지 컬렉터는 내부적으로 `generation`(세대)과 `threshold`(임계값)로 가비지 컬렉션 주기와 객체를 관리한다. 세대는 0 세대, 1 세대, 2 세대로 구분되는데 최근에 생성된 객체는 0 세대(young)에 들어가고 오래된 객체일수록 2 세대(old)에 존재한다. 더불어 한 객체는 단 하나의 세대에만 속한다. 가비지 컬렉터는 0 세대일수록 더 자주 가비지 컬렉션을 하도록 설계되었는데 이는 [generational hypothesis](http://www.memorymanagement.org/glossary/g.html#term-generational-hypothesis)에 근거한다.

<details>
    <summary>generational hypothesis의 두 가지 가설</summary>
<br>

* 대부분의 객체는 금방 도달할 수 없는 상태(unreachable)가 된다.
* 오래된 객체(old)에서 젊은 객체(young)로의 참조는 아주 적게 존재한다.

![](https://plumbr.io/wp-content/uploads/2015/05/object-age-based-on-GC-generation-generational-hypothesis.png)
<sup> _출처 [plumbr.io](https://plumbr.io/handbook/garbage-collection-in-java/generational-hypothesis)_ </sup>

* [Reference: Naver D2 - Java Garbage Collection](http://d2.naver.com/helloworld/1329)

<hr>
</details>

주기는 threshold 와 관련있는데 `gc.get_threshold()`로 확인해 볼 수 있다.

```python
>>> gc.get_threshold()
(700, 10, 10)
```

각각 `threshold 0`, `threshold 1`, `threshold 2`을 의미하는데 n 세대에 객체를 할당한 횟수가 `threshold n`을 초과하면 가비지 컬렉션이 수행되며 이 값은 변경될 수 있다.

0 세대의 경우 메모리에 객체가 할당된 횟수에서 해제된 횟수를 뺀 값, 즉 객체 수가 `threshold 0`을 초과하면 실행된다. 다만 그 이후 세대부터는 조금 다른데 0 세대 가비지 컬렉션이 일어난 후 0 세대 객체를 1 세대로 이동시킨 후 카운터를 1 증가시킨다. 이 1 세대 카운터가 `threshold 1`을 초과하면 그 때 1 세대 가비지 컬렉션이 일어난다. 러프하게 말하자면 0 세대 가비지 컬렉션이 객체 생성 700 번만에 일어난다면 1 세대는 7000 번만에, 2 세대는 7 만번만에 일어난다는 뜻이다.

이를 말로 풀어서 설명하려니 조금 복잡해졌지만 간단하게 말하면 메모리 할당시 `generation[0].count++`, 해제시 `generation[0].count--`가 발생하고, `generation[0].count > threshold[0]`이면 `genreation[0].count = 0`, `generation[1].count++`이 발생하고 `generation[1].count > 10`일 때 0 세대, 1 세대 count 를 0 으로 만들고 `generation[2].count++`을 한다는 뜻이다.

[gcmodule.c 코드로 보기](https://github.com/python/cpython/blob/master/Modules/gcmodule.c#L832-L836)

#### 라이프 사이클

이렇듯 가비지 컬렉터는 세대와 임계값을 통해 가비지 컬렉션의 주기를 관리한다. 이제 가비지 컬렉터가 어떻게 순환 참조를 발견하는지 알아보기에 앞서 가비지 컬렉션의 실행 과정(라이프 사이클)을 간단하게 알아보자.

새로운 객체가 만들어 질 때 파이썬은 객체를 메모리와 0 세대에 할당한다. 만약 0 세대의 객체 수가 `threshold 0`보다 크면 `collect_generations()`를 실행한다.

<details>
    <summary>코드와 함께하는 더 자세한 설명</summary>
<br>

새로운 객체가 만들어 질 때 파이썬은 `_PyObject_GC_Alloc()`을 호출한다. 이 메서드는 객체를 메모리에 할당하고, 가비지 컬렉터의 0 세대의 카운터를 증가시킨다. 그 다음 0 세대의 객체 수가 `threshold 0`보다 큰지, `gc.enabled`가 true 인지, `threshold 0`이 0 이 아닌지, 가비지 컬렉션 중이 아닌지 확인하고, 모든 조건을 만족하면 `collect_generations()`를 실행한다.

다음은 `_PyObject_GC_Alloc()`을 간략화 한 소스며 메서드 전체 내용은 [여기](https://github.com/python/cpython/blob/master/Modules/gcmodule.c#L1681-L1710)에서 확인할 수 있다.

```c
_PyObject_GC_Alloc() {
    // ...

    gc.generations[0].count++; /* 0세대 카운터 증가 */
    if (gc.generations[0].count > gc.generations[0].threshold && /* 임계값을 초과하며 */
        gc.enabled &&  /* 사용가능하며 */
        gc.generations[0].threshold &&  /* 임계값이 0이 아니고 */
        !gc.collecting)  /* 컬렉션 중이 아니면 */
    {
        gc.collecting = 1;
        collect_generations();
        gc.collecting = 0;
    }
    // ...
}
```

참고로 `gc`를 끄고싶으면 `gc.disable()`보단 `gc.set_threshold(0)`이 더 확실하다. `disable()`의 경우 서드 파티 라이브러리에서 `enable()`하는 경우가 있다고 한다.

<hr>
</details>

`collect_generations()`이 호출되면 모든 세대(기본적으로 3 개의 세대)를 검사하는데 가장 오래된 세대(2 세대)부터 역으로 확인한다. 해당 세대에 객체가 할당된 횟수가 각 세대에 대응되는 `threshold n`보다 크면 `collect()`를 호출해 가비지 컬렉션을 수행한다.

<details>
    <summary>코드</summary>
<br>

`collect()`가 호출될 때 해당 세대보다 어린 세대들은 모두 통합되어 가비지 컬렉션이 수행되기 때문에 `break`를 통해 검사를 중단한다.

다음은 `collect_generations()`을 간략화 한 소스며 메서드 전체 내용은 [여기](https://github.com/python/cpython/blob/master/Modules/gcmodule.c#L1020-L1056)에서 확인할 수 있다.

```c
static Py_ssize_t
collect_generations(void)
{
    int i;
    for (i = NUM_GENERATIONS-1; i >= 0; i--) {
        if (gc.generations[i].count > gc.generations[i].threshold) {
            collect_with_callback(i);
            break;
        }
    }
}

static Py_ssize_t
collect_with_callback(int generation)
{
    // ...
    result = collect(generation, &collected, &uncollectable, 0);
    // ...
}
```

<hr>
</details>

`collect()` 메서드는 **순환 참조 탐지 알고리즘**을 수행하고 특정 세대에서 도달할 수 있는 객체(reachable)와 도달할 수 없는 객체(unreachable)를 구분하고 도달할 수 없는 객체 집합을 찾는다. 도달할 수 있는 객체 집합은 다음 상위 세대로 합쳐지고(0 세대에서 수행되었으면 1 세대로 이동), 도달할 수 없는 객체 집합은 콜백을 수행 한 후 메모리에서 해제된다.

이제 정말 **순환 참조 탐지 알고리즘**을 알아볼 때가 됐다.

#### 어떻게 순환 참조를 감지하는가

먼저 순환 참조는 컨테이너 객체(e.g. `tuple`, `list`, `set`, `dict`, `class`)에 의해서만 발생할 수 있음을 알아야한다. 컨테이너 객체는 다른 객체에 대한 참조를 보유할 수 있다. 그러므로 정수, 문자열은 무시한채 관심사를 컨테이너 객체에만 집중할 수 있다.

순환 참조를 해결하기 위한 아이디어로 모든 컨테이너 객체를 추적한다. 여러 방법이 있겠지만 객체 내부의 링크 필드에 더블 링크드 리스트를 사용하는 방법이 가장 좋다. 이렇게 하면 추가적인 메모리 할당 없이도 **컨테이너 객체 집합**에서 객체를 빠르게 추가하고 제거할 수 있다. 컨테이너 객체가 생성될 때 이 집합에 추가되고 제거될 때 집합에서 삭제된다.

<details>
    <summary>
        <code>PyGC_Head</code>에 선언된 더블 링크드 리스트
    </summary>
<br>

더블 링크드 리스트는 다음과 같이 선언되어 있으며 [objimpl.h 코드](https://github.com/python/cpython/blob/master/Include/objimpl.h#L250-L259)에서 확인해볼 수 있다.

```c
#ifndef Py_LIMITED_API
typedef union _gc_head {
    struct {
        union _gc_head *gc_next;
        union _gc_head *gc_prev;
        Py_ssize_t gc_refs;
    } gc;
    double dummy;  /* force worst-case alignment */
} PyGC_Head;
```

<hr>
</details>

이제 모든 컨테이터 객체에 접근할 수 있으니 순환 참조를 찾을 수 있어야 한다. 순환 참조를 찾는 과정은 다음과 같다.

1.  객체에 `gc_refs` 필드를 레퍼런스 카운트와 같게 설정한다.
2.  각 객체에서 참조하고 있는 다른 컨테이너 객체를 찾고, 참조되는 컨테이너의 `gc_refs`를 감소시킨다.
3.  `gc_refs`가 0 이면 그 객체는 컨테이너 집합 내부에서 자기들끼리 참조하고 있다는 뜻이다.
4.  그 객체를 unreachable 하다고 표시한 뒤 메모리에서 해제한다.

이제 우리는 가비지 콜렉터가 어떻게 순환 참조 객체를 탐지하고 메모리에서 해제하는지 알았다.

#### 예제

> 아래 예제는 보기 쉽게 가공한 예제이며 실제 `collect()`의 동작과는 차이가 있다. 정확한 작동 방식은 아래에서 다시 서술한다. 혹은 [`collect()` 코드](https://github.com/python/cpython/blob/master/Modules/gcmodule.c#L797-L981)를 참고하자.

아래의 예제를 통해 가비지 컬렉터가 어떤 방법으로 순환 참조 객체인 `Foo(0)`과 `Foo(1)`을 해제하는지 알아보겠다.

```python
a = [1]
# Set: a:[1]
b = ['a']
# Set: a:[1] <-> b:['a']
c = [a, b]
# Set: a:[1] <-> b:['a'] <-> c:[a, b]
d = c
# Set: a:[1] <-> b:['a'] <-> c,d:[a, b]
# 컨테이너 객체가 생성되지 않았기에 레퍼런스 카운트만 늘어난다.
e = Foo(0)
# Set: a:[1] <-> b:['a'] <-> c,d:[a, b] <-> e:Foo(0)
f = Foo(1)
# Set: a:[1] <-> b:['a'] <-> c,d:[a, b] <-> e:Foo(0) <-> f:Foo(1)
e.x = f
# Set: a:[1] <-> b:['a'] <-> c,d:[a, b] <-> e:Foo(0) <-> f,Foo(0).x:Foo(1)
f.x = e
# Set: a:[1] <-> b:['a'] <-> c,d:[a, b] <-> e,Foo(1).x:Foo(0) <-> f,Foo(0).x:Foo(1)
del e
# Set: a:[1] <-> b:['a'] <-> c,d:[a, b] <-> Foo(1).x:Foo(0) <-> f,Foo(0).x:Foo(1)
del f
# Set: a:[1] <-> b:['a'] <-> c,d:[a, b] <-> Foo(1).x:Foo(0) <-> Foo(0).x:Foo(1)
```

위 상황에서 각 컨테이너 객체의 레퍼런스 카운트는 다음과 같다.

```py
# ref count
[1]     <- a,c      = 2
['a']   <- b,c      = 2
[a, b]  <- c,d      = 2
Foo(0)  <- Foo(1).x = 1
Foo(1)  <- Foo(0).x = 1
```

1 번 과정에서 각 컨테이너 객체의 `gc_refs`가 설정된다.

```py
# gc_refs
[1]    = 2
['a']  = 2
[a, b] = 2
Foo(0) = 1
Foo(1) = 1
```

2 번 과정에서 컨테이너 집합을 순회하며 `gc_refs`을 감소시킨다.

```py
[1]     = 1  # [a, b]에 의해 참조당하므로 1 감소
['a']   = 1  # [a, b]에 의해 참조당하므로 1 감소
[a, b]  = 2  # 참조당하지 않으므로 그대로
Foo(0)  = 0  # Foo(1)에 의해 참조당하므로 1 감소
Foo(1)  = 0  # Foo(0)에 의해 참조당하므로 1 감소
```

3 번 과정을 통해 `gc_refs`가 0 인 순환 참조 객체를 발견했다. 이제 이 객체를 unreachable 집합에 옮겨주자.

```py
 unreachable |  reachable
             |    [1] = 1
 Foo(0) = 0  |  ['a'] = 1
 Foo(1) = 0  | [a, b] = 2
```

이제 `Foo(0)`와 `Foo(1)`을 메모리에서 해제하면 가비지 컬렉션 과정이 끝난다.

### 더 정확하고 자세한 설명

`collect()` 메서드는 현재 세대와 어린 세대를 합쳐 순환 참조를 검사한다. 이 합쳐진 세대를 `young`으로 이름 붙이고 다음의 과정을 거치며 최종적으로 도달 할 수 없는 객체가 모인 unreachable 리스트를 메모리에서 해제하고 young 에 남아있는 객체를 다음 세대에 할당한다.

```c
update_refs(young)
subtract_refs(young)
gc_init_list(&unreachable)
move_unreachable(young, &unreachable)
```

`update_refs()`는 모든 객체의 레퍼런스 카운트 사본을 만든다. 이는 가비지 컬렉터가 실제 레퍼런스 카운트를 건드리지 않게 하기 위함이다.

`subtract_refs()`는 각 객체 i 에 대해 i 에 의해 참조되는 객체 j 의 `gc_refs`를 감소시킨다. 이 과정이 끝나면 (young 세대에 남아있는 객체의 레퍼런스 카운트) - (남아있는 `gc_refs`) 값이 old 세대에서 young 세대를 참조하는 수와 같다.

`move_unreachable()` 메서드는 young 세대를 스캔하며 `gc_refs`가 0 인 객체를 `unreachable` 리스트로 이동시키고 `GC_TENTATIVELY_UNREACHABLE`로 설정한다. 왜 완전히 `unreachable`이 아닌 임시로(Tentatively) 설정하냐면 나중에 스캔될 객체로부터 도달할 수도 있기 때문이다.

<details>
    <summary>예제 보기</summary>
<br>

```py
a, b = Foo(0), Foo(1)
a.x = b
b.x = a
c = b
del a
del b

# 위 상황을 요약하면 다음과 같다.
Foo(0).x = Foo(1)
Foo(1).x = Foo(0)
c = Foo(1)
```

이 때 상황은 다음과 같은데 `Foo(0)`의 `gc_refs`가 0 이어도 뒤에 나올 `Foo(1)`을 통해 도달 할 수 있다.

|  young   | ref count | gc_refs | reachable |
| :------: | :-------: | :-----: | :-------: |
| `Foo(0)` |     1     |    0    |   `c.x`   |
| `Foo(1)` |     2     |    1    |    `c`    |

<hr>
</details>

0 이 아닌 객체는 `GC_REACHABLE`로 설정하고 그 객체가 참조하고 있는 객체 또한 찾아가(traverse) `GC_REACHABLE`로 설정한다. 만약 그 객체가 `unreachable` 리스트에 있던 객체라면 `young` 리스트의 끝으로 보낸다. 굳이 `young`의 끝으로 보내는 이유는 그 객체 또한 다른 `gc_refs`가 0 인 객체를 참조하고 있을 수 있기 때문이다.

<details>
    <summary>예제 보기</summary>
<br>

```py
a, b = Foo(0), Foo(1)
a.x = b
b.x = a
c = b
d = Foo(2)
d.x = d
a.y = d
del d
del a
del b

# 위 상황을 요약하면 다음과 같다.
Foo(0).x = Foo(1)
Foo(1).x = Foo(0)
c = Foo(1)
Foo(0).y = Foo(2)
```

|  young   | ref count | gc_refs | reachable |
| :------: | :-------: | :-----: | :-------: |
| `Foo(0)` |     1     |    0    |   `c.x`   |
| `Foo(1)` |     2     |    1    |    `c`    |
| `Foo(2)` |     1     |    0    |  `c.x.y`  |

이 상황에서 `Foo(0)`은 `unreachable` 리스트에 있다가 `Foo(1)`을 조사하며 다시 `young` 리스트의 맨 뒤로 돌아왔고, `Foo(2)`도 `unreachable` 리스트에 갔지만 곧 `Foo(0)`에 의해 참조될 수 있음을 알고 다시 `young` 리스트로 돌아온다.

<hr>
</details>

`young` 리스트의 전체 스캔이 끝나면 이제 `unreachable` 리스트에 있는 객체는 **정말 도달할 수 없다**. 이제 이 객체들을 메모리에서 해제되고 `young` 리스트의 객체들은 상위 세대로 합쳐진다.

#### Reference

* [Instagram 이 gc 를 없앤 이유](https://b.luavis.kr/python/dismissing-python-garbage-collection-at-instagram)
* [파이썬 Garbage Collection](http://weicomes.tistory.com/277)
* [Finding reference cycle](https://www.kylev.com/2009/11/03/finding-my-first-python-reference-cycle/)
* [Naver D2 - Java Garbage Collection](http://d2.naver.com/helloworld/1329)
* [gc 의 threshold](https://docs.python.org/3/library/gc.html#gc.set_threshold)
* [Garbage Collection for Python](http://www.arctrix.com/nas/python/gc/)
* [How does garbage collection in Python work](https://www.quora.com/How-does-garbage-collection-in-Python-work-What-are-the-pros-and-cons)
* [gcmodule.c](https://github.com/python/cpython/blob/master/Modules/gcmodule.c)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## Celery

[Celery](http://www.celeryproject.org/)는 메시지 패싱 방식의 분산 비동기 작업 큐다. 작업(Task)은 브로커(Broker)를 통해 메시지(Message)로 워커(Worker)에 전달되어 처리된다. 작업은 멀티프로세싱, eventlet, gevent 를 사용해 하나 혹은 그 이상의 워커에서 동시적으로 실행되며 백그라운드에서 비동기적으로 실행될 수 있다.

#### Reference

* [Spoqa - Celery 를 이용한 긴 작업 처리](https://spoqa.github.io/2012/05/29/distribute-task-with-celery.html)
* [[번역]셀러리 입문하기](https://beomi.github.io/2017/03/19/Introduction-to-Celery/)
* [Python Celery with Redis](http://dgkim5360.tistory.com/entry/python-celery-asynchronous-system-with-redis)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## PyPy 가 CPython 보다 빠른 이유

간단히 말하면 CPython 은 일반적인 인터프리터인데 반해 PyPy 는 [실행 추적 JIT(Just In Time) 컴파일](https://en.wikipedia.org/wiki/Tracing_just-in-time_compilation)을 제공하는 인터프리터기 때문이다. PyPy 는 RPython 으로 컴파일된 인터프리터인데, C 로 작성된 RPython 툴체인으로 인터프리터 소스에 JIT 컴파일을 위한 힌트를 추가해 CPython 보다 빠른 실행 속도를 가질 수 있게 되었다.

### PyPy

PyPy 는 파이썬으로 만들어진 파이썬 인터프리터다. 일반적으로 파이썬 인터프리터를 다시 한번 파이썬으로 구현한 것이기에 속도가 매우 느릴거라 생각하지만 실제 PyPy 는 [스피드 센터](http://speed.pypy.org/)에서 볼 수 있듯 CPython 보다 빠르다.

### 실행 추적 JIT 컴파일

메소드 단위로 최적화 하는 전통적인 JIT 과 다르게 런타임에서 자주 실행되는 루프를 최적화한다.

### RPython(Restricted Python)

[RPython](https://rpython.readthedocs.io/en/latest/index.html)은 이런 실행 추적 JIT 컴파일을 C 로 구현해 툴체인을 포함한다. 그래서 RPython 으로 인터프리터를 작성하고 툴체인으로 힌트를 추가하면 인터프리터에 실행추적 JIT 컴파일러를 빌드한다. 참고로 RPython 은 PyPy 프로젝트 팀이 만든 일종의 인터프리터 제작 프레임워크(언어)다. 동적 언어인 Python 에서 표준 라이브러리와 문법에 제약을 가해 변수의 정적 컴파일이 가능하도록 RPython 을 만들었으며, 동적 언어 인터프리터를 구현하는데 사용된다.

이렇게 언어 사양(파이썬 언어 규칙, BF 언어 규칙 등)과 구현(실제 인터프리터 제작)을 분리함으로써 어떤 동적 언어에 대해서라도 자동으로 JIT(Just-in-Time) 컴파일러를 생성할 수 있게 되었다.

#### Reference

* [RPython 공식 레퍼런스](https://rpython.readthedocs.io/en/latest/)
* [PyPy - wikipedia](https://en.wikipedia.org/wiki/PyPy)
* [PyPy 가 CPython 보다 빠를 수 있는 이유 - memorable](https://memorable.link/link/188)
* [PyPy 와 함께 인터프리터 작성하기](https://www.haruair.com/blog/1882)
* [알파희 - PyPy/RPython 으로 20 배 빨라지는 아희 JIT 인터프리터](https://www.slideshare.net/YunWonJeong/pypyrpython-20-jit)
* [PyPy 가 CPython 보다 빠를 수 있는 이유 - 홍민희](https://blog.hongminhee.org/2011/05/02/5124874464/)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## 메모리 누수가 발생할 수 있는 경우

> 메모리 누수를 어떻게 정의하냐에 따라 조금 다르다. `a = 1`을 선언한 후에 프로그램에서 더 이상 `a`를 사용하지 않아도 이것을 메모리 누수라고 볼 수 있다. 다만 여기서는 사용자의 부주의로 인해 발생하는 메모리 누수만 언급한다.

대표적으로 mutable 객체를 기본 인자값으로 사용하는 경우에 메모리 누수가 일어난다.

```python
def foo(a=[]):
    a.append(time.time())
    return a
```

위의 경우 `foo()`를 호출할 때마다 기본 인자값인 `a`에 타임스탬프 값이 추가된다. 이는 의도하지 않은 결과를 초래하므로 보통의 경우 `a=None`으로 두고 함수 내부에서 `if a is None` 구문으로 빈 리스트를 할당해준다.

다른 경우로 웹 애플리케이션에서 timeout 이 없는 캐시 데이터를 생각해 볼 수 있다. 요청이 들어올수록 캐시 데이터는 쌓여만 가는데 이를 해제할 루틴을 따로 만들어두지 않는다면 이도 메모리 누수를 초래한다.

클래스 내 `__del__` 메서드를 재정의하는 행위도 메모리 누수를 일으킬 수 있다. 순환 참조 중인 클래스가 `__del__` 메서드를 재정의하고 있다면 가비지 컬렉터로 해제되지 않는다.

#### Reference

* [Is it possible to have an actual memory leak?](https://stackoverflow.com/questions/2017381/is-it-possible-to-have-an-actual-memory-leak-in-python-because-of-your-code)
* [파이썬에서 메모리 누수가 발생할 수 있는 경우 - memorable](https://memorable.link/link/189)
* [약한 참조 사용하기](https://soooprmx.com/archives/5074)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## Duck Typing

Duck typing이란 특히 동적 타입을 가지는 프로그래밍 언어에서 많이 사용되는 개념으로, 객체의 실제 타입보다는 객체의 변수와 메소드가 그 객체의 적합성을 결정하는 것을 의미한다. Duck typing이라는 용어는 흔히 [duck test](https://en.wikipedia.org/wiki/Duck_test)라고 불리는 한 구절에서 유래됐다.

> If it walks like a duck and it quacks like a duck, then it must be a duck.
>
> 만일 그 새가 오리처럼 걷고, 오리처럼 꽥꽥거린다면 그 새는 오리일 것이다.

동적 타입 언어인 파이썬은 메소드 호출이나 변수 접근시 타입 검사를 하지 않으므로 duck typing을 넒은 범위에서 활용할 수 있다. 
다음은 간단한 duck typing의 예시다.

```py
class Duck:
    def walk(self):
        print('뒤뚱뒤뚱')

    def quack(self):
        print('Quack!')

class Mallard:  # 청둥오리
    def walk(self):
        print('뒤뚱뒤뒤뚱뒤뚱')

    def quack(self):
        print('Quaaack!')

class Dog:
    def run(self):
        print('타다다다')

    def bark(self):
        print('왈왈')


def walk_and_quack(animal):
    animal.walk()
    animal.quack()


walk_and_quack(Duck())  # prints '뒤뚱뒤뚱', prints 'Quack!'
walk_and_quack(Mallard())  # prints '뒤뚱뒤뒤뚱뒤뚱', prints 'Quaaack!'
walk_and_quack(Dog())  # AttributeError : 'Dog' object has no attribute 'walk'
```

위 예시에서 `Duck` 과 `Mallard` 는 둘 다 `walk()` 와 `quack()` 을 구현하고 있기 때문에 `walk_and_quack()` 이라는 함수의 인자로서 **적합하다**.
그러나 `Dog` 는 두 메소드 모두 구현되어 있지 않으므로 해당 함수의 인자로서 부적합하다. 즉, `Dog` 는 적절한 duck typing에 실패한 것이다.

Python에서는 다양한 곳에서 duck typing을 활용한다. `__len__()`을 구현하여 _길이가 있는 무언가_ 를 표현한다던지 (흔히 [listy](https://cs.gmu.edu/~kauffman/cs310/w04-2.pdf)하다고 표현한다), 또는 `__iter__()` 와 `__getitem__()` 을 구현하여 [iterable](https://docs.python.org/3/glossary.html#term-iterable)을 duck-typing한다.
굳이 `Iterable` (가명) 이라는 interface를 상속받지 않고 `__iter__()`와 `__getitem__()`을 구현하기만 하면 `for ... in` 에서 바로 사용할 수 있다.

이와 같은 방식은 일반적으로 `interface`를 구현하거나 클래스를 상속하는 방식으로 
인자나 변수의 적합성을 runtime 이전에 판단하는 정적 타입 언어들과 비교된다.
자바나 스칼라에서는 `interface`, c++는 `template` 을 활용하여 타입의 적합성을 보장한다. 
(c++의 경우 `template`으로 duck typing과 같은 효과를 낼 수 있다 [참고](http://www.drdobbs.com/templates-and-duck-typing/184401971))


#### Reference

* [Templates and Duck Typing](http://www.drdobbs.com/templates-and-duck-typing/184401971)
* [Strong and Weak Typing](https://en.wikipedia.org/wiki/Strong_and_weak_typing)
* [Python Duck Typing - or, what is an interface?](https://infohost.nmt.edu/tcc/help/pubs/python/web/interface.html)
* [Quora : What is duck typing in python?](https://www.quora.com/What-is-Duck-typing-in-Python)
* [Duck Test](https://en.wikipedia.org/wiki/Duck_test)


[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

</br>

## Timsort : Python의 내부 sort

python의 내부 sort는 timsort 알고리즘으로 구현되어있다.
2.3 버전부터 적용되었으며, merge sort와 insert sort가 병합된 형태의 안정정렬이다. 

timsort는 merge sort의 최악 시간 복잡도와 insert sort의 최고 시간 복잡도를 보장한다. 따라서 O(n) ~ O(n log n)의 시간복잡도를 보장받을 수 있고, 공간복잡도의 경우에도 최악의 경우 O(n)의 공간복잡도를 가진다. 또한 안정정렬으로 동일한 키를 가진 요소들의 순서가 섞이지 않고 보장된다.

timsort를 좀 더 자세하게 이해하고 싶다면 [python listsort](https://github.com/python/cpython/blob/24e5ad4689de9adc8e4a7d8c08fe400dcea668e6/Objects/listsort.txt) 참고.

#### Reference

* [python listsort](https://github.com/python/cpython/blob/24e5ad4689de9adc8e4a7d8c08fe400dcea668e6/Objects/listsort.txt)
* [Timsort wikipedia](https://en.wikipedia.org/wiki/Timsort)

[뒤로](https://github.com/JaeYeopHan/for_beginner)/[위로](#part-2-3-python)

_Python.end_

6. 버그를 찾거나 정적 분석을 할수 있는 어플리케이션이 있나요?

:pychecker, 정적 분석에 사용. 

pylint, 파이썬 모듈들이 표준 코딩을 만족하는지 체크.

 

7. decorator는 언제 사용되나요?

: 함수를 빠르게 변경할 때 사용 가능합니다.

 

8.리스트와 튜플의 주된 차이점은 무엇인가요?

: 리스트는 mutable하고 튜플은 immutable 합니다.

 

9. 파이썬에서 메모리는 어떻게 관리되나요?

: 파이썬에서는 개별적인 힙을 사용해서 메모리를 유지합니다. 따라서 힙은 모든 파이썬 객체와 자료구조를 가지고 있습니다.

이 영역은 파이썬 인터프리터만이 접근 가능하며 프로그래머는 사용할 수 없습니다.

 

또한 파이썬은 빌트인된 가비지 컬렉터를 통해서 비사용되는 메모리에 대해서 힙공간을 관리합니다.

 

10. Lambda와 Def의 주된 차이점은 무엇인가요?

: Def는 다중 표현을 갖습니다. 반면에 lambda는 단일 함수입니다.

Def는 함수를 생성하고 이름을 지정하여 나중에 다시 호출합니다. Lambda는 함수 객체를 구성하고 반환합니다.

Def는 선언을 반환할수 있지만, Lambda는 할수 없습니다.

 

21. Docstring은 무엇인가요?

: Docstring은 파이썬의 모듈, 함수, 클래스, 매소드의 정의에 처음 부부에 선언되는 유니크한 텍스트입니다. 

 

25. Function call 혹은 A callable Object는 무엇인가요?

: 파이썬에서 함수는 호출가능한 객체로 취급됩니다. 

 

27. Call by value는 무엇인가요?

: 표현식 또는 값이 함수의 각 변수에 바인딩되는지 여부에 대한 인수입니다.

파이썬은 그 변수를 함수 수준 범위에서 로컬로 취급합니다. 해당 변수에 대한 모든 변경사항은 로컬로 유지되며 함수외부에 반영되지 않습니다.

 

28. 파이썬에서 call by reference는 무엇인가요?(??)

: call by reference 와 pass by reference는 서로 바꿔 사용할수 있습니다.  참조로 인수를 전달하면 간단한 복사가 아닌 함수에 대한 암시적 참조로 사용할 수 있습니다. 이 경우 인수에 대한 모든 수정 사항도 호출자에게 표시됩니다.

 

 

33. *Args는 무엇을 하는 기능인가요?

: 이것은 N개의 매개변수를 넘기겠다는 표시입니다, 

 

# Python code to demonstrate 
# *args for dynamic arguments 
def fn(*argList):  
    for argx in argList:  
        print (argx) 
    
fn('I', 'am', 'Learning', 'Python')
34. *Kwargs는 무엇을 하나요?

: N개의 변수의 파라미터를 넘기겠다는 것인데 이때 이름 혹은 키워드를 가지고 있습니다.

# Python code to demonstrate 
# **kwargs for dynamic + named arguments 
def fn(**kwargs):  
    for emp, age in kwargs.items(): 
        print ("%s's age is %s." %(emp, age)) 
    
fn(John=25, Kalley=22, Tom=32)
35. 파이썬에서 Main() 메소드가 있나요?

: 파이썬은 인터프리터 언어이기 때문에 일반적으로는 code by code로 실행됩니다. 

현재 모듈 이름을 확인하는 방식으로 main함수를 사용할수 있습니다.

print("Welcome")
print("__name__ contains: ", __name__)
def main():
    print("Testing the main function")
if __name__ == '__main__':
    main()
51. GIL이란 무엇인가요?

: 글로벌 인터프리터 락으로 파이썬 객체가 다중 스레드가 동시에 실행되지 않도록 하는 것입니다.

 

52. 파이썬에서 쓰레드의 안정성은?

: 파이썬에서는 쓰레드에 대해 안정성있는 접근을 보장합니다. 이를 위해서 GIL(global interpreter lock)을 사용합니다.

만약 쓰레드가 GIL lock을 잃었을 경우에 쓰레드로부터 코드를 안정성있게 만들어야 합니다.

 

53. 파이썬에서는 어떻게 메모리를 관리하나요?

: 파이썬에서는 내부적으로 힙 매니저가 구현되어 있습니다. 힙 매니저는 모든 오브젝트와 자료구조를 가지고 있습니다.

또한, 힙매니저는 오브젝트에 대한 힙 스페이스의 할당과 할당 해제를 합니다.

 

54. 파이썬에서 튜플은 무엇인가요?

: 튜플은 collection데이터 타입의 하나로 immutable한 자료형입니다. 리스트와 비슷한 구조를 갖지만 수정이 가능하냐 안하냐는 차이가 있습니다.

 

55. 파이썬에서 딕셔너리는 무엇인가요?

: 딕셔너리는 collection데이터 타입의 하나로서 key와 value의 구조로 이뤄진 데이터 타입입니다. 해쉬, 맵 혹은 해쉬맵이라고도 불립니다.

 

56. 파이썬에서 Set은 무엇인가요?

: Set은 순서가 없는 (unordered)한 collection 데이터 객체의 하나로 유니크한 원소들만들 갖습니다. 

 

57. 파이썬의 딕셔너리는 어떻게 사용되나요?

: 딕셔너리 타입은 하나의 그룹(key)과 다른 그룹(value)을 매핑하기 위해서 사용될수 있습니다.

 

58. 파이썬의 리스트는 연결리스트(linked list)인가요?

: 파이썬의 리스트는 가변길이 배열로 C스타일의 연결리스트와는 다릅니다.

내부적으로 다른 객체를 참조하기 위한 연속적인 배열을 가지며, 배열 변수에 대한 포인터와 그 길이를 목록 헤드 구조에 저장합니다.

 

59. 파이썬에서 클래스는 무엇인가요?

: 파이썬은 객체지향 프로그래밍을 지원하며 거의 모든 OOP특징을 사용할수 있도록 제공합니다.

파이썬의 클래스는 객체를 만들기 위한 청사진입니다. 이것은 멤버 변수를 정의하고 그 변수들 사이의 행동을 가집니다.

>>>class Human:  # Create the class
...     pass
>>>man = Human()  # Create the instance
>>>print(man)
<__main__.Human object at 0x0000000003559E10>
60. 파이썬의 클래스에서 Attributes와 Methods는 무엇인가요?

: 기능을 정의하지 않은 클래스는 쓸모가 없습니다. 속성을 추가하므로 이 문제를 해결할 수 있는데, 속성은 데이터와 기능을 위한 컨테이너 역할을 합니다. 또한, Attribute를 직접 class 내부에 추가할수도 있습니다.

>>> class Human:
...     profession = "programmer" # specify the attribute 'profession' of the class
>>> man = Human()
>>> print(man.profession)
programmer
Attributes를 추가한 후에 기능을 정의 합니다. 일반적으로 이 기능을 Methods라고 부릅니다. 

>>> class Human:
    profession = "programmer"
    def set_profession(self, new_profession):
        self.profession = new_profession      
>>> man = Human()
>>> man.set_profession("Manager")
>>> print(man.profession)
Manager
 

61. 런타임에 클래스 속성에 값을 할당하는 방법은 무엇인가요?

: 클래스에 init 메소드를 추가하고 최초에 변수를 입력해줍니다.

>>> class Human:
    def __init__(self, profession):
        self.profession = profession
    def set_profession(self, new_profession):
        self.profession = new_profession

>>> man = Human("Manager")
>>> print(man.profession)
Manager
62. 파이썬에서 상속은 무엇인가요?

: 상속이란 OOP에서 객체가 부모 클래스의 특징에 접근할 수 있는 것을 말합니다.

class PC: # Base class
    processor = "Xeon" # Common attribute
    def set_processor(self, new_processor):
        processor = new_processor

class Desktop(PC): # Derived class
    os = "Mac OS High Sierra" # Personalized attribute
    ram = "32 GB"

class Laptop(PC): # Derived class
    os = "Windows 10 Pro 64" # Personalized attribute
    ram = "16 GB"

desk = Desktop()
print(desk.processor, desk.os, desk.ram)

lap = Laptop()
print(lap.processor, lap.os, lap.ram)
 

63. 파이썬에서 Composition은 무엇인가요?

: composition은 파이썬에서 상속의 한 종류입니다.

기본 클래스에서 상속을 하지만 파생 클래스의 멤버 역할을 하는 기본 클래스의 인스턴스 변수를 사용합니다.

class PC: # Base class
    processor = "Xeon" # Common attribute
    def __init__(self, processor, ram):
        self.processor = processor
        self.ram = ram

    def set_processor(self, new_processor):
        processor = new_processor

    def get_PC(self):
        return "%s cpu & %s ram" % (self.processor, self.ram)

class Tablet():
    make = "Intel"
    def __init__(self, processor, ram, make):
        self.PC = PC(processor, ram) # Composition
        self.make = make

    def get_Tablet(self):
        return "Tablet with %s CPU & %s ram by %s" % (self.PC.processor, self.PC.ram, self.make)

if __name__ == "__main__":
    tab = Tablet("i7", "16 GB", "Intel")
    print(tab.get_Tablet())
 

64. 파이썬에서 Erros와 Exceptions는 무엇인가요?

: Erros는 코딩 이슈로서 프로그램이 비정상적으로 종료되게 됩니다.

Exceptions는 외부적인 이벤트로 인해 발생하는 것으로 인터럽트 같은 경우가 있습니다.

 

65. Try / Exception / Finally는 어떻게 사용하나요?

try:
    print("Executing code in the try block")
    print(exception)
except:
    print("Entering in the except block")
finally:
    print("Reached to the final block")
66. 파이썬에서 미리 정의된 조건에 대한 Exceptions를 어떻게 발생 시키나요?

# Example - Raise an exception
while True:
    try:
        value = int(input("Enter an odd number- "))
        if value%2 == 0:
            raise ValueError("Exited due to invalid input!!!")
        else:
            print("Value entered is : %s" % value)
    except ValueError as ex:
        print(ex)
        break
67. 파이썬의 Iterators는 무엇인가요?

: Iterators는 배열과 같은 객체로서 다음 구성 성분으로 이동하는 것이 가능합니다. 

next() 메소드로 데이터를 순차적으로 호출 가능합니다.

 

68. iterators와 itrable의 차이는 무엇인가요?

: 리스트, 튜플, 딕셔너리 및 세트와 같은 컬렉션 유형은 모두 반복 가능한 객체 인 반면 순회하는 동안 반복자를 반환하는 반복 가능한 컨테이너이기도합니다.

 

iterable은 하나씩 차례로 반환 가능한 객체입니다. __iter__, __getiterm__메소드로 정의된 class들이 iterable하다고 할수 있습니다.

iterable을 iterator로 변환하고 싶다면, iter()라는 빌트인 함수를 사용하면 변환 가능 합니다.

 

 

69. 파이썬의 generator는 무엇인가요?

: generators는 iterator를 생성하는 함수입니다. yield 키워드를 사용하여 반환합니다.

yeild는 return과 달리 반환 후에 종료되지 않고 그 상태를 유지합니다. 

generator를 사용할 경우의 이점으로는 memory를 효율적으로 사용할 수 있다는 것입니다.

# Simple Python function
def fn():
    return "Simple Python function."

# Python Generator function
def generate():
    yield "Python Generator function."

print(next(generate()))
list compression을 통한 방법과 generator의 방법을 비교해보면 LC는 리스트를 모두 메모리에 올리기 때문에 그 크기만큼 메모리를 차지하는 사이즈가 커집니다. 하지만 generator는 next()메소드로 차례로 값에 접근하여 메모리에 올리게 됩니다.

 

70. 파이썬에서 Closures는 무엇인가요?

: Closures는 함수 객체로서 다른 함수를 반환합니다. 더 구체적으로는 파이썬의 내부함수의 예시가 있습니다.

Clossure는 일반 함수와 다르게 자신의 영역밖에서 호출된 함수의 변수값과 레퍼런스를 복사, 저장, 접근을 가능하게 합니다.

def multiply_number(num):
    def product(number):
        'product() here is a closure'
        return num * number
    return product

num_2 = multiply_number(2)
print(num_2(11))
print(num_2(24))

num_6 = multiply_number(6)
print(num_6(1))
 

71. 파이썬에서 Decorators는 무엇인가요?

: 함수 객체에 새로운 기능을 추가하는 것을 쉽게 할수 있는 방법입니다.

def decorator_sample(func):
    def decorator_hook(*args, **kwargs):
        print("Before the function call")
        result = func(*args, **kwargs)
        print("After the function call")
        return result
    return decorator_hook

@decorator_sample
def product(x, y):
    "Function to multiply two numbers."
    return x * y

print(product(3, 3))
 

82. 파이썬의 Enumerate는 무엇인가요?

: iterators와 함께 사용 가능한 것으로 iterations의 횟수를  셀수 있습니다. 

 

83 파이썬의 Globals() 함수는 무엇인가요?

: global로 정의된 변수들을 딕셔너리 테이블처럼 반환할수 있습니다.

# Example: globals() function 
x = 9
def fn(): 
    y = 3
    z = y + x
    # Calling the globals() method
    z = globals()['x'] = z
    return z
       
# Test Code     
ret = fn() 
print(ret)
87. "Self"는 어떤 키워드 인가요?

: self는 객체 인스턴스가 가지고 있는 변수들을 나타냅니다.

 

88. 파이썬 프로그램에서 어떻게 코드를 디버깅 하나요?

: python debugger(pdb)를 사용하면 됩니다. 