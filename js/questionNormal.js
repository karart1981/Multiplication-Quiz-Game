// creating an array and passing the number, questions, options, and answers
let questions = [
	{
	  numb: 1,
	  question: "What is 12 * 4  ?",
	  answer: "48",
	  options: [
		"42",
		"48",
		"44",
		"46"
	  ]
	}, // 12*4
	{
	  numb: 2,
	  question: "What is 15 * 5  ?",
	  answer: "75",
	  options: [
		"85",
		"65",
		"70",
		"75"
	  ]
	}, // 15*5
	{
	  numb: 3,
	  question: "What is 12 * 8  ?",
	  answer: "96",
	  options: [
		"96",
		"98",
		"94",
		"92"
	  ]
	}, // 12*8
	{
	  numb: 4,
	  question: "What is 13 * 5  ?",
	  answer: "65",
	  options: [
		"66",
		"67",
		"55",
		"65"
	  ]
	}, // 13*5
	{
	  numb: 5,
	  question: "What is 18 * 3  ?",
	  answer: "54",
	  options: [
		"54",
		"64",
		"52",
		"68"
	  ]
	}, // 18*3
	{
	   numb: 6,
	   question: "What is 16 * 8  ?",
	   answer: "128",
	   options: [
		 "122",
		 "120",
		 "124",
		 "128"
	   ]
	}, // 16*8
	{
	  numb: 7,
	  question: "What is 14 * 4  ?",
	  answer: "56",
	  options: [
		"56",
		"58",
		"52",
		"54"
	  ]
	}, // 14*4
	{
	  numb: 8,
	  question: "What is 11 * 3  ?",
	  answer: "33",
	  options: [
		"31",
		"43",
		"35",
		"33"
	  ]
	}, // 11*3
	{
	  numb: 9,
	  question: "What is 15 * 4  ?",
	  answer: "60",
	  options: [
		"60",
		"64",
		"54",
		"90"
	  ]
	}, // 15*4
	{
	  numb: 10,
	  question: "What is 13 * 2  ?",
	  answer: "26",
	  options: [
		"20",
		"26",
		"24",
		"22"
	  ]
	}, // 13*2
	{
	  numb: 11,
	  question: "What is 18 * 5  ?",
	  answer: "90",
	  options: [
		"85",
		"90",
		"68",
		"78"
	  ]
	}, // 18*5
	{
	   numb: 12,
	   question: "What is 16 * 3  ?",
	   answer: "48",
	   options: [
		 "41",
		 "38",
		 "43",
		 "48"
	   ]
	}, // 16*3
	{
	  numb: 13,
	  question: "What is 14 * 2  ?",
	  answer: "28",
	  options: [
		"28",
		"18",
		"26",
		"24"
	  ]
	}, // 14*2
	{
	  numb: 14,
	  question: "What is 11 * 9  ?",
	  answer: "99",
	  options: [
		"98",
		"99",
		"89",
		"87"
	  ]
	}, // 11*9
	{
	  numb: 15,
	  question: "What is 12 * 3  ?",
	  answer: "36",
	  options: [
		"32",
		"34",
		"46",
		"36"
	  ]
	}, // 12*3
	{
	  numb: 16,
	  question: "What is 15 * 2  ?",
	  answer: "30",
	  options: [
		"35",
		"25",
		"30",
		"32"
	  ]
	}, // 15*2
	{
	  numb: 17,
	  question: "What is 13 * 4  ?",
	  answer: "52",
	  options: [
		"42",
		"54",
		"56",
		"52"
	  ]
	}, // 13*4
	{
	   numb: 18,
	   question: "What is 18 * 2  ?",
	   answer: "36",
	   options: [
		 "28",
		 "46",
		 "26",
		 "36"
	   ]
	}, // 18*2
	{
	  numb: 19,
	  question: "What is 16 * 4  ?",
	  answer: "64",
	  options: [
		"64",
		"54",
		"48",
		"52"
	  ]
	}, // 16*4
	{
	  numb: 20,
	  question: "What is 14 * 3  ?",
	  answer: "42",
	  options: [
		"52",
		"44",
		"32",
		"42"
	  ]
	}, // 14*3
	{
	  numb: 21,
	  question: "What is 11 * 5  ?",
	  answer: "55",
	  options: [
		"55",
		"65",
		"51",
		"56"
	  ]
	}, // 11*5
	{
	  numb: 22,
	  question: "What is 12 * 2  ?",
	  answer: "24",
	  options: [
		"22",
		"24",
		"34",
		"32"
	  ]
	}, // 12*2
	{
	  numb: 23,
	  question: "What is 15 * 3  ?",
	  answer: "45",
	  options: [
		"55",
		"43",
		"45",
		"35"
	  ]
	}, // 15*3
	{
	   numb: 24,
	   question: "What is 13 * 3  ?",
	   answer: "39",
	   options: [
		 "39",
		 "33",
		 "30",
		 "49"
	   ]
	}, // 13*3
	{
	  numb: 25,
	  question: "What is 18 * 4  ?",
	  answer: "72",
	  options: [
		"72",
		"62",
		"74",
		"78"
	  ]
	}, // 18*4
	{
	  numb: 26,
	  question: "What is 16 * 1  ?",
	  answer: "16",
	  options: [
		"12",
		"17",
		"26",
		"16"
	  ]
	}, // 16*1
	{
	  numb: 27,
	  question: "What is 14 * 5  ?",
	  answer: "70",
	  options: [
		"70",
		"75",
		"60",
		"65"
	  ]
	}, // 14*5
	{
	  numb: 28,
	  question: "What is 11 * 2  ?",
	  answer: "22",
	  options: [
		"20",
		"32",
		"23",
		"22"
	  ]
	}, // 11*2
	{
	  numb: 29,
	  question: "What is 12 * 1  ?",
	  answer: "12",
	  options: [
		"13",
		"12",
		"22",
		"21"
	  ]
	}, // 12*1
	{
	   numb: 30,
	   question: "What is 15 * 7  ?",
	   answer: "105",
	   options: [
		 "105",
		 "115",
		 "85",
		 "107"
	   ]
	}, // 15*7
	{
	  numb: 31,
	  question: "What is 13 * 6  ?",
	  answer: "78",
	  options: [
		"68",
		"76",
		"73",
		"78"
	  ]
	}, // 13*6
	{
	  numb: 32,
	  question: "What is 18 * 1  ?",
	  answer: "18",
	  options: [
		"21",
		"19",
		"18",
		"28"
	  ]
	}, // 18*1
	{
	  numb: 33,
	  question: "What is 16 * 2  ?",
	  answer: "32",
	  options: [
		"28",
		"22",
		"18",
		"32"
	  ]
	}, // 16*2
	{
	  numb: 34,
	  question: "What is 14 * 1  ?",
	  answer: "14",
	  options: [
		"15",
		"14",
		"24",
		"11"
	  ]
	}, // 14*1
	{
	  numb: 35,
	  question: "What is 17 * 2  ?",
	  answer: "34",
	  options: [
		"34",
		"24",
		"31",
		"32"
	  ]
	}, // 17*2
	{
	   numb: 36,
	   question: "What is 11 * 4  ?",
	   answer: "44",
	   options: [
		 "34",
		 "24",
		 "44",
		 "45"
	   ]
	}, // 11*4
    {
	  numb: 37,
	  question: "What is 17 * 3  ?",
	  answer: "51",
	  options: [
		"45",
		"41",
		"53",
		"51"
	  ]
	}, // 17*3
	{
	  numb: 38,
	  question: "What is 12 * 5  ?",
	  answer: "60",
	  options: [
		"65",
		"60",
		"52",
		"55"
	  ]
	}, // 12*5
	{
	  numb: 39,
	  question: "What is 15 * 6  ?",
	  answer: "90",
	  options: [
		"80",
		"90",
		"96",
		"95"
	  ]
	}, // 15*6
	{
	  numb: 40,
	  question: "What is 13 * 1  ?",
	  answer: "13",
	  options: [
		"13",
		"14",
		"23",
		"15"
	  ]
	}, // 13*1
	{
	  numb: 41,
	  question: "What is 17 * 4  ?",
	  answer: "68",
	  options: [
		"68",
		"64",
		"58",
		"54"
	  ]
	}, // 17*4
	{
	   numb: 42,
	   question: "What is 11 * 8  ?",
	   answer: "88",
	   options: [
		 "89",
		 "99",
		 "98",
		 "88"
	   ]
	}, // 11*8
	{
	  numb: 43,
	  question: "What is 12 * 6  ?",
	  answer: "72",
	  options: [
		"66",
		"62",
		"72",
		"76"
	  ]
	}, // 12*6
	{
	  numb: 44,
	  question: "What is 15 * 1  ?",
	  answer: "15",
	  options: [
		"16",
		"15",
		"17",
		"14"
	  ]
	}, // 15*1
	{
	  numb: 45,
	  question: "What is 18 * 6  ?",
	  answer: "108",
	  options: [
		"98",
		"104",
		"106",
		"108"
	  ]
	}, // 18*6
	{
	  numb: 46,
	  question: "What is 17 * 1  ?",
	  answer: "17",
	  options: [
		"19",
		"27",
		"18",
		"17"
	  ]
	}, // 17*1
	{
	  numb: 47,
	  question: "What is 11 * 6  ?",
	  answer: "66",
	  options: [
		"56",
		"66",
		"65",
		"67"
	  ]
	}, // 11*6
	{
	   numb: 48,
	   question: "What is 14 * 6  ?",
	   answer: "84",
	   options: [
		 "68",
		 "64",
		 "86",
		 "84"
	   ]
	}, // 14*6
	{
	  numb: 49,
	  question: "What is 17 * 5  ?",
	  answer: "85",
	  options: [
		"65",
		"78",
		"75",
		"85"
	  ]
	}, // 17*5
	{
	   numb: 50,
	   question: "What is 11 * 7  ?",
	   answer: "77",
	   options: [
		 "77",
		 "87",
		 "78",
		 "67"
	   ]
	}, // 11*7
];