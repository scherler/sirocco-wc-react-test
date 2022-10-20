import React from "react"
import PropTypes from "prop-types"
import { useWCHook } from "./wcHook";

const Greeting = ({ name }) => <h1>Hello, {name}</h1>

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
}

export default useWCHook(Greeting, 'web-greeting');
