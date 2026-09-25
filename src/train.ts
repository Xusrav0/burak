/*
TASK N:
Shunday function yozing, u string qabul qilsin va string 
palindrom yani togri oqilganda ham, orqasidan oqilganda 
ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/

function back(str: any) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return str === reversed
}

console.log(back("dad"));
console.log(back("MERN"));
/*
// function palindromCheck(str: string) {
//     return str === str.split('').reverse().join('')
    
// }
// console.log(palindromCheck("dad"));
// console.log(palindromCheck("son"));
// console.log(palindromCheck("MERN"));
// console.log(palindromCheck("level"));




/*
TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan 
array qabul qilsin va array ichidagi har bir raqam uchun 
raqamni ozi va hamda osha raqamni kvadratidan tashkil 
topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, 
{number: 2, square: 4}, {number: 3, square: 9}];

*/
/*
interface SquareNumbers {
    number: number;
    square: number;
}

function getSquareNumbers(raqam: number[]): SquareNumbers[] {
    let result = [];

    for (let numb of raqam) {
        result.push({
            number: numb,
            square: numb ** 2
        });
    }

    return result;
}

console.log(getSquareNumbers([1, 2, 3]));
// console.log(getSquareNumbers([8, 7, 6]));
*/



















// function getSquareNumbers(raqam: number[]): SquareNumbers[] {
//     return raqam.map(numb => ({
//         number: numb,
//         square: numb**2
//     }))
// }
// console.log(getSquareNumbers([1, 2, 3]));
