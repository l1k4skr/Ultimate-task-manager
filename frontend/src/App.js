import './App.css';
import React from 'react';
import Header from './components/Header.js';


const App = () => {
  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <main className=''>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className='"text-5xl font-bold text-center text-gray-800 mt-10"'>
            Welcome to Task Manager
          </h1>
          <p className="text-center text-gray-600 mt-5">
            Task Manager is a simple task management app built with Django and React.
          </p>
        </div>
        
      </main>
    </div>
  );
};

export default App;
