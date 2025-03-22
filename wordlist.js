// Word list data structure
const wordList = [
    { word: "apple", vowels: [1, 4] },
    { word: "banana", vowels: [2, 4, 6] },
    { word: "cat", vowels: [2] },
    { word: "dog", vowels: [2] },
    { word: "elephant", vowels: [1, 4, 7] },
    { word: "fish", vowels: [2] },
    { word: "giraffe", vowels: [2, 5] },
    { word: "house", vowels: [2, 4] },
    { word: "igloo", vowels: [1, 4] },
    { word: "jacket", vowels: [2, 4] },
    { word: "kangaroo", vowels: [2, 5, 7] },
    { word: "lemon", vowels: [2, 4] },
    { word: "mountain", vowels: [2, 5, 7] },
    { word: "orange", vowels: [1, 4] },
    { word: "penguin", vowels: [2, 5] },
    { word: "queen", vowels: [3, 4] },
    { word: "rainbow", vowels: [2, 4, 6] },
    { word: "sun", vowels: [2] },
    { word: "tiger", vowels: [2, 4] },
    { word: "umbrella", vowels: [1, 4, 7] },
    { word: "violet", vowels: [2, 4] },
    { word: "water", vowels: [2, 4] },
    { word: "xylophone", vowels: [2, 5, 7] },
    { word: "yellow", vowels: [2, 4] },
    { word: "zebra", vowels: [2, 4] }
];

// Letter shape categories
const letterShapes = {
    straight: ['A', 'E', 'F', 'H', 'I', 'K', 'L', 'M', 'N', 'T', 'V', 'W', 'X', 'Y', 'Z'],
    mixed: ['B', 'D', 'G', 'J', 'P', 'Q', 'R', 'U'],
    curved: ['C', 'O', 'S']
}; 