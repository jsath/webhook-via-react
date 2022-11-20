import './App.css';
import DiscordButton from './components/DiscordButton';

function App() {
  return (
    <div className="App">

      {/*Sending webhook message occurs in DiscordButton component*/}
      <DiscordButton/>

    </div>
  );
}

export default App;
