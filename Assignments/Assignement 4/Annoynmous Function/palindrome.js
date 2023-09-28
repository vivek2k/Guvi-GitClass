let strArr = ["racecar", "pineapple", "BurgerKing", "doggod"]

let palindrome = function(strArr) {

    let arrLen = strArr.length;
    for(let i =0;i<arrLen;i++){
        let strLen = strArr[i].length;
        let isPalin = 1;
        for(let j =0;j<strLen/2;j++) {
            if(strArr[i][j] != strArr[i][strLen - j -1]) {
                isPalin = 0;
                break;
            } 
        }
        if(isPalin) {
            console.log(strArr[i], "is a Palindrome!!")
        }
        else {
            console.log(strArr[i], "is not a Palindrome!!")
        }
    }

}


palindrome(strArr)