<p align="center">--------------------------------------------------------</p>
<p align="center">⚛️ + ⚡️ = ReactBlitz</p>
<p align="center">--------------------------------------------------------</p>
<p align="center"><a href="https://arthurianx.github.io/reactblitz"><bold>Checkout the StoryBook</bold></a></p>

_Hiya there_ 🤠, 👋<sup>👋</sup>_'sup!?_

**ReactBlitz** is a small library that programmatically renders StackBlitz projects embedded in your React app, inline, or by targeting specific elements (in case of dynamic content).

### Instalation

-   `npm install @arthurianx/reactblitz`
-   `import { ReactBlitz, ReactBlitzToElement } from '@arthurianx/reactblitz';`

### Usage

Simple usage instide a JSX template:

-   `<ReactBlitz options={} projects={} />`

Render the component on a already existing document element:

-   `<ReactBlitzToElement options={} projects={} element={} />`. `element` is an existing DOM element where the component will be portalled to.

### Methods
