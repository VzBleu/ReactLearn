import React from "react"
import Nav from "./Components/nav"
import Content from "./Components/content"

export default function App() {
    return (
        <div className="travelJournDiv">
            <Nav />
            <div className="wholeContentDiv">
                <Content />
                <Content />
                <Content />
            </div>
        </div>
    )
}