import React from "react"
import * as ReactDOM from "react-dom/client"
import reactToWebComponent from "react-to-webcomponent"

export const useWCHook = (element, name) => {
  const wrapper = reactToWebComponent(element, React, ReactDOM)
  customElements.define(name, wrapper)
}

