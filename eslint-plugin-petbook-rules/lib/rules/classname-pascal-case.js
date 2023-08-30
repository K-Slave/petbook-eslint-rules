"use strict";

const { ignoreCheck, testPascalCase, testAllCaps } = require("../util/testPascalCase");
const report = require('../util/reports')

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  usePascalCase: `Class name {{name}} must be in PascalCase`,
};

module.exports = {
  meta: {
    type: "suggestion",
    messages,
    schema: [
      {
        type: "object",
        properties: {
          allowAllCaps: {
            type: "boolean",
          },
          allowLeadingUderscroe: {
            type: "boolean",
          },
          ignore: {
            items: [{ type: "string" }],
            minItems: 0,
            type: "array",
            uniqueItems: true,
          },
        },
        additionalProperties: false,
      },
    ],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const allowAllCaps = configuration.allowAllCaps || false;
    const allLeadingUnderscore = configuration.allowLeadingUderscroe || false;
    const ignore = configuration.ignore || [];

    return {
      ClassNameIdentifier(node) {
        const checkTarget = node[0];

        const isIgnored = ignoreCheck(ignore, checkTarget);
        const checkName =
          allLeadingUnderscore && checkTarget.startsWith("_")
            ? checkTarget.slice(1)
            : checkTarget;
        const isPascalCase = testPascalCase(checkName);
        const isAllowedAllCaps = allowAllCaps && testAllCaps(checkName)

        if (!isPascalCase && !isAllowedAllCaps && !isIgnored) {
            const messageId = 'usePascalCase';

            report(context, messages[messageId], messageId, {
                node,
                data: {
                    name: checkTarget
                }
            })
        }
      },
    };
  },
};
