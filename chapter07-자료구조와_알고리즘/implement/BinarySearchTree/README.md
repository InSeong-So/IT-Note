## BinarySearchTree
### 주요 클래스
- Node : 트리의 각 노드(Node, Vertex)를 저장하기 위한 클래스
- BinarySearchTree : BinarySearchTree를 구현하는 클래스

<br>

### 주요 메서드
- insert(data)
- insertNode(node, newNode)
- remove(data)
- removeNode(node, key)
- findMinNode(node)
- getRootNode()
- inorder(node)
- preorder(node)
- postorder(node)
- search(node, data)

<br>

### 구현부 보기
[Javascript로 구현하기](https://github.com/InSeong-So/IT-Note/blob/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/implement/BinarySearchTree/BinarySearchTree.js)

<br>

### 결과
```js
const BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

let root = BST.getRootNode();

// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with no children
BST.remove(5);

//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//       \    /
//        9  17

root = BST.getRootNode();

// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with one child
BST.remove(7);

//          15
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27
//            /
//           17

root = BST.getRootNode();

// prints 9 10 13 15 17 22 25 27
BST.inorder(root);

// Removing node with two children
BST.remove(15);

//          17
//         /  \
//        10   25
//       / \   / \
//      9  13 22  27

root = BST.getRootNode();
console.log('inorder traversal');

// prints 9 10 13 17 22 25 27
BST.inorder(root);

console.log('postorder traversal');
BST.postorder(root);
console.log('preorder traversal');
BST.preorder(root);
```

<br>

<sup>[(상위 문서로)](https://github.com/InSeong-So/IT-Note/tree/master/chapter07-%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98#%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0%EC%99%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98)</sup>
<br>
<sup>[(최상위 문서로)](https://github.com/InSeong-So/IT-Note)</sup>

<hr>
<br>