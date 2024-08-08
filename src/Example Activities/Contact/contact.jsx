import React from "react"

export default function Contact(props) {
    console.log(props)
    return (
        <div className="contacts">
            <div className="contact-card">
                <img src={props.img} />
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="src\Example Activities\Contact\images\phone-icon.png" />
                    <p>{props.phoneNum}</p>
                </div>
                <div className="info-group">
                    <img src="src\Example Activities\Contact\images\mail-icon.png" />
                    <p>{props.email}</p>
                </div>
            </div>
        </div>
    )
}