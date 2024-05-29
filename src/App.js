import './App.css';
import Space from './space.js'; // Import the Space component
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/projects/Portfolio';

const App = () => {
  const getWeekNumber = (date) => {
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    return Math.ceil((date.getDay() + 1 + days) / 7);
  };

  const currentWeek = getWeekNumber(new Date());
  const cycleWeek = (currentWeek % 3) + 1;
  const bgGif = require(`./assets/bgvideo${cycleWeek}.gif`);

  return (
    <>
      <div className="video-background" style={{ backgroundImage: `url(${bgGif})` }}></div>
      <div className="content-container"></div>
      <Space /> {/* Mouse trail animation */}
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Portfolio />
        <Contact />
      </main>
      <ScrollUp />
    </>
  );
}

export default App;
