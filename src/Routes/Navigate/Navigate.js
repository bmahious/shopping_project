import React, {Fragment, useContext} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../Contexts/ContextUser';
import { SignOutUser } from '../../Utils/Firebase/Firebase'
import './navigation.styles.scss'

const Navigate = () => {
  const val = useContext(UserContext)
  const signOutHandler = async () => {
        await SignOutUser();
        val.setCurrentUser(null)
  }
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <CrwnLogo className='logo' /> 
            </Link>
           <div className='nav-links-container'>
             <Link className='nav-link' to='/shop'> SHOP </Link>
             {
               val.currentUser ? (
                <span className='nav-link' onClick={signOutHandler} > SIGN OUT </span>
               ) : (
                <Link className='sign-in' to='/sign-in'> SIGN IN </Link>
               )
             }
           </div> 
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigate