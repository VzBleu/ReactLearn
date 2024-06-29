import React from "react"
import Picture from "./Components/Picture"
import PrimaryInfo from "./Components/PrimaryInfo"
import Contacts from "./Components/Contacts"
import SecondaryInfo from "./Components/SecondaryInfo"
import Footer from "./Components/Footer"

export default function App() {
    return (
        <div>
            <Picture />
            <PrimaryInfo />
            <Contacts />
            <SecondaryInfo />
            <Footer />
        </div>
    )
}