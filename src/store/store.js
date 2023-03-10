import { compose, createStore, applyMiddleware} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
//import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "./rootSaga";


const persistConfig = {
  key : 'root',
  storage,
  blacklist : ['user']
}
const sagaMiddleware = createSagaMiddleware()

const middleWare = [process.env.NODE_ENV === 'development' && logger, sagaMiddleware].filter(
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
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
