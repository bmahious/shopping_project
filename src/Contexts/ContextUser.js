import {createContext, useState, useEffect } from 'react';
import {onAuthStateChangedListner, createUserDocumetFromAuth} from '../Utils/Firebase/Firebase'


export const UserContext = createContext({
    currentUser : null,
    setCurrentUser: () => null 
});

//const {} = useContext() 

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner( user => {
            console.log(user)
            if (user) {
              createUserDocumetFromAuth(user)
            }
        })
        return unsubscribe;
    }, [])

    return <UserContext.Provider value={value}> {children} </UserContext.Provider>

}