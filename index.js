let arr         = 'indonesia'
let _split      = arr.split('')
let word        = _split[2]
console.log(word)


function palindrom(str) {
    let separate        = str.toLowerCase().split('')
    let reverse         = separate.reverse()
    let joinToString    = reverse.join('')

    if(str === joinToString){
        return console.log('this is palindrom')
    }else{ return console.log('not a palindrom')}
}


palindrom('sas')

function reverseWord(str) {
    let separate        = str.toLowerCase().split(' ')
    let reverse         = separate.reverse()
    let joinToString    = reverse.join(' ')
    

    if(joinToString){
        return console.log(joinToString)
    }else{ return console.log('error')}
}


reverseWord('saya belajar javascript')








var numbers = [4, 2, 5, 1, 3]
let asal = numbers.sort(function(a, b) {
  return a  - b;
});

console.log(numbers)
console.log(asal)




// let sortNum = (num) => {
//     let bebas       = num.toString().split('0')
//     return console.log(bebas)
// }

// sortNum(1241068)

let sortNum = (num) => {
    let bebas       = num.toString().split(0)
   
    return console.log([...bebas])
}

sortNum(5241068) 

let nom = [12312]
let bebas = [...nom]
console.log(bebas)



let sortNum2 = (nom) =>{
    let pecahin    = Array.from(String(nom),Number)
    return console.log(pecahin)
}

sortNum2(1240123)
