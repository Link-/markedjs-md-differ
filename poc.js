// https://marked.js.org/using_pro#lexer
// For more configuration options: https://marked.js.org/using_advanced
const marked = require("marked");
// modified diff script taken from:
// https://gist.github.com/Munawwar/bb444b7d8e140e44be5584dbc17497b7
const token_diff = require('./token_diff');


/*
 *
 *   Hello
 * - nope
 *   World
 * + yes
 *
 */


const md1 = `
# heading

Hello world

<test>

What
`;

const md2 = `
# heading

Hello world

<test>

New

What
`;


let tokens1 = marked.lexer(md1);
//console.log(tokens1[0]);

let tokens2 = marked.lexer(md2);
//console.log(tokens2[0]);

var optimalChanges = token_diff.diff(tokens2, tokens1);
for (var i in optimalChanges) {
	console.log(optimalChanges[i]);
}

