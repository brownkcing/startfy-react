import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import GlobalStyles from './styles/GlobalStyles';
import Content from './components/Content';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Intro />
      <Content />
      <Contact />
    </div>
  );
}

export default App;
