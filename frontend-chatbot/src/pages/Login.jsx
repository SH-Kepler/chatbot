import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GenericInput from '../components/GenericInput';
import {
  validateEmailInput,
  validatePasswordInput,
} from '../utils/inputsValidation';

import { formContext } from '../context/FormProvider';

function Login() {
  const navigateTo = useNavigate();
  const { inputsValue: { email, password }, setUser } = useContext(formContext);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const postEndPointLogin = async () => {
    axios.post('http://localhost:3001/user/login', {
      email: email.value, password: password.value,
    }).then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      navigateTo('/')
    }).catch(({ response: { data } }) => setErrorMessage(data));
  };

  const redirectToResgister = () => {
    navigateTo('/register');
  };

  return (
    <section >
      <form onSubmit={ onSubmit }>
        <GenericInput
          name="Email"
          keyOfInput="email"
          type="email"
          validation={ validateEmailInput }
        />
        <GenericInput
          name="Senha"
          keyOfInput="password"
          type="password"
          validation={ validatePasswordInput }
        />
        <span>
          {errorMessage}

        </span>
        <div>
          <button
            disabled={ !(email.isValid && password.isValid) }
            type="submit"
            onClick={ postEndPointLogin }
          >
            Login
          </button>
          <button
            type="submit"
            onClick={ redirectToResgister }
          >
            Cadastrar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
