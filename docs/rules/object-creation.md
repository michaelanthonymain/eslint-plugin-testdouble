# `td.object` creation (object-creation)

Testdouble provides two styles for creating mocks, pass `td.object()` a *plain JavaScript object* which contains functions as properties:

```js
var fish = {
  eat: function(){},
  swim: function(){},
  details: {
    age: 10,
    name: 'goldie'
  }
}
```

```js
var fish = td.object(fish)

fish.eat // a test double function named '.eat'
fish.details.age // still `10`
```
Or pass `td.object()` an *array of function names* or (if using a runtime that implements ES2015 Proxy) a *name for the object*.

```js
var cat = td.object(['meow', 'purr']);

cat.meow // a test double function named 'meow'
```

```js
var parrot = td.object('Parrot');

parrot.squawk // a test double function named 'Parrot#squawk'
```

No style is right or wrong, as they both have trade-offs. However, the testdouble docs encourage teams to pick one style and apply it consistently across their project.

## Rule Details

This rule enforces consistent use of `td.object()`. 

## Options

This rule has two options: `plain` and `array`.

This is valid code for the `plain` option and invalid code for the `array` option:

```js
td.object({
    // props
});
```

This is invalid code for the `plain` option and valid code for the `array` option:

```js
td.object([ // anything ]);
```

```js
td.object('a string');
```

## When Not To Use It

If you don't want to enforce a particular style for using `td.object()`, don't enable this rule.

## Further Reading

* [Testdouble Docs - tdobject](https://github.com/testdouble/testdouble.js/blob/master/docs/4-creating-test-doubles.md#tdobject)
