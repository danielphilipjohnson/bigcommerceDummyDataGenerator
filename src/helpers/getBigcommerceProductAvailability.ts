import { faker } from '@faker-js/faker'
import type { AvailabilityItems, AvailabilityItemsValues } from '../types'

export const getBigcommerceProductAvailability = (): AvailabilityItemsValues => {
  const availability: typeof AvailabilityItems = ['available', 'disabled', 'preorder']
  return availability[
    faker.datatype.number({
      min: 0,
      max: availability.length
    })
  ]
}
