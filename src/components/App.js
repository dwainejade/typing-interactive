import React, { useState, useRef, useEffect } from "react"
import StartScreen from "./StartScreen"
import ActivityScreen from "./ActivityScreen"
import { GlobalContext } from '../Contexts/GlobalContext.js'
import EndScreen from "./EndScreen"

const App = ({ setState, state }) => {
  const getWords = () => state.referenceText.split(' ').sort(() => Math.random() > 0.5 ? 1 : -1)
  const refWords = useRef(getWords())
  const [correctWords, setCorrectWords] = useState([])
  const [correctCount, setCorrectCount] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [startCounting, setStartCounting] = useState(false)
  const [outputText, setOutputText] = useState([])
  const [userStats, setUserStats] = useState({
    correct: 0,
    incorrect: 0,
    missed: [],
    speed: 0
  })

  const [userInput, setUserInput] = useState('')
  const [activeWordIndex, setActiveWordIndex] = useState(0)
  const [shiftKey, setShiftKey] = useState(false)
  const [activeKey, setActiveKey] = useState('')
  const inputRef = useRef(null)

  const handleKeyDown = (e) => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    const re = /[0-9A-F:]+/g;
    const key = e.key

    if (key === 'Shift') {
      setShiftKey(true)
      setActiveKey('shift')
    } else if (key === 'Backspace') {
      e.preventDefault()
      return
    } else if (key === 'Meta') {
      e.preventDefault()
      return
    } else if (!re.test(key)) {
      setActiveKey(key)
      setOutputText(outputText => [...outputText, key])
    } else {
      e.preventDefault();
      return
    }
  }

  const handleKeyUp = (e) => {
    // switch keybard back when shift key is released
    const key = e.key
    if (key === 'Shift') {
      setShiftKey(false)
    } else {
      setActiveKey('')
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("keyup", handleKeyUp)
  }, [])

  const handleReset = () => {
    setUserInput('')
    setStartCounting(false)
    setTimeElapsed(0)
    setCorrectCount(0)
    setCorrectWords([])
    setActiveWordIndex(0)
    setOutputText([])
    refWords.current = (getWords())
  }

  const handleRestart = () => {
    handleReset()

    setState({
      ...state,
      startScreenActive: true,
      activityScreenActive: false,
      endScreenActive: false,
    })
  }

  return (
    <main className="App">
      <GlobalContext.Provider
        value={{
          state, setState,
          refWords, getWords,
          userInput, setUserInput,
          shiftKey, setShiftKey,
          activeWordIndex, setActiveWordIndex,
          correctWords, setCorrectWords,
          correctCount, setCorrectCount,
          timeElapsed, setTimeElapsed,
          startCounting, setStartCounting,
          activeKey,
          inputRef,
          outputText,
          handleReset,
          handleRestart,
          userStats, setUserStats
        }}
      >
        <div className="main-layout">
          {state.startScreenActive && (
            <StartScreen setState={setState} state={state} />
          )}
          {state.activityScreenActive && (
            <ActivityScreen setState={setState} state={state} />
          )}
          {state.endScreenActive && (
            <EndScreen setState={setState} state={state} />
          )}
        </div>
      </GlobalContext.Provider>
    </main >
  )
}
export default App
