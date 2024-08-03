import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import quizzesData from '../../utils/quizzesData';

const HomePage = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const filteredQuizzes = selectedType
    ? quizzesData.filter((quiz) => quiz.type === selectedType)
    : quizzesData;

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <nav className="w-full flex items-center justify-between bg-white py-4 px-6 shadow-md">
        <Link to="/" className="text-2xl font-bold text-[#801BEC]">
          Quiz-App
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-4xl font-bold text-[#801BEC] mb-8">Quiz App</h1>
        <div className="mb-6">
          <label className="text-gray-700 mr-2" htmlFor="type-select">Choose type of question:</label>
          <select
            id="type-select"
            className="p-2 rounded bg-[#801BEC] text-white"
            value={selectedType || ''}
            onChange={handleTypeChange}
          >
            <option value="">All</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
          </select>
        </div>
        <ul className="w-full max-w-md bg-white rounded-lg  p-4">
          {filteredQuizzes.map((quiz) => (
            <li key={quiz.id} className="mb-4">
              <Link
                to={`/quiz/${quiz.id}`}
                className="block w-full text-center py-2 px-4 bg-[#801BEC] text-white rounded hover:bg-purple-700 transition duration-300"
              >
                {quiz.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
