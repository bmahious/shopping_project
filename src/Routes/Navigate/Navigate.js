import React, {Fragment} from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CardIcon from '../../components/CardIcon/CardIcon';
import CardDropdown  from '../../components/CardDropdown/CardDropdown';
import { selectCurrentUser } from '../../store/User/UserSelector';
import { SignOutUser } from '../../Utils/Firebase/Firebase'
import { NavigationContainer, 
         LogoContainer, 
         NavLinksContainer, 
         NavLink} 
from  './navigation.styles.js';
import { selectIsCardOpen } from '../../store/Card/CardSelector';

const Navigate = () => {
  const currentUser = useSelector(selectCurrentUser)
  // const {isOpenCard} = useContext(CardContext)
  const isOpenCard = useSelector(selectIsCardOpen)
 
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={SignOutUser}>
              SE DECONNECTER
            </NavLink>
          ) : (
            <NavLink to='/sign-in'>SE CONNECTER</NavLink>
          )}
          <CardIcon />
        </NavLinksContainer>
        {isOpenCard && <CardDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigate;
