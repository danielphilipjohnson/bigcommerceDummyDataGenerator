import { faker } from '@faker-js/faker'
import type { AvailabilityItems } from '../types'

export const getBigcommerceProductAvailability = () => {
  const availability: AvailabilityItems = ['available', 'disabled', 'preorder']
  return availability[
    faker.datatype.number({
      min: 0,
      max: availability.length
    })
  ]
}
