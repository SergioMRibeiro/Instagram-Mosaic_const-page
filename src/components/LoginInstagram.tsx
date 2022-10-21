/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Link } from '@chakra-ui/react'

const LoginInstagram = () => {
  const scope = 'user_profile,user_media'
  const responseType = 'code'

  return (
    <Link
      href={`https://api.instagram.com/oauth/authorize?client_id=3111213185875705&redirect_uri=${window.location.href.replace(
        '/app',
        ''
      )}&scope=${scope}&response_type=${responseType}`}
    >
      <Button target="_top" variation="primary">
        Logar no Instagram
      </Button>
    </Link>
  )
}

export default LoginInstagram
