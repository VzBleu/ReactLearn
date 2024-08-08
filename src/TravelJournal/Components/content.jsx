import React from "react"

export default function Content() {
    return (
        <div className="contentDiv">
            <img src="src\TravelJournal\Images\Fuji.png" alt="" />
            <div className="contentDivWords weirdFontColor">
                <div className="location">
                    <img src="src\TravelJournal\Images\pin.png" alt="" />
                    <p>JAPAN</p>
                    <a href="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/mount-fuji/">View on Google Maps</a>
                </div>
                <h2>Mount Fuji</h2>
                <strong>12 Jan, 2021 - 24 Jan, 2021</strong>
                <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}