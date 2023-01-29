import React from 'react';
import { signInWithGooglePopup, createUserDocumetFromAuth } from '../../Utils/Firebase/Firebase'

const SighIn = () => {

    const logeUserGoogle = async () => {
      const resp = await signInWithGooglePopup();
      //console.log(resp.user)
      createUserDocumetFromAuth(resp.user)
    }

  return (
    <div>
        Sigh In page
        <button onClick={logeUserGoogle}> Sigh google </button>
    </div>
  )
}

export default SighIn