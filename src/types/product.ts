export const AvailabilityItems = ['available', 'disabled', 'preorder'] as const
export type AvailabilityItemsValues = typeof AvailabilityItems[number]

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

export const Condition = ['new', 'used', 'refurbished'] as const

export type ConditionValues = typeof Condition[number]

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

export type Product = {
  id: number
  name: string
  type: ProductTypes
  sku: string
  description: string
  price: string
  cost_price: number
  retail_price: number
  sale_price: number
  map_price: number
  tax_class_id: number
  product_tax_code: string
  calculated_price: string
  categories: number[]
  brand_id: number
  option_set_id: number
  option_set_display: string
  inventory_level: number
  inventory_warning_level: number
  inventory_tracking: string
  reviews_rating_sum: number
  reviews_count: number
  total_sold: number
  fixed_cost_shipping_price: string
  is_free_shipping: boolean
  is_visible: boolean
  is_featured: boolean
  related_products: number[]
  warranty: string
  search_keywords: string
  availability: AvailabilityItemsValues
  availability_description: string
  gift_wrapping_options_type: string
  gift_wrapping_options_list: []
  sort_order: number
  condition: ConditionValues
  is_condition_shown: boolean
  order_quantity_minimum: number
  order_quantity_maximum: number
  page_title: string
  meta_keywords: []
  meta_description: string
  date_created: Date
  date_modified: Date
  view_count: number
  preorder_release_date: null
  preorder_message: string
  is_preorder_only: boolean
  is_price_hidden: boolean
  price_hidden_label: string
  custom_url: {
    url: string
    is_customized: boolean
  }
  base_variant_id: null
  open_graph_type: 'product'
  open_graph_title: string
  open_graph_description: string
  open_graph_use_meta_description: boolean
  open_graph_use_product_name: boolean
  open_graph_use_image: boolean
  images: ProductImage[]
}
