import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NewClaim from './components/NewClaim';
import SearchClaim from './components/SearchClaims/SearchClaim';
import Footer from './components/Navigation/Footer';
import OpenClaims from './components/OpenClaims/OpenClaims';
import DisplayClaim from './components/ArchiveClaims/DisplayClaim';




function App() {
  
  return (
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<NewClaim />} />
            <Route path="/searchclaim" element={<SearchClaim />} />
            <Route path="/openclaims" element={<OpenClaims />} />
            <Route path="/displayclaims" element={<DisplayClaim />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
