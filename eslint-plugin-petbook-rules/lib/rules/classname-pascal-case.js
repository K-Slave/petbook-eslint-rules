"use strict";

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

const messages = {
    usePascalCase: `Class name {{name}} must be in PascalCase`
}

module.exports = {
    meta: {
        messages,
        schema: [{
            type: 'object',
            properties: {
                allowAllCaps: {
                    type : 'boolean'
                }
            }
        }]
    }
}