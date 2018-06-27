import React from 'react';
import InnerPage from '../layouts/innerPage';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme();
const App = () => (
    <MuiThemeProvider theme={theme}>
      <InnerPage />
    </MuiThemeProvider>
)

export default App
