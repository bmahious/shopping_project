import { compose, createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middleWare = [process.env.NODE_ENV === 'development' && logger].filter(
    Boolean
  );

const composeEnhancer = compose(applyMiddleware(...middleWare))

export const store = createStore(rootReducer, undefined, composeEnhancer )
