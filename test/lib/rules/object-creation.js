/**
 * @fileoverview Test for object-creation
 * @author Michael Main
 */

'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var objectCreation = require('../../../lib/rules/object-creation');
var RuleTester = require('eslint').RuleTester;
var eslintTester = new RuleTester();

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

eslintTester.run('object-creation', objectCreation, {
    valid: [
        {
            options: ['plain'],
            code: 'td.object({})'
        },
        {
            options: ['array'],
            code: 'td.object([])'
        },
        {
            options: ['array'],
            code: 'td.object("")'
        }
    ],
    invalid: [
        {
            options: ['plain'],
            code: 'td.object([])',
            errors: [
                { message: 'Invalid object creation. Use a plain object.'}
            ]
        },
        {
            options: ['plain'],
            code: 'td.object("")',
            errors: [
                { message: 'Invalid object creation. Use a plain object.'}
            ]
        },
        {
            options: ['array'],
            code: 'td.object({})',
            errors: [
                { message: 'Invalid object creation. Use an array or string.'}
            ]
        }
    ]
});

