import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

export default function Register() {
  return (
    <section className="register">
      <form className="register__form">
        <div className="register__header">
          <Link to="/">
            <img src={logo} alt="логотип" />
          </Link>
          <h1 className="register__heading">Добро пожаловать!</h1>
        </div>
        {renderInput('Имя', 'email')}
        {renderInput('E-mail', 'text')}
        {renderInput('Пароль', 'password')}
        <button className="register__submit">Зарегистрироваться</button>
        <div className="register__outro">
          <span className="register__text">Уже Зарегистрированы?</span>
          <Link to="/signin" className="register__link">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
}

function renderInput(label, type) {
  return (
    <>
      <label className="register__label">{label}</label>
      <input type={type} className="register__input" required />
    </>
  );
}