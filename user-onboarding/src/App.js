import React, { useState } from 'react';
import './App.css';

import schema from './validation/formSchema';
import * as yup from 'yup';
import axios from 'axios';

import Form from './Components/Form';


const initialFormValues = {
  usename: '',
  password: '',
  email: '',
  tos: false
}

const initialFormErrors= {
  usename: '',
  password: '',
  email: '',
  tos: ''
}


function App() {
const [formValues, setFormValues] = useState(initialFormValues);
const [formErrors, setFormErrors] = useState(initialFormErrors);
const [users, setUsers] = useState([]);

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => console.err(err))
      .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={handleChange} 
      errors={formErrors} 
      submit={handleSubmit}/>
      {users.map(user => (
        <div key ={user.id}>
          <p>{user.createAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
