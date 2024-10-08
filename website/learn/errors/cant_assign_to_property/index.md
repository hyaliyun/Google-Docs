---
title: 'TypeError: can''t assign to property "x" on "y": not an object'
slug: Web/JavaScript/Reference/Errors/Cant_assign_to_property
page-type: javascript-error
---



The JavaScript strict mode exception "can't assign to property" occurs when attempting
to create a property on [primitive](/Glossary/Primitive) value
such as a [symbol](/Web/JavaScript/Reference/Global_Objects/Symbol), a [string](/Glossary/String), a [number](/Glossary/Number) or a [boolean](/Glossary/Boolean). [Primitive](/Glossary/Primitive) values cannot hold any [property](/Glossary/Property/JavaScript).

## Message

```plain
TypeError: Cannot create property 'x' on number '1' (V8-based)
TypeError: can't assign to property "x" on 1: not an object (Firefox)
TypeError: Attempted to assign to readonly property. (Safari)
```

## Error type

.

## What went wrong?

In [strict mode](/Web/JavaScript/Reference/Strict_mode), a  is raised when attempting to
create a property on [primitive](/Glossary/Primitive) value such
as a [symbol](/Web/JavaScript/Reference/Global_Objects/Symbol), a [string](/Glossary/String), a [number](/Glossary/Number) or a [boolean](/Glossary/Boolean). [Primitive](/Glossary/Primitive) values cannot hold any [property](/Glossary/Property/JavaScript).

The problem might be that an unexpected value is flowing at an unexpected place, or
that an object variant of a {{jsxref("String")}} or a {{jsxref("Number")}} is expected.

## Examples

### Invalid cases

```js example-bad
"use strict";

const foo = "my string";
// The following line does nothing if not in strict mode.
foo.bar = {}; // TypeError: can't assign to property "bar" on "my string": not an object
```

### Fixing the issue

Either fix the code to prevent the [primitive](/Glossary/Primitive) from being used in such places, or fix the issue by creating the object equivalent {{jsxref("Object")}}.

```js example-good
"use strict";

const foo = new String("my string");
foo.bar = {};
```

## See also

- [Strict mode](/Web/JavaScript/Reference/Strict_mode)
- [primitive](/Glossary/Primitive)
