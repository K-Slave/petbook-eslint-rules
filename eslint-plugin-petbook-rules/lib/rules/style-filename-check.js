/**
 * @fileoverview petbook eslint rules
 * @author petbook
 */
"use strict";

const path = require('path')
const report = require('../util/reports');

const DEFAULTS = {
  allow: 'always',
  extension: ['.style.tsx', '.style.ts']
}

const messages = {
  styledFileConvention:
    "Styled File Convention : 'styled' can only used on .style.tsx file",
};

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    fixable: "code", // Or `code` or `whitespace`
    schema: [{
      type: 'object',
      properties: {
        allow: {
          enum: ['always', 'as-needed'],
        },
        extensions: {
          type: "array",
          items: {
            type: 'string'
          }
        }
      },
      additionalProperties: false
    }], // Add a schema if the rule has options
    messages,
  },

  create: function (context) {
    const filename = context.getFilename();

    const allow = (context.options[0] && context.options[0].allow) || DEFAULTS.allow;
    const allowedExtensions = (context.options[0] && context.options[0].extension) || DEFAULTS.extensions
    const isAllowedExtension = allowedExtensions.some((extension)=> filename.slice(-extension.length) === extension)

    return {
      'Program:exit'(node) {

        if (isAllowedExtension && allow === 'as-needed'){
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
}
