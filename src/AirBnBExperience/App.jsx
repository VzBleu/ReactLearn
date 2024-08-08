import React from "react"
import Nav from "./Components/nav"
import Hero from "./Components/hero"
import Cards from "./Components/cards"
import data from "./data"

export default function App() {
    const cardData = data.map((card) => {
        return <Cards
            key={card.id}
            {...card}
        // SPREAD SYNTAX = the line above is equal to the comments below
        // img={card.img}
        // rating={card.stats.rating}
        // review={card.stats.reviewCount}
        // country={card.location}
        // title={card.title}
        // price={card.price}
        // openSpots={card.openSpots} 
        />
    })
    return (
        <div className="airBnBAppDiv">
            <Nav />
            <Hero />
            <div className="cardsDiv">
                {cardData}
            </div>
        </div>
    )
}

{/* <div className="cardsDiv">
<Cards
    img="src\AirBnBExperience\Components\Images\image 12.png"
    rating="5.0"
    review="(6)"
    country="• USA"
    title="Life lessons with Katie Zaferes"
    price="From $136"
/>
<Cards
    img="src\AirBnBExperience\Components\Images\wedding-photography 1.png"
    rating="5.0"
    review="(30)"
    country="• USA"
    title="Learn wedding photography"
    price="From $125"
/>
<Cards
    img="src\AirBnBExperience\Components\Images\mntn bike.png"
    rating="4.8"
    review="(2)"
    country="• USA"
    title="Group Mountain Biking"
    price="From $50"
/>
</div> */}