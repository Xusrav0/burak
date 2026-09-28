/*
TASK O:

Shunday function yozing va u har xil qiymatlardan iborat array qabul qilsin.
Va array ichidagi sonlar yig'indisini hisoblab chiqgan javobni qaytarsin

MASALAN: calculateSumOfNumbers([10, "10", {son: 10}, true, 35]); return 45

Yuqoridagi misolda array tarkibida faqatgina ikkita yagona son mavjud bular 10 hamda 35
Qolganlari nested bo'lib yoki type'lari number emas.

*/

function calculateSumOfNumbers(arr) {
    let sum = 0;

    for (let item of arr) {
        if (typeof item === "number") {
            sum += item;
        }

}
return sum;
}   

const result = calculateSumOfNumbers([10, "10", {son: 10}, true, 35]);
console.log(result);

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