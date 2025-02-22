import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const phoneRegex = /^((\+\d{1,3}\s?)?\d{3}\s?\d{3}\s?\d{3,9})$/; // Permite espacios entre los números

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword || !name || !phone || !address) {
      setError("Completa todos los campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      setError("Por favor, ingresa un correo válido.");
      return;
    }

    const cleanedPhone = phone.replace(/\s+/g, ""); // Elimina espacios antes de validar
    if (!phoneRegex.test(phone) || cleanedPhone.length < 9 || cleanedPhone.length > 15) {
      setError("Ingresa un número de teléfono válido.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("Error al registrar, intente más tarde."); // Simulación de fallo en el registro
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Regístrate para hacer pedidos</h1>
      <form onSubmit={handleSubmit} className="mx-auto border rounded p-4 shadow" style={{ maxWidth: "350px" }}>
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
          <input type="email" id="email" className="form-control" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input type="password" id="password" className="form-control" autoComplete="new-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
          <input type="password" id="confirmPassword" className="form-control" autoComplete="new-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre Completo:</label>
          <input type="text" id="name" className="form-control" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono:</label>
          <input type="text" id="phone" className="form-control" autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección:</label>
          <input type="text" id="address" className="form-control" autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-dark w-75">Registrarse</button>
        </div>
      </form>
      <div className="text-center mt-3">
        <p>
          ¿Ya tienes una cuenta? <Link to="/login" className="link-warning">Inicia sesión aquí</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
