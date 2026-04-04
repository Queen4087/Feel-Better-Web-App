import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HappinessButton from './components/HappinessButton';
import MoodInput from './components/MoodInput';
import Relaxation from './components/Relaxation';
import MiniGame from './components/MiniGame';
import Journal from './components/Journal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Hero />
        
        <section id="happiness">
          <HappinessButton />
        </section>

        <section id="mood">
          <MoodInput />
        </section>

        <section id="relax">
          <Relaxation />
        </section>

        <section id="game">
          <MiniGame />
        </section>

        <section id="journal">
          <Journal />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
