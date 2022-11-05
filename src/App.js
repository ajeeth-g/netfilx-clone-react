import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './Pages/HomeScreen/HomeScreen';
import './App.css';
const App = () => {
  const user = {
    name: 'Jack',
    email: 'jack@gmail.com',
    password: '13',
  };
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <h1>Login Screen</h1>
        ) : (
          <Routes>
            {/* <Route path='/profile' element={}/> */}
            <Route path='/' element={<HomeScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
};

export default App;
