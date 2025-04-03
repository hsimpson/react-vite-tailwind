import { expect, test } from 'vitest';
import { add } from './addition.service';

test('addition service', () => {
  // given
  const a = 2;
  const b = 3;

  // when
  const result = add(a, b);

  // then
  expect(result).toBe(5);
});
