/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import qs from 'qs'
import { useState, useEffect } from 'react'

import AdminInstagramProperty from './AdminInstagramProperty'
import LoginInstagram from './LoginInstagram'

const AdminIsntagram = () => {
  const windowUrl = window.location.search
  const params = new URLSearchParams(windowUrl)
  const [success, setSuccess] = useState(false)

  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/get-instagram-username'
  //     )
  //     .then((response) => {
  //       if (response.status !== 204) {
  //         console.log('Passei por aqui')
  //         setSuccess(true)
  //       }
  //     })
  //     .catch((err) => {
  //       console.error(err)
  //     })
  // }, [])

  useEffect(() => {
    if (params.get('code')) {
      // const myHeaders = new Headers()
      // myHeaders.append(
      //   'Cookie',
      //   'csrftoken=Mdg0Nf3QKegske2HILEs7IVJtYgshU43; ig_did=C90CA775-98F4-4870-9772-C754D2B28294; ig_nrcb=1; mid=Yw56sgAEAAFjgH8PNyh0dl_FhznO'
      // )
      // myHeaders.append('Content-Type', 'multipart/form-data')
      // myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000')
      // myHeaders.append('Access-Control-Allow-Credentials', 'true')

      const formdata = {
        client_id: '3111213185875705',
        grant_type: 'authorization_code',
        client_secret: '1de643f53871447539b97f88068916c2',
        redirect_uri: 'https://localhost:3000/',
        code: 'AQAKpUxTfQAhcHrjqGYeO6IfDNwMMMYuhcFPYd0qGY9WYuDFN5YwIMU7228zviSykGZJkMufATtGsKAN5O-cT2M9CKitjpEhV0eLKDdj0llCgWhIvIW2IKvDy2IcagTSz8-k0XnhREtfBgllAqHeeXLcxXXPq7HujLfAoFV7GYyaeB3ui5KSbNMny1NZ4cEqD2RGcaJWSuoYZ2b1Dn8sXFJijcuoSS8Uh7vhpYO4TnOGJw'
      }

      axios
        .post(
          'https://api.instagram.com/oauth/access_token',
          qs.stringify(formdata),
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
          }
        )
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.error('Erro ao pegar primeiro Token no insta')
          console.error('Erro do insta ==> ', err)
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
