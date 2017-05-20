'use strict';

module.exports = {
    rules: {
        'object-creation': require('./lib/rules/object-creation')
    },
    environments: {
        testdouble: {
            globals: {
                td: false
            }
        }
    }
};
