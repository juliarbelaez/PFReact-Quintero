import { useState } from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [verifiedEmail, setVerifiedEmail] = useState("");

  const [address, setAddress] = useState("");

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      phone,
      lastName,
      email,
      address,
      verifiedEmail,
    };
    onConfirm(userData);
  };
  return (
    <div className="containerCheckOut">
      <form onSubmit={handleConfirm} className="FormFields">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="inputEmail4">Nombre</label>
            <input
              type="text"
              id="inputEmail4"
              className="form-control"
              name="email"
              placeholder="Nombre"
              required
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <div className="invalid-feedback">
              Por favor, introduzca su nombre.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputEmail4">Apellido</label>
            <input
              type="text"
              id="inputEmail4"
              className="form-control"
              name="lastName"
              placeholder="Apellido"
              required
              value={lastName}
              onChange={({ target }) => setLastName(target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail4">Celular</label>
          <input
            type="text"
            id="inputEmail4"
            className="form-control"
            name="lastName"
            placeholder="(+57)31165704399"
            required
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            id="inputEmail4"
            className="form-control"
            name="lastName"
            placeholder="email@mail.co"
            required
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail4">Verifique su email</label>
          <input
            type="email"
            id="inputEmail4"
            className="form-control"
            name="lastName"
            placeholder="email@mail.co"
            required
            value={verifiedEmail}
            onChange={({ target }) => setVerifiedEmail(target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputEmail4">Dirección de envío</label>
          <input
            type="text"
            id="inputEmail4"
            className="form-control"
            name="lastName"
            placeholder="Cra 57 # 37B -10, Medellín"
            required
            value={address}
            onChange={({ target }) => setAddress(target.value)}
          />
        </div>

        <div className="label">
          <button type="submit" className="btn btn btn-primary">
            Crear Orden
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
