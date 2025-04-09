import React from 'react';
import './App.css';
import './Styles/resets.css';
import './Styles/mainStyle.css';
import './Styles/oseStyle.css';
import './Styles/srFontStyle.css';
import './Styles/srGridDeclorations.css';
import './Styles/srStyle.css';
import NavBar from './Components/NavBar';
import WelcomeScreen from './Components/WelcomeScreen';
import OseCharacterPage from './Components/OseCharacterPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeScreen />
      <OseCharacterPage />
    </div>
  );
}

export default App;
