import { createBigcommerceProducts } from '../products'
import { writeFile } from 'fs'

export const productsToJson = (filePath: string, amountOfProducts: number) => {
  const json = createBigcommerceProducts(amountOfProducts)

  writeFile(filePath, JSON.stringify(json), err => {
    if (err) {
      return console.log(err)
    }
    console.log('The file was saved!')
  })
}
