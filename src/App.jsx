import React, {useState} from 'react';
import './App.css';
import CardDefault from './components/card-default/CardDefault'
import InputEmail from './components/input-email/InputEmail';



function App() {
  const [email,setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');


  return (
    <div className="App">
      <CardDefault title = "Hallo Welt"   />
      <InputEmail value = {email} onChange = {setEmail}/>
      <InputEmail value = {emailConfirm} onChange = {setEmailConfirm}/>
    </div>
  );
 
}

export default App;
