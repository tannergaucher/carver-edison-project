import React from 'react'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { setName } from '../actions'

export default function LoginPage() {
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <div className="page">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={(response) => {
          dispatch(setName(response.profileObj.givenName))
          history.push('/')
        }}
      />
    </div>
  )
}
