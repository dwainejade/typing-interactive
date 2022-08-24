import React, { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import '../styles/output-text.css'

function OutputText() {
    const { state, userInput, setUserInput, activeWordIndex, setActiveWordIndex, refWords, startCounting, setStartCounting, setCorrectWords, inputRef, outputText, userStats, setUserStats } = useContext(GlobalContext)

    function handleInput(value) {
        if (state.activityType === 'single-letter') {
            value += ' '
        }

        if (activeWordIndex === refWords.current.length) {
            return
        }

        if (!startCounting) { // start timer
            setStartCounting(true)
        }

        if (value.endsWith(' ')) { // handle spacebar

            if (activeWordIndex === refWords.current.length - 1) {
                setStartCounting(false) // stop timer
            }
            // set word as completed
            setActiveWordIndex(index => index + 1) // move to next word
            setUserInput('')

            setCorrectWords(data => {
                const word = value.trim()
                const newResult = [...data]
                newResult[activeWordIndex] = word === refWords.current[activeWordIndex]

                return newResult
            })

        } else {
            setUserInput(value)
        }
    }

    return (
        <div className="text-wrapper ">
            <input id='inputBox' ref={inputRef} value={userInput} onChange={(e) => handleInput(e.target.value)} />
            {state.activityType === 'sentence'
                ? <div className='text-con'>
                    <span>{outputText.map((text, index) =>
                        <span key={index}>{text}</span>)}</span>
                </div>
                : <div className='text-con'>
                    <span>{userInput}</span>
                </div>
            }
        </div>
    )
}

export default OutputText