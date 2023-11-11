# Document Purpose

To offer a reference guide detailing the patterns, conventions, and all pertinent elements related to how we craft our CSS.

## Table of Contents

1. [Methodology](#methodology)
2. [Conventions](#conventions)
   - [Variables](#variables)
   - [Units](#units)
   - [Modular Stylings](#modular-stylings)
3. [Normalize.css](#normalizecss)

## Methodology

We utilize the [BEM](https://getbem.com/) methodology, chosen for its clarity and adaptability. Always apply styles using classes that comply with BEM standards. Avoid using other CSS selectors, such as attributes, ids, etc.

## Conventions

Rule sets we use to keep our code consistent.

### Variables

They should be defined on the `vars.css` file inside the `:root` selector, ensuring consistent global access.

### Units

You should always use `rem` when working with properties like `padding` or `margin`. This improves [accessibility](https://uxplanet.org/why-you-should-work-with-rems-not-pxs-in-webflow-6f88df7fab29).

To convert `px` to `rem`, use the formula: `px/16 = rem`. For example, `32px` is `2rem`.

### Modular stylings

New UI styles should be added to a new `.css` file inside the `styles/components/` folder, then imported to the `main.css`. If your new styling is something more global add it to the `styles/` root.

This ensures our code is searchable and organized.

## Normalize.css

This is an external package for browser resets. Never update it directly since it can lead to inconsistencies and issues when the package is later upgraded via `npm`.
