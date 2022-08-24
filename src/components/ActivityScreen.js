import React, { useContext } from "react"
import Keyboard from './keyboard'
import ReferenceText from './ReferenceText'
import OutputText from './OutputText'
import Info from './Info'
import { GlobalContext } from '../Contexts/GlobalContext.js'
import '../styles/core.css'

const ActivityScreen = () => {
    const { handleReset, handleEnd } = useContext(GlobalContext)

    return (
        <main data-testid="activity" className="activity-screen">
            <div className="layout-left">
                <ReferenceText />
                <Keyboard />
                <OutputText />
            </div>
            <div className="layout-right">
                <Info />
            </div>
        </main>
    )
}

export default ActivityScreen