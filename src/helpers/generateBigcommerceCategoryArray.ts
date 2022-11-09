import type { CategoryKeys } from '../types'
import { Categories } from '../types'
import { faker } from '@faker-js/faker'

export const generateBigcommerceCategoryArray = (): number[] => {
  const amountOfCategories = faker.datatype.number({ max: 2, min: 0 })
  return Array.from({ length: amountOfCategories }).map(() => {
    const productCategory = faker.commerce.department() as unknown as CategoryKeys
    return Categories[productCategory]
  })
}
