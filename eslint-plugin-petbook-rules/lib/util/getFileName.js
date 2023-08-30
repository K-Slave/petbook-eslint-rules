/**
 * @fileoverview get File name
 * 
 */

'use strict'

const fs = require('fs');
const path = require('path')

function resolveBasedir(contextOrFilename) {
    if (contextOrFilename) {
        const filename = typeof contextOrFilename === 'string' ? contextOrFilename : contextOrFilename.getFilename();
        const dirname = path.dirname(filename);

        try {
            if (fs.statSync(filename).isFile()) {
                return dirname
            }
        } catch (err) {
            if (err.code === "ENOTDIR") {
                return resolveBasedir(dirname)
            }
        }

    }

    return process.cwd()
}

module.exports = {
    resolveBasedir
}