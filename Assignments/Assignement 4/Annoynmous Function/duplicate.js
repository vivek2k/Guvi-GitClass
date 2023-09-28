let arr = [1,2,3,4,5,8,9,1]

let removeDupli = function(arr) {
    let nonDupli = []
    for(let i=0;i<arr.length;i++) {
        if(!nonDupli.includes(arr[i])) {
            nonDupli.push(arr[i])
        }
    }
    console.log(nonDupli)
} 


removeDupli(arr)    