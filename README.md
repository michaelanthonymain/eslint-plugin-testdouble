# eslint-plugin-testdouble

ESLint rules for [testdouble.js](https://github.com/testdouble/testdouble.js).

## Install and configure

`npm install --save-dev eslint-plugin-testdouble`

Then add a reference to this plugin and selected rules in your eslint config:

```json
{
  "plugins": [
    "testdouble"
  ],
  "env": {
    "testdouble/testdouble": true
  }
}
```
See [Configuring Eslint](http://eslint.org/docs/user-guide/configuring) on [eslint.org](http://eslint.org) for more info.
