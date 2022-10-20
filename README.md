# wc-react-hook
Simple wrapper to export your react components as web components to make them portable.
## Install

```bash
yarn add wc-react-hook
```

## Usage of the hook in your react

```js

import { useWCHook } from 'wc-react-hook';
...
const Greeting = ({ name }) => <h1>Hello, {name}</h1>

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
}

export default useWCHook(Greeting, 'web-greeting');

```

After this you can use `<web-greeting name="thor"></web-greeting>` as a web component.


### Local Demo with `parcel`

```bash
yarn
yarn start
```

The local development server running at http://localhost:1234 that serves the basic demo is driven by `index.html`
