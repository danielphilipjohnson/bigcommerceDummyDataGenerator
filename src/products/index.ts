import { createBigcommerceProduct } from '..'

export const createBigcommerceProducts = (amountOfProducts: number) => {
  return Array.from({ length: amountOfProducts }).map(() => {
    return createBigcommerceProduct()
  })
}
