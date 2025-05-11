import { describe, it, expect } from 'vitest';
import { dispPrice } from '../display';

describe('dispPrice', () => {
  it('return price with JP format', () => {
    expect(dispPrice(1000)).toBe('￥1,000');
  });
  it('return 0 yen with undefined', () => {
    expect(dispPrice(undefined)).toBe('￥0');
  });
});
