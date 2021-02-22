import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./Header"

const EndScreen = ({ state, setState }) => {
  return (
    <main data-testid="end" className="EndScreen">
      <Header title={state.title} />
      <h2>The End</h2>
      {/* placeholder buttonto go back to start */}
      <button
        onClick={() =>
          setState({
            ...state,
            startScreenActive: true,
            endScreenActive: false,
          })
        }
      >
        Back to Start
      </button>
    </main>
  )
}

EndScreen.propTypes = {
  state: PropTypes.object,
  setState: PropTypes.func,
}

export default EndScreen
