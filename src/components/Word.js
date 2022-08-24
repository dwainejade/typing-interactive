import React, { useRef, useEffect } from 'react'
// import { GlobalContext } from '../Contexts/GlobalContext'

function Word(props) {
    const { text, active, correct } = props
    const curWordRef = useRef(null)

    useEffect(() => {
        if (curWordRef.current) {
            curWordRef.current.scrollIntoView({
                behavior: "smooth",
                inline: "end"
            })
        }
    }, [active])

    if (correct) {
        return <span className='correct'>{text} </span>
    }
    if (correct === false) {
        return <span className='incorrect'>{text} </span>
    }
    if (active) {
        return <span className='active' ref={curWordRef}>{text} </span>
    }

    return (
        <span>{text} </span>
    )
}

export default Word