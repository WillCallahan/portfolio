import { chunk, groupBy, unique, sortBy } from '../ArrayUtility'

describe('ArrayUtility', () => {
  describe('chunk', () => {
    it('splits array into chunks of specified size', () => {
      const array = [1, 2, 3, 4, 5, 6, 7, 8]
      const result = chunk(array, 3)
      
      expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8]])
    })

    it('handles empty array', () => {
      const result = chunk([], 3)
      expect(result).toEqual([])
    })

    it('handles chunk size larger than array', () => {
      const array = [1, 2]
      const result = chunk(array, 5)
      
      expect(result).toEqual([[1, 2]])
    })

    it('handles chunk size of 1', () => {
      const array = [1, 2, 3]
      const result = chunk(array, 1)
      
      expect(result).toEqual([[1], [2], [3]])
    })
  })

  describe('groupBy', () => {
    it('groups array elements by key function', () => {
      const array = [
        { category: 'A', value: 1 },
        { category: 'B', value: 2 },
        { category: 'A', value: 3 }
      ]
      
      const result = groupBy(array, item => item.category)
      
      expect(result).toEqual({
        A: [{ category: 'A', value: 1 }, { category: 'A', value: 3 }],
        B: [{ category: 'B', value: 2 }]
      })
    })

    it('handles empty array', () => {
      const result = groupBy([], item => item.key)
      expect(result).toEqual({})
    })
  })

  describe('unique', () => {
    it('removes duplicate values from array', () => {
      const array = [1, 2, 2, 3, 3, 3, 4]
      const result = unique(array)
      
      expect(result).toEqual([1, 2, 3, 4])
    })

    it('handles empty array', () => {
      const result = unique([])
      expect(result).toEqual([])
    })

    it('handles array with no duplicates', () => {
      const array = [1, 2, 3, 4]
      const result = unique(array)
      
      expect(result).toEqual([1, 2, 3, 4])
    })
  })

  describe('sortBy', () => {
    it('sorts array by key function', () => {
      const array = [
        { name: 'Charlie', age: 25 },
        { name: 'Alice', age: 30 },
        { name: 'Bob', age: 20 }
      ]
      
      const result = sortBy(array, item => item.age)
      
      expect(result).toEqual([
        { name: 'Bob', age: 20 },
        { name: 'Charlie', age: 25 },
        { name: 'Alice', age: 30 }
      ])
    })

    it('handles empty array', () => {
      const result = sortBy([], item => item.key)
      expect(result).toEqual([])
    })
  })
})
