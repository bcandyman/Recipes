import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function AuthenticationComponent({ children, onHandleUserActivate }) {
  const [user, setUser] = useState(undefined)
  const history = useHistory();

  useEffect(() => {
    axios.get('/api/user/authenticate')
      .then(response => {
        setUser(response.data)
        onHandleUserActivate(response.data)
        if (user ===undefined){
          // redirect('/login')
        }
      })
      .catch(err => console.log(err))
  }, [])


  const redirect = (path) => {
    history.push(path)
  }

  return (
    <div>
      {user ? children :<h1>
        Not Authorized
      </h1>}
    </div>
  )
}

export default AuthenticationComponent;