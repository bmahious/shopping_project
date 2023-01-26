import React, {Fragment} from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigate = () => {
  return (
    <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
              <CrwnLogo className='logo' /> 
            </Link>
           <div className='nav-links-container'>
             <Link className='nav-link' to='/shop'> SHOP </Link>
             <Link className='sign-in' to='/sign-in'> SIGN IN </Link>
           </div> 
        </div>
        <Outlet />
    </Fragment>
  )
}

export default Navigate