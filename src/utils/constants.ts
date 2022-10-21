export type InstagramMidia = {
  id: string
  caption: string
  media_type: string
  thumbnail_url: string
  media_url: string
  permalink: string
}

export type MdUserData = {
  id: string
  token: string
  duration: number
  lastUpdate: string
  image_url: string
  exhibition_mode: string
  image_quantity: number
}

export type UserMdData = {
  imageData: InstagramMidia[]
  mdData: { data: MdUserData[] }
}

export type Settings = {
  arrows?: boolean
  carouselDots?: boolean
  carouselInfinite?: boolean
  slidesToShow?: number
  slidesToScroll?: number
}

export type CarouselModel = {
  breakpoint: number
  settings: Settings
}
