// Step 1: Buat array dengan 100 nilai random (1 sampai 50)
function generateRandomArray(size, min, max) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// Step 2: Pecah array menjadi 2 array berdasarkan index ganjil dan genap
function splitArray(arr) {
    let evenArray = [];
    let oddArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(arr[i]); // Index genap
        } else {
            oddArray.push(arr[i]); // Index ganjil
        }
    }
    return { evenArray, oddArray };
}

// Step 3: Mencari min, max, total, dan rata-rata
function calculateStatistics(arr) {
    let min = arr[0];
    let max = arr[0];
    let total = 0;

    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
        total += num;
    }

    let average = total / arr.length;
    return { min, max, total, average };
}

// Step 4: Bandingkan hasil kedua array
function compareArrays(evenStats, oddStats) {
    let comparisons = {
        minComparison: evenStats.min > oddStats.min ? 'Min genap lebih besar' : 'Min ganjil lebih besar',
        maxComparison: evenStats.max > oddStats.max ? 'Max genap lebih besar' : 'Max ganjil lebih besar',
        totalComparison: evenStats.total === oddStats.total ? 'Total sama' : 'Total berbeda',
        averageComparison: evenStats.average > oddStats.average ? 'Rata-rata genap lebih besar' : 'Rata-rata ganjil lebih besar'
    };
    return comparisons;
}

// Eksekusi langkah-langkah
const randomArray = generateRandomArray(100, 1, 50);
const { evenArray, oddArray } = splitArray(randomArray);
const evenStats = calculateStatistics(evenArray);
const oddStats = calculateStatistics(oddArray);
const comparisonResults = compareArrays(evenStats, oddStats);

// Output
console.log('Array Random:', randomArray);
console.log('Array Genap:', evenArray);
console.log('Array Ganjil:', oddArray);
console.log('Statistik Genap:', evenStats);
console.log('Statistik Ganjil:', oddStats);
console.log('Perbandingan:', comparisonResults);
