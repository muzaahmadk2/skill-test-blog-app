import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';

const App = () => {
  const [userSelected, setUserSelected] = useState(1);

  return (
    <div className="App">
      <NavBar onUserSelected={setUserSelected} />
      <Main userSelected={userSelected} />
    </div>
  );
};

export default App;
