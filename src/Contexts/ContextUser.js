import {createContext, useEffect, useReducer } from 'react';
import {onAuthStateChangedListner, createUserDocumetFromAuth} from '../Utils/Firebase/Firebase'


export const UserContext = createContext({
    setCurrentUser: () => null,
    currentUser: null,
  });

  export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
  };

  const INITIAL_STATE = {
    currentUser: null,
  };

const userReducer = (state, action) => {
  console.log('dispatched')
  console.log(action)
  switch (action.type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      throw new Error(`Unhandled type ${action.type} in userReducer`);
  }
};


export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const setCurrentUser = (user) =>
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, currentUser: user });

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumetFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};