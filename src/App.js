import React from 'react';
import Navbar from './components/Navbar';
import ProblemStatement from './components/ProblemStatement';
import Stats from './components/Stats';
import Sponsors from './components/Sponsors';
import Team from './components/Team';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import Popup from './components/Popup';
import WinnerPopup from './components/WinnerPopup'; // Import the new component

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Popup />
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-10">
          <img 
            src="/images/techcider-dark.png" // Make sure the path is correct for your project
            alt="TechCider Club Logo" 
            className="h-24 mb-2 ml-8" 
          />
          <h2 className="text-4xl font-bold text-center text-orange-300">
            Presents
          </h2>
        </div>
        <h1 className="text-5xl font-bold text-center mb-10">
          IdeaHub 2.0: The Ultimate Tech Challenge
        </h1>
        <ProblemStatement />
        <Stats />
        <Roadmap />
        <Sponsors />
        <Team />
      </main>
      <Footer />
      <WinnerPopup /> {/* Add WinnerPopup at the bottom */}
    </div>
  );
};

export default App;
