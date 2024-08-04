const quizzesData = [
  {
    id: '1',
    title: 'Math Quiz',
    type: 'math',
    questions: [
      {
        questionText: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        correctAnswer: '4'
      },
      {
        questionText: 'What is 3 * 3?',
        options: ['6', '7', '8', '9'],
        correctAnswer: '9'
      },
      {
        questionText: 'What is 10 - 4?',
        options: ['5', '6', '7', '8'],
        correctAnswer: '6'
      },
      {
        questionText: 'What is 5 / 1?',
        options: ['4', '5', '6', '7'],
        correctAnswer: '5'
      }
    ]
  },
  {
    id: '2',
    title: 'Science Quiz',
    type: 'science',
    questions: [
      {
        questionText: 'What planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        correctAnswer: 'Mars'
      },
      {
        questionText: 'What is the chemical symbol for water?',
        options: ['H2O', 'O2', 'CO2', 'HO'],
        correctAnswer: 'H2O'
      },
      {
        questionText: 'What gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Hydrogen', 'Nitrogen', 'Carbon Dioxide'],
        correctAnswer: 'Carbon Dioxide'
      },
      {
        questionText: 'What is the speed of light?',
        options: ['300,000 km/s', '150,000 km/s', '75,000 km/s', '30,000 km/s'],
        correctAnswer: '300,000 km/s'
      }
    ]
  }
];

export default quizzesData;
