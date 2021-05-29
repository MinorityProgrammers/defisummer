import {createMuiTheme, ThemeProvider} from '@material-ui/core'

import Homepage from './pages/Homepage'

const theme = createMuiTheme({
    source:{
      typography: {
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
