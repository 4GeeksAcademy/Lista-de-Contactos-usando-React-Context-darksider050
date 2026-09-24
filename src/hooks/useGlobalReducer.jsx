/* eslint-disable react-refresh/only-export-components */
import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useReducer } from "react";
import { initialStore, storeReducer } from "../store";

const StoreContext = createContext();

export function StoreProvider({ children }) {
    const [store, dispatch] = useReducer(storeReducer, initialStore());

    const actions = useMemo(() => ({
        getContacts: async () => {
            try {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/darksider050/contacts");
                if (!response.ok) {
                    console.error("Error al cargar los contactos");
                    return;
                }

                const data = await response.json();
                dispatch({
                    type: "load_contacts",
                    payload: Array.isArray(data.contacts) ? data.contacts : []
                });
            } catch (error) {
                console.error("Error en la petición GET:", error);
            }
        },

        createContact: async (contactData, callback) => {
            try {
                const response = await fetch("https://playground.4geeks.com/contact/agendas/darksider050/contacts", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(contactData)
                });

                if (!response.ok) {
                    console.error("Error al crear el contacto");
                    return;
                }

                const newContact = await response.json();
                dispatch({
                    type: "add_contact",
                    payload: newContact
                });

                if (callback) callback();
            } catch (error) {
                console.error("Error en la petición POST:", error);
            }
        },

        deleteContact: async (id) => {
            try {
                const response = await fetch(`https://playground.4geeks.com/contact/agendas/darksider050/contacts/${id}`, {
                    method: "DELETE"
                });

                if (!response.ok) {
                    console.error("Error al eliminar el contacto");
                    return;
                }

                dispatch({ type: "delete_contact", payload: id });
            } catch (error) {
                console.error("Error en la petición DELETE:", error);
            }
        }
    }), []);

    return (
        <StoreContext.Provider value={{ store, dispatch, actions }}>
            {children}
        </StoreContext.Provider>
    );
}

export default function useGlobalReducer() {
    const context = useContext(StoreContext);

    if (!context) {
        throw new Error("useGlobalReducer must be used within a StoreProvider");
    }

    return context;
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired
};