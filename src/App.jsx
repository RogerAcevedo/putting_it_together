import logo from './logo.svg';
import './App.css';

import PersonCard from './components/putting_it_together';
import { useState } from 'react';

function App() {

// CREATE NEW 




  return (
    <div className="App">
      < PersonCard firstName="Naruto" lastName="Uzumaki" age={17} hairColor="Yellow" />
      < PersonCard firstName="Sasuke" lastName="Uchiha" age={18} hairColor="Black" />
      < PersonCard firstName="Sakura" lastName="Idk" age={19} hairColor="Pink" />
    </div>
  );
}

export default App;
