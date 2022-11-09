import { faker } from '@faker-js/faker'
import type { Condition, ConditionValues } from '../types'

export const getBigcommerceProductCondition = (): ConditionValues => {
  const condition: typeof Condition = ['new', 'used', 'refurbished']
  return condition[
    faker.datatype.number({
      min: 0,
      max: condition.length
    })
  ]
}
