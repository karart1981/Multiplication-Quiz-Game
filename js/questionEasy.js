// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "What is 4 * 4  ?",
    answer: "16",
    options: [
      "20",
      "16",
      "12",
      "18"
    ]
  }, // 4*4
  {
    numb: 2,
    question: "What is 4 * 5  ?",
    answer: "20",
    options: [
      "20",
      "21",
      "25",
      "16"
    ]
  }, // 4*5
  {
    numb: 3,
    question: "What is 6 * 6  ?",
    answer: "36",
    options: [
      "48",
      "54",
      "42",
      "36"
    ]
  }, // 6*6
  {
    numb: 4,
    question: "What is 9 * 8  ?",
    answer: "72",
    options: [
      "72",
      "81",
      "56",
      "64"
    ]
  }, // 9*8
  {
    numb: 5,
    question: "What is 7 * 6  ?",
    answer: "42",
    options: [
      "45",
      "48",
      "49",
      "42"
    ]
  }, // 7*6
  {
     numb: 6,
     question: "What is 4 * 8  ?",
     answer: "32",
     options: [
       "40",
       "32",
       "34",
       "36"
     ]
  }, // 4*8
  {
    numb: 7,
    question: "What is 10 * 4  ?",
    answer: "40",
    options: [
      "40",
      "44",
      "48",
      "32"
    ]
  }, // 10*4
  {
    numb: 8,
    question: "What is 7 * 5  ?",
    answer: "35",
    options: [
      "40",
      "45",
      "35",
      "30"
    ]
  }, // 7*5
  {
    numb: 9,
    question: "What is 10 * 8  ?",
    answer: "80",
    options: [
      "78",
      "88",
      "80",
      "82"
    ]
  }, // 10*8
  {
    numb: 10,
    question: "What is 3 * 8  ?",
    answer: "24",
    options: [
      "20",
      "21",
      "24",
      "22"
    ]
  }, // 3*8
  {
    numb: 11,
    question: "What is 7 * 9  ?",
    answer: "63",
    options: [
      "56",
      "49",
      "42",
      "63"
    ]
  }, // 7*9
  {
     numb: 12,
     question: "What is 2 * 8  ?",
     answer: "16",
     options: [
       "16",
       "12",
       "14",
       "18"
     ]
  }, // 2*8
  {
    numb: 13,
    question: "What is 3 * 4  ?",
    answer: "12",
    options: [
      "20",
      "16",
      "12",
      "18"
    ]
  }, // 3*4
  {
    numb: 14,
    question: "What is 4 * 9  ?",
    answer: "36",
    options: [
      "28",
      "30",
      "32",
      "36"
    ]
  }, // 4*9
  {
    numb: 15,
    question: "What is 6 * 8  ?",
    answer: "48",
    options: [
      "48",
      "54",
      "42",
      "36"
    ]
  }, // 6*8
  {
    numb: 16,
    question: "What is 2 * 3  ?",
    answer: "6",
    options: [
      "9",
      "8",
      "7",
      "6"
    ]
  }, // 2*3
  {
    numb: 17,
    question: "What is 7 * 8  ?",
    answer: "56",
    options: [
      "45",
      "70",
      "56",
      "49"
    ]
  }, // 7*8
  {
     numb: 18,
     question: "What is 4 * 7  ?",
     answer: "28",
     options: [
       "28",
       "32",
       "20",
       "24"
     ]
  }, // 4*7
  {
    numb: 19,
    question: "What is 6 * 4  ?",
    answer: "24",
    options: [
      "20",
      "24",
      "30",
      "18"
    ]
  }, // 6*4
  {
    numb: 20,
    question: "What is 4 * 2  ?",
    answer: "8",
    options: [
      "12",
      "16",
      "8",
      "6"
    ]
  }, // 4*2
  {
    numb: 21,
    question: "What is 6 * 7  ?",
    answer: "42",
    options: [
      "48",
      "44",
      "42",
      "46"
    ]
  }, // 6*7
  {
    numb: 22,
    question: "What is 9 * 7  ?",
    answer: "63",
    options: [
      "72",
      "81",
      "63",
      "64"
    ]
  }, // 9*7
  {
    numb: 23,
    question: "What is 3 * 7  ?",
    answer: "21",
    options: [
      "28",
      "27",
      "23",
      "21"
    ]
  }, // 3*7
  {
     numb: 24,
     question: "What is 5 * 8  ?",
     answer: "40",
     options: [
       "40",
       "35",
       "30",
       "45"
     ]
  }, // 5*8
  {
    numb: 25,
    question: "What is 7 * 7  ?",
    answer: "49",
    options: [
      "56",
      "49",
      "42",
      "46"
    ]
  }, // 7*7
  {
    numb: 26,
    question: "What is 10 * 5  ?",
    answer: "50",
    options: [
      "40",
      "45",
      "50",
      "52"
    ]
  }, // 10*5
  {
    numb: 27,
    question: "What is 2 * 4  ?",
    answer: "8",
    options: [
      "8",
      "6",
      "12",
      "10"
    ]
  }, // 2*4
  {
    numb: 28,
    question: "What is 5 * 5  ?",
    answer: "25",
    options: [
      "20",
      "15",
      "25",
      "30"
    ]
  }, // 5*5
  {
    numb: 29,
    question: "What is 8 * 4  ?",
    answer: "32",
    options: [
      "42",
      "24",
      "40",
      "32"
    ]
  }, // 8*4
  {
     numb: 30,
     question: "What is 9 * 6  ?",
     answer: "54",
     options: [
       "54",
       "45",
       "36",
       "56"
     ]
  }, // 9*6
  {
    numb: 31,
    question: "What is 10 * 3  ?",
    answer: "30",
    options: [
      "27",
      "32",
      "28",
      "30"
    ]
  }, // 10*3
  {
    numb: 32,
    question: "What is 3 * 5  ?",
    answer: "15",
    options: [
      "25",
      "15",
      "18",
      "10"
    ]
  }, // 3*5
  {
    numb: 33,
    question: "What is 2 * 6  ?",
    answer: "12",
    options: [
      "16",
      "14",
      "18",
      "12"
    ]
  }, // 2*6
  {
    numb: 34,
    question: "What is 5 * 7  ?",
    answer: "35",
    options: [
      "35",
      "45",
      "30",
      "47"
    ]
  }, // 5*7
  {
    numb: 35,
    question: "What is 8 * 6  ?",
    answer: "48",
    options: [
      "45",
      "48",
      "49",
      "42"
    ]
  }, // 8*6
  {
     numb: 36,
     question: "What is 4 * 6  ?",
     answer: "24",
     options: [
       "34",
       "24",
       "20",
       "28"
     ]
  }, // 4*6
  {
    numb: 37,
    question: "What is 6 * 3  ?",
    answer: "18",
    options: [
      "20",
      "16",
      "12",
      "18"
    ]
  }, // 6*3
  {
    numb: 38,
    question: "What is 9 * 5  ?",
    answer: "45",
    options: [
      "36",
      "46",
      "45",
      "40"
    ]
  }, // 9*5
  {
    numb: 39,
    question: "What is 7 * 4  ?",
    answer: "28",
    options: [
      "28",
      "27",
      "38",
      "24"
    ]
  }, // 7*4
  {
    numb: 40,
    question: "What is 10 * 7  ?",
    answer: "70",
    options: [
      "72",
      "70",
      "77",
      "67"
    ]
  }, // 10*7
  {
    numb: 41,
    question: "What is 3 * 2  ?",
    answer: "6",
    options: [
      "9",
      "6",
      "12",
      "8"
    ]
  }, // 3*2
  {
     numb: 42,
     question: "What is 2 * 5  ?",
     answer: "10",
     options: [
       "16",
       "14",
       "12",
       "10"
     ]
  }, // 2*5
  {
    numb: 43,
    question: "What is 5 * 3  ?",
    answer: "15",
    options: [
      "20",
      "16",
      "15",
      "18"
    ]
  }, // 5*3
  {
    numb: 44,
    question: "What is 8 * 5  ?",
    answer: "40",
    options: [
      "44",
      "42",
      "45",
      "40"
    ]
  }, // 8*5
  {
    numb: 45,
    question: "What is 4 * 3  ?",
    answer: "12",
    options: [
      "14",
      "16",
      "12",
      "18"
    ]
  }, // 4*3
  {
    numb: 46,
    question: "What is 6 * 5  ?",
    answer: "30",
    options: [
      "33",
      "32",
      "36",
      "30"
    ]
  }, // 6*5
  {
    numb: 47,
    question: "What is 9 * 4  ?",
    answer: "36",
    options: [
      "36",
      "34",
      "27",
      "38"
    ]
  }, // 9*4
  {
     numb: 48,
     question: "What is 7 * 3  ?",
     answer: "21",
     options: [
       "23",
       "21",
       "24",
       "28"
     ]
  }, // 7*3
  {
    numb: 49,
    question: "What is 10 * 2  ?",
    answer: "20",
    options: [
      "22",
      "21",
      "12",
      "20"
    ]
  }, // 10*2
  {
     numb: 50,
     question: "What is 8 * 8  ?",
     answer: "64",
     options: [
       "64",
       "54",
       "68",
       "62"
     ]
  }, // 8*8
];