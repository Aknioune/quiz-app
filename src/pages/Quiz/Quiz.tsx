import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import quizzesData from '../../utils/quizzesData';
import QuestionComponent from '../../components/QuestionComponent/QuestionComponent';

const Quiz = () => {
  const { quizId } = useParams<{ quizId: string }>();
  const [quiz, setQuiz] = useState<{ id: string; title: string; questions: any[] } | undefined>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  useEffect(() => {
    const selectedQuiz = quizzesData.find((quiz) => quiz.id === quizId);
    setQuiz(selectedQuiz);
  }, [quizId]);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (quiz && selectedOption) {
      if (selectedOption === quiz.questions[currentQuestionIndex].correctAnswer) {
        setScore(score + 1);
      }
      setSelectedOption(null);
      if (currentQuestionIndex < quiz.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert(`Quiz Finished! Your score is ${score + 1}/${quiz.questions.length}`);
      }
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <nav className="w-full flex items-center justify-between bg-white py-4 px-6 shadow-md">
        <Link to="/" className="text-2xl font-bold text-[#801BEC]">
          Quiz-App
        </Link>
      </nav>
      <h1 className="text-4xl font-bold text-[#801BEC] my-8">{quiz.title}</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg  p-4">
        <QuestionComponent question={quiz.questions[currentQuestionIndex]} onOptionSelect={handleOptionSelect} />
        <div className="flex justify-between mt-4">
          <button
            onClick={handlePrevQuestion}
            className="py-2 px-4 bg-[#801BEC] text-white rounded hover:bg-purple-700 transition duration-300"
            disabled={currentQuestionIndex === 0}
          >
            Passe
          </button>
          <button
            onClick={handleNextQuestion}
            className="py-2 px-4 bg-[#801BEC] text-white rounded hover:bg-purple-700 transition duration-300"
            disabled={!selectedOption}
          >
            Valide
          </button>
        </div>
      </div>
      <div className="mt-4 text-xl text-[#801BEC]">Score: {score}</div>
    </div>
  );
};

export default Quiz;
