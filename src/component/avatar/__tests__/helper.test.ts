import { getAvatarInnerBoxSize } from '../helper'

describe('getAvatarInnerBoxSize function', () => {
  test('should return width, height, and fontSize css properties. Width and height are the same size as the input, fontSize is half of the given input', () => {
    const input = 20
    const result = { width: '20px', height: '20px', fontSize: '10px' }

    expect(getAvatarInnerBoxSize(input)).toEqual(result)
  })
})
