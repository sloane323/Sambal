// App.js
import React, { useState } from 'react';
import Main from './Pages/Main';
import SideMain from './Component/Side/SideMain';
import './App.css';


function App() {
  const [selectedTab, setSelectedTab] = useState('home');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="All">
    <div className="cover">
      <SideMain onTabClick={handleTabClick} />
      <Main selectedTab={selectedTab} />
    </div> </div>
  );
}

export default App;
