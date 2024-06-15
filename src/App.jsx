import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/aboutMe';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import Footer from './components/footer';
import Header from './components/header';

function App() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/AboutMe' element={<AboutMe />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio/>} />
        </Routes>
        <Footer /> 
      </Router>
    );
  }
  
  export default App;