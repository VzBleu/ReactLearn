import React from "react"

export default function Contacts() {
    return (
        <div className="contactsDiv">
            <button>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                Email
            </button>
            <button className="linkedInBtn">
                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                LinkedIn
            </button>
        </div>
    )
}