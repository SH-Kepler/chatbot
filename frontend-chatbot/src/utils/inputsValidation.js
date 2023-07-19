const validateEmailInput = (email, set) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  const isValid = emailRegex.test(email);
  set((prevState) => (
    { ...prevState, email: { ...prevState.email, isValid } }));
};

const validatePasswordInput = (password, set) => {
  const SEIS = 6;
  const isValid = password.length >= SEIS;
  set((prevState) => (
    { ...prevState, password: { ...prevState.password, isValid } }));
};

export { validateEmailInput, validatePasswordInput };
