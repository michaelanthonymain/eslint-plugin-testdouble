/**
 * @fileoverview Rule to enforce consistent td.object() creation
 * @author Michael Main
 */

'use strict';

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {
    return {
        CallExpression: function (node) {
            if (node.callee.type !== 'MemberExpression') {
                return;
            }

            if (node.callee.property.name !== 'object') {
                return;
            }

            if (node.callee.object.name !== 'td') {
                return;
            }

            if (context.options[0] === 'plain') {
                if (node.arguments[0].type === 'ArrayExpression') {
                    context.report(node, 'Invalid object creation. Use a plain object.');
                }

                if (node.arguments[0].type === 'Literal') {
                    context.report(node, 'Invalid object creation. Use a plain object.');
                }
            }

            if (context.options[0] === 'array') {
                if (node.arguments[0].type === 'ObjectExpression') {
                    context.report(node, 'Invalid object creation. Use an array or string.');
                }
            }
        }
    }
};
