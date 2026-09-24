import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand mb-0 h1">
                    Mis Contactos
                </Link>
                <div className="ml-auto d-flex gap-2">
                    <Link to="/add" className="btn btn-success">
                        Añadir contacto
                    </Link>
                    <Link to="/demo" className="btn btn-primary">
                        Demo
                    </Link>
                </div>
            </div>
        </nav>
    );
};