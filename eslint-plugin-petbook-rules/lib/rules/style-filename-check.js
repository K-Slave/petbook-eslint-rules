/**
 * @fileoverview petbook eslint rules
 * @author petbook
 */
"use strict";

const path = require('path')
const report = require('../util/reports');

const messages = {
  styledFileConvention:
    "Styled File Convention : 'styled' can only used on .style.tsx file",
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages,
  },

  create: function (context) {
    const filename = context.getFilename();

    return {
      IsStyledFile(node) {
        report(context, messages.styledFileConvention, 'styledFileConvention', {
          node: node,
          data: {
            ext: path.extname(filename)
          }
        })
      }
    }
  }
}
