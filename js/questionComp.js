// creating an array and passing the number, questions, options, and answers
let questions = [
	{
	  numb: 1,
	  question: "What is 12 * 12  ?",
	  answer: "144",
	  options: [
		"144",
		"142",
		"124",
		"128"
	  ]
	}, // 12*12
	{
	  numb: 2,
	  question: "What is 14 * 10  ?",
	  answer: "140",
	  options: [
		"104",
		"124",
		"144",
		"140"
	  ]
	}, // 14*10
	{
	  numb: 3,
	  question: "What is 11 * 11  ?",
	  answer: "121",
	  options: [
		"111",
		"121",
		"122",
		"110"
	  ]
	}, // 11*11
	{
	  numb: 4,
	  question: "What is 15 * 20  ?",
	  answer: "300",
	  options: [
		"305",
		"300",
		"320",
		"325"
	  ]
	}, // 15*20
	{
	  numb: 5,
	  question: "What is 13 * 30  ?",
	  answer: "390",
	  options: [
		"333",
		"393",
		"330",
		"390"
	  ]
	}, // 13*30
	{
	   numb: 6,
	   question: "What is 15 * 40  ?",
	   answer: "600",
	   options: [
		 "540",
		 "550",
		 "600",
		 "640"
	   ]
	}, // 15*40
	{
	  numb: 7,
	  question: "What is 16 * 16  ?",
	  answer: "256",
	  options: [
		"256",
		"266",
		"244",
		"216"
	  ]
	}, // 16*16
	{
	  numb: 8,
	  question: "What is 18 * 18  ?",
	  answer: "324",
	  options: [
		"344",
		"326",
		"334",
		"324"
	  ]
	}, // 18*18
	{
	  numb: 9,
	  question: "What is 17 * 30  ?",
	  answer: "510",
	  options: [
		"513",
		"610",
		"511",
		"510"
	  ]
	}, // 17*30
	{
	  numb: 10,
	  question: "What is 19 * 20  ?",
	  answer: "380",
	  options: [
		"388",
		"380",
		"378",
		"389"
	  ]
	}, // 19*20
	{
	  numb: 11,
	  question: "What is 12 * 80  ?",
	  answer: "960",
	  options: [
		"962",
		"882",
		"960",
		"860"
	  ]
	}, // 12*80
	{
	   numb: 12,
	   question: "What is 14 * 14  ?",
	   answer: "196",
	   options: [
		 "196",
		 "194",
		 "189",
		 "192"
	   ]
	}, // 14*14
	{
	  numb: 13,
	  question: "What is 11 * 300  ?",
	  answer: "3300",
	  options: [
		"3200",
		"3310",
		"3300",
		"3333"
	  ]
	}, // 11*300
	{
	  numb: 14,
	  question: "What is 15 * 15  ?",
	  answer: "225",
	  options: [
		"220",
		"205",
		"215",
		"225"
	  ]
	}, // 15*15
	{
	  numb: 15,
	  question: "What is 13 * 13  ?",
	  answer: "169",
	  options: [
		"163",
		"166",
		"169",
		"179"
	  ]
	}, // 13*13
	{
	  numb: 16,
	  question: "What is 15 * 25  ?",
	  answer: "375",
	  options: [
		"375",
		"355",
		"255",
		"305"
	  ]
	}, // 15*25
	{
	  numb: 17,
	  question: "What is 13 * 20  ?",
	  answer: "260",
	  options: [
		"263",
		"256",
		"266",
		"260"
	  ]
	}, // 13*20
	{
	   numb: 18,
	   question: "What is 16 * 20  ?",
	   answer: "320",
	   options: [
		 "320",
		 "322",
		 "326",
		 "366"
	   ]
	}, // 16*20
	{
	  numb: 19,
	  question: "What is 18 * 12  ?",
	  answer: "216",
	  options: [
		"216",
		"266",
		"212",
		"210"
	  ]
	}, // 18*12
	{
	  numb: 20,
	  question: "What is 17 * 17  ?",
	  answer: "289",
	  options: [
		"288",
		"289",
		"279",
		"287"
	  ]
	}, // 17*17
	{
	  numb: 21,
	  question: "What is 19 * 19  ?",
	  answer: "361",
	  options: [
		"361",
		"321",
		"366",
		"320"
	  ]
	}, // 19*19
	{
	  numb: 22,
	  question: "What is 12 * 40  ?",
	  answer: "480",
	  options: [
		"488",
		"484",
		"440",
		"480"
	  ]
	}, // 12*40
	{
	  numb: 23,
	  question: "What is 14 * 12  ?",
	  answer: "168",
	  options: [
		"144",
		"186",
		"166",
		"168"
	  ]
	}, // 14*12
	{
	   numb: 24,
	   question: "What is 11 * 20  ?",
	   answer: "220",
	   options: [
		 "222",
		 "220",
		 "212",
		 "202"
	   ]
	}, // 11*20
	{
	  numb: 25,
	  question: "What is 16 * 30  ?",
	  answer: "480",
	  options: [
		"464",
		"468",
		"488",
		"480"
	  ]
	}, // 16*30
	{
	  numb: 26,
	  question: "What is 18 * 200  ?",
	  answer: "3600",
	  options: [
		"3606",
		"3666",
		"3600",
		"3060"
	  ]
	}, // 18*200
	{
	  numb: 27,
	  question: "What is 17 * 22  ?",
	  answer: "374",
	  options: [
		"374",
		"344",
		"324",
		"377"
	  ]
	}, // 17*22
	{
	  numb: 28,
	  question: "What is 19 * 30  ?",
	  answer: "570",
	  options: [
		"527",
		"577",
		"570",
		"550"
	  ]
	}, // 19*30
	{
	  numb: 29,
	  question: "What is 12 * 20  ?",
	  answer: "240",
	  options: [
		"244",
		"220",
		"210",
		"240"
	  ]
	}, // 12*20
	{
	   numb: 30,
	   question: "What is 25 * 25  ?",
	   answer: "625",
	   options: [
		 "625",
		 "655",
		 "620",
		 "555"
	   ]
	}, // 25*25
	{
	  numb: 31,
	  question: "What is 30 * 25  ?",
	  answer: "750",
	  options: [
		"750",
		"770",
		"730",
		"725"
	  ]
	}, // 30*25
	{
	  numb: 32,
	  question: "What is 24 * 24  ?",
	  answer: "576",
	  options: [
		"576",
		"560",
		"566",
		"570"
	  ]
	}, // 24*24
	{
	  numb: 33,
	  question: "What is 35 * 30  ?",
	  answer: "1050",
	  options: [
		"1250",
		"1555",
		"1550",
		"1050"
	  ]
	}, // 35*30
	{
	  numb: 34,
	  question: "What is 20 * 21  ?",
	  answer: "420",
	  options: [
		"420",
		"422",
		"424",
		"444"
	  ]
	}, // 20*21
	{
	  numb: 35,
	  question: "What is 14 * 15  ?",
	  answer: "210",
	  options: [
		"220",
		"210",
		"211",
		"212"
	  ]
	}, // 14*15
	{
	   numb: 36,
	   question: "What is 11 * 30  ?",
	   answer: "330",
	   options: [
		 "323",
		 "333",
		 "330",
		 "320"
	   ]
	}, // 11*30
    {
	  numb: 37,
	  question: "What is 13 * 15  ?",
	  answer: "195",
	  options: [
		"195",
		"155",
		"199",
		"135"
	  ]
	}, // 13*15
	{
	  numb: 38,
	  question: "What is 25 * 22  ?",
	  answer: "550",
	  options: [
		"515",
		"555",
		"525",
		"550"
	  ]
	}, // 25*22
	{
	  numb: 39,
	  question: "What is 30 * 12  ?",
	  answer: "360",
	  options: [
		"326",
		"360",
		"366",
		"316"
	  ]
	}, // 30*12
	{
	  numb: 40,
	  question: "What is 14 * 25  ?",
	  answer: "350",
	  options: [
		"355",
		"350",
		"324",
		"320"
	  ]
	}, // 14*25
	{
	  numb: 41,
	  question: "What is 25 * 45  ?",
	  answer: "1125",
	  options: [
		"1125",
		"1100",
		"1200",
		"1222"
	  ]
	}, // 25*45
	{
	   numb: 42,
	   question: "What is 30 * 11  ?",
	   answer: "330",
	   options: [
		 "313",
		 "335",
		 "333",
		 "330"
	   ]
	}, // 30*11
	{
	  numb: 43,
	  question: "What is 24 * 20  ?",
	  answer: "480",
	  options: [
		"480",
		"488",
		"448",
		"444"
	  ]
	}, // 24*20
	{
	  numb: 44,
	  question: "What is 30 * 35  ?",
	  answer: "1050",
	  options: [
		"1050",
		"1150",
		"1250",
		"1200"
	  ]
	}, // 30*35
	{
	  numb: 45,
	  question: "What is 35 * 12  ?",
	  answer: "420",
	  options: [
		"432",
		"412",
		"422",
		"420"
	  ]
	}, // 35*12
	{
	  numb: 46,
	  question: "What is 20 * 45  ?",
	  answer: "900",
	  options: [
		"990",
		"900",
		"850",
		"845"
	  ]
	}, // 20*45
	{
	  numb: 47,
	  question: "What is 12 * 50  ?",
	  answer: "600",
	  options: [
		"550",
		"600",
		"660",
		"650"
	  ]
	}, // 12*50
	{
	   numb: 48,
	   question: "What is 16 * 15  ?",
	   answer: "240",
	   options: [
		 "235",
		 "260",
		 "240",
		 "220"
	   ]
	}, // 16*15
	{
	  numb: 49,
	  question: "What is 20 * 25  ?",
	  answer: "500",
	  options: [
		"425",
		"450",
		"550",
		"500"
	  ]
	}, // 20*25
	{
	   numb: 50,
	   question: "What is 19 * 12  ?",
	   answer: "228",
	   options: [
		 "228",
		 "238",
		 "220",
		 "288"
	   ]
	}, // 19*12
];