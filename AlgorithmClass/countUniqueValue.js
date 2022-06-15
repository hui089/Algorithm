//Multiple pointers - count unique value 고유값 찾기

/*1112334456
  입력값은 정렬되어있어야 함
  ij
  1)같으면 j++
  2)비교 후 다르면
    1.i++ 
    2.i의 자리값에 j값으로 복사
    3.j++

*/

/*
countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([])//0
countUniqueValues([-2,-1,-1,0,1]) //4

*/

//time conplexity: O(n)
function countUniqueValues(arr){
    var i=0;
    if(arr[0] == null) {console.log(-1);return -1;}
    for(var j=1;j<arr.length;j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i]=arr[j];
            //j값 증가는 for문에서 처리
        }

  console.log(i); //i의 위치 print
    } 
}

countUniqueValues([1,3,4,4,4,4,5]);
