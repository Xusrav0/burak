/** TASK Q:

Shunday function yozing, u 2 ta parametrga ega bo'lib
birinchisi object, ikkinchisi string bo'lsin.
Agar qabul qilinayotgan ikkinchi string, objectning
biror bir propertysiga mos kelsa, 'true', aks holda mos kelmasa 'false' qaytarsin.

MASALAN: hasProperty({ name: "BMW", model: "M3" }, "model"); return true;
Ushbu misolda, 'model' string, objectning propertysiga mos kelganligi uchun 'true' natijani qaytarmoqda
 */

function hasProperty(obj, str) {
  for (let key in obj) {
    if (key === str) {
      return true;
    }
  }
  return false;
}

const result = hasProperty({ name: "BMW", model: "M3" }, "model");
// const result1 = hasProperty({ company: "BMW", model: "M3" }, "name");

console.log("result:", result);
console.log("result1:", result1);

/*
TASK P:

Parametr sifatida yagona object qabul qiladigan function yozing.
Qabul qilingan objectni nested array sifatida convert qilib qaytarsin

MASALAN: objectToArray( {a: 10, b: 20}) return [['a', 10], ['b', 20]]
*/

// function objectToArray(obj) {
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

// function calculateSumOfNumbers(arr) {
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

// TASK K:
// Shunday function yozing, u string qabul qilsin va string ichidagi unli harflar sonini qaytarsin.
// MASALAN: countVowels("string") return 1;
/*
function countVowels(str) {
    let vowels = ["a", "e", "i", "o", "u", "y"];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("string"));
// console.log(countVowels("University"));
*/
