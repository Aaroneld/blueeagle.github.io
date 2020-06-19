import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import NavBar from './NavBar'

function App() {
  const [globalStyleValues, setGlobalStyleValues] = useState({
    fontColor: 'black'
  })
  const { fontColor } = globalStyleValues

  const GloballyStyledDiv = styled.div`
    color: ${fontColor};

    a {
      color: ${fontColor};
      text-decoration: none;
    }
  `

  return (
    <GloballyStyledDiv className="App">
      <Router>
        <header>
          <NavBar style={globalStyleValues}/>
        </header>
      </Router>
    </GloballyStyledDiv>
  );
}

export default App;