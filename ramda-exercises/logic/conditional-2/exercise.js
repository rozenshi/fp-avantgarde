const R = require('ramda');
const { pipe, lt, when, unless } = R;

/**
 * Check if string, work with empty one as default
 * Truncate to 5 chars when it exceeds that length
 * @example
 * // returns 'ABCDE'
 * safeTruncate("abcdefghijk")
 */
const safeTruncate = () => { /* TODO */ }
