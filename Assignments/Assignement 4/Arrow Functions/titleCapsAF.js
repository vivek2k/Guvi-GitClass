let str = "This is a sample string"

strArr= str.split(" ")

console.log((strArr.map(x => {
    return x = x[0].toUpperCase() + x.slice(1,x.length)
})))

