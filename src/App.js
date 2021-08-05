//Black: #1B1F00
//Hot Pink: #F40075

import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box, Grommet } from 'grommet';
import AppBar from './Components/AppBar';
import UnknownPage from './UnknownPage';
import AppPage from './AppPage';
import NewAppPage from './NewAppPage';

const theme = {
  global: {
    focus: {
      shadow: {
        size: '0px'
      },
      outline: {
        size: '2px',
        color: 'rubyPink',
        radius: '10px'
      },
    },
    textArea: {
      extend: {
        color: 'purple'
      },
    },
    colors: {
      background: 'appBarTextColor',
      placeholder: '#cccccc',
      border: 'white',
      lightColor: '#F40075',
      darkColor: '#1B1F00',
      darkBlue: '#090B00',
      myYellow: '#EDF67D'
    },
    font: {
      family: 'Nunito',
      size: '18px',
      height: '20px',
    },
  },
  heading: {
    level: {
      '4': {
        color: '#ff0000',
        font: {
          weight: '200'
        }
      }
    }
  },
};

class App extends Component {

  render() {
    return (
      <Grommet theme={ theme }>
        <BrowserRouter>
          <Box flex='grow' width='100vw' margin='none'direction='column'>
            <AppBar />
            <Box align='center' justify='center' background='darkBlue' flex='grow' margin={{ top: '60px' }} style={{ minHeight: 'calc(100vh - 60px)' }} >
              <Switch>
                <Route path='/apps' exact>
                  <AppPage />
                </Route>
                <Route path='/apps/plus' exact>
                  <NewAppPage />
                </Route>
                <Route path='/'>
                  <UnknownPage />
                </Route>
              </Switch>
            </Box>
          </Box>
        </BrowserRouter>
      </Grommet>
    );
  }
}




export default App;
