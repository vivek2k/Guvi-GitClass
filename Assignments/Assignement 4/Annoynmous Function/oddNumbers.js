let array = [1,2,3,4,5,6,7,8,9,10] //predefined array

let oddNumber = function(array) {
    console.log(array.filter((x)=>{
        return x%2==1
    }))
}


oddNumber(array)