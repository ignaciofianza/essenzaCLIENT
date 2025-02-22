import usePageTitle from "../Hooks/usePageTitle";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  usePageTitle("Inicia sesión");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  const validUser = {
    email: "test@test.com",
    password: "12345678",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Completa todos los campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    if (email !== validUser.email || password !== validUser.password) {
      setError("Usuario y/o contraseña incorrectos.");
      return;
    }

    alert("Inicio de sesión exitoso!");
    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">
        Para pedir, primero debes iniciar sesión
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mx-auto border rounded p-4 shadow"
        style={{ maxWidth: "350px" }}
      >
        {error && <div className="alert alert-danger text-center">{error}</div>}{" "}
        {/* Mensaje de error */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo Electrónico:
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 position-relative">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <div className="input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i
                className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}
              ></i>
            </button>
          </div>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-75">
            Iniciar Sesión
          </button>
        </div>
      </form>

      <div className="text-center mt-3">
        <p>
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="link-warning">
            Regístrate aquí
          </Link>
        </p>
        <Link to={"/"} className="btn btn-outline-secondary mt-2">
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};

export default Login;
