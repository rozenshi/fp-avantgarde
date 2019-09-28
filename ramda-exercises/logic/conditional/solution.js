const R = require('ramda');
const { pipe, length, lt, __, take, unless, is, always, when, toUpper } = R;

const LENGTH = 5;
const truncate = take(LENGTH);
const exceedChars = pipe(
  length,
  lt(LENGTH)
);

/**
 * Check if string, work with empty one as default
 * Truncate to 5 chars when it exceeds that length
 * @example
 * // returns 'ABCDE'
 * safeTruncate("abcdefghijk")
 */
const safeTruncate = pipe(
  unless(is(String), always("")),
  toUpper,
  when(exceedChars, truncate)
);

safeTruncate("abcd........");
