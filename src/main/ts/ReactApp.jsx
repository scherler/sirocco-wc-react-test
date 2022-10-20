import { createRoot } from "react-dom/client";
import { customElement } from 'lit/decorators'

@customElement('swc-test-react')
class App extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('span');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const root = createRoot(mountPoint);
    root.render(<h1>Hello world!</h1>);
  }
}

export default App;
