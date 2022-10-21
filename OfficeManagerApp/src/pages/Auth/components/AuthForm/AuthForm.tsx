import ReactDOM from 'react-dom';
import React from 'react';
import '../../../../styles/sass/main.scss';

const AuthForm = () => {
    return (
        <>
        <div className="container">
            <h1>¡Bienvenido/a!</h1>
            <form>
                <label htmlFor="email">Email</label><br/>
                <input type="email" id="email" name="email"/><br/><br/>
                <label htmlFor="password">Contraseña</label><br/>
                <input type="password" id="password" name="password"/><br/>
                <div className="auth-error"> ERROR: Usuario o contraseña incorrectos </div>
                <input type="checkbox" id="remember" name="remember"/>
                <label htmlFor="remember">Recuérdame</label>
                <a href="#">¿Olvidaste la contraseña?</a>
                <input type="submit" value="Iniciar sesión"/>
            </form>
        </div>
        </>
    );
};

export default AuthForm;