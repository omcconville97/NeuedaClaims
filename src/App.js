import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import NewClaim from './components/NewClaim';
import SearchClaim from './components/SearchClaims/SearchClaim';
import Footer from './components/Navigation/Footer';
import OpenClaims from './components/OpenClaims/OpenClaims';
import DisplayClaim from './components/ArchiveClaims/DisplayClaim';
import Error404 from './components/Error/Error404';
import HomePage from './components/Home/HomePage';
import { useState } from 'react';
import TestComponent from './components/TestComponent';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  
  return (
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newclaim" element={<NewClaim />} />

            <Route path="/test" element={<TestComponent />} />

            <Route path="/searchclaim" element={<SearchClaim setSearchTerm={setSearchTerm} />} />
            <Route path="/openclaims" element={<OpenClaims />} />
            <Route path="/displayclaims" element={<DisplayClaim searchTerm={searchTerm}/>} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
