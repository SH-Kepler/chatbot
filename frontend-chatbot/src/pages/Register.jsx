import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GenericInput from '../components/GenericInput';
import { formContext } from '../context/FormProvider';
import { validateEmailInput, validatePasswordInput } from '../utils/inputsValidation';

function Register() {
  const { inputsValue: { email, password },
    setInputsValue, setUser } = useContext(formContext);
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
  };

  const navigateTo = useNavigate();

  const postEndPointLogin = async () => {
    axios.post('http://localhost:3001/user/register', {
      email: email.value, password: password.value,
    }).then(({ data }) => {
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);

      setInputsValue({
        email: { value: '', isValid: false },
        password: { value: '', isValid: false },
      });

      navigateTo('/');
    }).catch(({ response: { data } }) => setErrorMessage(data));
  };

  useEffect(() => {
    setInputsValue({
      email: { value: '', isValid: false },
      password: { value: '', isValid: false },
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="container-login-cadastro">
      <form className="form register" onSubmit={ onSubmit }>
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

        <span data-testid="common_register__element-invalid_register">
          {errorMessage}
        </span>

        <div className="form__group">
          <button
            className="btn btn--primary-dark btn--animated--left btn--register"
            disabled={ !(email.isValid && password.isValid) }
            type="submit"
            onClick={ postEndPointLogin }
            data-testid="common_register__button-register"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </section>
  );
}

export default Register;
