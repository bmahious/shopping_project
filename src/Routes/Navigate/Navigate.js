import React, {Fragment, useContext} from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CardIcon from '../../components/CardIcon/CardIcon';
import CardDropdown  from '../../components/CardDropdown/CardDropdown';
import { UserContext } from '../../Contexts/ContextUser';
import { CardContext } from '../../Contexts/CardContext'
import { SignOutUser } from '../../Utils/Firebase/Firebase'
import {NavigationContainer, LogoContainer, NavLinksContainer, NavLink} from  './navigation.styles.js'

const Navigate = () => {
  const {currentUser} = useContext(UserContext)
  const {isOpenCard} = useContext(CardContext)
  //console.log(setCurrentUser)
  // const signOutHandler = async () => {
  //       await SignOutUser();
  //       setCurrentUser(null)
  // }
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
              {currentUser ? (
                <NavLink as='span' onClick={SignOutUser}>
                  SE DECONNECTER
                </NavLink>
              ) : (
                <NavLink to='/sign-in'>
                  SE CONNECTER
                </NavLink>
              )}
            <CardIcon />
           </NavLinksContainer> 
           {isOpenCard && <CardDropdown />}
        </NavigationContainer>
        <Outlet />
    </Fragment>
  )
}

export default Navigate