import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';

import Footer from './components/Navigation/Footer';
import OpenClaims from './components/OpenClaims/OpenClaims';
import Error404 from './components/Error/Error404';
import HomePage from './components/Home/HomePage';
import { useState } from 'react';
import TestComponent from './components/TestComponent';
import AddTask from './components/Tasks/AddTask';
import FindDisplaysPage from './components/DisplayClaims/FindDisplaysPage';
import NewClaim from './components/NewClaims/NewClaim';


function App() {

  const [searchTerm, setSearchTerm] = useState("");
  
  return (
      <Router>
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newclaim" element={<NewClaim />} />
            <Route path="/test" element={<TestComponent />} />
            <Route path="/openclaims" element={<OpenClaims />} />
            <Route path="/find" element = {
            <FindDisplaysPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
            />
            <Route path="/find/:policyNumber" element = {
            <FindDisplaysPage searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> }
            />
            <Route path="/tasks" element={<AddTask />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        <Footer />
      </Router>
  );
}

export default App;
