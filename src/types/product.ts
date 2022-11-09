export type AvailabilityItems = ['available', 'disabled', 'preorder']

export const Categories = {
  Books: 1,
  Movies: 2,
  Music: 3,
  Games: 4,
  Electronics: 5,
  Computers: 6,
  Home: 7,
  Garden: 8,
  Tools: 9,
  Grocery: 10,
  Health: 11,
  Beauty: 12,
  Toys: 13,
  Kids: 14,
  Baby: 15,
  Clothing: 16,
  Shoes: 17,
  Jewelery: 18,
  Sports: 19,
  Outdoors: 20,
  Automotive: 21,
  Industrial: 22
}

export type CategoryKeys = keyof typeof Categories

export type Condition = ['new', 'used', 'refurbished']

export type ImageUrl = [
  'https://placeimg.com/640/480/tech',
  'https://placeimg.com/640/480/nature',
  'https://placeimg.com/640/480/arch',
  'https://placeimg.com/640/480/animals',
  'https://placeimg.com/640/480/people'
]

export type ProductTypes = ['physical', 'digital']

export interface ProductImage {
  id: number
  product_id: number
  is_thumbnail: boolean
  sort_order: number
  description: string
  image_file:
    | 'https://placeimg.com/640/480/tech'
    | 'https://placeimg.com/640/480/nature'
    | 'https://placeimg.com/640/480/arch'
    | 'https://placeimg.com/640/480/animals'
    | 'https://placeimg.com/640/480/people'
  date_modified: Date
  url_zoom: string
  url_standard: string
  url_thumbnail: string
  url_tiny: string
}
