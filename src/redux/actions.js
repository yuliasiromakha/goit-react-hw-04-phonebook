import { nanoid } from "nanoid";

export const addContact = ({name, phone, id}) => {
    return {
        type:'ADD_CONTACT',
        payload: {
            id: nanoid(),
            name, 
            phone
        }
    };
}

export const deleteContact = ({name, phone}) => {
    return {
        type:'DELETE_CONTACT',
        payload: {
            name, 
            phone
        }
    };
}