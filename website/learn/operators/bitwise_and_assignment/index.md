---
title: Bitwise AND assignment (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
page-type: javascript-operator
browser-compat: javascript.operators.bitwise_and_assignment
---



The **bitwise AND assignment (`&=`)** operator performs [bitwise AND](/Web/JavaScript/Reference/Operators/Bitwise_AND) on the two operands and assigns the result to the left operand.

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html", "shorter")}}

## Syntax

```js-nolint
x &= y
```

## Description

`x &= y` is equivalent to `x = x & y`, except that the expression `x` is only evaluated once.

## Examples

### Using bitwise AND assignment

```js
let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &= 2; // 0

let b = 5n;
b &= 2n; // 0n
```

## Specifications



## Browser compatibility



## See also

- [Assignment operators in the JS guide](/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators)
- [Bitwise AND (`&`)](/Web/JavaScript/Reference/Operators/Bitwise_AND)
