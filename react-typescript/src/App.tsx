import React from 'react';
import logo from './logo.svg';
import './App.css';

import AddUser from './components/addUser'
import User from './components/user'

function App() {
  return (
    <div className="App">
      <AddUser />
      <User />
    </div>
  );
}

export default App;
