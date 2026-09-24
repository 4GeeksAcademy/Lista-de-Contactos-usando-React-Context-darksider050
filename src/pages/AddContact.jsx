import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const AddContact = () => {
    const { actions } = useGlobalReducer();
    const navigate = useNavigate();

    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setContact((currentContact) => ({
            ...currentContact,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!contact.name || !contact.email || !contact.phone || !contact.address) {
            alert("Por favor, llena todos los campos");
            return;
        }

        actions.createContact(contact, () => {
            navigate("/contacts");
        });
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-8">
                    <h1 className="text-center my-4">Añadir un nuevo contacto</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Nombre completo</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre y apellido"
                                name="name"
                                value={contact.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Correo electrónico</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="ejemplo@correo.com"
                                name="email"
                                value={contact.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Número de teléfono"
                                name="phone"
                                value={contact.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Dirección</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Dirección actual"
                                name="address"
                                value={contact.address}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Guardar
                        </button>
                        <div className="mt-3 text-center">
                            <Link to="/contacts">o volver a contactos</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};