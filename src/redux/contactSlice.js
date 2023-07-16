
// import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// const contactSlice = createSlice({
//   name: "contact",
//   initialState: {
//     contacts: [],
//     filter: "",
//   },
//   reducers: {
//     addContact: (state, action) => {
//       const contact = {
//         id: nanoid(),
//         name: action.payload.name,
//         number: action.payload.number,
//       };
//       state.contacts.push(contact);
//     },
//     deleteContact: (state, action) => {
//       state.contacts = state.contacts.filter(
//         (contact) => contact.id !== action.payload
//       );
//     },
//     setFilter: (state, action) => {
//       state.filter = action.payload.toLowerCase();
//     },
//   },
// });

// export const { addContact, deleteContact, setFilter } = contactSlice.actions;

// export default contactSlice.reducer;