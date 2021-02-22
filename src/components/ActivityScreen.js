import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "./Header"

const ActivityScreen = ({ state, setState }) => {
  return (
    <main data-testid="activity" className="ActivityScreen">
      <Header title={state.title} />
      <h2>Main Activity Content</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      {/* placeholder button to skip to the end screen */}
      <button
        onClick={() =>
          setState({
            ...state,
            endScreenActive: true,
            activityScreenActive: false,
          })
        }
      >
        Skip to the end
      </button>
    </main>
  )
}

ActivityScreen.propTypes = {
  title: PropTypes.string,
  lessonTitle: PropTypes.string,
  startActivity: PropTypes.func,
}

ActivityScreen.defaultProps = {
  title: ``,
  lessonTitle: ``,
}

export default ActivityScreen
