function reverseString (string){
    let reversedString = ''
    for (let i = string.length - 1; i >= 0; i-- ){
        reversedString += string[i]
    }
    return reversedString
}

console.log(reverseString('привет'))

function getMiddleNumber(numbers){
    let summ = 0
    let string = String(numbers)
    for (let i = 0; i < string.length; i++){
        summ += +string[i]
    }
    return summ / string.length

}

console.log(getMiddleNumber(102))