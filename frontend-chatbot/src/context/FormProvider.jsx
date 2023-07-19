import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

const formContext = createContext();

function FormProvider({ children }) {
  const [user, setUser] = useState(null);
  const [inputsValue, setInputsValue] = useState({
    email: { value: '', isValid: false },
    password: { value: '', isValid: false },
  });

  const context = useMemo(() => ({
    inputsValue,
    setInputsValue,
    user,
    setUser,
  }), [inputsValue, user]);

  return (
    <formContext.Provider value={ context }>
      {children}
    </formContext.Provider>
  );
}

FormProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default FormProvider;
export { formContext };
