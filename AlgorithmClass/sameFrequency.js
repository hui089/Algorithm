function sameFrequency(num1,num2){
     
    //숫자 각자리 비교시, number > string으로 변환
    
    let num1String = num1.toString();
    let num2String = num2.toString();
    
    if( num1.length != num2.length)
        return false;

    let fre1={};
    let fre2={}; //frequency 담아둘 객체 생성
    
    for(let i=0;i<num1String.length;i++){
        fre1[num1String[i]]=(fre1[num1String[i]] || 0)+1;
    } //빈도수 입력
    for(let i=0;i<num2String.length;i++){
        fre2[num2String[i]]=(fre2[num2String[i]] || 0)+1;
    } //빈도수 입력
    console.log(fre1);
    console.log(fre2);
    
    //각 숫자의 빈도수 같은 것만 비교
    for(let key in fre1){
          if(fre1[key] !== fre2[key]) return false;

    }
     
    return true;
}

sameFrequency(22,222);

