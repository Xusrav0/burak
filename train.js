/**
TASK X

Shunday function yozing, uni object va string parametrlari bo'lsin.
Bu function, birinchi object parametri tarkibida, kalit sifatida ikkinchi string parametri
necha marotaba takrorlanganlini sanab qaytarsin.

Eslatma => Nested object'lar ham sanalsin

MASALAN: countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model') return 2

Yuqoridagi misolda, birinchi argument object, ikkinchi argument 'model'.
Funktsiya, shu ikkinchi argument 'model', birinchi argument object
tarkibida kalit sifatida 2 marotaba takrorlanganligi uchun 2 soni return qilmoqda 
*/

function countOccurrences(obj, num) {
  let count = 0;

  for (let char in obj) {
    let value = obj[char];
    if (char === num) {
      count++;
    }

    if (value && typeof value === "object") {
      count = count + countOccurrences(value, num);
    }
  }
  return count;
}

console.log(
  countOccurrences(
    { model: "Bugatti", steer: { model: "HANKOOK", size: 30 } },
    "model",
  ),
);

/**TASK W

Shunday function yozing, u o'ziga parametr sifatida
yagona array va number qabul qilsin. Siz tuzgan function
arrayni numberda berilgan uzunlikda kesib bo'laklarga
ajratgan holatida qaytarsin.
MASALAN: chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);
return [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]];

Yuqoridagi namunada berilayotgan array ikkinchi parametr 3'ga
asoslanib 3 bo'lakga bo'linib qaytmoqda. Qolgani esa o'z holati qolyapti
 */

// function chunkArray(arr, num) {
//   let result = [];
//   let i = 0;
//   while (i < arr.length) {
//     result.push(arr.slice(i, i + num));
//     i += num;
//   }
//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

/** TASK V

Shunday function yozing, uni string parametri bo'lsin.
Va bu function stringdagi har bir harfni o'zi bilan
necha marotaba taktorlanganligini ko'rsatuvchi object qaytarsin.
  
MASALAN: countChars("hello") return {h: 1, e: 1, l: 2, o: 1}

Yuqoridagi misolda, 'hello' so'zi tarkibida
qatnashgan harflar necha marotaba takrorlangini bilan
object sifatida qaytarilmoqda. */

// function countChars(str) {
//   let result = {};
//   for (let lett of str) {
//     if (result[lett]) {
//       result[lett] += 1;
//     } else {
//       result[lett] = 1;
//     }
//   }
//   return result;
// }

// console.log(countChars("hello"));
// console.log(countChars("NeverMore"));

/** TASK U

Shunday function tuzing, uni number parametri bo'lsin.
Va bu function berilgan parametrgacha, 0'dan boshlab
oraliqda nechta toq sonlar borligini aniqlab return qilsi.

MASALAN: sumOdds(9) return 4; sumOdds(11) return 5;

Yuqoridagi birinchi misolda, argument sifatida, 9 berilmoqda.
Va 0'dan boshlab sanaganda 9'gacha 4'ta toq son mavjud. 
Keyingi namunada ham xuddi shunday xolat takrorlanmoqda.
 */

// function sumOdds(num) {
//   let odd = 0;
//   for (let i = 0; i < num; i++) {
//     if (i % 2 !== 0) {
//       odd++;
//     }
//   }
//   return odd;
// }
// console.log(sumOdds(9));
// console.log(sumOdds(11));

/**TASK T

Shunday function tuzing, u sonlardan tashkil topgan 2'ta array qabul qilsin.
Va ikkala arraydagi sonlarni tartiblab bir arrayda qaytarsin.

MASALAN: mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]); return [0, 3, 4, 4, 6, 30, 31];

Yuqoridagi misolda, ikkala arrayni birlashtirib, tartib raqam bo'yicha tartiblab qaytarmoqda. */

// function mergeSortedArrays(arr1, arr2) {
//   let result = arr1.concat(arr2).sort((a, b) => {
//     return a - b;
//   });
//   return result;
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));

/**TASK S:

Shunday function yozing, u numberlardan tashkil topgan 
array qabul qilsin va osha numberlar orasidagi tushib qolgan 
sonni topib uni return qilsin
MASALAN: missingNumber([3, 0, 1]) return 2
 */

// function missingNumber(nums) {
//   let total = nums.length;

//   for (let i = 0; i < nums.length; i++) {
//     total += i - nums[i];
//   }

//   return total;
// }
// console.log(missingNumber([3, 0, 1]));

/**
 * TASK R

Shunday function yozing, u string parametrga ega bo'lsin.
Agar argument sifatida berilayotgan string, "1 + 2" bo'lsa,
string ichidagi sonlarni yig'indisni hisoblab, number holatida qaytarsin

MASALAN: calculate("1 + 3"); return 4;
1 + 3 = 4, shu sababli 4 natijani qaytarmoqda.
 */

// function calculate(str) {
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

// function hasProperty(obj, str) {
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
