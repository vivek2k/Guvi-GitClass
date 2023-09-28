let arr = [1,2,3,4,5,6,7,8,9,10]

let rotateArray = function(arr, k) {
    let slice1 = arr.slice(0, k);
    // console.log(slice1)
    let slice2 = arr.slice(k, arr.length)
    // console.log(slice2)
    console.log(slice2 + ","+ slice1) 
}

rotateArray(arr, 3)