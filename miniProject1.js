const array = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ]
//Membuat fungsi untuk menentukan bilangan adalah prima
 const isPrime = (number) => {
     if(number === 1){
         return false;
    }
    for(let i = 2; i < number; i++){
        if(number % i === 0){
            return false;
        }}
    return true; }
//Membalikkan Array, menghapus bilangan prima, mengubah kelipatan 3 & 5 jadi FooBar, kelipatan 3 jadi Foo, kelipatan 5 jadi Bar, menampilkan Array
let res = array.reverse().filter(number => !isPrime(number)).map(number => {
    if (number % 3 === 0 && number % 5 === 0){
        return "FooBar"; }
    if (number % 3 === 0){
        return "Foo"; }
    if (number % 5 === 0){
        return "Bar"; }
    return number;
}).join(", ");

console.log(res)