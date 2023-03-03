import { compose, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middleWare = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
  );

const persistConfig = {
  key : 'root',
  storage,
  blacklist : ['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


const composeEnhancers = compose(applyMiddleware(...middleWare))

export const store = createStore(persistedReducer, undefined, composeEnhancers)
export const persistor = persistStore(store)

