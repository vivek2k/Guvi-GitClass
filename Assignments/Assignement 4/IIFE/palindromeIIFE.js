(function() {

    let arrLen = arr.length
    for(let i=0;i<arrLen;i++) {
        let isPalin = 1
        let strLen = arr[i].length
        for(let j=0;j<strLen/2;j++) {
            if(arr[i][j] != arr[i][strLen - j -1]) {
                isPalin = 0;
                break;
            }
        }
        if(isPalin) console.log(arr[i], "Is a Palindrome !!!!!")
        else console.log(arr[i], "Is not a palindrome !!!!")
    }
})(arr = ["racecar", "tacocat", "Heythere"])