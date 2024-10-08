---
title: async function* expression
slug: Web/JavaScript/Reference/Operators/async_function*
page-type: javascript-operator
browser-compat: javascript.operators.async_generator_function
---



The **`async function*`** keywords can be used to define an async generator function inside an expression.

You can also define async generator functions using the [`async function*` declaration](/Web/JavaScript/Reference/Statements/async_function*).

{{EmbedInteractiveExample("pages/js/expressions-async-function-asterisk.html", "taller")}}

## Syntax

```js-nolint
async function* (param0) {
  statements
}
async function* (param0, param1) {
  statements
}
async function* (param0, param1, /* …, */ paramN) {
  statements
}

async function* name(param0) {
  statements
}
async function* name(param0, param1) {
  statements
}
async function* name(param0, param1, /* …, */ paramN) {
  statements
}
```

> [!NOTE]
> An [expression statement](/Web/JavaScript/Reference/Statements/Expression_statement) cannot begin with the keywords `async function` to avoid ambiguity with an [`async function*` declaration](/Web/JavaScript/Reference/Statements/async_function*). The `async function` keywords only begin an expression when they appear in a context that cannot accept statements.

### Parameters

- `name` {{optional_inline}}
  - : The function name. Can be omitted, in which case the function is _anonymous_. The name is only local to the function body.
- `paramN` {{optional_inline}}
  - : The name of a formal parameter for the function. For the parameters' syntax, see the [Functions reference](/Web/JavaScript/Guide/Functions#function_parameters).
- `statements` {{optional_inline}}
  - : The statements which comprise the body of the function.

## Description

An `async function*` expression is very similar to, and has almost the same syntax as, an [`async function*` declaration](/Web/JavaScript/Reference/Statements/async_function*). The main difference between an `async function*` expression and an `async function*` declaration is the _function name_, which can be omitted in `async function*` expressions to create _anonymous_ functions. An `async function*` expression can be used as an [IIFE](/Glossary/IIFE) (Immediately Invoked Function Expression) which runs as soon as it is defined, allowing you to create an ad-hoc [async iterable object](/Web/JavaScript/Reference/Iteration_protocols#the_async_iterator_and_async_iterable_protocols). See also the chapter about [functions](/Web/JavaScript/Reference/Functions) for more information.

## Examples

### Using async function\* expression

The following example defines an unnamed asynchronous generator function and assigns it to `x`. The function yields the square of its argument:

```js
const x = async function* (y) {
  yield Promise.resolve(y * y);
};
x(6)
  .next()
  .then((res) => console.log(res.value)); // 36
```

## Specifications



## Browser compatibility



## See also

- [Functions](/Web/JavaScript/Guide/Functions) guide
- [Functions](/Web/JavaScript/Reference/Functions)
- {{jsxref("Statements/async_function*", "async function*")}}
- {{jsxref("AsyncGeneratorFunction")}}
- [Iteration protocols](/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Operators/yield", "yield")}}
- {{jsxref("Operators/yield*", "yield*")}}
