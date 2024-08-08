import React from "react"

export default function Joke(props) {
    return (
        <div className="contact-card">
            <p style={{ display: props.setup ? "block" : "none" }}>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}