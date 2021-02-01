import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import GlobalStyles from './styles/GlobalStyles';


function App() {
  return (
    <div className="App">
      <GlobalStyles></GlobalStyles>
      <Header></Header>
      <Intro></Intro>
    </div>
  );
}

export default App;
