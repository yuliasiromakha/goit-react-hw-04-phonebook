 const initialState = {
    contacts: [],
    filter: ""
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            console.log(action.payload, 'add contact');
            break;

        case "DELETE_CONTACT":
            console.log(action.payload, 'delete contact');
            break;
    
        default:
            return state;
    }
}

export default contactReducer;