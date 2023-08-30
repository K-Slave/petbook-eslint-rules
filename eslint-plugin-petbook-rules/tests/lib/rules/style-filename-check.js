// /**
//  * @fileoverview petbook eslint rules
//  * @author
//  */
// "use strict";

// //------------------------------------------------------------------------------
// // Requirements
// //------------------------------------------------------------------------------

// const rule = require("../../../lib/rules/style-filename-check"),
//   RuleTester = require("eslint").RuleTester;

// //------------------------------------------------------------------------------
// // Tests
// //------------------------------------------------------------------------------

// const withJSXElement =
//   "module.exports = function () {const Test = 'a';}";
// const withStyleElement =
//   "module.exports = function () {const Test = styled.div``}";

// const ruleTester = new RuleTester();
// ruleTester.run("style-filename-check.js", rule, {
//   valid: [
//     { filename: "MyComponent.jsx", code: withJSXElement },
//     { filename: "MyComponent.tsx", code: withJSXElement },
//     { filename: "MyComponent.style.jsx", code: withStyleElement },
//     { filename: "MyComponent.style.tsx", code: withStyleElement },
//   ],

//   invalid: [
//     {
//       filename: "MyComponent.jsx",
//       code: withStyleElement,
//       errors: [{ message: "'styled' can only used on .style.tsx file", type: "Styled File Convention" }],
//     },
//     {
//       filename: "MyComponent.tsx",
//       code: withStyleElement,
//       errors: [{ message: "'styled' can only used on .style.tsx file", type: "Styled File Convention" }],
//     },
//     {
//       filename: "MyComponent.style.jsx",
//       code: withJSXElement,
//       errors: [{ message: "JSXElemet can not used on .style.tsx file", type: "Styled File Convention" }],
//     },
//     {
//       filename: "MyComponent.style.tsx",
//       code: withJSXElement,
//       errors: [{ message: "JSXElemet can not used on .style.tsx file", type: "Styled File Convention" }],
//     },
//   ],
// });
