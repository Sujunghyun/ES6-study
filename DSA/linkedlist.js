/*=======================================================
원소 추가/삭제 시 다른 원소들을 이동하지 않아도 되는 자료구조. 
배열은 특정 원소에 인덱스로 바로 접근할 수 있지만, 
연결 리스트에서는 원소를 찾을 때까지 처음부터 루프를 반복해야 한다. 
연결 리스트의 각 원소는 원소 자신과 다음 원소를 가리키는 
참조 정보(포인터)가 포함된 노드로 구성된다.
ex) 기차. 객차/화차가 모두 서로 연결되어 있고 어떤 객차의 
    위치를 바꾸거나 추가, 삭제하려먼 연결을 잠시 끊어야한다.
=========================================================*/

function LinkedList() {

    let Node = function(element) {      // 헬퍼 클래스. 연결 리스트에 추가되는 원소.
        this.element = element; // 원소 자신.
        this.next = null;       // 다음 노드를 가리키는 포인터. 연결 리스트에서 마지막 노드의 next는 항상 null이다.
    };

    let length = 0;     // 내부 프라이빗 프로퍼티. 원소의 개수.
    let head = null;    // 연결이 시작되는 지점을 참조.

    // 01. 리스트의 맨 끝에 원소를 추가한다.
    this.append = function(element) {   
        let node = new Node(element),   // 01-1. 인자 element로 Node를 생성한다.
            current;
        if (head === null) {    // 01-2. 리스트가 비어 있다면
            head = node;    // 01-3. 리스트에 첫 원소를 추가한다. 이 때 head가 node를 가리키게 된다. 그럼 node.next는 자동으로 null이 될 것이다.(line 15참고) 
        } else {            // 01-4. 리스트가 비어 있지 않다면, 새 원소를 추가하기 위해 우선 리스트의 마지막 원소를 찾아야 한다.
            current = head;     // 01-5. 첫 번째 원소를 current에 할당.
            while (current.next) {  // 01-6. 마지막 원소를 찾을 때까지(current.next가 null이 되는 지점까지) 루프로 순회한다. 즉, 리스트를 처음부터 끝까지 순환한다.
                current = current.next; // 01-7. 이때 current.next를 current에 설정한다.  ex) (7,null), 13추가 => (7,13), (13,null), 9추가 => (7,13), (13,9), (9, null) => ...
            }
            current.next = node;    // 01-8. 노드의 마지막(null에) node를 할당한다.
        }
        length++;   // 01-9. 리스트의 크기를 업데이트한다.(나중에 리스트 크기를 참조할 수 있기 때문)
    };
    // 02. 임의의 위치에 원소 삽입하기
    this.insert = function(position, element) {    // 02-1. 원소를 삽입할 위치(position)와 삽입할 원소(element)를 인자로 받는다.
        // 02-2. 유효한 값인지(0부터 리스트 크기 까지의 숫자인지) 체크 
        if (position >= 0 && position <= length) {  
            let node = new Node(element),
                current = head,
                previous, index = 0;
            
            if (position === 0) {       // 02-4. 리스트의 맨 앞에 원소를 추가하는 경우
                node.next = current;    // 02-5. 현재 current는 head이므로, node.next에 current를 할당. 즉, 추가할 값의 다음 값으로 head 값을 할당하고,
                head = node;            // 02-6. 추가할 node값을 head값으로 즉, 추가할 값을 리스트의 첫 번째 값으로 설정한다.
            } else {    // 첫 번째 외의 원소 삽입
                while (index++ < position) {    // 02-6. index가 삽입할 원소의 위치 position에 도착할 때 까지,
                    previous = current;         // 02-7. 현재 값을 이전 값을 가리키게 하고, 
                    current = current.next;     // 02-8. 현재의 다음 값이 현재 값을 가리키게 한다. (다음 node로 넘어간다.)
                }   // 02-9. position에 위치한 값이 current가 되면,
                node.next = current;    // 02-10. 삽입할 원소(node)와 current 원소를 연결하고, (node의 next가 가리키는 값이 현재 값이 되게하고)
                previous.next = node;   // 02-11. 이전 값의 next가 가리키는 값에 삽입할 원소(node)를 할당한다.
            }
            length++    // 02-12. 리스트 크기 업데이트
            return true;    // 02-13. true를 반환해 값이 정상적으로 삽입되었음을 알린다.
        } else {
            return false;   // 02-3. 유효한 값이 아니면 false를 반환한다. (아무것도 삽입되지 않음)
        }
    };
    // 03. 원소의 위치를 기준으로 원소를 삭제한다.
    this.removeAt = function(position) {    // 03-1. 삭제할 원소의 위치(position)를 인자로 받는다.
        // 03-2. 유효한 값인지(0부터 리스트 크기 사이의 숫자인지) 체크 
        if (position > -1 && position < length) {
            let current = head,     // 03-4. current를 현재 head로 설정.
                previous, index = 0;
            
            // 첫 번째 원소 삭제
            if (position === 0) {   
                head = current.next;    // 03-5. current.next는 head.next를 의미한다. 즉, head = head.next로 현재 head값을 head.next값으로 덮어써서 삭제해버린다.
            } else {    // 첫 번째 외의 원소 삭제
                while (index++ < position) {    // 03-6. 내부 제어 및 증가용 변수 index가 삭제할 원소의 위치 position보다 작을 동안
                    previous = current;     // 03-7. 현재 값을 이전 값을 가리키게 하고, 
                    current = current.next; // 03-8. 현재의 다음 값이 현재 값을 가리키게 한다. (다음 node로 넘어간다.)
                };  // 03-9. position에 위치한 값이 current가 되면,                
                previous.next = current.next; // 03-10. 현재의 다음과 이전 것의 다음을 연결한다. (현재 값을 삭제한다. / 삭제하기 위해 그냥 건너뛴다.)
            }
            length--;   // 03-11. 리스트 크기 업데이트
            return current.element;     // 03-12. 삭제한 원소. current 값을 반환한다.
        } else {
            return null;    // 03-3. 유효한 값이 아니라면 null을 반환한다.(원소를 삭제하지 않는다.)
        }
    };
    this.remove = function(element) {};
    this.indexOf = function(element) {};
    this.isEmpty = function() {};
    this.size = function() {};
    this.toString = function() {
        let current = head,
            string = '';
        while (current) {
            string += current.element;
            current = current.next;
        }
        return string;
    };
    this.print= function() {};
}


/* 예제 01 */
let list = new LinkedList();
list.append(7);
list.append(13);
list.append(9);
console.log(list.toString());


