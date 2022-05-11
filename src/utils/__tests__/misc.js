import {formatDate} from '../misc'

test('FormatDate formats the date to look nice', () => {
  expect(formatDate(new Date('October 18, 1988'))).toBe('Oct 88')
})
