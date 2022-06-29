import Header from './components/Header';
import './App.css';
import './index.css';
import Pass from './components/Pass';

const App = () => {
  return (
    <div>
      <Header />
      <div className='App-footer'>
        <img src={require(`./image/logo-clean3000-mini.png`)} alt="logo" className="logo-miniH" />
      </div>
      <div className='center'>

        <h2>Avis de passage</h2>

        <Pass />
      </div>
    </div>
  );
}

export default App;
