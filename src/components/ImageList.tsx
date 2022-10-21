/* eslint-disable prefer-destructuring */
import React from 'react'
import axios from 'axios'

import type { InstagramMidia } from '../utils/constants'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ImageList = () => {
  const [imageList, setImageList] = React.useState([])

  React.useEffect(() => {
    axios
      .get(
        'https://sergiodev3--maeztraio.myvtex.com/_v/app/instagram/get-instagram-images'
      )
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((response: any) => {
        // NOTE - Para alterr a quantidade de imagens deve alterar o valor da linha abaixo e do slice
        const mduser = response.data.mdUserBody.data[0]
        const instagramMidia = response.data.instagramMidia

        instagramMidia <= mduser.image_quantity
          ? setImageList(instagramMidia)
          : setImageList(instagramMidia.slice(0, mduser.image_quantity))
      })
      .catch((err) => {
        console.error(err)
      })
  }, [])

  return (
    <>
      <div
        className={` instagramImgContent mz-instagram-image-list flex mv3 flex-wrap items-center p-0 justify-center`}
      >
        {imageList.map((image: InstagramMidia, index) => (
          <div
            key={index}
            className={`imageBox mz-instagram-image-item pa0 mr2 br2`}
          >
            <a
              className="recentMidiaLink"
              href={`${image.permalink}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={`instagramImage mz-instagram-image br2`}
                src={
                  image.media_type === 'VIDEO'
                    ? image.thumbnail_url
                    : image.media_url
                }
              />
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageList
