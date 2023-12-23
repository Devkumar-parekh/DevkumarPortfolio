// import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
// import { rootReducer } from "@/reducer/rootReducer";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "../reducer/rootReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["clubshopMember"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: () => [thunk],
});
const persistor = persistStore(store);
export { store, persistor };
