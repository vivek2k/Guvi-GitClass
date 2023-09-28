
(function(arr) {
    let nonDupli = []
    for(let i=0;i<arr.length;i++) {
        if(!nonDupli.includes(arr[i])) {
            nonDupli.push(arr[i])
        }
    }
    console.log(nonDupli)
})(arr = [1,2,3,3,4,4,5,6,7])