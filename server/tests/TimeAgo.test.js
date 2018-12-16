import React from 'react'
import TimeAgo from '../src/components/TimeAgo'
import { shallow } from 'enzyme'

// This is "now" for the sake of these tests.
const now = 1513180800000 // Dec 13 2017 16:00:00Z

test.each([
  [
    1513177200000, // Dec 13 2017 15:00:00Z
    'an hour ago'
  ],
  [
    1513162800000, // Dec 13 2017 11:00:00Z
    '5 hours ago'
  ],
  [
    1513090800000, // Dec 12 2017 15:00:00Z
    'a day ago'
  ]
])('displays timestamp %p as %p', (timestamp, expected) => {
  let mockDate = jest.spyOn(Date, 'now').mockImplementation(() => now)

  let el = shallow(<TimeAgo timestamp={timestamp} />)
  expect(el.text()).toBe(expected)

  mockDate.mockRestore()
})
