import { validate } from '@/rules/numeric';

const valid = ['1234567890', 123, '٠١٢٣٤', '٠١٢٣٤٥٦٧٨٩', '-15', '-١٢', '-1.3', '-١.٢'];

const invalid = ['a', '1234567a89', null, undefined, true, false, {}, '+123'];

test('validates that the string only contains numeric characters', () => {
  // valid.
  valid.forEach(value => expect(validate(value)).toBe(true));
  expect(validate(valid)).toBe(true);

  // invalid
  invalid.forEach(value => expect(validate(value)).toBe(false));
  expect(validate(invalid)).toBe(false);
});
