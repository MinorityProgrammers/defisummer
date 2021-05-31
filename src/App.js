import {createMuiTheme, ThemeProvider} from '@material-ui/core'

import Homepage from './pages/Homepage'

const theme = createMuiTheme({
      typography: {
        h5:{
          fontFamily: 'Open Sans',
          fontWeight: 700
        },
        body1:{
          fontFamily: 'Open Sans', 
        },
        body2:{
          fontFamily: 'Open Sans',
        }
      }
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage/>
    </ThemeProvider>
  );
}

export default App;
