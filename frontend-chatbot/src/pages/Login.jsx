import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import GenericInput from '../components/GenericInput';
import {
  validateEmailInput,
  validatePasswordInput,
} from '../utils/inputsValidation';

// import logo from '../images/logo.png';

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
    <section className="container-login-cadastro">
      <form className="form" onSubmit={ onSubmit }>
        {/* <div className="form--img--animated">
          <img className="logo" src={ logo } alt="logo" />
        </div> */}
        <GenericInput
          name="Email"
          keyOfInput="email"
          type="email"
          validation={ validateEmailInput }
          dataTestId="common_login__input-email"
        />
        <GenericInput
          name="Senha"
          keyOfInput="password"
          type="password"
          validation={ validatePasswordInput }
          dataTestId="common_login__input-password"
        />
        <span
          className="form__error"
          data-testid="common_login__element-invalid-email"
        >
          {errorMessage}

        </span>
        <div className="form__group">
          <button
            className="btn btn--primary-dark btn--animated--left"
            disabled={ !(email.isValid && password.isValid) }
            type="submit"
            onClick={ postEndPointLogin }
            data-testid="common_login__button-login"
          >
            Login
          </button>
          <button
            className="btn btn--light-grey btn--animated--right"
            type="submit"
            onClick={ redirectToResgister }
            data-testid="common_login__button-register"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Login;
