import { describe, it, expect } from 'vitest'
import { formatTime } from './gameUtils'

describe('gameUtils', () => {
  describe('formatTime', () => {
    it('should format 0 seconds correctly', () => {
      expect(formatTime(0)).toBe('0:00')
    })

    it('should format seconds less than 60', () => {
      expect(formatTime(45)).toBe('0:45')
    })

    it('should format minutes and seconds correctly', () => {
      expect(formatTime(65)).toBe('1:05')
      expect(formatTime(125)).toBe('2:05')
    })
  })
})
