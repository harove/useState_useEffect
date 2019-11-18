import React, {useState,useDebugValue} from 'react';
import './App.css';
import CardDefault from './components/card-default/CardDefault'
import InputEmail from './components/input-email/InputEmail';
import InputPassword from './components/input-password/InputPassword';

function App() {
  const [email,setEmail] = useState('aStateVariableEmail');
  //useDebugValue(email, n => `hola${n}`);


  return (
    <div className="App">
      <CardDefault title = "Hallo Welt"   />

    </div>
  );
}

export default App;
