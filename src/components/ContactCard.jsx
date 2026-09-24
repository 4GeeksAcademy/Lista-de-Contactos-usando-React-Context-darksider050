import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const ContactCard = ({ contact }) => {
    const { actions } = useGlobalReducer();

    return (
        <article className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center gap-3">
                <div>
                    <h5 className="card-title mb-1">{contact.name}</h5>
                    <p className="card-text mb-1">{contact.email}</p>
                    <p className="card-text mb-1">{contact.phone}</p>
                    <p className="card-text mb-0">{contact.address}</p>
                </div>
                <button
                    type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => actions.deleteContact(contact.id)}
                >
                    Eliminar
                </button>
            </div>
        </article>
    );
};

ContactCard.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        name: PropTypes.string,
        email: PropTypes.string,
        phone: PropTypes.string,
        address: PropTypes.string
    }).isRequired
};