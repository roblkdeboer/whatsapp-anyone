import { ThemeProvider } from '@material-ui/core/styles';
import Header from './components/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
