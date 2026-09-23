/*
TASK M: 

Shunday function yozing, u raqamlardan tashkil topgan 
array qabul qilsin va array ichidagi har bir raqam uchun 
raqamni ozi va hamda osha raqamni kvadratidan tashkil 
topgan object hosil qilib, hosil bolgan objectlarni array ichida qaytarsin.
MASALAN: getSquareNumbers([1, 2, 3]) return [{number: 1, square: 1}, 
{number: 2, square: 4}, {number: 3, square: 9}];

*/
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






















// function getSquareNumbers(raqam: number[]): SquareNumbers[] {
//     return raqam.map(numb => ({
//         number: numb,
//         square: numb**2
//     }))
// }
// console.log(getSquareNumbers([1, 2, 3]));
