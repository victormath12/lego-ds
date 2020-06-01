/**
 * @module colors
 * @desc Color tokens module.
 *
 * @memberof @lego-ds/tokens
 */

/**
 * A color
 * @typedef Color
 *
 * @type {String | String[]}
 */

/**
 * @type {Color}
 */
const primary = ['#FDE5E2', '#FAB9B2', '#F78D82', '#F46152'];

/**
 * @type {Color}
 */
const secondary = ['#FFF6E6', '#FFE5B3', '#FFD380', '#FFC24C'];

/**
 * @type {Color}
 */
const tertiary = ['#B5DAD5', '#55A99E', '#2B9486', '#22766B'];

/**
 * @type {Color}
 */
const white = '#FFFFFF';

/**
 * @type {Color}
 */
const dark = '#41414A';

/**
 * @type {Color}
 */
const gray = [
  white, // 0
  '#F5F5FA', // 1
  '#E6E6F0', // 2
  '#DBDBE8', // 3
  '#D3D3E2', // 4
  '#C5C5D6', // 5
  '#A9A9B8', // 6
  '#9898A6', // 7
  '#6B6B78', // 8
  dark, // 9
];

/**
 * @type {Color}
 */
const positive = ['#DEF8E9', '#1E854A'];

/**
 * @type {Color}
 */
const negative = ['#FCEAE9', '#CB3530'];

/**
 * @type {Color}
 */
const informative = ['#E9F3FC', '#2186D9'];

/**
 * @type {Color}
 */
const warning = ['#FBFBBE', '#CB9303'];

const colors = {
  primary,
  secondary,
  tertiary,
  positive,
  negative,
  informative,
  warning,
  gray,
  white,
  dark,
};

export default colors;