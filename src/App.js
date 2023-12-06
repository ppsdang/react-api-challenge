import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ResourceList from './components/ResourceList/ResourceList';
import ResourceDetail from './components/ResourceDetail/ResourceDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/resources" element={<ResourceList />} />
          <Route path="/resource/:id" element={<ResourceDetail />} />
          <Route path="/" element={<LoginComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
