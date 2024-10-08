---
title: CSS multi-column layout
slug: Web/CSS/CSS_multicol_layout
page-type: css-module
spec-urls: https://drafts.csswg.org/css-multicol/
---


The **CSS multi-column layout** module lets you divide content across multiple columns. By using the properties in this module, you can define the preferred number and width of columns, the gap size between columns, and the visual appearance of the optional column dividing lines (known as column rules). You can also define how content should flow from column to column and how to break content between columns.

## Multi-column layout in action

In this example, the 1967 speech from Canada's centennial, _A Lament for Confederation_, by Chief Dan George, is displayed across multiple columns, similar to the way articles are displayed in printed newspapers. If you have JavaScript enabled, controls enable changing the preferred column number and width, the width of the gap between columns, whether the title and a sample blockquote should be contained in a single column or made to span all columns, and whether breaking within the paragraphs should be avoided.

{{EmbedGHLiveSample("css-examples/modules/multicol.html", '100%', 650)}}

To see the code for this columned layout, [view the source on GitHub](https://github.com/mdn/css-examples/blob/main/modules/multicol.html).

> [!NOTE]
> Multiple-column layout is closely related to [paged media](/Web/CSS/CSS_paged_media). Each column box is a fragment, much like each printed page is a fragment of a document. Using the properties defined in the [CSS fragmentation](/Web/CSS/CSS_fragmentation) module, you can control how content breaks between columns and pages.

## Reference

### Properties

- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("column-span")}}
- {{cssxref("column-rule")}} shorthand
  - {{cssxref("column-rule-color")}}
  - {{cssxref("column-rule-style")}}
  - {{cssxref("column-rule-width")}}
- {{cssxref("columns")}} shorthand
  - {{cssxref("column-count")}}
  - {{cssxref("column-width")}}

> [!NOTE]
> Bear in mind that setting container height and line length can pose challenges for people with visual or cognitive disabilities. [WCAG Success Criterion 1.4.8](/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) states that even when the text size is doubled, content should not need to be scrolled.

## Guides

- [Basic concepts of multi-column layout](/Web/CSS/CSS_multicol_layout/Basic_concepts)
  - : An overview of the Multiple-column Layout specification
- [Styling columns](/Web/CSS/CSS_multicol_layout/Styling_columns)
  - : How to use column rules and manage the spacing between columns.
- [Spanning and balancing](/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns)
  - : How to make elements span across all columns and control the way columns are filled.
- [Handling overflow in multi-column layout](/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout)
  - : What happens when an item overflows the column it is in and what happens when there is too much columned content to fit a container.
- [Handling content breaks in multi-column layout](/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout)
  - : Introduction to the Fragmentation specification and how to control where column content breaks.

## Related concepts

- {{cssxref("orphans")}} CSS property
- {{cssxref("widows")}} CSS property
- {{cssxref("overflow")}} CSS property
- {{cssxref("gap")}} CSS property
- {{cssxref("height")}}, {{cssxref("max-height")}}, and {{cssxref("block-size")}} CSS properties
- {{cssxref("width")}}, {{cssxref("max-width")}}, and {{cssxref("inline-size")}} CSS properties
- {{cssxref("line-style")}} enumerated data type
- [Block formatting context](/Web/CSS/CSS_display/Block_formatting_context) guide

## Specifications



## See also

- [Learn: multiple-column layout](/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [CSS fragmentation](/Web/CSS/CSS_fragmentation) module
- [CSS flexible box layout](/Web/CSS/CSS_flexible_box_layout) module
- [CSS grid layout](/Web/CSS/CSS_grid_layout) module
- [CSS paged media](/Web/CSS/CSS_paged_media) module
