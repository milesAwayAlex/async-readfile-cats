import {breeds} from '../syncBreeds.js';
import {asyncRead} from '../asyncBreeds.js';
import {expect} from 'chai';

const cases = [
  ['Bombay', true],
  ['Balinese', true],
  ['Mau', false],
];

describe('asyncRead', () => {
  cases.forEach(c => {
    if (c[1]) {
      it(`Returns the description for ${c[0]}`, done => {
        asyncRead(c[0], data => {
          expect(data).equal(breeds[c[0]]);
          done();
        });
      });
    } else {
      it(`Returns undefined for ${c[0]}`, done => {
        asyncRead(c[0], data => {
          expect(data).undefined;
          done();
        });
      });
    }
  });
});
