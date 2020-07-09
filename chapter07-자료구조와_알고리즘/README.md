# 자료구조와 알고리즘

# 자료구조
## :book:Big-O 표기법
- 알고리즘(Algorithm)의 효율성을 나타내는 지표
- 시간 복잡도(Time Complexity)
  - Big-O 의 시간 개념으로 알고리즘의 수행시간이 얼마인지를 나타냄
- 공간 복잡도(Space Complexity)
  - Big-O 의 메모리 사용 개념으로 알고리즘의 메모리 효율을 나타냄

<hr>
<br>

## :book:ArrayList와 LinkedList의 차이점
- ArrayList

    |장점|단점|
    |----|----|
    |데이터 참조가 쉬움|배열의 길이가 초기에 결정되면 변경이 불가능|
    |무작위 접근(Random Access) 가능|데이터 삭제 시 데이터의 이동(복사)이 많음|

- LinkedList

    |장점|단점|
    |----|----|
    |자료의 삽입 및 삭제 용이|포인터(Pointer)로 인해 저장 공간을 낭비|
    |리스트 내에서 자료의 이동이 없음|복잡한 알고리즘|
    |사용 후 기억 장소의 재사용 가능|특정 자료의 탐색 시간이 많이 소요|
    |연속적인 기억 장소의 할당 불필요|-|

- 비교 성능

    |항목|ArrayList|LinkedList|
    |----|---------|----------|
    |Indexing|Θ(1)|Θ(n)|
    |Insert/delete at beginning|Θ(n)|Θ(1)|
    |Insert/delete at end|Θ(1)|Θ(n)-last element is unknown / Θ(1)-last element is known|
    |Insert/delete in middle|Θ(n)|search time + Θ(1)|
    |Wasted space (average)|Θ(n)|Θ(n)|

<hr>
<br>

## :book:Stack과 Queue의 차이점
- 스택(Stack)은 LIFO(Last-In, First-Out)으로 후입선출 구조라고 한다.
  - 가장 마지막에 들어온 데이터가 가장 먼저 나간다.
  - 재귀 알고리즘, 실행 취소, 후위 표기법 계산 등에 쓰인다.

- 큐(Queue)는 FIFO(First-In, First-Out)으로 선입선출 구조라고 한다.
  - 가장 먼저 들어온 데이터가 가장 먼저 나간다.
  - 프로세스 처리, CPU관리에서 많이 사용된다.

<hr>
<br>

## :book:Hash에 대해 설명하시오.
- 임의의 크기를 가진 데이터를 고정된 데이터의 크기로 변환시키는 것
  - Hash 를 사용하면 즉시 저장하거나 찾고자 하는 위치를 참조하므로 향상된 속도로 처리가 가능

<hr>
<br>

## :book:HashTable의 이중 해쉬에 대해 설명하시오.

<hr>
<br>

## :book:Tree 구조에 대해 설명하시오.
- 노드(Node)로 이루어진 자료구조
  - 트리는 하나의 루트 노드를 보유
  - 루트 노드는 0개 이상의 자식 노드를 보유
  - 그 자식 노드 또한 0개 이상의 자식 노드를 보유하며 이는 반복적으로 정의됨

- 그래프의 한 종류로서 계층형 모델이자 '최소 연결 트리' 라고 부름

- 계층적인 데이터 형태들은 트리에 저장하면 자연스럽게 표현되며 더욱 효율적임

<hr>
<br>

## :book:Binary Tree에서 각 트리 순회법 전위, 중위, 후위 순회에 대해 설명하시오.
- 이진 트리(Binary Tree)
  - 각 노드가 최대 두 개의 자식을 갖는 트리
  - 모든 트리가 이진 트리는 아님

- 이진 트리 순회 방식
  - 전위 순회(pre-order traversal): 현재 노드 -> 왼쪽 가지 -> 오른쪽 가지
  - 중위 순회(in-order traversal): 왼쪽 가지 -> 현재 노드 -> 오른쪽 가지
  - 후위 순회(post-order traversal): 왼쪽 가지 -> 오른쪽 가지 -> 현재 노드

<hr>
<br>

## :book:Red-Black-Tree 구조에 대해 설명하시오.
> 레드-블랙 트리(Red-Black Tree, RB Tree) : 자가 균형 이진 탐색 나무로써 연관 배열 등을 구현하는 데 쓰이는 대표적인 자료구조

- 특징
  - 복잡한 자료구조이나 실 사용에서 효율적
  - 자료의 삽입과 삭제, 검색에서 최악의 경우에도 일정한 실행 시간을 보장(worst-case guarantees)
  - 트리에 n개의 원소가 있을 때 O(log n)의 시간복잡도로 삽입, 삭제, 검색이 가능

- 동작
  - 레드-블랙 트리의 읽기 전용(read-only) 동작(탐색 등)은 이진 탐색 트리의 읽기 전용 동작의 구현을 변경하지 않아도 된다.
    - 레드-블랙 트리가 이진 탐색 트리의 특수한 한 형태이기 때문
  - 삽입(insertion)과 삭제(removal)의 경우 이진 탐색 트리의 구현에 따른 동작만으로는 레드-블랙 트리의 특성을 만족하지 못한다.
    - 레드-블랙 트리의 특성을 만족하게 만들기 위해서는 O(log n) 또는 amortized O(1)번의 색 변환과(실제로는 매우 빨리 이루어진다) 최대 3회의 트리 회전(tree rotation)이 필요하다(삽입의 경우 2회).
    - 삽입과 삭제는 복잡한 동작이지만, 그 복잡도는 여전히 O(log n)이다.

<hr>
<br>

## :book:B+ Tree 구조에 대해 설명하시오.
> B+ 트리(Quaternary Tree) : 키에 의해서 각각 식별되는 레코드의 효율적인 삽입, 검색과 삭제를 통해 정렬된 데이터를 표현하기 위한 트리 자료구조

- 특징
  - 동적이며, 각각의 인덱스 세그먼트(블록 또는 노드) 내에 최대와 최소범위 키의 개수를 가지는 다계층 인덱스(MultiLevel Index)로 구성
  - 모든 레코드들이 트리의 가장 하위 레벨에 정렬되어 있으며 오직 키만 내부 블록에 저장
  - 블록-지향적인 Storage Context(예: filesystem)에서 검색을 효율적으로 할 수 있음
  - 바이너리 서치 트리에 비해 B+ 트리 노드의 fanout(한 노드의 자식 노드의 수)이 훨씬 높아 검색에 필요한 I/O 동작 횟수 감소 가능

<hr>
<br>

## :book:Heap 구조에 대해 설명하시오.
> 힙(heap) : 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리(complete binary tree)를 기본으로 한 자료구조
> - A가 B의 부모노드(parent node)이면, A의 키(key)값과 B의 키값 사이에는 대소관계가 성립

- 특징
  - 부모 노드의 키값이 자식 노드의 키값보다 항상 큰 힙인 '최대 힙'과 부모 노드의 키값이 자식 노드의 키값보다 항상 작은 힙인 '최소 힙'이 존재
  - 키값의 대소관계는 오로지 부모 노드와 자식 노드 간에만 성립하며 형제 사이에는 대소관계가 정해지지 않음
  - 각 노드의 자식 노드의 최대 개수는 힙의 종류에 따라 다르나 대부분의 경우는 자식 노드의 개수가 최대 2개인 이진 힙(binary heap)을 사용
  - 힙에서는 가장 높은(혹은 가장 낮은) 우선순위를 가지는 노드가 항상 뿌리 노드에 오게 되는 특징이 있음
    - 이를 응용하여 우선순위 큐와 같은 추상적 자료형을 구현

<hr>
<br>

## :book:Graph 구조에 대해 설명하시오.
> 그래프(Graph) : vertex(정점)와 edge(정점과 정점을 연결하는 간선)로 구성된 한정된 자료구조

- 특징
  - 연결되어 있는 객체 간의 관계를 표현할 수 있는 자료구조
  - 그래프에는 방향성이 있을 수도 있고 없을 수도 있음
    - 방향성이 있는 간선은 일방통행, 방향성이 없는 간선은 양방통행 도로
  - 그래프는 여러 개의 고립된 부분 그래프(Isolated Subgraphs)로 구성 가능
    - 모든 정점 쌍(pair of vertices) 간에 경로가 존재하는 그래프는 연결 그래프라고 부름
  - 그래프에는 사이클이 존재할 수도, 존재하지 않을 수도 있으며 사이클이 없는 그래프는 비순환 그래프라고 부름

- 종류
  - 인접 리스트(Adjacency List)
    - 그래프를 표현할 때 사용되는 가장 일반적인 방법
    - 모든 정점(혹은 노드)를 인접 리스트에 저장
      - 무방향 그래프(Undirected Graph)에서 (a, b) 간선은 두 번 저장
      - 한 번은 a 정점에 인접한 간선을 저장하고 다른 한 번은 b에 인접한 간선을 저장


<hr>
<br>

## :book:Binary Search Tree에서 평균 검색시간 worst time, worst case에 대해 설명하시오.

<hr>
<br>

## :book:DFS와 BFS의 차이점
- DFS : 깊이 우선 탐색
  - a 노드를 방문한 위 a와 인접한 노드들을 차례로 순환
    - a와 이웃한 노드 b를 방문했다면 a와 인접한 또 다른 노드를 방문하기 전에 b의 이웃 노드들을 전부 방문
    - 즉 b의 분기를 완벽하게 탐색한 뒤에야 a의 다른 이웃 노드를 방문할 수 있다는 뜻
  - 전위 순회를 포함한 다른 형태의 트리 순회는 모두 DFS의 한 종류임
    - 그래프 탐색의 경우 어떤 노드를 방문했었는지 여부를 검사하지 않으면 무한 루프에 빠질 위험이 있음
  - DFS를 구현한 의사코드
    ```java
    void search(Node root){
      if (root == null) return;
      visit(root);
      root.visited = true;
      foreach (Node n in root.adjacent){
        if(n.visited == false){
          search(n);
        }
      }
    }
    ```

- BFS : 너비 우선 탐색
  - 재귀적으로 동작하지 않으며 큐(queue)를 사용
  - a 노드에서 시작한다면 a 노드의 이웃 노드를 모두 방문한 다음에 이웃의 이웃들을 방문
    - 즉 a에서 시작하여 거리에 따라 단계별로 탐색
  - 일반적으로 큐를 이용하여 반복적 형태로 구현하는 것이 가장 잘 작동
  - BFS를 구현한 의사코드
    ```java
    void search(Node root){
      Queue queue = new Queue();
      root.marked = true;
      queue.enqueue(root); // 큐의 끝에 추가

      while(!queue.isEmpty()){
        Node r = queue.dequeue(); // 큐의 앞에서 추출
        visit(r);
        foreach (Node n in r.adjacent){
          if(n.marked == false){
            n.marked = true;
            queue.enqueue(n);
          }
        }
      }
    }
    ```

<hr>
<br>

# 알고리즘
## :book:Bubble Sort에 대해 설명하시오.
> 서로 인접한 두 원소를 검사하여 정렬하는 알고리즘

- 특징
  - 인접한 2개의 레코드를 비교하여 크기가 순서대로 되어 있지 않으면 서로 교환

<hr>
<br>

## :book:Selection Sort에 대해 설명하시오.

<hr>
<br>

## :book:Insertion Sort에 대해 설명하시오.

<hr>
<br>

## :book:Quick Sort에 대해 설명하시오.

<hr>
<br>

## :book:Heap Sort에 대해 설명하시오.

<hr>
<br>

## :book:Merge Sort에 대해 설명하시오.

<hr>
<br>

## :book:Sorting Algorithm중 가장 빠른 방법은 무엇인가?

<hr>
<br>

## :book:평균적인 O(n log n)이지만 최악일때 w(n^2)인 정렬은 무엇인가?

<hr>
<br>

## :book:Hash 중 Hash 용량을 판단하는 기준인 Load Factor가 75% 이상일 때 reHash() 과정이 발생하는 것은 무엇인가?

<hr>
<br>

## :book:54321의 배열이 주어졌을 때 어떤 Sorting Algorithm을 사용할 것인가?

<hr>
<br>

## :book:랜덤으로 배열된 숫자들이 있을때 어떤 Sorting Algorithm을 사용할 것인가?

<hr>
<br>

## :book:Factorial Algorithm을 구현하는 여러 방식과 복잡도, 문제점에 대해 설명하시오.

<hr>
<br>

## :book:Fibonacci 방식의 Recursion, Dynamic Programming, 반복 세 가지 방식에 대한 차이

<hr>
<br>
