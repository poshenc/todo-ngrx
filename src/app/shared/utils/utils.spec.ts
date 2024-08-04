import { generateRandomId } from './utils';

describe('generateRandomId', () => {
  it('should generate a string of length 12', () => {
    const id = generateRandomId();
    expect(id.length).toBe(12);
  });

  it('should generate a string containing only alphanumeric characters', () => {
    const id = generateRandomId();
    const validCharacters = /^[A-Za-z0-9]+$/;
    expect(validCharacters.test(id)).toBe(true);
  });

  it('should generate unique strings on subsequent calls', () => {
    const id1 = generateRandomId();
    const id2 = generateRandomId();
    expect(id1).not.toBe(id2);
  });

  it('should generate different IDs in 1000 iterations', () => {
    const ids = new Set();
    for (let i = 0; i < 1000; i++) {
      ids.add(generateRandomId());
    }
    expect(ids.size).toBe(1000);
  });
});
