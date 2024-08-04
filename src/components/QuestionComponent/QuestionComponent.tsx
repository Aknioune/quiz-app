import React from 'react';

interface QuestionComponentProps {
  question: {
    questionText: string;
    options: string[];
    correctAnswer: string;
  };
  onOptionSelect: (option: string) => void;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({ question, onOptionSelect }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-[#801BEC]">Question :</h2>
      <p className="mb-4">{question.questionText}</p>
      <h3 className="text-xl font-bold mb-2 text-[#801BEC]">Options :</h3>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} className="mb-2">
            <button
              onClick={() => onOptionSelect(option)}
              className="w-full text-left py-2 px-4 border border-[#801BEC] text-[#801BEC] rounded hover:bg-purple-100 transition duration-300"
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionComponent;
