import expect from 'expect'
import { sampleAction } from '../actions'
import { SAMPLE_ACTION } from '../constants'

describe('WP actions', () => {
  describe('Sample Action', () => {
    it('has a type of SAMPLE_ACTION', () => {
      const expected = {
        type: SAMPLE_ACTION,
        name: 'testName',
      }
      expect(sampleAction('testName')).toEqual(expected)
    })
  })
})
