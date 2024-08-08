import React from "react"

export default function Cards(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    console.log(props.location)

    return (
        <div className="cardDiv">

            {badgeText && <div className="soldOut">{badgeText}</div>} {/* CONDITIONAL RENDERING */}
            <img src={props.img} alt="" />
            <div className="ratingDiv">
                <img src="src\AirBnBExperience\Components\Images\Star 1.png" alt="" />
                <p className="rating">{props.stats.rating}</p>
                <p className="idkNum">({props.stats.review})</p>
                <p className="country">{props.location}</p>
            </div>
            <p>{props.title}</p>
            <p><strong>{props.price}$</strong>/ person</p>
        </div>
    )
}