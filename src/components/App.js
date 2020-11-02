import React from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import PhoneBooks from './PhoneBooks/PhoneBooks';
// uuidv4();


const App = () => {
  return (
    <PhoneBooks />
  );
};

export default App;