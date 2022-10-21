import React, { useState } from 'react'

import ImageList from './ImageList'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InstagramContainer = () => {
  const [isLogged, setIsLogged] = useState(true)

  console.log(setIsLogged)

  if (isLogged) {
    return (
      <div
        className={`instagramContainer flex-wrap w-100 flex justify-center items-center`}
      >
        <ImageList />
      </div>
    )
  }

  return <></>
}

export default InstagramContainer
