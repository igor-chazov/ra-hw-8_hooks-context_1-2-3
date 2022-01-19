import React, { useContext, useState } from 'react';
import AuthContext from '../contexts/AuthContext';

export default function ToolbarForm() {
  const { handleLogin } = useContext(AuthContext);
  const EMPTY_STATE = { login: '', password: '' };
  const [form, setForm] = useState(EMPTY_STATE);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin(form);
    setForm(EMPTY_STATE);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm(prevState => ({ ...prevState, [name]: value }));
  }

  return (
    <form className="toolbar__form" onSubmit={handleSubmit}>
      <input className="toolbar__form-login" name="login" value={form.login} onChange={handleChange} placeholder="Ваше имя" required />
      <input className="toolbar__form-password" name="password" value={form.password} onChange={handleChange} placeholder="Пароль" required />
      <button className="toolbar__form-button">Войти</button>
    </form>
  );
}
