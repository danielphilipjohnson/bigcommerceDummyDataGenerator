import { faker } from '@faker-js/faker'
import { generateBigcommerceCategoryArray } from '../helpers/generateBigcommerceCategoryArray'
import { generateBigcommerceCustomUrl } from '../helpers/generateBigcommerceCustomUrl'
import { getBigcommerceProductAvailability } from '../helpers/getBigcommerceProductAvailability'
import { getBigcommerceProductCondition } from '../helpers/getBigcommerceProductCondition'
import type { Product, ProductTypes } from '../types'
import { generateBigcommerceImages } from './generateBigcommerceImages'

export const createBigcommerceProduct = (): Product => {
  const id = faker.datatype.number({
    max: 1000000
  })
  const name = faker.commerce.productName()
  const productTypes: ProductTypes = ['physical', 'digital']
  const type = productTypes[faker.datatype.number({ min: 0, max: 1 })] as unknown as ProductTypes
  const sku = faker.datatype.uuid()
  const description = `<p class=''> ${faker.commerce.productDescription()}</p>`
  const price = faker.commerce.price()

  const salePrice = +price - 5
  const reviewRating = faker.datatype.number({
    min: 1,
    max: 5
  })
  const reviewCounts = faker.datatype.number({
    min: 1,
    max: 100
  })

  return {
    id,
    name,
    type,
    sku,
    description,
    price,
    cost_price: 0,
    retail_price: 0,
    sale_price: salePrice,
    map_price: 0,
    tax_class_id: 0,
    product_tax_code: '',
    calculated_price: price,
    categories: generateBigcommerceCategoryArray(),
    brand_id: faker.datatype.number(),
    option_set_id: 24,
    option_set_display: 'right',
    inventory_level: faker.datatype.number(),
    inventory_warning_level: faker.datatype.number(),
    inventory_tracking: 'none',
    reviews_rating_sum: reviewRating,
    reviews_count: reviewCounts,
    total_sold: faker.datatype.number(),
    fixed_cost_shipping_price: faker.commerce.price(0, 5),
    is_free_shipping: faker.datatype.boolean(),
    is_visible: faker.datatype.boolean(),
    is_featured: faker.datatype.boolean(),
    related_products: [-1],
    warranty: '',
    search_keywords: '',
    availability: getBigcommerceProductAvailability(),
    availability_description: '',
    gift_wrapping_options_type: 'any',
    gift_wrapping_options_list: [],
    sort_order: 0,
    condition: getBigcommerceProductCondition(),
    is_condition_shown: faker.datatype.boolean(),
    order_quantity_minimum: 0,
    order_quantity_maximum: 0,
    page_title: name,
    meta_keywords: [],
    meta_description: description,
    date_created: faker.date.between('2019-01-01T00:00:00.000Z', '2021-11-01T00:00:00.000Z'),
    date_modified: faker.date.between('2021-11-01T00:00:00.000Z', '2022-11-01T00:00:00.000Z'),
    view_count: faker.datatype.number(),
    preorder_release_date: null,
    preorder_message: '',
    is_preorder_only: faker.datatype.boolean(),
    is_price_hidden: faker.datatype.boolean(),
    price_hidden_label: '',
    custom_url: {
      url: generateBigcommerceCustomUrl(name),
      is_customized: faker.datatype.boolean()
    },
    base_variant_id: null,
    open_graph_type: 'product',
    open_graph_title: name,
    open_graph_description: description,
    open_graph_use_meta_description: faker.datatype.boolean(),
    open_graph_use_product_name: faker.datatype.boolean(),
    open_graph_use_image: faker.datatype.boolean(),
    images: generateBigcommerceImages(id, faker.datatype.number({ max: 5, min: 1 }) as 1 | 2 | 3 | 4 | 5)
  }
}
