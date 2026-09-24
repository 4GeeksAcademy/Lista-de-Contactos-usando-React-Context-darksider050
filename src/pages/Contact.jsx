import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ContactCard } from "../components/ContactCard";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Contact = () => {
    const { store, actions } = useGlobalReducer();

    useEffect(() => {
        actions.getContacts();
    }, [actions]);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-8 d-flex justify-content-between align-items-center my-4">
                    <h1>Mis Contactos</h1>
                    <Link to="/add-contact" className="btn btn-success">
                        Añadir nuevo contacto
                    </Link>
                </div>
                <div id="contacts-list" className="col-10 col-md-8">
                    {store.contacts && store.contacts.length > 0 ? (
                        store.contacts.map((contact) => (
                            <ContactCard key={contact.id} contact={contact} />
                        ))
                    ) : (
                        <p className="text-center text-muted">No hay contactos todavía. ¡Crea uno nuevo!</p>
                    )}
                </div>
            </div>
        </div>
    );
};