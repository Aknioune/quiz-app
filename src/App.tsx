import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:quizId" element={<Quiz />} />
      <Route path="/quiz/:quizId/results" element={<Result />} />
    </Routes>
  );
};

export default App;
