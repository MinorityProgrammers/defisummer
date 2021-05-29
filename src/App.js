import {createMuiTheme, ThemeProvider} from '@material-ui/core'

import Homepage from './pages/Homepage'

const theme = createMuiTheme({
  palette:{
    primary: {
      main: '#FFD546'
    }
  }
})
function App() {
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
