
const sampleJSON =  [{
    "name": "Tommy boy",
    "age": 30,
    "city": "birmingham"
},
{
    "name": "Finn",
    "age": 17,
    "city": "birmingham"
}
]


// For in loop

for(const key in sampleJSON) {
    console.log(sampleJSON[key])
}




// for loop
// console.log(sampleJSON.length)
for (let i=0;i<sampleJSON.length;i++) {
    console.log(sampleJSON[i])
}
    
// for each loop

sampleJSON.forEach(i => {
    console.log(i)
})