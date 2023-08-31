"use strict";

const { testPascalCase, testAllCaps } = require("../util/testPascalCase");
const report = require("../util/reports");

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
  usePascalCase: "Constant '{{name}}' must be in PascalCase",
};

module.exports = {
  meta: {
    type: "suggestion",
    messages,
    schema: [],
  },

  create(context) {
    const configuration = context.options[0] || {};
    const allowAllCaps = configuration.allowAllCaps || false;
    const allLeadingUnderscore = configuration.allowLeadingUderscroe || false;

    return {
      ClassNameIdentifier(node) {
        const checkTarget = node[0];

        const checkName = allLeadingUnderscore
          ? checkTarget.slice(1)
          : checkTarget;
        const isPascalCase = testPascalCase(checkName);
        const isAllowedAllCaps = allowAllCaps && testAllCaps(checkName);

        if (!isPascalCase && !isAllowedAllCaps) {
          report(context, messages.usePascalCase, "usePascalCase", {
            node,
            data: {
              name: checkTarget,
            },
          });
        }
      },
    };
  },
};
