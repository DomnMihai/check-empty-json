import { isJsonEmpty, isArrayEmpty } from '../src/index';
import { should } from 'chai';

describe('Test check empty utils', () => {

  // Validate JSON
  it('Should recognize null JSON', () => {
    const checkingResult: boolean = isJsonEmpty(null);
    should().equal(checkingResult, true);
  });

  it('Should recognize undefined JSON', () => {
    const checkingResult: boolean = isJsonEmpty(undefined);
    should().equal(checkingResult, true);
  });

  it('Should recognize empty JSON', () => {
    const checkingResult: boolean = isJsonEmpty({});
    should().equal(checkingResult, true);
  });

  it('Should recognize JSON with content', () => {
    const checkingResult: boolean = isJsonEmpty({
      key0: {},
      key1: 'key 1',
      key2: 123,
      key3: ['1', '2'],
    });
    should().equal(checkingResult, false);
  });

  it('Should recognize JSON with null key value', () => {
    const checkingResult: boolean = isJsonEmpty({
      key0: null
    });
    should().equal(checkingResult, false);
  });

  it('Should recognize JSON with undefined key value', () => {
    const checkingResult: boolean = isJsonEmpty({
      key0: undefined
    });
    should().equal(checkingResult, false);
  });

  // Validate array
  it('Should recognize null array', () => {
    const checkingResult: boolean = isArrayEmpty(null);
    should().equal(checkingResult, true);
  });

  it('Should recognize undefined array', () => {
    const checkingResult: boolean = isArrayEmpty(undefined);
    should().equal(checkingResult, true);
  });

  it('Should recognize empty array', () => {
    const checkingResult: boolean = isArrayEmpty([]);
    should().equal(checkingResult, true);
  });

  it('Should recognize array with elements', () => {
    const checkingResult: boolean = isArrayEmpty([1, 5, 6]);
    should().equal(checkingResult, false);
  });

  it('Should recognize array with null elements', () => {
    const checkingResult: boolean = isArrayEmpty([null]);
    should().equal(checkingResult, false);
  });

  it('Should recognize array with undefined elements', () => {
    const checkingResult: boolean = isArrayEmpty([undefined]);
    should().equal(checkingResult, false);
  });

});
