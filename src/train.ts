/**TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda. */

function mergeSortedArrays(arr1: any, arr2: any): any {
  let result = arr1.concat(arr2).sort((a: number, b: number) => {
    return a - b;
  });
  return result;
}
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

/**TASK S:

Shunday function yozing, u numberlardan tashkil topgan 
array qabul qilsin va osha numberlar orasidagi tushib qolgan 
sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
 */

function missingNumber(nums: number[]) {
  let total = nums.length;

  for (let i = 0; i < nums.length; i++) {
    total += i - nums[i];
  }

  return total;
}
console.log(missingNumber([3, 0, 1]));

/**
 * TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarni yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
 */

// function calculate(str: string) {
//   let sum = 0;
//   for (let char of str) {
//     if (char >= "0" && char <= "9") {
//       sum += Number(char);
//     }
//   }
//   return sum;
// }

// console.log(calculate("1 + 3"));

/** TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
 */

// function hasProperty(obj: object, str: string): boolean {
//   for (let key in obj) {
//     if (key === str) {
//       return true;
//     }
//   }
//   return false;
// }

// const result = hasProperty({ name: "BMW", model: "M3" }, "model");
// // const result1 = hasProperty({ company: "BMW", model: "M3" }, "name");

// console.log("result:", result);
// console.log("result1:", result1);

/*
TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/

// function objectToArray(obj: any): any[] {
//   let result = [];
//   for (let key in obj) {
//     result.push([key, obj[key]]);
//   }
//   return result;
// }

// console.log(objectToArray({ a: 10, b: 20 }));

/*
TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.

*/

// function calculateSumOfNumbers(arr: any[]): number {
//     let sum = 0;

//     for (let item of arr) {
//         if (typeof item === "number") {
//             sum += item;
//         }

// }
// return sum;
// }

// const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
// console.log(result);

/*
TASK N:
Shunday function yozing, u string qabul qilsin va string 
palindrom yani togri oqilganda ham, orqasidan oqilganda 
ham bir hil oqiladigan soz ekanligini aniqlab boolean qiymat qaytarsin.
MASALAN: palindromCheck("dad") return true;  palindromCheck("son") return false;
*/
/*
function back(str: any) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed
    }
    return str === reversed
}

console.log(back("dad"));
console.log(back("MERN"));
*/
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
