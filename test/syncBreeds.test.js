import {expect} from 'chai';
import {breeds, sync} from '../syncBreeds.js';

const cases = [
  ['Bombay', true],
  ['Balinese', true],
  ['Mau', false],
];

describe('syncRead', () => {
  cases.forEach(c => {
    if (c[1]) {
      it(`Returns the breed description for ${c[0]}`, () =>
        expect(sync(c[0])).equal(breeds[c[0]]));
    } else {
      it(`Returns undefined for ${c[0]}`, () => expect(sync(c[0])).undefined);
    }
  });
});
