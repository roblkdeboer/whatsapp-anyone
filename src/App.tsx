import { ThemeProvider } from '@material-ui/core/styles';
import Form from './components/Form';
import Header from './components/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header />
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
