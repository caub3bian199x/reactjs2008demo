// var name ="van";
// console.log("first name : ", name[0])
// console.log("last character: ", name[name.length -1 ])

// var formatName = name[0].toUpperCase() + name.substring(1, name.length).toLowerCase()
// console.log("name: ", formatName)

// console.log("charArt() :", name.charAt(0))
// console.log("indexof :", name.indexOf("n"))
// console.log("indexof :", name.indexOf("n",0))
// console.log("lastIndexOf :", name.lastIndexOf("an", 1))
// console.log("slice :", name.slice(1,2))

// /*
//     replace: Thay thế 
//     include: Kiểm tra tồn tại 
// */

// // practice

// var description = "Today is a awful day!"
//     // Thay thế từ awful thành beautiful( no use replace)

var number = [2,3,4,5,6,7, "van"]
console.log("number: ", number)

var student=[{
    name: "Van",
    age: 20
},{
    name: "van",
    age: 19
}]

var matrix=[
    [1,1,1],
    [1,1,1],
    [1,1,1]
]
for(var i =0; i< matrix.length; i++){
    for(var j=0; j<matrix.length; j++)
    console.log(`matrix[${i}][${j}]`, matrix[i][j])
}
var stack = []
console.log("Stack: ", stack)
stack.push(1)
console.log("Stack: ", stack)
stack.push(2)
console.log("Stack: ", stack)

var lastValue= stack.pop()
console.log("last Value: ", lastValue)
console.log("Stack: ", stack)


function pop(arr){
    var result = arr[arr.length - 1]
    arr.length -=1
    return result
}

// shift() lấy ra từ đầu đầu 
// unshift() thêm vào đầu