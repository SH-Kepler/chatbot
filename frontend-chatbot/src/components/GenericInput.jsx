import { useContext } from 'react';
import PropTypes from 'prop-types';
import { formContext } from '../context/FormProvider';

function GenericInput({ name, type, validation, keyOfInput }) {
  const { inputsValue, setInputsValue } = useContext(formContext);

  const showMessage = () => {
    const { value } = inputsValue[keyOfInput];
    if (value.length) {
      return !inputsValue[keyOfInput].isValid && 'Campo inválido';
    }
  };

  const onInputChange = (value) => {
    setInputsValue((prevState) => (
      {
        ...prevState,
        [keyOfInput]: {
          ...prevState[keyOfInput], value,
        },
      }
    ));
  };

  return (
    <div>

      <div>
        <div>
          <input
            placeholder={ name }
            type={ type }
            value={ inputsValue[keyOfInput].value }
            required
            onChange={ ({ target }) => {
              validation(target.value, setInputsValue);
              onInputChange(target.value);
            } }
          />
          <label htmlFor="genericInput">
            { name }
          </label>
        </div>
        <div>
          <span>{ showMessage() }</span>
        </div>
      </div>
    </div>
  );
}

GenericInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  validation: PropTypes.func,
  keyOfInput: PropTypes.string,
}.isRequired;

export default GenericInput;
