---
title: "HTML attribute: minlength"
short-title: minlength
slug: Web/HTML/Attributes/minlength
page-type: html-attribute
browser-compat:
  - html.elements.input.minlength
  - html.elements.textarea.minlength
---



The **`minlength`** attribute defines the minimum [string length](/Web/JavaScript/Reference/Global_Objects/String/length) that the user can enter into an {{htmlelement('input')}} or {{htmlelement('textarea')}}. The attribute must have an integer value of 0 or higher.

The length is measured in UTF-16 code units, which ([for most scripts](/Web/JavaScript/Reference/Global_Objects/String/length#strings_with_length_not_equal_to_the_number_of_characters)) is equivalent to the number of characters. If no `minlength` is specified, or an invalid value is specified, the input has no minimum length. This value must be less than or equal to the value of [maxlength](/Web/HTML/Attributes/maxlength), otherwise the value will never be valid, as it is impossible to meet both criteria.

The input will fail constraint validation if the length of the text value of the field is less than minlength UTF-16 code units long, with {{domxref('validityState.tooShort')}} returning `true`. Constraint validation is only applied when the value is changed by the user. Once submission fails, some browsers will display an error message indicating the minimum length required and the current length.

`minlength` does not imply [`required`](/Web/HTML/Attributes/required); an input only violates a `minlength` constraint if the user has input a value. If an input is not `required`, an empty string can be submitted even if `minlength` is set.

{{EmbedInteractiveExample("pages/tabbed/attribute-minlength.html", "tabbed-shorter")}}

## Examples

By adding `minlength="5"`, the value must either be empty or five characters or longer to be valid.

```html
<label for="fruit">Enter a fruit name that is at least 5 letters long</label>
<input type="text" minlength="5" id="fruit" />
```

We can use pseudoclasses to style the element based on whether the value is valid. The value will be valid as long as it is either null (empty) or five or more characters long. _Lime_ is invalid, _lemon is valid_.

```css
input {
  border: 2px solid currentcolor;
}
input:invalid {
  border: 2px dashed red;
}
input:invalid:focus {
  background-image: linear-gradient(pink, lightgreen);
}
```

{{EmbedLiveSample('Examples', '100%', 200)}}

## Specifications



## Browser compatibility



## See also

- [`maxlength`](/Web/HTML/Attributes/maxlength)
- [`size`](/Web/HTML/Attributes/size)
- [`pattern`](/Web/HTML/Attributes/pattern)
- [Constraint validation](/Web/HTML/Constraint_validation)
- [Form validation](/Learn/Forms/Form_validation)
- {{htmlelement('input')}}
