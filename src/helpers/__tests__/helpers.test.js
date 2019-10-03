import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('returns correct result if fed 2 arguments', () => {
    expect(helpers.multiply(3,4)).toBe(12);
  });
  it('return error if fed with argument which is not a number', () => {
    expect(() => helpers.multiply('string', 3)).toThrow();
  });
  it('returns the right result if we pass negatiev numbers', () => {
    expect(helpers.multiply(-2, 3)).toBe(-6);
  })
  it('does not throw error if passed 3 arguments', () => {
    expect(() => helpers.multiply(2, 3, 2)).not.toThrow();
  })
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });
  
  // write more tests! <===========================================
    it('accepts empty strings as name and 0 as age', () => {
      expect(helpers.personMaker('', 0)).toMatchObject({
        id: '123',
        name: '',
        age: 0,
      });
    })
    it('accepts a string as age', () => {
      expect(helpers.personMaker('peter', 'five')).toMatchObject({
        id: '123',
        name: 'peter',
        age: 'five',
      });
    })
    it('does not throw error if passed more than 2 arguments', () => {
      expect(helpers.personMaker('peter', 4, 'goodbye')).toMatchObject({
        id: 123,
        name: 'peter',
        age: 'five',
      });
    })
});
