import React, { useState } from 'react';
import './App.css';
import { ThemContext } from './contexts/theme-context';
import { UserContext } from './contexts/user-context';
import Wrapper from './components/Wrapper';
import Content from './components/Content';

function App() {
  const [theme] = useState('dark');
  const [user] = useState('John');

  return (
    <div className="App">
      <ThemContext.Provider value={theme}>
        <UserContext.Provider value={{ name: `hello ${user}` }}>
          <Wrapper>
            <Content />
          </Wrapper>
        </UserContext.Provider>
      </ThemContext.Provider>
    </div>
  );
}

export default App;
