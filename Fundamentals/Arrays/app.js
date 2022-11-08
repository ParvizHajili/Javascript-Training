let value;

const numbers = [15, 77, 43, 23, 79, 4]
//const numbers2 = new Array(1, 2, 3, 4, 5)

const langs = ["C#", "Java", "Python", "Javascript"]
const a = ["Hello", 839, null, undefined, 9.23]


value = numbers.length//5
value = numbers[2]//43
value = numbers[numbers.length - 1]

//change index value

// numbers[2] = 200
// value = numbers//[15, 77, 200, 23, 79, 4]

// ///////////////////////
// value = numbers.indexOf(15)//0

// numbers.push(5)
// value = numbers//[15, 77, 200, 23, 79, 4, 5]

// numbers.unshift(1)
// value = numbers //[1, 15, 77, 200, 23, 79, 4, 5]


// numbers.pop()
// value = numbers//[1, 15, 77, 200, 23, 79, 4]

// numbers.shift()
// value = numbers// [15, 77, 200, 23, 79, 4, 5]

// numbers.splice(0, 3)
// value = numbers//[23, 79, 4]

// numbers.reverse()
// value = numbers//[4, 79, 23, 43, 77, 15]

value = numbers.sort()//[15, 23, 4, 43, 77, 79]

value = numbers.sort(function (x, y) {
    return x - y
})//[4, 15, 23, 43, 77, 79]

value = numbers.sort(function (x, y) {
    return y - x
})//[79, 77, 43, 23, 15, 4]
console.log(value)