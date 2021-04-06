import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Header from "../components/Header"

const StartScreen = ({ setState, state }) => {
  return (
    <main data-testid="start" className="StartScreen">
      <Header title={state.title} />
      <h2 className="lesson-title">{state.title}</h2>
      <h3 className="intro-title">{state.description}</h3>
      <button
        id="start"
        className="btn-start btn"
        onClick={() =>
          setState({
            ...state,
            startScreenActive: false,
            activityScreenActive: true,
          })
        }
      >
        Start
      </button>
    </main>
  )
}
StartScreen.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  startActivity: PropTypes.func,
}

StartScreen.defaultProps = {
  title: ``,
  lessonTitle: ``,
}

export default StartScreen
