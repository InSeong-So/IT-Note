class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // 2진트리의 루트
    this.root = null;
  }

  // 새로운 노드를 생성하는 메서드
  // 삽입하고 insertNode를 호출한다.
  insert(data) {
    // 입력 받은 데이터로 새로운 노드 생성
    let newNode = new Node(data);

    // 루트가 비었다면 삽입한 데이터 노드를 루트로 지정한다.
    if (this.root === null) this.root = newNode;
    // 옳은 위치를 찾기 위해 트리를 순회하고 데이터 노드를 삽입한다.
    else this.insertNode(this.root, newNode);
  }

  // 데이터 노드를 트리에 삽입하는 메서드
  // 입력받은 데이터 노드의 위치를 트리를 탐색한 뒤 삽입한다.
  insertNode(node, newNode) {
    // 만약 입력받은 데이터가 현재 트리 노드의 데이터보다 작다면
    // 데이터 노드는 트리 노드의 왼쪽으로 이동해야 한다.
    if (newNode.data < node.data) {
      // 왼쪽 트리 노드가 비었다면 데이터 노드를 삽입한다.
      if (node.left === null) node.left = newNode;
      // 왼쪽 트리 노드가 비어있지 않다면 빈 노드를 찾을 때까지 재귀적으로 호출한다.
      else this.insertNode(node.left, newNode);
    }

    // 만약 입력받은 데이터가 현재 트리 노드의 데이터보다 크다면
    // 데이터 노드는 트리 노드의 오른쪽으로 이동해야 한다.
    else {
      // 오른쪽쪽 트리 노드가 비었다면 데이터 노드를 삽입한다.
      if (node.right === null) node.right = newNode;
      // 오른쪽 트리 노드가 비어있지 않다면 빈 노드를 찾을 때까지 재귀적으로 호출한다.
      else this.insertNode(node.right, newNode);
    }
  }

  // 입력받은 데이터 노드를 삭제한다.
  remove(data) {
    // 루트를 재설정하고 트리를 변경한다.
    this.root = this.removeNode(this.root, data);
  }

  // 데이터 노드를 트리에서 삭제하는 메서드
  // 트리를 재귀적으로 탐색하여 데이터를 찾고 삭제한다.
  removeNode(node, key) {
    // 만약 루트가 비어 있다면 트리도 비어있는 것이므로 null을 반환한다.
    if (node === null) return null;
    // 데이터 노드가 트리 노드보다 작다면 왼쪽으로 트리를 순회한다.
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key);
      return node;
    }

    // 데이터 노드가 트리 노드보다 크다면 오른쪽으로 트리를 순회한다.
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key);
      return node;
    }

    // 데이터 노드와 트리 노드가 같다면 왼쪽과 오른쪽을 비교한다.
    else {
      // 자식 노드가 존재하지 않다면 삭제한다.
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      // 자식 노드를 하나 삭제한다.
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 오른쪽 하위 트리의 하위 최소 노드가
      // 두 개인 노드를 삭제하는 경우 보조 노드에 저장한다.
      let aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }

  // 지정된 데이터 노드에서 시작하는 최소 트리 노드를 찾습니다.
  findMinNode(node) {
    // 트리 노드의 왼쪽이 null이면 최소 트리 노드이므로 반환합니다.
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  // 트리의 루트 노드를 반환합니다.
  getRootNode() {
    return this.root;
  }

  // 트리를 중위순회합니다.
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }

  // 트리를 전위순회합니다.
  preorder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // 트리를 후위순회합니다.
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.data);
    }
  }

  // 입력 받은 데이터로 트리 노드를 찾습니다.
  search(node, data) {
    // 트리 노드가 비어있다면 null을 반환합니다.
    if (node === null) return null;
    // 데이터가 트리 노드보다 작은 경우 왼쪽으로 재귀 탐색합니다.
    else if (data < node.data) return this.search(node.left, data);
    // 데이터가 트리 노드보다 큰 경우 오른쪽으로 재귀 탐색합니다.
    else if (data > node.data) return this.search(node.right, data);
    // 데이터가 트리 노드와 동일한 경우 해당 노드를 반환합니다.
    else return node;
  }
}

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
