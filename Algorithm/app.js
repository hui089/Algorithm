
function same(arr1,arr2){ //arr1,arr2 배열선언 필요없이 배열이라고 생각하고 푼다 in js
            //aab  baa
    //예외처리
    if(arr1.length != arr2.length)
        return false;
    
    let frequencyCounter1={};
    
    for(let i=0; i<arr1.length;i++){
        //frequency에 넣기
        let con = arr1[i];
        //존재하면 fre +1 , 존재하지 않으면 fre >> 삼항연산자 사용
        frequencyCounter1[con] ? frequencyCounter1[con]+=1 : frequencyCounter1[con]=1;       
       
    }
 
    //arr2[i]가 fre에 있으면 fre[i]-1 없으면 return false , while arr2의 길이만큼

    for(let j=0; j<arr2.length;j++){
        let con2 = arr2[j];
        if (! frequencyCounter1[con2] ) //존재하지 않으면
            return false;
        else
            frequencyCounter1[con2] -=1; //존재하면 빈도수 줄이기   
           
    }
    
    return true;

}

same('aab','baa');


