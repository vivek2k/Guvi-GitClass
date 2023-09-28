let str = "Hey this is a sample String"

let titleCaps = function(str) {

    let strArr = str.split(' ')

   // console.log(strArr)     // Original string split into indivdual words using split 

    for(let i=0;i<strArr.length;i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1, strArr[i].length);
        // console.log(strArr[i])
    }


    console.log(strArr)     // each word capitalized
}


titleCaps(str)