// src/Components/Home.jsx
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-600">This is the home page. Click below to view my profile.</p>
      <Link
        to="/profile"
        className="mt-6 text-lg text-blue-500 hover:text-blue-700"
      >
        Go to Profile
      </Link>
    </div>
  );
};

export default Home;
