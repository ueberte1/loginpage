import React from "react";
import { Link } from "react-router-dom";
import ForgotImg from "../../assets/img/vector/forgot-password.png";

const ForgotPassword = () => {
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo forgot-img">
          <img src={ForgotImg} alt="" className="auth-header-logo-img" />
        </div>
      </div>
      <div className="auth-body">
        <h1 className="auth-header-title">Esqueceu a senha?</h1>
        <p className="auth-header-subtitle forgot-subtitle">
          Coloque seu email para receber instruções
        </p>
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Endereço de email
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="examplo@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Mandar o link
          </button>
          <Link to={"/auth/signin"} className="btn-back-to-login">
            Voltar ao login
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
