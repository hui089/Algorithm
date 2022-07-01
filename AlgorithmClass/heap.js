//최대힙

class MaxBinaryHeap{
    constructor(){
        this.values = [41,39,33,18,27,12];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        var idx = this.values.length -1;
        var element = this.values[idx];
        while(true){
            var parentIdx = Math.floor((idx-1)/2);
            var parent = this.values[parentIdx];
            if(element > this.values[parentIdx]) break;
            //부모랑 자식 자리 바꾸기
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    
    extractMax(){
        var max = this.values[0];
        //루트와 바꾸기
        var end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();        
        return max;
    }
            
    sinkDown(){
        //[33,39,33,18,27,12];
        let idx = 0;
        const length  = this.values.length;
        const element = this.values[0];
        
        
        while(true){
            let leftChildIdx = (idx*2)+1;
            let rightChildIdx = (idx*2)+2;
            let leftChild, rightChild;
            let swap = null;//바꿔야 할 index 가리킴
            
            if(this.values[leftChildIdx]>element){
                swap = leftChildIdx; //
            }
            
            if( (swap === null) &&                             (this.values[rightChildIdx]>element)
              ){
                swap = rightChildIdx;    
            }
            
            //바꾸기
            if(swap === null ) break; //루트가 가장 큰 값일 때 탈출
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
        }

}

let heap = new MaxBinaryHeap();
console.log(heap);
heap.extractMax();
console.log(heap);
heap.extractMax();
console.log(heap);
