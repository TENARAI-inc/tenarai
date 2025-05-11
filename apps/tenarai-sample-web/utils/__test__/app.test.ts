import { describe, it, expect } from 'vitest';
import { addHtmlClass, removeHtmlClass, wait } from '../app';

describe('addHtmlClass', () => {
  it('should add class to html node', () => {
    addHtmlClass('TESTCLASS');
    const html = document.getElementsByTagName('html')[0];
    expect(html.classList.contains('TESTCLASS')).toBe(true);
  });
});
describe('removeHtmlClass', () => {
  it('should remove class to html node', () => {
    addHtmlClass('TESTCLASS');
    const html = document.getElementsByTagName('html')[0];
    expect(html.classList.contains('TESTCLASS')).toBe(true);
    removeHtmlClass('TESTCLASS');
    expect(html.classList.contains('TESTCLASS')).toBe(false);
  });
});
describe('wait', () => {
  it('should wait for 200 milisecond', async () => {
    const start = Date.now();
    await wait(200);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(200);
  });
});
