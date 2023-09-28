(function(str) {
    let strArr = str.split(" ");
    for(let i=0;i<strArr.length;i++) {
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1, strArr[i].length);
    }
    console.log(strArr.join(" "))

})("This is a sample string")