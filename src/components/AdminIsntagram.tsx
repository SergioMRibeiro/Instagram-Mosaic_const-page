/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import React, { useState, useEffect } from 'react'

import AdminInstagramProperty from './AdminInstagramProperty'
import LoginInstagram from './LoginInstagram'

const AdminIsntagram = () => {
  const windowUrl = window.location.search
  const params = new URLSearchParams(windowUrl)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios
      .get(
        'https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/get-instagram-username'
      )
      .then((response) => {
        if (response.status !== 204) {
          console.log('Passei por aqui')
          setSuccess(true)
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  useEffect(() => {
    console.log(
      `https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/auth?code=${params.get(
        'code'
      )}`
    )

    if (params.get('code')) {
      axios
        .get(
          `https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/auth?code=${params.get(
            'code'
          )}`
        )
        .then(() => {
          setSuccess(true)
          window.location.href = window.location.pathname
        })
        .catch((err) => {
          console.log('passei pelo erro')
          console.error('meu erro', err)
          // window.location.href = window.location.pathname
        })
    }
  }, [])

  return (
    <>
      {success ? (
        <AdminInstagramProperty setSuccess={setSuccess} />
      ) : (
        <LoginInstagram />
      )}
    </>
  )
}

export default AdminIsntagram
