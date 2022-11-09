import { faker } from '@faker-js/faker'
import type { Condition } from '../types'

export const getBigcommerceProductCondition = (): 'new' | 'used' | 'refurbished' => {
  const condition: Condition = ['new', 'used', 'refurbished']
  return condition[
    faker.datatype.number({
      min: 0,
      max: condition.length
    })
  ]
}
