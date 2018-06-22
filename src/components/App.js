import React, { Component } from 'react';
import InnerPage from '../layouts/innerPage';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import Vendors from '../components/Vendor/index';


const theme = createMuiTheme();
const App = () => (
  <div>
    <MuiThemeProvider theme={theme}>
      <InnerPage />
    </MuiThemeProvider>
  </div>
)

export default App
