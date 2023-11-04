# Document Purpose

To offer a reference guide detailing the patterns, conventions, and all pertinent elements related to how we craft our CSS.

## Methodology

We utilize the [BEM](https://getbem.com/) methodology, chosen for its clarity and adaptability. Always apply styles using classes that comply with BEM standards. Avoid using other CSS selectors, such as attributes, ids, etc.

## Conventions

Rule sets we use to keep our code consistent.

### Variables

They should be defined on the `vars.css` file inside the `:root` selector, ensuring consistent global access.

### Units

You should always use `rem` when working with properties like padding or margins. This improves [accessibility](https://uxplanet.org/why-you-should-work-with-rems-not-pxs-in-webflow-6f88df7fab29).

To convert `px` to `rem`, use the formula: `px/16 = rem`. For example, `32px` is `2rem`.

## Normalize.css

This is an external package for browser resets. Never update it directly since lead to inconsistencies and issues when the package is later upgraded via `npm`.
