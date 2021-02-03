import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import GlobalStyles from './styles/GlobalStyles';
import Content from './components/Content'


function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Header />
      <Intro />
      <Content />
    </div>
  );
}

export default App;
