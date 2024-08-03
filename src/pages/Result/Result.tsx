import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 0 };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-orange-500 p-4">
      <h2 className="text-3xl font-bold text-white mb-6">Quiz Results</h2>
      <p className="text-2xl text-white mb-4">
        You scored {score} out of {total}
      </p>
      <button
        onClick={() => navigate('/')}
        className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Back to Home
      </button>
    </div>
  );
};

export default Result;
