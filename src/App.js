import { Header } from './components/header/Header';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header  />
      <Body className="Body" />
      <Footer className="Footer" />
    </div>
  );
}

export default App;
