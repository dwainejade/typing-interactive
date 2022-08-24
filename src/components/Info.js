import React, { useEffect, useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'

function Info() {
    const { state, setState, startCounting, correctWords, timeElapsed, setTimeElapsed, refWords, handleReset, userStats, setUserStats } = useContext(GlobalContext)

    const errors = correctWords.filter(item => item === false).length
    const correctCount = correctWords.filter(Boolean).length
    const completed = ((correctCount + errors) / refWords.current.length) * 100
    const speed = (correctCount * (60 / timeElapsed)).toFixed(1)

    useEffect(() => {
        let id
        if (startCounting) {
            id = setInterval(() => {
                setTimeElapsed(oldTime => oldTime + 1)
            }, 1000)
        }

        return () => {
            clearInterval(id)
        }
    }, [startCounting])


    const handleEnd = () => {
        setUserStats({
            ...state,
            correct: correctCount,
            incorrect: errors,
            missed: ['working on this'],
            speed
        })
        setState({
            ...state,
            startScreenActive: false,
            activityScreenActive: false,
            endScreenActive: true,
        })
    }


    return (
        <div className='info-wrapper'>
            {state.timed &&
                <h2>Time:<br /><span>{timeElapsed}</span></h2>
            }
            {state.progress &&
                <h2>Completed:<br />{completed.toFixed(0)}%</h2>
            }
            {state.errors &&
                <h2>Errors:<br />{errors}</h2>
            }
            {state.speed && completed === 100 &&
                <h2>WPM:<br /><span>{speed}</span></h2>
            }
            {completed === 100
                ? <button onClick={handleEnd}>continue</button>
                : <button onClick={handleReset}>Reset</button>
            }
        </div>
    )
}

export default Info