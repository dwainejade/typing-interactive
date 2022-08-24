import React from "react"
import Keyboard from './Keyboard'
import ReferenceText from './ReferenceText'
import OutputText from './OutputText'
import Info from './Info'
import '../styles/core.css'

const ActivityScreen = () => {

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