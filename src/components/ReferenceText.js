import React, { useContext, memo } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import '../styles/reference-text.css'
import Word from './Word'

const MomoedWord = memo(Word)

function ReferenceText() {
    const { state, refWords, activeWordIndex, correctWords } = useContext(GlobalContext)
    const activityType = state.activityType

    return (
        <div className="reference-wrapper">
            {activityType === 'sentence'
                ? <div className='text-con'>
                    {refWords.current.map((word, index) => {
                        return <MomoedWord
                            key={index}
                            text={word}
                            active={index === activeWordIndex}
                            correct={correctWords[index]}
                        />
                    })}
                </div>

                : <div className='text-con'>
                    <div className='single-word-con'>
                        <MomoedWord
                            key={activeWordIndex}
                            text={refWords.current[activeWordIndex]}
                            correct={correctWords[activeWordIndex]}
                        />
                    </div>
                </div>
            }
        </div>
    )
}

export default ReferenceText