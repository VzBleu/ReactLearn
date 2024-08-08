import React from "react"
import Contact from "./Contact/contact"
import Joke from "./Joke/joke"
import jokesdata from "./Joke/jokesdata"

export default function App() {
    const jokeElements = jokesdata.map((joke) => {
        return <Joke setup={joke.setup} punchline={joke.punchline} />
    })
    return (
        <div className="contacts">
            {jokeElements}
        </div>
    )
}

{/* <Joke
setup="I got my daughter a fridge for her birthday."
punchline="I can't wait to see her face light up when she opens it."
/>
<Joke
setup="How did the hacker escape the police?"
punchline="He just ransomware!"
/>
<Joke
setup="Why don't pirates travel on mountain roads?"
punchline="Scurvy."
/>
<Joke
setup=""
punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
/>
<Joke
setup="What's the best thing about Switzerland?"
punchline="I don't know, but the flag is a big plus!"
/> */}