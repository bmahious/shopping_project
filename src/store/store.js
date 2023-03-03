import { compose, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key : 'root',
  storage,
  blacklist : ['user']
}

const middleWare = [process.env.NODE_ENV === 'development' && logger, thunk].filter(
    Boolean
  );


const composeEnhancer = 
(process.env.NODE_ENV !== 'production'
 && window 
 && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || 
 compose;

const persistedReducer = persistReducer(persistConfig, rootReducer)
const composeEnhancers = composeEnhancer(applyMiddleware(...middleWare))

export const store = createStore(persistedReducer, undefined, composeEnhancers )
export const persistor = persistStore(store)
