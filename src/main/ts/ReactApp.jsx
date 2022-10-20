import {createRoot} from "react-dom/client";

export function App() {
  return <h1>Hello world!</h1>;
}

const app = document.getElementById("app");
const root = createRoot(app);
root.render(<App/>);
