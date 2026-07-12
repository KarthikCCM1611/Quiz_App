import { IQuizQuestion } from "../models/model";

export const quizQuestions: IQuizQuestion[] = [
    {
        id: 1,
        title: "What is the capital of France?",
        options: {
            a: "London",
            b: "Berlin",
            c: "Paris",
            d: "Madrid"
        },
        correctAnswer: "c",
        explanation: "Paris is the capital and largest city of France, known for the Eiffel Tower and its rich cultural heritage.",
        category: "Geography",
        difficulty: "easy"
    },
    {
        id: 2,
        title: "Which planet is known as the Red Planet?",
        options: {
            a: "Venus",
            b: "Mars",
            c: "Jupiter",
            d: "Saturn"
        },
        correctAnswer: "b",
        explanation: "Mars is called the Red Planet because of its reddish appearance due to iron oxide (rust) on its surface.",
        category: "Science",
        difficulty: "easy"
    },
    {
        id: 3,
        title: "What is the largest mammal in the world?",
        options: {
            a: "African Elephant",
            b: "Giraffe",
            c: "Blue Whale",
            d: "Hippopotamus"
        },
        correctAnswer: "c",
        explanation: "The Blue Whale is the largest animal ever known to have existed, reaching up to 100 feet in length.",
        category: "Biology",
        difficulty: "easy"
    },
    {
        id: 4,
        title: "Who wrote Romeo and Juliet?",
        options: {
            a: "Jane Austen",
            b: "William Shakespeare",
            c: "Mark Twain",
            d: "Charles Dickens"
        },
        correctAnswer: "b",
        explanation: "William Shakespeare wrote Romeo and Juliet, one of the most famous tragedies in English literature.",
        category: "Literature",
        difficulty: "easy"
    },
    {
        id: 5,
        title: "What is the chemical symbol for Gold?",
        options: {
            a: "Go",
            b: "Gd",
            c: "Au",
            d: "Ag"
        },
        correctAnswer: "c",
        explanation: "Au is the chemical symbol for Gold, derived from its Latin name 'Aurum'.",
        category: "Chemistry",
        difficulty: "medium"
    },
    {
        id: 6,
        title: "Which country has the most population?",
        options: {
            a: "India",
            b: "China",
            c: "United States",
            d: "Indonesia"
        },
        correctAnswer: "a",
        explanation: "As of 2023, India has surpassed China to become the world's most populous country.",
        category: "Geography",
        difficulty: "medium"
    },
    {
        id: 7,
        title: "What year did the Titanic sink?",
        options: {
            a: "1912",
            b: "1905",
            c: "1920",
            d: "1898"
        },
        correctAnswer: "a",
        explanation: "The RMS Titanic sank on April 15, 1912, after hitting an iceberg in the Atlantic Ocean.",
        category: "History",
        difficulty: "medium"
    },
    {
        id: 8,
        title: "What is the smallest prime number?",
        options: {
            a: "0",
            b: "1",
            c: "2",
            d: "3"
        },
        correctAnswer: "c",
        explanation: "2 is the smallest prime number and the only even prime number.",
        category: "Mathematics",
        difficulty: "medium"
    },
    {
        id: 9,
        title: "Which mountain is the highest in the world?",
        options: {
            a: "K2",
            b: "Mount Kilimanjaro",
            c: "Mount Everest",
            d: "Mount Denali"
        },
        correctAnswer: "c",
        explanation: "Mount Everest is the highest mountain in the world at 29,032 feet (8,849 meters).",
        category: "Geography",
        difficulty: "easy"
    },
    {
        id: 10,
        title: "What is the speed of light?",
        options: {
            a: "150,000 km/s",
            b: "300,000 km/s",
            c: "450,000 km/s",
            d: "200,000 km/s"
        },
        correctAnswer: "b",
        explanation: "The speed of light in a vacuum is approximately 300,000 kilometers per second (299,792 km/s).",
        category: "Physics",
        difficulty: "hard"
    },
    {
        id: 11,
        title: "Who was the first President of the United States?",
        options: {
            a: "Thomas Jefferson",
            b: "George Washington",
            c: "John Adams",
            d: "James Madison"
        },
        correctAnswer: "b",
        explanation: "George Washington served as the first President of the United States from 1789 to 1797.",
        category: "History",
        difficulty: "easy"
    },
    {
        id: 12,
        title: "What is the most spoken language in the world?",
        options: {
            a: "Spanish",
            b: "English",
            c: "Mandarin Chinese",
            d: "Hindi"
        },
        correctAnswer: "c",
        explanation: "Mandarin Chinese is the most spoken language in the world by native speakers.",
        category: "Culture",
        difficulty: "medium"
    },
    {
        id: 13,
        title: "Which element has the atomic number 8?",
        options: {
            a: "Nitrogen",
            b: "Carbon",
            c: "Oxygen",
            d: "Hydrogen"
        },
        correctAnswer: "c",
        explanation: "Oxygen has atomic number 8 and is essential for respiration in most living organisms.",
        category: "Chemistry",
        difficulty: "medium"
    },
    {
        id: 14,
        title: "What is the largest ocean on Earth?",
        options: {
            a: "Atlantic Ocean",
            b: "Indian Ocean",
            c: "Arctic Ocean",
            d: "Pacific Ocean"
        },
        correctAnswer: "d",
        explanation: "The Pacific Ocean is the largest ocean, covering more than 165 million square kilometers.",
        category: "Geography",
        difficulty: "easy"
    },
    {
        id: 15,
        title: "In which year did World War II end?",
        options: {
            a: "1943",
            b: "1944",
            c: "1945",
            d: "1946"
        },
        correctAnswer: "c",
        explanation: "World War II ended in 1945 with the surrender of Japan on September 2, 1945.",
        category: "History",
        difficulty: "medium"
    },
    {
        id: 16,
        title: "What is the powerhouse of the cell?",
        options: {
            a: "Nucleus",
            b: "Mitochondria",
            c: "Ribosome",
            d: "Chloroplast"
        },
        correctAnswer: "b",
        explanation: "Mitochondria is the powerhouse of the cell, responsible for producing ATP energy.",
        category: "Biology",
        difficulty: "easy"
    },
    {
        id: 17,
        title: "Which planet is closest to the Sun?",
        options: {
            a: "Venus",
            b: "Mercury",
            c: "Earth",
            d: "Mars"
        },
        correctAnswer: "b",
        explanation: "Mercury is the closest planet to the Sun in our solar system.",
        category: "Science",
        difficulty: "easy"
    },
    {
        id: 18,
        title: "What is the formula for calculating the area of a circle?",
        options: {
            a: "πr",
            b: "2πr",
            c: "πr²",
            d: "πr³"
        },
        correctAnswer: "c",
        explanation: "The area of a circle is calculated using the formula A = πr², where r is the radius.",
        category: "Mathematics",
        difficulty: "medium"
    },
    {
        id: 19,
        title: "Which country is home to the Great Wall?",
        options: {
            a: "Japan",
            b: "India",
            c: "China",
            d: "South Korea"
        },
        correctAnswer: "c",
        explanation: "The Great Wall of China is one of the most iconic structures in the world, built over centuries.",
        category: "Geography",
        difficulty: "easy"
    },
    {
        id: 20,
        title: "What is the rarest blood type?",
        options: {
            a: "AB negative",
            b: "O negative",
            c: "Rh null",
            d: "AB positive"
        },
        correctAnswer: "c",
        explanation: "Rh null is the rarest blood type in the world, with fewer than 50 known cases.",
        category: "Biology",
        difficulty: "hard"
    },
    {
        id: 21,
        title: "Who painted the Mona Lisa?",
        options: {
            a: "Vincent van Gogh",
            b: "Pablo Picasso",
            c: "Leonardo da Vinci",
            d: "Michelangelo"
        },
        correctAnswer: "c",
        explanation: "Leonardo da Vinci painted the Mona Lisa during the Renaissance period.",
        category: "Art",
        difficulty: "easy"
    },
    {
        id: 22,
        title: "What is the hardest natural substance on Earth?",
        options: {
            a: "Iron",
            b: "Diamond",
            c: "Tungsten",
            d: "Platinum"
        },
        correctAnswer: "b",
        explanation: "Diamond is the hardest natural substance known to mankind.",
        category: "Science",
        difficulty: "medium"
    },
    {
        id: 23,
        title: "Which gas do plants absorb for photosynthesis?",
        options: {
            a: "Oxygen",
            b: "Nitrogen",
            c: "Carbon Dioxide",
            d: "Hydrogen"
        },
        correctAnswer: "c",
        explanation: "Plants absorb carbon dioxide (CO2) from the atmosphere during photosynthesis.",
        category: "Biology",
        difficulty: "easy"
    },
    {
        id: 24,
        title: "What is the capital of Japan?",
        options: {
            a: "Osaka",
            b: "Kyoto",
            c: "Tokyo",
            d: "Hiroshima"
        },
        correctAnswer: "c",
        explanation: "Tokyo is the capital and largest city of Japan.",
        category: "Geography",
        difficulty: "easy"
    },
    {
        id: 25,
        title: "What does DNA stand for?",
        options: {
            a: "Deoxyribonucleic Acid",
            b: "Diribonucleic Acid",
            c: "Deoxyribose Nucleotide Acid",
            d: "Dynamic Nucleic Acid"
        },
        correctAnswer: "a",
        explanation: "DNA stands for Deoxyribonucleic Acid, the molecule that carries genetic instructions.",
        category: "Biology",
        difficulty: "hard"
    }
];