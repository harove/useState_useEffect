import React, {useState} from 'react';
import './App.css';
import CardDefault from './components/card-default/CardDefault'
import InputEmail from './components/input-email/InputEmail';
import InputPassword from './components/input-password/InputPassword';



function App() {
  const [email,setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="App">
      <CardDefault title = "Hallo Welt"   />
      <InputEmail value = {email} onChange = {setEmail}/>
      <InputEmail value = {emailConfirm} onChange = {setEmailConfirm}/>
      <InputPassword password = {password} setPassword = {setPassword} />
    </div>
  );
 
}

export default App;
