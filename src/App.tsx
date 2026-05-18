/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import Exercises from './components/Exercises';
import Routine from './components/Routine';
import Mistakes from './components/Mistakes';
import Footer from './components/Footer';
import ChatCoach from './components/ChatCoach';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <TheProblem />
        <Exercises />
        <Routine />
        <Mistakes />
      </main>
      <Footer />
      <ChatCoach />
    </div>
  );
}

