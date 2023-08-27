/**
 * @fileoverview petbook eslint rules
 * @author petbook
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion", // `problem`, `suggestion`, or `layout`
    docs: {
      description: "petbook eslint rules",
    },
    fixable: "code", // Or `code` or `whitespace`
    schema: [], // Add a schema if the rule has options
    messages:{
      styledFileConvention: "Styled File Convention : 'styled' can only used on .style.tsx file",
      cssConvention: "CSS Order : keep order by NHN CSS convention"
    }
  },

  create: function(context) {
    console.log(context)
    // variables should be defined here

    //----------------------------------------------------------------------
    // Helpers
    //----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    //----------------------------------------------------------------------
    // Public
    //----------------------------------------------------------------------

    return {
        StyledFileConvention(context, node) {
          console.log(context, node)
        },
        CSSConvention(context, node) {
          console.log(context, node)
        },
        ClassNamingConvention(context, node) {
          console.log(context, node)
        }
    };
  },
};
