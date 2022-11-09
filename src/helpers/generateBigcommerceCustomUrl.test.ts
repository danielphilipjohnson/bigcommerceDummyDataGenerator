import { describe, it, expect } from 'vitest'

import { generateBigcommerceCustomUrl } from './generateBigcommerceCustomUrl'

describe('Generate bigcommerce custom url', () => {
  it('should match the output as expected', () => {
    expect(generateBigcommerceCustomUrl('this is a custom product')).toBe('/this-is-a-custom-product/')
  })
})
