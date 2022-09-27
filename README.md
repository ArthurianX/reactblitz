<p align="center">--------------------------------------------------------</p>
<p align="center">⚛️ + ⚡️ = ReactBlitz</p>
<p align="center">--------------------------------------------------------</p>

<p align="center"><a href="https://arthurianx.github.io/reactblitz"><bold>Checkout the StoryBook</bold></a></p>

_Hiya there_ 🤠, 👋<sup>👋</sup>_'sup!?_

![reactblitz](https://user-images.githubusercontent.com/2720451/192450584-a69167d0-d4c0-4f2e-b0f5-2135d47b46cb.gif)

**ReactBlitz** is a small library that programmatically renders StackBlitz projects embedded in your React app, inline, or by targeting specific elements (in case of dynamic content).

### Instalation

-   `npm install @arthurianx/reactblitz`
-   `import { ReactBlitz, ReactBlitzToElement } from '@arthurianx/reactblitz';`

### Usage

Simple usage instide a JSX template:

-   `<ReactBlitz options={} projects={} />`

Render the component on a already existing document element:

-   `<ReactBlitzToElement options={} projects={} element={} />`. `element` is an existing DOM element where the component will be portalled to.

### Methods / Options

`options` and `projects` take the default StackBlitz payload for [options](https://developer.stackblitz.com/docs/platform/javascript-sdk/#embedoptions) and [projects](https://developer.stackblitz.com/docs/platform/javascript-sdk/#projectobject).

`options` is extended with a few quality of life properties:

```
export interface RBlitzOptions extends EmbedOptions {
    renderWhenVisible?: boolean;
    accentBorder?: boolean;
    accentColor?: string;
    loadingColor?: string;
}
```

-   `renderWhenVisible` is turned on by default, if the component is outside viewport it will be rendered when it enters the viewport. Behavior can be turned off.
-   `accentBorder` displays a border around the StackBlitz VM, to offer some visual integration with your app.
-   `accentColor` controls said border color.
-   `loadingColor` is the loading accentColor for the spinner that appears when loading the StackBlitz VM.
