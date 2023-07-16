// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";

// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);

// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";

// import contactReducer from "./contactSlice";

// const persistConfig = {
//   key: "root",
//   storage,
// };

// const rootReducer = combineReducers({
//   contact: contactReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);

// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
// import { combineReducers } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

// import contactReducer from "./contactSlice";

// const persistConfig = {
//   key: "root",
//   storage,
//   serialize: JSON.stringify, // Додайте цей рядок
// };

// const rootReducer = combineReducers({
//   contact: contactReducer,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import contactReducer from "./reducer";

// const rootReducer = (state = initialState, action) => {
//     return state;
// };

const rootReducer = combineReducers({
    contacts: contactReducer,
});


const enhancer = devToolsEnhancer();

const store = createStore(rootReducer, enhancer);

console.log(store)

export default store;