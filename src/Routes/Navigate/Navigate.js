import React, {Fragment, useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CardIcon from '../../components/CardIcon/CardIcon';
import CardDropdown  from '../../components/CardDropdown/CardDropdown';
import { UserContext } from '../../Contexts/ContextUser';
import { CardContext } from '../../Contexts/CardContext'
import { SignOutUser } from '../../Utils/Firebase/Firebase'
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from  './navigation.styles.js'

const Navigate = () => {
  const val = useContext(UserContext)
  const {isOpenCard} = useContext(CardContext)



  const signOutHandler = async () => {
        await SignOutUser();
        val.setCurrentUser(null)
  }
  return (
    <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
              <CrwnLogo className='logo' /> 
            </LogoContainer>
           <NavLinksContainer>
              <NavLink to='/shop'>
                 BOUTIQUE 
              </NavLink>
             {
               val.currentUser ? (
                <NavLink as="span" onClick={signOutHandler} >
                   SE DECONNECTER 
                </NavLink>
               ) : (
                <NavLink to='/sign-in'>
                   SE CONNECTER 
                </NavLink>
               )
             }
            <CardIcon />
           </NavLinksContainer> 
           {isOpenCard && <CardDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
  )
}

export default Navigate