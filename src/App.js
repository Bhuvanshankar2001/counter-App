import { useState } from 'react'
import React from 'react'
import "./App.css"

export const App = () => {
    let [count, setCount] = useState(0);
    function handleadd() {
        setCount(count + 1)

    }
    function handlesub() {
        setCount(count - 1)

    }
    function handlereset() {
        setCount(0);
    }
    return (
        <div>
            <div className="box">
                <p>{count}</p>
                <button onClick={handleadd} className="add">Add</button>
                <button onClick={handlesub} className="sub">Sub</button>
                <button onClick={handlereset} className="reset">Reset</button>

            </div>
        </div>
    )
}
