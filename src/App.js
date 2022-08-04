import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import CardList from './components/CardList';
import Footer from './components/Footer';
import GlobalStyles from './components/styles/Global';
import content from './content';

const theme = {
  colors: {
    header :  '#00008b',
    body: '#fff',
    footer: '#ebfbff'
  },
  mobile : '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <Header/>
        <CardList data={content} />
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;

