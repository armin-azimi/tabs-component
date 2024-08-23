import { useState, useEffect } from 'react';
import Header from './Header';
import Tabs from './Tabs';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState(() => {
 
    const savedTab = localStorage.getItem('activeTab');
    return savedTab ? JSON.parse(savedTab) : 0; 
  });

  useEffect(() => {
    
    localStorage.setItem('activeTab', JSON.stringify(activeTab));
  }, [activeTab]);

  return (
    <div className="App">
      <Header />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;