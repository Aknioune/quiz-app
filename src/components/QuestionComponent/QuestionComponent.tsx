import React from 'react';

interface QuestionComponentProps {
  question: {
    text: string;
    options: { text: string; isCorrect: boolean }[];
  };
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question, onAnswer }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
      <h3 className="text-2xl font-bold mb-4">{question.text}</h3>
      <ul className="space-y-2">
        {question.options.map((option, index) => (
          <li key={index}>
            <button
              onClick={() => onAnswer(option.isCorrect)}
              className="block w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
