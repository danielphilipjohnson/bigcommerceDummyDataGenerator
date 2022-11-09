import type { ImageUrl, ProductImage } from '../types'
import { faker } from '@faker-js/faker'

/**
 * @description Generates images for a product with the chosen ID.
 * @param productId - The id of the product
 * @param amountImagesToGenerate - The number of images to generate
 * @example
 * ```ts
 *   generateBigcommerceImages(111, 4) // returns an array of images
 * ```
 */
export const generateBigcommerceImages = (
  productId: number,
  amountImagesToGenerate: 1 | 2 | 3 | 4 | 5
): ProductImage[] => {
  const ImagesToChoose: ImageUrl = [
    'https://placeimg.com/640/480/tech',
    'https://placeimg.com/640/480/nature',
    'https://placeimg.com/640/480/arch',
    'https://placeimg.com/640/480/animals',
    'https://placeimg.com/640/480/people'
  ]
  let sortOrder = 0

  const images = Array.from({ length: amountImagesToGenerate }).map(() => {
    const indexToRemove = faker.datatype.number({ max: ImagesToChoose.length - 1 })
    const imageToUse = ImagesToChoose[indexToRemove]

    const imageZoom = imageToUse.replace('640/480', '1920/1080')
    const imageStandard = imageToUse.replace('640/480', '257/386')
    const imageThumbnail = imageToUse.replace('640/480', '227/147')
    const imageTiny = imageToUse.replace('640/480', '44/29')

    ImagesToChoose.splice(indexToRemove, 1)

    return {
      id: faker.datatype.number(),
      product_id: productId,
      is_thumbnail: faker.datatype.boolean(),
      sort_order: ++sortOrder,
      description: '',
      image_file: imageToUse,
      url_zoom: imageZoom,
      url_standard: imageStandard,
      url_thumbnail: imageThumbnail,
      url_tiny: imageTiny,
      date_modified: faker.date.between('2020-01-01T00:00:00.000Z', new Date().toISOString())
    }
  })

  return images
}
