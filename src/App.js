import React from 'react';
import Champions from './champions/Champions'
import Results from './Results/Results'
import Items from './items/Items'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './theme/theme'
import './App.css';
import { StylingWrapper } from './theme/stylingWrapper'

function App() {
  const dark = true
  return (
    <ThemeProvider theme={ dark ? darkTheme : lightTheme }>
        <StylingWrapper>
          <div className="App">
            <div className='content'>
              <div className='header'>
                <div className='textContainer'>TFT CALCULATOR</div>
              </div>
              <div className='body'>
                <Champions/>
                <Results/>
                <Items/>
              </div>
            <div className='footer'/>
          </div>
        </div>
      </StylingWrapper>
    </ThemeProvider>
  );
}

export default App;
