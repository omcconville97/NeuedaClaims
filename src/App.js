import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Navigation/Footer';
import OpenClaims from './components/OpenClaims/OpenClaims';
import Error404 from './components/Error/Error404';
import HomePage from './components/Home/HomePage';
import { useState } from 'react';
import AddTask from './components/Tasks/AddTask';
import FindDisplaysPage from './components/DisplayClaims/FindDisplaysPage';
import NewClaim from './components/NewClaims/NewClaim';
import ArchivedClaims from './components/ArchivedClaims/ArchivedClaims';
import store from './store/store';

function App() {

  const [searchTerm, setSearchTerm] = useState("");
  
  return (
      <Router>
        <Provider store={store} >
        <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newclaim" element={<NewClaim />} />
            <Route path="/openclaims" element={<OpenClaims />} />
            <Route path="/archiveclaims" element={<ArchivedClaims />} />
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
        </Provider>
      </Router>
  );
}

export default App;
