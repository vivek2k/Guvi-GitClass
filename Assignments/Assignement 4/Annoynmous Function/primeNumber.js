let arr = [11,13,14,15,17]
let primeNumber = function(arr){ 
    for(let i=0;i<arr.length;i++) {
        let flag =0;
        for(let j=2;j<=arr[i]/2;j++) {
            if(arr[i]%j==0) {
                flag = 1;
                break;
            }    
        }
        if(flag == 0) {
            console.log(arr[i], "is a prime Number")
        }
        else {
            console.log(arr[i], "Is not a prime Number")
        }
    }
}


primeNumber(arr)