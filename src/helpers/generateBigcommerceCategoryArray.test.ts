import { describe, it, expect } from 'vitest'

import { generateBigcommerceCategoryArray } from './generateBigcommerceCategoryArray'

describe('Generate bigcommerce category array', () => {
  it('should stay within bounds', () => {
    const categoryArray = generateBigcommerceCategoryArray()

    expect(categoryArray.length).above(-1)
    expect(categoryArray.length).below(3)
  })
})
