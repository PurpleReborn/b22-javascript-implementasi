
let sortNum = (num) => {
    let convertStr       = num.toString().split('0')
    let joinStr          = convertStr.join(',')
    let pecahkan         = Array.from(String(joinStr),Number)
    pecahkan.sort((a, b) => a - b)
    return console.log(pecahkan.join(''))
    
}

sortNum(870941068) 


 /*
 Algoritma :
 1.Mulai
 2.Masukan angka yang akan diproses
 3.Ubah angka menjadi string agar bisa di split() array
 4.pisahkan string dengan metode split() setiap ada 0,dengan mereturn mejadi sebuah array[]
 5.gabungkan dengan metode join() agar menjadi 'string' kembali
 6.lalu Pecahkan semua isi string dengan metode Array.from() menjadi value yg berbeda pada sebuah array 
 7.Sorting value array dari yg terkecil sampai yg terbesar dengan metode array.sort()
 8.Gabungkan kembali isi array  menjadi string dengan metode join() 
 9.return Cetak hasil setelah digabungkan
 10.Selesai
 */


