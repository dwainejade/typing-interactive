import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'
import '../styles/keyboard.css'

function Keyboard() {
    const { state, shiftKey, activeKey } = useContext(GlobalContext)
    const [keysSet, setKeysSet] = useState(false)
    const [enabledKeys, setEnableKeys] = useState([])
    const isMac = navigator.userAgent.includes('Mac');

    let specialKey = 'ctrl'
    if (!keysSet) {
        let keys
        if (state.enabledKeys == 'all') {
            keys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+',
                'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter', ':', '"', '<', '>', '?',
                'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift', 'space', specialKey]
        } else {
            keys = state.enabledKeys.split(' ')
        }
        if (!isMac) {
            specialKey = 'cmd'
            console.log('mac')
        }
        setEnableKeys(keys)
        setKeysSet(true)
    }

    // const newKeys = state.enabledKeys.split(' ')
    let keyLayout = {
        row1: ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '='],
        row2: ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        row3: ['caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter'],
        row4: ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift'],
        row5: [specialKey, 'space', specialKey],
    }

    if (shiftKey) {
        keyLayout = {
            row1: ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'],
            row2: ['tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
            row3: ['caps lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter'],
            row4: ['shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'shift'],
            row5: [specialKey, 'space', specialKey],
        }
    }

    return (
        <div className='keyboard-con'>
            <div className="row row-1">
                {keyLayout.row1.map((key, i) =>
                    <div
                        className={`key ${key} ${key === activeKey ? 'active' : ''} ${enabledKeys.includes(key.toLowerCase()) ? 'enabled' : 'disabled'}`}
                        key={i}
                    >{key}</div>
                )}
            </div>
            <div className="row row-2">
                {keyLayout.row2.map((key, i) =>
                    <div
                        className={`key ${key} ${key === activeKey ? 'active' : ''} ${enabledKeys.includes(key.toLowerCase()) ? 'enabled' : 'disabled'}`}
                        key={i}
                    >{key}</div>
                )}
            </div>
            <div className="row row-3">
                {keyLayout.row3.map((key, i) =>
                    <div
                        className={`key ${key} ${key === activeKey ? 'active' : ''} ${enabledKeys.includes(key.toLowerCase()) ? 'enabled' : 'disabled'}`}
                        key={i}
                    >{key}</div>
                )}
            </div>
            <div className="row row-4">
                {keyLayout.row4.map((key, i) => {
                    if (key === 'shift') {
                        return <div
                            className={`key ${key} ${shiftKey ? 'active' : ''} ${enabledKeys.includes(key.toLowerCase()) ? 'enabled' : 'disabled'}`}
                            key={i}
                        >{key}</div>
                    } else {
                        return <div
                            className={`key ${key} ${key === activeKey ? 'active' : ''} ${enabledKeys.includes(key.toLowerCase()) ? 'enabled' : 'disabled'}`}
                            key={i}
                        >{key}</div>
                    }
                }
                )}
            </div>
            <div className="row row-5">
                {keyLayout.row5.map((key, i) =>
                    <div
                        className={`key ${key} ${key === activeKey ? 'active' : ''}  ${enabledKeys.includes(key.toLowerCase()) ? 'enabled' : 'disabled'}`}
                        key={i}
                    >{key}</div>
                )}
            </div>
        </div>
    )
}

export default Keyboard