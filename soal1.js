function palindrom(str) {
    let separate        = str.toLowerCase().split('')
    let reverse         = separate.reverse()
    let joinToString    = reverse.join('')

    if(str === joinToString){
        return console.log('this is palindrom')
    }else{ return console.log('not a palindrom')}
}


palindrom('sas')