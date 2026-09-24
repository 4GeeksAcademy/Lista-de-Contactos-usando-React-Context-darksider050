export const initialStore = () => ({
    contacts: []
});

export const storeReducer = (state, action) => {
    switch (action.type) {
        case "load_contacts":
            return {
                ...state,
                contacts: Array.isArray(action.payload) ? action.payload : []
            };
        case "add_contact":
            return {
                ...state,
                contacts: [...state.contacts, action.payload]
            };
        case "delete_contact":
            return {
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload)
            };
        default:
            return state;
    }
};

export default function getState() {
    return {
        store: initialStore(),
        actions: {}
    };
}