(function() {
    let slice1= arr.slice(0,k)
    let slice2 = arr.slice(k, arr.length)
    console.log(slice2 + "," + slice1)
})(arr = [1,2,3,4,5,6,7,8,9], k =2)