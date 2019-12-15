import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';

import './App.css'
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
   
      <AuthContextProvider>
        <ThemeContextProvider>
          <div className="App">
            <Navbar/>
            <Booklist/>
            <ToggleTheme/>
          </div>
        </ThemeContextProvider>
      </AuthContextProvider>
   
  );
}

export default App;
