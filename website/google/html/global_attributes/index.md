---
title: Global attributes
slug: Web/HTML/Global_attributes
page-type: landing-page
browser-compat: html.global_attributes
---

{{HTMLSidebar("Global_attributes")}}

**Global attributes** are attributes common to all HTML elements; they can be used on all elements, though they may have no effect on some elements.

Global attributes may be specified on all [HTML elements](/Web/HTML/Element), _even those not specified in the standard_. That means that any non-standard elements must still permit these attributes, even though using those elements means that the document is no longer HTML5-compliant. For example, HTML5-compliant browsers hide content marked as `<foo hidden>…</foo>`, even though `<foo>` is not a valid HTML element.

In addition to the basic HTML global attributes, the following global attributes also exist:

- `xml:lang` and `xml:base` — these are inherited from the XHTML specifications and deprecated, but kept for compatibility purposes.
- The ARIA [`role`](/Web/Accessibility/ARIA/Roles) attribute and the multiple [`aria-*`](/Web/Accessibility/ARIA/Attributes) states and properties, used for ensuring accessibility.
- The [event handler](/Web/HTML/Attributes#event_handler_attributes) attributes: `onabort`, `onautocomplete`, `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`, `oncanplaythrough`, `onchange`, `onclick`, `onclose`, `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`, `ondragenter`, `ondragleave`, `ondragover`, `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`, `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`, `onkeypress`, `onkeyup`, `onload`, `onloadeddata`, `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`, `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`, `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`, `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`, `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`, `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`, `onvolumechange`, `onwaiting`.

## List of global attributes

- [`accesskey`](/Web/HTML/Global_attributes/accesskey)
  - : Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.
- [`anchor`](/Web/HTML/Global_attributes/anchor) {{non-standard_inline}}
  - : Associates a positioned element with an anchor element. The attribute's value is the [`id`](/Web/HTML/Global_attributes/id) value of the element you want to anchor the positioned element to. The element can then be positioned [using CSS anchor positioning](/Web/CSS/CSS_anchor_positioning/Using).
- [`autocapitalize`](/Web/HTML/Global_attributes/autocapitalize)
  - : Controls whether inputted text is automatically capitalized and, if so, in what manner.
- [`autofocus`](/Web/HTML/Global_attributes/autofocus)
  - : Indicates that an element is to be focused on page load, or as soon as the {{HTMLElement("dialog")}} it is part of is displayed. This attribute is a boolean, initially false.
- [`class`](/Web/HTML/Global_attributes/class)
  - : A space-separated list of the classes of the element. Classes allow CSS and JavaScript to select and access specific elements via the [class selectors](/Web/CSS/Class_selectors) or functions like the method {{DOMxRef("Document.getElementsByClassName()")}}.
- [`contenteditable`](/Web/HTML/Global_attributes/contenteditable)

  - : An [enumerated](/Glossary/Enumerated) attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:

    - `true` or the _empty string_, which indicates that the element must be editable;
    - `false`, which indicates that the element must not be editable.
    - `plaintext-only`, which indicates the element's raw text is editable, but rich text formatting is disabled.

- [`data-*`](/Web/HTML/Global_attributes/data-*)
  - : Forms a class of attributes, called custom data attributes, that allow proprietary information to be exchanged between the [HTML](/Web/HTML) and its {{glossary("DOM")}} representation that may be used by scripts. All such custom data are available via the {{DOMxRef("HTMLElement")}} interface of the element the attribute is set on. The {{DOMxRef("HTMLElement.dataset")}} property gives access to them.
- [`dir`](/Web/HTML/Global_attributes/dir)

  - : An enumerated attribute indicating the directionality of the element's text. It can have the following values:

    - `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);
    - `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);
    - `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.

- [`draggable`](/Web/HTML/Global_attributes/draggable)

  - : An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](/Web/API/HTML_Drag_and_Drop_API). It can have the following values:

    - `true`, which indicates that the element may be dragged
    - `false`, which indicates that the element may not be dragged.

- [`enterkeyhint`](/Web/HTML/Global_attributes/enterkeyhint)
  - : Hints what action label (or icon) to present for the enter key on virtual keyboards.
- [`exportparts`](/Web/HTML/Global_attributes/exportparts)
  - : Used to transitively export shadow parts from a nested shadow tree into a containing light tree.
- [`hidden`](/Web/HTML/Global_attributes/hidden)
  - : An enumerated attribute indicating that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
- [`id`](/Web/HTML/Global_attributes/id)
  - : Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
- [`inert`](/Web/HTML/Global_attributes/inert)
  - : A boolean value that makes the browser disregard user input events for the element. Useful when click events are present.
- [`inputmode`](/Web/HTML/Global_attributes/inputmode)
  - : Provides a hint to browsers about the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on  elements, but is usable on any element while in [`contenteditable`](#contenteditable) mode.
- [`is`](/Web/HTML/Global_attributes/is)
  - : Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](/Web/API/Web_components/Using_custom_elements) for more details).

> [!NOTE]
> The `item*` attributes are part of the [WHATWG HTML Microdata feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/Web/HTML/Global_attributes/itemid)
  - : The unique, global identifier of an item.
- [`itemprop`](/Web/HTML/Global_attributes/itemprop)
  - : Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.
- [`itemref`](/Web/HTML/Global_attributes/itemref)
  - : Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.
- [`itemscope`](/Web/HTML/Global_attributes/itemscope)
  - : `itemscope` (usually) works along with [`itemtype`](/Web/HTML/Global_attributes/itemtype) to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
- [`itemtype`](/Web/HTML/Global_attributes/itemtype)
  - : Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. [`itemscope`](/Web/HTML/Global_attributes/itemscope) is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.
- [`lang`](/Web/HTML/Global_attributes/lang)
  - : Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one "language tag" (made of hyphen-separated "language subtags") in the format defined in {{RFC(5646, "Tags for Identifying Languages (also known as BCP 47)")}}. `xml:lang` has priority over it.
- [`nonce`](/Web/HTML/Global_attributes/nonce)
  - : A cryptographic nonce ("number used once") which can be used by [Content Security Policy](/Web/HTTP/CSP) to determine whether or not a given fetch will be allowed to proceed.
- [`part`](/Web/HTML/Global_attributes/part)
  - : A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the {{CSSxRef("::part")}} pseudo-element.
- [`popover`](/Web/HTML/Global_attributes/popover)
  - : Used to designate an element as a popover element (see {{domxref("Popover API", "Popover API", "", "nocode")}}). Popover elements are hidden via `display: none` until opened via an invoking/control element (i.e. a `<button>` or `<input type="button">` with a [`popovertarget`](/Web/HTML/Element/button#popovertarget) attribute) or a {{domxref("HTMLElement.showPopover()")}} call.
- [`role`](/Web/Accessibility/ARIA/Roles)
  - : Roles define the semantic meaning of content, allowing screen readers and other tools to present and support interaction with an object in a way that is consistent with user expectations of that type of object. `roles` are added to HTML elements using `role="role_type"`, where `role_type` is the name of a role in the ARIA specification.
- [`slot`](/Web/HTML/Global_attributes/slot)
  - : Assigns a slot in a [shadow DOM](/Web/API/Web_components/Using_shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the {{HTMLElement("slot")}} element whose [`name`](/Web/HTML/Element/slot#name) attribute's value matches that `slot` attribute's value.
- [`spellcheck`](/Web/HTML/Global_attributes/spellcheck)

  - : An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:

    - empty string or `true`, which indicates that the element should be, if possible, checked for spelling errors;
    - `false`, which indicates that the element should not be checked for spelling errors.

- [`style`](/Web/HTML/Global_attributes/style)
  - : Contains [CSS](/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the {{HTMLElement("style")}} element have mainly the purpose of allowing for quick styling, for example for testing purposes.
- [`tabindex`](/Web/HTML/Global_attributes/tabindex)

  - : An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:

    - a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
    - `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
    - a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.

- [`title`](/Web/HTML/Global_attributes/title)
  - : Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
- [`translate`](/Web/HTML/Global_attributes/translate)

  - : An enumerated attribute that is used to specify whether an element's attribute values and the values of its {{DOMxRef("Text")}} node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:

    - empty string or `yes`, which indicates that the element will be translated.
    - `no`, which indicates that the element will not be translated.

- [`virtualkeyboardpolicy`](/Web/HTML/Global_attributes/virtualkeyboardpolicy) 

  - : An [enumerated](/Glossary/Enumerated) attribute used to control the on-screen virtual keyboard behavior on devices such as tablets, mobile phones, or other devices where a hardware keyboard may not be available for elements that its content is editable (for example, it is an  or {{htmlelement("textarea")}} element, or an element with the [`contenteditable`](/Web/HTML/Global_attributes/contenteditable) attribute set).

    - `auto` or an _empty string_, which automatically shows the virtual keyboard when the element is focused or tapped.
    - `manual`, which decouples focus and tap on the element from the virtual keyboard's state.

- [`writingsuggestions`](/Web/HTML/Global_attributes/writingsuggestions)

  - : Used to control the behavior of the browser's writing suggestions in an input field, a section of a page, or the entire page.

    - `false`, which disables the browser's writing suggestions.
    - `true` or an _empty string_, which enables writing suggestions.

## Specifications



## Browser compatibility



## See also

- {{DOMxRef("Element")}} interface that allows querying most global attributes.
