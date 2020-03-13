import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AuthenticationComponent({ children ,onHandleUserActivate}) {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    axios.get('/api/user/authenticate').then(response => {
      console.log('auth use Effect');
      console.log(response);
      onHandleUserActivate(response.data)
      setUser(response.data)
    }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      {user ? children : <h1>No Way!!</h1>}
    </div>
  )
}

export default AuthenticationComponent;