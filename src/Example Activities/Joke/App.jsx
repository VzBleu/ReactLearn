import React from "react"
import Contact from "./Contact/contact"
import Joke from "./Joke/joke"

export default function App() {
    return (
        <div className="contacts">
            <Joke
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
                special=""
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
                special=""
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
                special=""
            />
            <Joke
                setup=""
                punchline=""
                special="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
                special=""
            />
        </div>
    )
}