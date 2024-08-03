import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizzesData from '../../utils/quizzesData';
import QuestionComponent from '../../components/QuestionComponent/QuestionComponent';

const Quiz = () => {
  const { quizId } = useParams();
  const quiz = quizzesData.find((q) => q.id === quizId);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quiz.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      navigate(`/quiz/${quizId}/results`, { state: { score, total: quiz.questions.length } });
    }
  };

  if (!quiz) {
    return <div className="text-center text-red-500">Quiz not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-4">
      <h2 className="text-3xl font-bold text-white mb-6">{quiz.title}</h2>
      <QuestionComponent
        question={quiz.questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;
