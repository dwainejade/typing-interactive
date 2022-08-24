import React, { useContext } from "react"
import { GlobalContext } from "../Contexts/GlobalContext"

const EndScreen = ({ setState, state }) => {
    const { handleRestart, userStats, refWords } = useContext(GlobalContext)
    const total = refWords.current.length
    return (
        <main data-testid="start" className="EndScreen">
            <h1 className="intro-title">End Screen</h1>
            {(total - userStats.incorrect) > (total * .65)
                ? <h3>Great Job!</h3>
                : <h3>Try Again!</h3>
            }
            <p>you got <b>{userStats.correct}</b> correct out of <b>{total}</b></p>
            <div>missed text: {userStats.missed.map(item => <span>{item}</span>)}</div>
            <p>speed: {userStats.speed}</p>
            <button
                id="start"
                className="btn-start btn"
                onClick={() => handleRestart()}
            >
                Restart
            </button>
        </main>
    )
}

export default EndScreen