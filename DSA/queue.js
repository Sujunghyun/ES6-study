/*======================================================================
선입선출(FIFO))의 원리를 가지는 자료구조. 새 원소는 뒤로 들어가서 앞에서
빠져나가고, 마지막에 추가된 원소는 큐의 뒷부분에서 제일 오래 기다려야 한다.
ex) 줄서기
========================================================================*/

function Queue() {

    let items = [];

    // 큐에 원소를 추가하는 메소드. 큐의 뒤쪽으로만 추가할 수 있다.
    this.enqueue = (element) => {
        items.push(element);
    };
    // 큐에서 원소를 삭제하는 메소드. 가장 처음에 추가된 원소부터 없어진다. 
    this.dequeue = () => {
        return items.shift();
    };
    // 큐에서 가장 앞에 있는 원소를 확인할 때 사용하는 메소드. 필수 아님.
    this.front = () => {
        return items[0];
    }
    // 큐에 원소가 하나도 없으면 true, 스택의 크기가 0보다 크면 false를 반환한다.
    this.isEmpty = () => {
        return items.length == 0;
    };
    // 내부 배열의 length를 반환한다.
    this.size = () => {
        return items.length;
    };
    // 모든 원소를 삭제한다.
    this.clear = () => {
        items = [];
    };
    // 헬퍼 함수. 콘솔창에서 확인용. 없어도 됨.
    this.print = () => {
        console.log(items.toString());        
    };
}

/* 예제 01 */

// let queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue("John");
// queue.enqueue("Aron");
// queue.enqueue("SJH");
// queue.print();   // John,Aron,SJH
// console.log(queue.size());
// console.log(queue.isEmpty());
// queue.dequeue(); // 선입선출. 가장 먼저 추가된 John이 삭제된다.
// queue.print();   // Aron,SJH


/* 예제 02 */

/* 우선순위 큐. ex) 비행기 탑승(1등석 우선), 응급실(긴급 환자 우선)
   우선순위를 설정해 원소를 정확한 위치에 추가하는 것. 
   추가는 순서대로 하되 삭제만 우선순위에 따르는 것, 두 가지 방법으로 구현 가능*/ 

// function PriorityQueue() {

//     let items = [];

//     function QueueElement(element, priority) {     // 02-1. 기본 큐에 추가적으로 우선순위(priority)를 부가한다.
//         this.element = element;
//         this.priority = priority;
//     }

//     this.enqueue = (element, priority) => {
//         let queueElement = new QueueElement(element, priority);     // 02-2. new 생성자로 queueElement 생성

//         if (this.isEmpty()) {
//             items.push(queueElement);       // 02-3. 큐가 비어있다면, 그냥 원소를 넣는다.
//         } else {
//             let added = false;
//             for (let i=0; i<items.length; i++) {
//                 if (queueElement.priority < items[i].priority) {    // 02-4. 만약 새 원소보다 우선순위가 더 넣은 기존 원소가 있다면, 한 칸 앞에 새 원소를 추가한다.
//                     items.splice(i, 0, queueElement);               // 02-5. 더 높은 우선순위의 원소가 있다면 새 원소를 삽입하고, (i 번째에 queueElement를 삽입하는데, 삭제하는 원소는 0개)
//                     added = true;                                   
//                     break; // 02-6. 큐의 루프문 탈출!
//                 }
//             }
//             if (!added) { // 02-7. 만약 새 원소의 우선순위가 가장 낮다면 큐의 맨 뒤편에 추가한다.
//                 items.push(queueElement);
//             }
//         }
//     };
//     // 그 밖의 메소드는 기본 큐와 동일하게 구현한다.
//     this.dequeue = () => {
//         return items.shift();
//     };
//     this.front = () => {
//         return items[0];
//     }
//     this.isEmpty = () => {
//         return items.length == 0;
//     };
//     this.size = () => {
//         return items.length;
//     };
//     this.clear = () => {
//         items = [];
//     };
//     this.print = () => {    
//         console.log(JSON.stringify(items));  
//     };
// }

// let priorityQueue = new PriorityQueue();
// priorityQueue.enqueue("John",2);
// priorityQueue.enqueue("Camila",1);
// priorityQueue.enqueue("SJH",1);
// priorityQueue.print();


/* 예제 03 */
