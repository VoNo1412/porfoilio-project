import './App.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Footer from './components/Footer.tsx';
import About from './pages/About.tsx';
import Work from './pages/Work.tsx';
import Contact from './pages/Contact.tsx';

function App() {
  return (
    <>
      <main>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element={<Work />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer/>
        </div>
      </main>
    </>
  );
}

export default App;