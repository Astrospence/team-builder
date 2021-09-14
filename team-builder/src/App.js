import './App.css';
import React, { useState } from 'react';
import Form from './Form';
import Member from './Member';

const initialFormValues = {
  username: '',
  email: '',
  role: ''
}

function App() {
  const [fellowship, setFellowship] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue});
  }

  const submitForm = () => {
    const newCharacter = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    if (!newCharacter.username) {
      setError('You must be known...');
    } else if (!newCharacter.email) {
      setError('We must know how to call upon you');
    } else if (!newCharacter.role) {
      setError('You must choose a path');
    } else {
      setError('');
    }
    setFellowship([newCharacter, ...fellowship]);
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <h1>JOIN THE FELLOWSHIP</h1>

      {error && <h2 className="error-message">{error}</h2>}

      <Form 
        update={updateForm}
        submit={submitForm}
        values={formValues}
        />

      {fellowship.map(member => {
        return (
          <Member key={member.id} details={member}/>
        )
      })}
    </div>
  );
}

export default App;
