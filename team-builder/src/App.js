import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Form from './Form';

const initialFormValues = {
  username: '',
  email: '',
  role: ''
}

function App() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const updateForm = () => {

  }
  const submitForm = () => {

  }

  return (
    <div className="App">
      <Form 
        update={updateForm}
        submit={submitForm}
        values={formValues}
        />
    </div>
  );
}

export default App;
