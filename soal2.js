function reverseWord(str) {
    let separate        = str.toLowerCase().split(' ')
    let reverse         = separate.reverse()
    let joinToString    = reverse.join(' ')
    

    if(joinToString){
        return console.log(joinToString)
    }else{ return console.log('error')}
}


reverseWord('saya belajar javascript')